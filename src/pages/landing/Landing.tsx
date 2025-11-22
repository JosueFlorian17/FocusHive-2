import { Link } from "react-router-dom";
import LandingHeader from "../../components/organisms/LandingHeader";

function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <LandingHeader />

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Enfócate. <span className="text-blue-900">Aprende.</span> Domina.
            </h1>
            <p className="text-lg text-gray-700">
              La única app que personaliza tu método de estudio y te motiva en comunidad.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800">
                Descubre tu método de estudio ideal
              </button>
              <Link
                to="/register"
                className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
              >
                Regístrate gratis
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
              alt="Ilustración estudiante"
              className="max-w-md w-full"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm">
          <div className="flex gap-6 mb-2 md:mb-0">
            <a href="#contact" className="hover:text-white">Contacto</a>
            <a href="#terms" className="hover:text-white">Política y Términos</a>
          </div>
          <p>© 2025 FocusHive. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-lg mt-2 md:mt-0">
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
