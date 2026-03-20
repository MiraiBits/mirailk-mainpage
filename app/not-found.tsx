import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
        404
      </span>
      <h1 className="mt-4 text-4xl font-black text-gray-900 dark:text-gray-50 sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-gray-600 dark:text-gray-300">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or deleted.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#e6443b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#c73a34]"
      >
        Back to Home
      </Link>
    </main>
  );
}
