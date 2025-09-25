import { Link, Outlet } from "react-router-dom";

function AppShell() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-amber-600">FocusHive</h1>
          <ul className="flex gap-6 text-gray-700">
            <li><Link to="/app/dashboard">Dashboard</Link></li>
            <li><Link to="/app/timer">Timer</Link></li>
            <li><Link to="/app/flashcards">Flashcards</Link></li>
            <li><Link to="/app/methods/cornell">Métodos</Link></li>
            <li><Link to="/app/community">Comunidad</Link></li>
            <li><Link to="/app/profile">Perfil</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© {new Date().getFullYear()} FocusHive · <Link to="/app/about">Sobre nosotros</Link></p>
      </footer>
    </div>
  );
}

export default AppShell;
