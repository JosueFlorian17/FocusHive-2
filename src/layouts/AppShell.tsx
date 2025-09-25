import { Link, Outlet } from "react-router-dom";
import GlobalHeader from "../components/organisms/GlobalHeader";

function AppShell() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Header */}
      <GlobalHeader />

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
