import { Rocket, Shield, BarChart3, Zap } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    name: 'LaunchPad',
    tagline: 'Ship features faster',
    desc: 'A streamlined CI/CD toolkit that automates previews, testing, and production releases with one click.',
    pill: 'DevOps',
  },
  {
    icon: Shield,
    name: 'TrustGuard',
    tagline: 'Security that scales',
    desc: 'Realtime monitoring, secrets management, and compliance reports without the busywork.',
    pill: 'Security',
  },
  {
    icon: BarChart3,
    name: 'InsightHub',
    tagline: 'Know what matters',
    desc: 'Product analytics with funnels, cohorts, and event streams—privacy-friendly by default.',
    pill: 'Analytics',
  },
  {
    icon: Zap,
    name: 'FlowBot',
    tagline: 'Automate the boring',
    desc: 'Drag-and-drop workflows that connect your stack and eliminate manual tasks.',
    pill: 'Automation',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Our SaaS products</h2>
            <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">A focused suite designed to launch, secure, and grow your business.</p>
          </div>
          <a href="mailto:hello@studioflow.dev" className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Let’s connect</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, name, tagline, desc, pill }) => (
            <div key={name} className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-neutral-200/70 dark:border-neutral-700 px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-300">{pill}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{tagline}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{desc}</p>
              <a href="#" className="mt-4 inline-flex items-center text-sm text-violet-600 hover:underline dark:text-violet-400">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
