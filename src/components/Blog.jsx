export default function Blog() {
  const posts = [
    {
      title: 'Designing playful, modern SaaS interfaces',
      excerpt: 'How micro-interactions and motion can make complex tools feel simple.',
      date: 'Oct 2025',
      tag: 'Design',
    },
    {
      title: 'From idea to launch in 6 weeks',
      excerpt: 'Our sprint blueprint for moving from concept to production with confidence.',
      date: 'Sep 2025',
      tag: 'Process',
    },
    {
      title: 'Security by default for startups',
      excerpt: 'A pragmatic checklist to keep your product safe without slowing momentum.',
      date: 'Aug 2025',
      tag: 'Security',
    },
  ];

  return (
    <section id="blog" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">From the studio blog</h2>
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">Stories, tips, and behind-the-scenes notes on building great software.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="h-36 w-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="rounded-full border border-neutral-200/70 dark:border-neutral-700 px-2 py-0.5">{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:underline dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center text-sm text-violet-600 hover:underline dark:text-violet-400">Read more →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href="mailto:hello@studioflow.dev" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:bg-white dark:text-neutral-900">
            Let’s connect!
          </a>
          <a href="#home" className="inline-flex items-center rounded-md px-5 py-3 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
