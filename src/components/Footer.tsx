export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Heyelab. All rights reserved.
        </p>
        <p className="text-sm text-text-muted font-mono">
          heyelab<span className="text-accent">.</span>com
        </p>
      </div>
    </footer>
  );
}
