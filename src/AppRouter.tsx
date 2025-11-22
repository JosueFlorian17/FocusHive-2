import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./layouts/AppShell";

// Pages
import Landing from "./pages/landing/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Timer from "./pages/timer/Timer";
import Flashcards from "./pages/flashcards/Flashcards";
import Cornell from "./pages/methods/cornell/Cornell";
import Feynman from "./pages/methods/feynman/Feynman";
import Mindmap from "./pages/methods/mindmap/Mindmap";
import Community from "./pages/community/Community";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App protegido con AppShell */}
        <Route path="/app" element={<AppShell />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="timer" element={<Timer />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="methods/cornell" element={<Cornell />} />
          <Route path="methods/feynman" element={<Feynman />} />
          <Route path="methods/mindmap" element={<Mindmap />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
