"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
        Error
      </span>
      <h2 className="mt-4 text-3xl font-black text-gray-900 dark:text-gray-50 sm:text-4xl">
        Something Went Wrong
      </h2>
      <p className="mt-4 max-w-md text-gray-600 dark:text-gray-300">
        An unexpected error occurred. Please try again or contact us if the
        problem persists.
      </p>
      <button
        onClick={unstable_retry}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#e6443b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#c73a34]"
      >
        Try Again
      </button>
    </main>
  );
}
