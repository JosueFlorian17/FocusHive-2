import { Link, NavLink } from "react-router-dom";

function GlobalHeader() {
  const navItems = [
    { label: "Seguimiento", to: "/app/dashboard" },
    { label: "Métodos de estudio", to: "/app/methods/cornell" },
    { label: "Mis herramientas", to: "/app/timer" },
    { label: "Comunidad", to: "/app/community" },
    { label: "Mi perfil", to: "/app/profile" },
  ];

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/app/dashboard" className="flex items-center gap-2">
          <span className="text-2xl font-bold">📘 FocusHive</span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `hover:text-amber-400 ${
                      isActive ? "border-b-2 border-amber-400 pb-1" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default GlobalHeader;
