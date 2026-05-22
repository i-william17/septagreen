import awardImage from '../assets/award.jpg';
import clientImage from '../assets/client.jpg';
import cloudImage from '../assets/pexels-googledeepmind-17483873.jpg';
import codeImage from '../assets/pexels-luis-gomes-166706-546819.jpg';
import cyberImage from '../assets/cyber.jpg';
import expandImage from '../assets/expand.jpg';
import homeImage from '../assets/home.jpg';
import identityImage from '../assets/ident.jpg';
import physicalImage from '../assets/physical.jpg';
import secOneImage from '../assets/sec1.jpg';
import secTwoImage from '../assets/sec2.jpg';
import secThreeImage from '../assets/sec3.jpg';

export const images = {
  award: awardImage,
  client: clientImage,
  cloud: cloudImage,
  code: codeImage,
  cyber: cyberImage,
  expand: expandImage,
  home: homeImage,
  identity: identityImage,
  physical: physicalImage,
  secOne: secOneImage,
  secTwo: secTwoImage,
  secThree: secThreeImage,
};

export const brandStats = [
  { value: '24/7', label: 'security response posture' },
  { value: '12+', label: 'assessment disciplines' },
  { value: '3', label: 'delivery tracks: build, test, monitor' },
];

export const trustSignals = [
  {
    title: 'Manual security testing',
    text: 'Human-led assessment work that goes deeper than automated scanning and produces findings your team can act on.',
  },
  {
    title: 'Cloud and AI readiness',
    text: 'Security reviews for cloud workloads, modern applications, data flows, and AI-assisted products.',
  },
  {
    title: 'Executive reporting',
    text: 'Clear risk narratives, remediation priorities, and business-facing summaries for leadership teams.',
  },
];

export const serviceGroups = [
  {
    heading: 'Offensive Security',
    description: 'Simulate real attackers before real attackers find the gap.',
    links: ['red-team', 'penetration-testing', 'vulnerability-assessment'],
  },
  {
    heading: 'Digital Platforms',
    description: 'Build web products, commerce platforms, and application layers with security in the design.',
    links: ['web-development', 'ecommerce-security', 'application-security'],
  },
  {
    heading: 'Cloud and Managed Security',
    description: 'Harden cloud estates, monitor exposure, and keep security operations moving.',
    links: ['cloud-security', 'security-monitoring', 'ai-security'],
  },
];

