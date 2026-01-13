export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-6 px-6">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        RCIC Practice OS
      </span>
      <h1 className="text-4xl font-semibold text-white md:text-5xl">
        Monorepo is up and running.
      </h1>
      <p className="text-lg text-slate-300">
        Use Docker Compose to start the backend, frontend, Postgres, and Redis.
      </p>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
        <p className="font-semibold text-white">Quick links</p>
        <ul className="mt-3 space-y-2">
          <li>
            <span className="text-slate-400">Backend health:</span>{" "}
            <span className="font-mono">http://localhost:8000/health/</span>
          </li>
          <li>
            <span className="text-slate-400">Frontend proxy:</span>{" "}
            <span className="font-mono">http://localhost:3000/api/health/</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
