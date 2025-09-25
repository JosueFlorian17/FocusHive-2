import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">?? Bienvenido a FocusHive</h1>
      <p className="text-lg mb-8">Convierte tu estudio en un hábito con nuestras herramientas.</p>
      <div className="flex gap-4">
        <Link to="/register" className="bg-amber-500 px-6 py-2 rounded-lg font-semibold hover:bg-amber-600">Regístrate gratis</Link>
        <Link to="/login" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600">Inicia sesión</Link>
      </div>
    </div>
  );
}

export default Landing;
