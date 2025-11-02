import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Blog />
      </main>
      <footer className="border-t border-neutral-200/70 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} StudioFlow — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#products" className="hover:underline">Products</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="mailto:hello@studioflow.dev" className="hover:underline">Let’s connect</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
