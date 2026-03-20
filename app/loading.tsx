export default function Loading() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32">
      <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-[#e6443b] dark:border-gray-700 dark:border-t-[#e6443b]" />
        <span className="text-sm">Loading…</span>
      </div>
    </main>
  );
}
