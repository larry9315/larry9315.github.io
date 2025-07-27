export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white text-black z-50 border-t border-gray-300 shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Larry Park. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/larry9315"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/larry-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Linkedin
          </a>

          <p>Larry9315@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
