// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="border-b border-neutral-200 bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-red-600" />
            <span className="text-lg font-semibold tracking-[0.2em]">
              LÍNEA ROJA
            </span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#problema" className="hover:text-red-500">
              Problema
            </a>
            <a href="#restricciones" className="hover:text-red-500">
              Restricciones
            </a>
            <a href="#solucion" className="hover:text-red-500">
              Solución
            </a>
            <a href="#validacion" className="hover:text-red-500">
              Validación
            </a>
          </nav>
         
        </div>
      </header>

      {/* HERO: VIDEO + TEXTO */}
      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          {/* Texto */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Proyecto Línea Roja · Evacuación Konrad Lorenz
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hacer visible la ruta que puede salvar vidas.
            </h1>
            <p className="text-sm text-neutral-300 sm:text-base">
              En una emergencia cada segundo cuenta. Aunque las rutas de
              evacuación existen, la comunidad universitaria no las reconoce,
              no las sigue y muchas veces no sabe cómo actuar ni cómo apoyar a
              personas con movilidad reducida.
            </p>
            <p className="text-sm text-neutral-300 sm:text-base">
              <span className="font-semibold text-red-500">
                Línea Roja
              </span>{" "}
              transforma la señalización en una guía clara, visible y
              recordable, apoyada por herramientas prácticas para brigadistas y
              un manual sencillo de entender.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#solucion"
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-red-700"
              >
                Ver la solución
              </a>
              <a
                href="#problema"
                className="rounded-full border border-neutral-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:border-red-500"
              >
                Entender el problema
              </a>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ZQglx_6JLt4?si=UEWHe16CkbwzCT3Q"
                title="Proyecto Línea Roja – Evacuación"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 border-2 border-red-600" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-10 w-10 border border-neutral-700" />
          </div>
        </div>
      </section>

      {/* PROBLEMA INICIAL */}
      <section
        id="problema"
        className="border-b border-neutral-200 bg-white py-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              01 · Problema
            </h2>
            <p className="mt-3 text-2xl font-semibold">
              La señalización existe. La cultura de evacuación, no.
            </p>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-neutral-800 md:w-2/3">
            <p>
              En la Universidad Konrad Lorenz, estudiantes, docentes y
              administrativos conviven con planos y avisos de evacuación que
              casi nadie mira. En un sismo, incendio u otra emergencia, la
              mayoría no sabe dónde están las rutas, hacia dónde dirigirse ni
              cómo ayudar a quienes tienen movilidad reducida.
            </p>
            <p>
              El problema no es solo de infraestructura o de carteles en la
              pared: es una desconexión entre la teoría del protocolo y la
              práctica real. La señalización no genera recordación ni sentido
              de urgencia, por lo que las personas improvisan en medio del
              miedo y el caos.
            </p>
            <p className="border-l-4 border-red-600 pl-4 text-neutral-900">
              <span className="font-semibold">Reto:</span> convertir las rutas
              de evacuación en una guía intuitiva, visible y accionable, que
              realmente funcione bajo presión.
            </p>
          </div>
        </div>
      </section>

      {/* RESTRICCIONES */}
      <section
        id="restricciones"
        className="border-b border-neutral-200 bg-neutral-50 py-16"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            02 · Restricciones y contexto
          </h2>
          <p className="mt-3 text-2xl font-semibold text-neutral-900">
            Soluciones reales para un campus real.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Limitaciones económicas
              </h3>
              <p className="mt-3 text-sm text-neutral-700">
                No es viable transformar toda la infraestructura ni construir
                rampas en cada punto del campus. Se requiere intervenir con
                soluciones de alto impacto y bajo costo.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Infraestructura y accesibilidad
              </h3>
              <p className="mt-3 text-sm text-neutral-700">
                La accesibilidad para personas con discapacidad es limitada,
                por lo que se necesitan apoyos claros, roles definidos y rutas
                comprensibles para todos.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Desinterés y baja retención
              </h3>
              <p className="mt-3 text-sm text-neutral-700">
                Los simulacros se viven como un trámite. La información no se
                recuerda y la presencia del grupo de reacción es poco visible.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-neutral-800">
            A pesar de estas restricciones, la universidad sí cuenta con
            presupuesto para prevención de desastres y con el apoyo cercano del
            Cuerpo de Bomberos de Chapinero. El reto está en{" "}
            <span className="font-semibold text-red-600">
              gestionar mejor los recursos
            </span>{" "}
            y reforzar procesos ya existentes.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN: LÍNEA ROJA, KIT, MANUAL */}
      <section
        id="solucion"
        className="border-b border-neutral-200 bg-white py-16"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            03 · Solución: Proyecto Línea Roja
          </h2>
          <p className="mt-3 text-2xl font-semibold text-neutral-900">
            De un plano en la pared a una experiencia guiada en tiempo real.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Línea Roja */}
            <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
                a · Línea Roja reflectiva
              </span>
              <p className="mt-3 text-sm text-neutral-900">
                Una línea roja continua en techos o paredes que guía
                visualmente hacia las salidas de emergencia, incluso con humo
                o poca luz.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-700">
                <li>• Visibilidad en pasillos congestionados.</li>
                <li>• Camino único y reconocible bajo presión.</li>
                <li>• Refuerzo constante: ves la ruta todos los días.</li>
              </ul>
            </div>

            {/* Kit de emergencia */}
            <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
                b · Kit para brigadistas
              </span>
              <p className="mt-3 text-sm text-neutral-900">
                Un kit que permite a los brigadistas hacerse visibles y
                conducir la evacuación con orden y autoridad.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-700">
                <li>• Bastón lumínico para marcar la ruta.</li>
                <li>• Bocina de gas para dar instrucciones claras.</li>
                <li>• Fichas para calificar zonas y priorizar la evacuación.</li>
              </ul>
            </div>

            {/* Manual de evacuación */}
            <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
                c · Manual de evacuación
              </span>
              <p className="mt-3 text-sm text-neutral-900">
                Una guía práctica y sencilla que explica qué hacer, qué evitar
                y cómo seguir la Línea Roja antes, durante y después de la
                emergencia.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-700">
                <li>• Roles claros para la comunidad.</li>
                <li>• Instrucciones para asistir a personas con movilidad reducida.</li>
                <li>• Refuerzo de memoria mediante pasos clave.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EMPATÍA + EXPERIENCIA */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            04 · Personas en emergencia
          </h2>
          <p className="mt-3 text-2xl font-semibold text-neutral-900">
            Diseñado desde lo que la gente piensa, siente y hace.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Dolor (pains)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                <li>• Confusión, miedo e incertidumbre frente a qué hacer.</li>
                <li>• No reconocer a los brigadistas ni las rutas.</li>
                <li>• Caos en los pasillos y aglomeraciones.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Ganancia (gains)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                <li>• Sentirse seguros y acompañados.</li>
                <li>• Identificar rápidamente la ruta a seguir.</li>
                <li>• Ver claramente quién guía y da instrucciones.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDACIÓN */}
      <section
        id="validacion"
        className="border-b border-neutral-200 bg-white py-16"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            05 · Validación con la comunidad
          </h2>
          <p className="mt-3 text-2xl font-semibold text-neutral-900">
            Probado con estudiantes, docentes y administrativos.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-3xl font-bold text-red-600">✔</p>
              <p className="mt-3 text-sm text-neutral-800">
                La Línea Roja fue percibida como{" "}
                <span className="font-semibold">clara y fácil de seguir</span>
                , incluso en escenarios de estrés.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-3xl font-bold text-red-600">✔</p>
              <p className="mt-3 text-sm text-neutral-800">
                El kit para brigadistas se reconoció como{" "}
                <span className="font-semibold">
                  útil para mantener el control
                </span>{" "}
                durante la evacuación.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-3xl font-bold text-red-600">✔</p>
              <p className="mt-3 text-sm text-neutral-800">
                El manual fue valorado como una{" "}
                <span className="font-semibold">
                  herramienta clave para entender el protocolo
                </span>{" "}
                antes de la emergencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-black py-6 text-xs text-neutral-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p>© {new Date().getFullYear()} Proyecto Línea Roja. Todos los derechos reservados.</p>
          <p className="text-[11px]">
            Diseñado para la Universidad Konrad Lorenz · Evacuación y gestión del riesgo.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
