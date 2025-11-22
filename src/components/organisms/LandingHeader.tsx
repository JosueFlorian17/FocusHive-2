import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">📘 FocusHive</span>
        </div>

        {/* Links */}
        <nav>
          <ul className="flex gap-8 font-medium">
            <li><a href="#about" className="hover:text-amber-400">Conócenos</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Contáctanos</a></li>
            <li><Link to="/login" className="hover:text-amber-400">Inicia sesión</Link></li>
            <li>
              <Link
                to="/register"
                className="bg-amber-500 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400"
              >
                Regístrate gratis
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default LandingHeader;
