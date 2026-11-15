// All business details and service copy live here.
// Change them once and every page updates.

export const site = {
  name: 'CloudArc Labs',
  tagline: 'Cloud, DevOps, network automation and edge security consulting',
  description:
    'CloudArc Labs is a consulting practice for cloud infrastructure, DevOps, network automation and edge security. We design it, build it as code, and hand it over in working order.',

  // TODO: replace with your real contact address before going live.
  email: 'hello@example.com',

  // TODO (optional): paste a Calendly / Cal.com link to show a "Book a call" button.
  bookingUrl: '',
};

export interface Service {
  slug: string;
  layer: string;
  title: string;
  short: string;
  summary: string;
  problems: string[];
  deliverables: string[];
  tools: string[];
}

// Ordered from the core of the stack out to the edge.
export const services: Service[] = [
  {
    slug: 'cloud-infrastructure',
    layer: 'Core',
    title: 'Cloud Infrastructure',
    short:
      'Landing zones, migrations and cost control on AWS, Azure and Google Cloud, defined in code from the first resource.',
    summary:
      'A cloud environment should be something your team can read, reproduce and reason about. We design the account structure, networking and identity model, then build it as code so every change is reviewed and every environment matches.',
    problems: [
      'Environments were built by hand and nobody is sure what is running or why.',
      'The monthly bill keeps rising and it is hard to say which team or service is responsible.',
      'A migration is planned, and the target architecture is still a slide.',
      'Production and staging have drifted apart, so releases behave differently in each.',
    ],
    deliverables: [
      'Landing zone design: accounts or subscriptions, network layout, identity and guardrails.',
      'Infrastructure as code modules in your repositories, with review and plan checks.',
      'Migration plan and cutover runbooks, including rollback.',
      'Cost review with tagging, budgets and right-sizing recommendations.',
      'Backup, recovery and multi-region design matched to your recovery targets.',
    ],
    tools: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'OpenTofu', 'Kubernetes', 'Cloudflare'],
  },
  {
    slug: 'devops',
    layer: 'Delivery',
    title: 'DevOps',
    short:
      'Pipelines, platform tooling and observability that let your engineers ship small changes often, with a clear way back.',
    summary:
      'Slow, fragile releases are usually a pipeline problem, and pipelines can be fixed. We shorten the path from commit to production, make deployments repeatable, and give you the signals to know whether a release is healthy.',
    problems: [
      'Releases are large, infrequent and need a specific person to be online.',
      'Builds are slow or flaky, so engineers stop trusting the pipeline.',
      'When something breaks in production, finding the cause takes hours.',
      'Every team has built its own deployment scripts and none of them match.',
    ],
    deliverables: [
      'CI/CD pipelines with tests, security scans and staged rollouts.',
      'GitOps workflow for Kubernetes or serverless deployments.',
      'Container build standards and a shared base-image strategy.',
      'Metrics, logs and traces wired to dashboards and actionable alerts.',
      'On-call runbooks and an incident review format your team can keep using.',
    ],
    tools: ['GitHub Actions', 'GitLab CI', 'Argo CD', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'OpenTelemetry'],
  },
  {
    slug: 'network-automation',
    layer: 'Network',
    title: 'Network Automation',
    short:
      'Network changes made through version control and tested pipelines, with a source of truth your team can rely on.',
    summary:
      'Most network outages start with a manual change. We move configuration into version control, generate it from a source of truth, and validate it before it reaches a device, so changes become routine and auditable.',
    problems: [
      'Changes are typed into devices by hand during late-night maintenance windows.',
      'Device configurations have drifted and no one has a reliable inventory.',
      'Provisioning a new site or tenant takes weeks of tickets.',
      'Compliance checks are done by sampling, once a year.',
    ],
    deliverables: [
      'Source of truth for inventory, IP addressing and intended state.',
      'Templated configuration generation with pre-change validation.',
      'Change pipelines with peer review, dry runs and automatic rollback.',
      'Continuous compliance and drift reports.',
      'Zero-touch provisioning for new sites, branches or cloud networks.',
    ],
    tools: ['Ansible', 'Python', 'Nornir', 'NetBox', 'Terraform', 'Batfish', 'NETCONF / gNMI'],
  },
  {
    slug: 'edge-security',
    layer: 'Edge',
    title: 'Edge Security',
    short:
      'Zero trust access, web application and API protection, and DDoS defence placed where your users and traffic actually are.',
    summary:
      'The perimeter is now wherever a user, device or API call happens to be. We replace broad VPN access with identity-based policy, protect public applications at the edge, and keep the rules in code so they are reviewed like everything else.',
    problems: [
      'Remote access depends on a VPN that grants far more than each person needs.',
      'Public applications and APIs sit behind default firewall rules, or none.',
      'Security policy lives in several consoles and changes are not tracked.',
      'An audit or customer questionnaire is coming and the evidence is scattered.',
    ],
    deliverables: [
      'Zero trust access design tied to your identity provider and device posture.',
      'WAF, bot and API protection rules tuned to your real traffic.',
      'DDoS readiness review and response runbook.',
      'DNS, TLS and certificate lifecycle hardening.',
      'Security policy as code, with logging routed to your SIEM.',
    ],
    tools: ['Cloudflare Zero Trust', 'Cloudflare WAF', 'SASE / ZTNA', 'Okta', 'Microsoft Entra ID', 'Terraform'],
  },
];
