// Handles POST /api/contact and emails the message to the site inbox.
// Every other path is served as a static asset (see run_worker_first in wrangler.jsonc).

interface Env {
  EMAIL: SendEmail;
}

const TO = 'info@cloudarclabs.com';
const FROM = { email: 'website@cloudarclabs.com', name: 'CloudArc Labs website' };

const clean = (v: FormDataEntryValue | null, max: number) =>
  (typeof v === 'string' ? v : '').replace(/\r/g, '').trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const page = (message: string, status: number) =>
  new Response(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Contact</title><body style="font-family:system-ui;max-width:32rem;margin:4rem auto;padding:0 1rem"><p>${message}</p><p><a href="/contact">Back to the form</a></p>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8' } },
  );

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== '/api/contact') return new Response('Not found', { status: 404 });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });

    // Same-origin form posts only.
    const origin = request.headers.get('origin');
    if (origin && origin !== url.origin) return new Response('Forbidden', { status: 403 });

    const form = await request.formData();

    // Honeypot filled in: pretend success so bots learn nothing.
    if (clean(form.get('website'), 200)) return Response.redirect(`${url.origin}/contact/thanks`, 303);

    const name = clean(form.get('name'), 100);
    const email = clean(form.get('email'), 200);
    const company = clean(form.get('company'), 100);
    const message = clean(form.get('message'), 5000);

    if (!name || !message || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return page('Please check your name, email address and message, then try again.', 400);
    }

    const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\n\n${message}`;
    const html = `<p><b>Name:</b> ${escapeHtml(name)}<br><b>Email:</b> ${escapeHtml(email)}<br><b>Company:</b> ${escapeHtml(company || '-')}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

    try {
      await env.EMAIL.send({
        to: TO,
        from: FROM,
        replyTo: { email, name },
        subject: `Website enquiry from ${name.replace(/[\r\n]/g, ' ')}`,
        text,
        html,
      });
    } catch (err) {
      console.error('send failed', err);
      return page(`Sorry, that did not go through. Please email us at ${TO}.`, 502);
    }

    return Response.redirect(`${url.origin}/contact/thanks`, 303);
  },
} satisfies ExportedHandler<Env>;