export const services = [
  {
    slug: 'red-team',
    title: 'Red Team Simulation',
    shortTitle: 'Red Team',
    category: 'Offensive Security',
    image: cyberImage,
    summary:
      'Realistic adversary simulations across digital, social, and operational entry points to test detection and response.',
    detail:
      'SeptaGreen plans controlled attack paths, validates business risk, and turns technical findings into response improvements your team can practice.',
    bullets: ['Threat-led scenario design', 'Detection and response validation', 'Executive risk briefing'],
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    shortTitle: 'Penetration Testing',
    category: 'Offensive Security',
    image: secOneImage,
    summary:
      'Manual and automated testing for applications, infrastructure, APIs, and exposed digital assets.',
    detail:
      'The assessment combines exploitation, configuration review, and remediation guidance so your team understands both the weakness and the fix.',
    bullets: ['Web and API testing', 'Network and infrastructure testing', 'Remediation retesting'],
  },
  {
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment',
    shortTitle: 'Vulnerability Assessment',
    category: 'Offensive Security',
    image: secTwoImage,
    summary:
      'Find, prioritize, and track vulnerabilities across critical systems before they become incidents.',
    detail:
      'The output is tuned for practical remediation: affected assets, risk severity, exploitability, owner assignment, and treatment priority.',
    bullets: ['Exposure discovery', 'Risk scoring', 'Remediation roadmap'],
  },
  {
    slug: 'web-development',
    title: 'Secure Web Development',
    shortTitle: 'Web Development',
    category: 'Digital Platforms',
    image: codeImage,
    summary:
      'Business websites, portals, dashboards, and application frontends designed for speed, usability, and security.',
    detail:
      'SeptaGreen pairs product design with secure engineering practices so digital platforms look sharp and ship with guardrails.',
    bullets: ['Responsive product interfaces', 'Secure frontend architecture', 'Performance and accessibility polish'],
  },
  {
    slug: 'ecommerce-security',
    title: 'E-Commerce Security',
    shortTitle: 'E-Commerce',
    category: 'Digital Platforms',
    image: expandImage,
    summary:
      'Secure storefronts, payment flows, customer accounts, and operational dashboards for growing commerce brands.',
    detail:
      'The service focuses on checkout trust, data handling, authentication, and continuous hardening of the customer journey.',
    bullets: ['Checkout and account review', 'Payment flow hardening', 'Fraud and abuse controls'],
  },
  {
    slug: 'application-security',
    title: 'Application Security',
    shortTitle: 'Application Security',
    category: 'Digital Platforms',
    image: homeImage,
    summary:
      'Security design reviews, application testing, and secure development support for teams building software.',
    detail:
      'From architecture to release readiness, the team helps engineering groups reduce security debt without slowing product momentum.',
    bullets: ['Threat modeling', 'Architecture review', 'Secure SDLC support'],
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security',
    shortTitle: 'Cloud Security',
    category: 'Cloud and Managed Security',
    image: cloudImage,
    summary:
      'Configuration reviews, identity hardening, and cloud architecture assessments for modern environments.',
    detail:
      'SeptaGreen reviews identity, storage, network exposure, logging, and deployment patterns to reduce avoidable cloud risk.',
    bullets: ['Identity and access review', 'Configuration assessment', 'Cloud architecture hardening'],
  },
  {
    slug: 'security-monitoring',
    title: 'Security Monitoring',
    shortTitle: 'Security Monitoring',
    category: 'Cloud and Managed Security',
    image: physicalImage,
    summary:
      'Continuous visibility, alert triage, and vulnerability follow-up for teams that need security momentum.',
    detail:
      'The managed track keeps risk visible through dashboards, recurring reviews, and operational recommendations.',
    bullets: ['Exposure monitoring', 'Alert triage support', 'Monthly risk reporting'],
  },
  {
    slug: 'ai-security',
    title: 'AI and Automation Security',
    shortTitle: 'AI Security',
    category: 'Cloud and Managed Security',
    image: awardImage,
    summary:
      'Security reviews for AI-enabled workflows, automation, data use, and model-adjacent application surfaces.',
    detail:
      'The assessment looks at data leakage, prompt abuse, access control, model workflow risk, and operational safeguards.',
    bullets: ['AI workflow review', 'Prompt and data risk testing', 'Governance recommendations'],
  },
];

export const solutions = [
  {
    slug: 'security-awareness',
    title: 'Security Awareness',
    summary:
      'Practical training that helps teams identify phishing, credential abuse, social engineering, and unsafe data handling.',
    image: clientImage,
  },
  {
    slug: 'phishing-simulation',
    title: 'Phishing Simulation',
    summary:
      'Realistic campaigns that measure staff readiness and convert mistakes into targeted learning.',
    image: identityImage,
  },
  {
    slug: 'ransomware-simulation',
    title: 'Ransomware Simulation',
    summary:
      'Scenario-based exercises that test decision-making, recovery planning, communication, and business continuity.',
    image: secThreeImage,
  },
];

export const processSteps = [
  ['01', 'Scope the business risk', 'Understand systems, goals, constraints, and the most important outcomes before testing begins.'],
  ['02', 'Test with discipline', 'Blend manual expertise, tooling, and controlled exploitation to validate realistic attack paths.'],
  ['03', 'Report what matters', 'Translate findings into ranked priorities, proof, remediation guidance, and leadership-ready context.'],
  ['04', 'Retest and improve', 'Verify fixes, refine controls, and help teams turn assessment work into better security operations.'],
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function getSolution(slug) {
  return solutions.find((solution) => solution.slug === slug);
}
