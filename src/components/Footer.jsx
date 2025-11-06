export default function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} ResumeForge. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <a className="hover:text-neutral-900" href="#">Privacy</a>
          <a className="hover:text-neutral-900" href="#">Terms</a>
          <a className="hover:text-neutral-900" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
