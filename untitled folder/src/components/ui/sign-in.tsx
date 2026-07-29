import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { useState } from "react";

export function LightLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 font-sans">
      <section className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-blue-100/40 blur-3xl" />
        <div className="relative space-y-6 p-8">
          <header className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
              <Mail aria-hidden="true" size={32} strokeWidth={1.8} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-500">Sign in to continue to your account</p>
          </header>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <label className="block space-y-1.5 text-sm font-medium text-slate-700">
              Email or phone
              <input className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" placeholder="Enter your email or phone" type="text" />
            </label>
            <label className="block space-y-1.5 text-sm font-medium text-slate-700">
              <span className="flex items-center justify-between">Password <a className="text-xs font-medium text-blue-600 hover:underline" href="#">Forgot password?</a></span>
              <span className="relative block">
                <input className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 pr-12 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" placeholder="Enter your password" type={showPassword ? "text" : "password"} />
                <button aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-blue-600" onClick={() => setShowPassword((value) => !value)} type="button">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>
            <button className="h-12 w-full rounded-lg bg-blue-600 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:scale-[.98]" type="submit">Sign in</button>
          </form>

          <div className="flex items-center gap-3 text-xs text-slate-400"><span className="h-px flex-1 bg-slate-200" />or continue with<span className="h-px flex-1 bg-slate-200" /></div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50" type="button"><Mail size={18} />Google</button>
            <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50" type="button"><Github size={18} />GitHub</button>
          </div>
          <p className="text-center text-sm text-slate-500">Don&apos;t have an account? <a className="font-medium text-blue-600 hover:underline" href="#">Sign up</a></p>
        </div>
      </section>
    </main>
  );
}

export default LightLogin;
