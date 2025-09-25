import { useState } from "react";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  course: string;
}

const COURSES = [
  "Human Centered Design",
  "Computación Paralela y Distribuida",
];

function Flashcards() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [course, setCourse] = useState("");

  const [openSection, setOpenSection] = useState<string | null>(COURSES[0]);

  const addFlashcard = () => {
    if (question.trim() && answer.trim() && course.trim()) {
      setCards([
        ...cards,
        {
          id: Date.now(),
          question,
          answer,
          course,
        },
      ]);
      setQuestion("");
      setAnswer("");
      setCourse("");
    }
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

        {/* Formulario añadir flashcard */}
        <div className="w-full max-w-4xl bg-blue-900 text-white rounded-lg p-6 mb-8 shadow border-2 border-blue-400">
          <h2 className="text-xl font-bold mb-4">Añadir una flashcard</h2>
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Pregunta"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 px-4 py-2 rounded text-black bg-white"
            />
            <input
              type="text"
              placeholder="Respuesta"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="flex-1 px-4 py-2 rounded text-black bg-white"
            />
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="px-4 py-2 rounded text-black bg-white"
            >
              <option value="">Elige tu curso</option>
              {COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={addFlashcard}
            className="mt-4 bg-amber-500 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400"
          >
            Añadir Flashcard
          </button>
        </div>

        {/* Listado de flashcards por curso, segmentado por secciones */}
        <div className="w-full max-w-4xl space-y-6">
          {COURSES.map((courseName) => {
            const courseCards = cards.filter((c) => c.course === courseName);
            const isOpen = openSection === courseName;
            return (
              <section key={courseName} className="mb-4">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-t bg-[#4B2E19] text-white font-bold text-lg focus:outline-none`}
                  onClick={() =>
                    setOpenSection(isOpen ? null : courseName)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`section-${courseName}`}
                >
                  <span>{courseName}</span>
                  <span className="ml-2">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`section-${courseName}`}
                    className="bg-white border-x border-b border-[#4B2E19] rounded-b px-4 py-4"
                  >
                    {courseCards.length === 0 ? (
                      <p className="text-gray-500">No hay flashcards para este curso.</p>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {courseCards.map((card) => (
                          <div
                            key={card.id}
                            className="bg-blue-700 text-white p-4 rounded-lg shadow"
                          >
                            <p className="font-semibold">{card.question}</p>
                            <p className="text-sm mt-2 opacity-80">{card.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm">
          <div className="flex gap-6 mb-2 md:mb-0">
            <a href="#contact" className="hover:text-white">
              Contacto
            </a>
            <a href="#terms" className="hover:text-white">
              Política y términos
            </a>
          </div>
          <p>© 2025 FocusHive. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-lg mt-2 md:mt-0">
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Flashcards;
