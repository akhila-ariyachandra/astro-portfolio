import type { FunctionComponent } from "preact";
import { LINK } from "@/utils/constants";

const Footer: FunctionComponent = () => {
  return (
    <footer className="mt-10 bg-emerald-200 dark:bg-zinc-800">
      <div className="container flex max-w-3xl flex-col space-y-6 px-4 py-6">
        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LINK.map((link) => (
            <a
              href={link.href}
              className="font-sora text-lg font-medium text-emerald-900 dark:text-zinc-300 sm:text-xl"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="font-sora text-sm font-medium text-zinc-800 dark:text-zinc-200 sm:text-base">
          © 2019 - {new Date().getFullYear()}, Built with
          {` `}
          <a
            className="font-semibold text-emerald-800 dark:text-emerald-500"
            href="https://astro.build/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Astro"}
          </a>
          {", "}
          <a
            className="font-semibold text-emerald-800 dark:text-emerald-500"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          {", & "}
          <a
            className="font-semibold text-emerald-800 dark:text-emerald-500"
            href="https://vercel.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
