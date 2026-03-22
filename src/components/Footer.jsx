// Simple footer for branding.
export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-sand/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate sm:flex-row">
        <span>© 2026 Isra Zguir. All rights reserved.</span>
        <span>Built with React, Tailwind CSS, and Framer Motion.</span>
      </div>
    </footer>
  );
}
