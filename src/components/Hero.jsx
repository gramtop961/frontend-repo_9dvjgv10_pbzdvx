import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/40 dark:border-neutral-700 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur-md dark:text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Now accepting new projects
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
              A clean studio crafting playful, modern SaaS experiences
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
              We design and build interactive products your users will love. Explore our suite of tools and see how we can help you launch faster.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="mailto:hello@studioflow.dev" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:bg-white dark:text-neutral-900">
                Let’s connect!
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75zm2.478-.75A.75.75 0 003 6.75v.334l9 5.4 9-5.4V6.75a.75.75 0 00-.75-.75h-15zm16.5 3.138l-7.98 4.787a1.5 1.5 0 01-1.518 0L3.75 9.138v8.112c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V9.138z"/></svg>
              </a>
              <a href="#products" className="inline-flex items-center rounded-md px-5 py-3 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800">
                See products →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />
    </section>
  );
}
