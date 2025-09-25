import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
  let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Contenido principal */}
      <main className="flex-1 container mx-auto p-6 flex flex-col items-center">
        {/* Botón regresar */}
        <div className="w-full mb-4">
          <button className="text-blue-900 hover:underline flex items-center gap-2">
            ← Regresar al inicio
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Panel izquierda */}
          <div className="bg-blue-100 rounded-lg p-4 shadow flex flex-col items-center">
            <img
              src="https://picsum.photos/200/200?random=1"
              alt="Comunidad"
              className="rounded-md mb-2"
            />
            <p className="text-sm font-medium">En qué trabaja la comunidad.</p>
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">✕</button>
          </div>

          {/* Timer central */}
          <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center border-2 border-blue-300">
            <div className="text-6xl mb-6">⏱️</div>
            <div className="text-4xl font-bold mb-6">{formatTime(time)}</div>
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={() => setIsRunning(true)}
                className="bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
              >
                Iniciar
              </button>
              <button
                onClick={() => setIsRunning(false)}
                className="bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
              >
                Detener
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setTime(0);
                }}
                className="bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
              >
                Reiniciar
              </button>
            </div>
          </div>

          {/* Panel derecha */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg p-4 shadow relative">
              <p className="text-sm text-gray-600">
                Persiste hasta que el estudio se convierta en tu hábito.
              </p>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">✕</button>
            </div>

            <div className="bg-blue-100 rounded-lg p-4 shadow flex flex-col items-center relative">
              <img
                src="https://picsum.photos/200/200?random=2"
                alt="Imagen motivacional"
                className="rounded-md mb-2"
              />
              <p className="text-sm font-medium">Inspiración para estudiar</p>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">✕</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm">
          <div className="flex gap-6 mb-2 md:mb-0">
            <a href="#contact" className="hover:text-white">Contacto</a>
            <a href="#terms" className="hover:text-white">Política y términos</a>
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

export default Timer;
