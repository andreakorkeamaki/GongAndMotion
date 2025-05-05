export default function Footer() {
  return (
    <footer className="bg-primary-dark text-background py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-heading font-bold text-xl">Gong and Motion</span>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-sm">
          <span>Contact: <a href="mailto:gongandmotion@gmail.com" className="underline hover:text-accent">gongandmotion@gmail.com</a></span>
          <span>Phone/WhatsApp: <a href="tel:+46700501673" className="underline hover:text-accent">+46 70 050 1673</a></span>
          <div className="flex gap-3 mt-2">
            {/* Social links placeholder */}
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
