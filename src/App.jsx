import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-black/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold tracking-[0.2em]">
              LR
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.18em]">
                LÍNEA ROJA
              </span>
              <span className="text-[10px] uppercase text-neutral-400">
                Evacuación · Konrad Lorenz
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] md:flex">
            <a href="#problema" className="hover:text-red-500">
              Problema
            </a>
            <a href="#restricciones" className="hover:text-red-500">
              Restricciones
            </a>
            <a href="#empatia" className="hover:text-red-500">
              Empatía
            </a>
            <a href="#solucion" className="hover:text-red-500">
              Propuesta
            </a>
            <a href="#validacion" className="hover:text-red-500">
              Validación
            </a>
            <a href="#conclusiones" className="hover:text-red-500">
              Conclusiones
            </a>
          </nav>

          {/* CTA Desktop */}
    

          {/* Mobile button */}
          <button
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 p-2 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <span className="sr-only">Abrir menú</span>
            <div className="flex flex-col gap-1">
              <span className="block h-[2px] w-4 bg-white" />
              <span className="block h-[2px] w-4 bg-white" />
              <span className="block h-[2px] w-4 bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <div className="border-t border-neutral-800 bg-black md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs font-medium uppercase tracking-[0.18em] sm:px-6">
              {[
                ["Problema", "#problema"],
                ["Restricciones", "#restricciones"],
                ["Empatía", "#empatia"],
                ["Ideación", "#ideacion"],
                ["Propuesta", "#solucion"],
                ["Validación", "#validacion"],
                ["Conclusiones", "#conclusiones"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="py-1 text-neutral-200 hover:text-red-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
     
            </nav>
          </div>
        )}
      </header>

      {/* HERO: VIDEO + RESUMEN */}
      <section className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
          {/* En mobile el video va primero */}
          <div className="order-1 lg:order-none">
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
              <div className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 border-2 border-red-600 sm:-left-4 sm:-top-4 sm:h-16 sm:w-16" />
              <div className="pointer-events-none absolute -bottom-3 -right-3 hidden h-10 w-10 border border-neutral-700 sm:block" />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
              Proyecto de innovación · Gestión del riesgo
            </p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Línea Roja: hacer visible el camino que reduce el riesgo en
              emergencias.
            </h1>
            <p className="text-sm text-neutral-300 sm:text-[15px]">
              En la Universidad Konrad Lorenz las rutas de evacuación están
              señalizadas, pero la comunidad rara vez las mira o recuerda.
              Durante un sismo o incendio, muchas personas no saben hacia dónde
              desplazarse ni cómo ayudar a quienes tienen movilidad reducida.
            </p>
            <p className="text-sm text-neutral-300 sm:text-[15px]">
              <span className="font-semibold text-red-500">Línea Roja</span> es
              una propuesta integral que combina una guía visual continua, un
              kit de apoyo para brigadistas y un manual sencillo para traducir
              el protocolo de evacuación en acciones claras y practicables.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#solucion"
                className="rounded-full bg-red-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-red-700 sm:text-sm"
              >
                Ver propuesta completa
              </a>
              <a
                href="#problema"
                className="rounded-full border border-neutral-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] hover:border-red-500 sm:text-sm"
              >
                Entender el problema
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA ORIGINAL + REPLANTEAMIENTO */}
      <section
        id="problema"
        className="border-b border-neutral-200 bg-white py-10 sm:py-14"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:gap-12 lg:px-8">
          <div className="lg:w-1/3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
              01 · Problema de evacuación
            </h2>
            <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              La señalización existe, pero no se transforma en acción.
            </p>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-neutral-800 sm:text-[15px] lg:w-2/3">
            <p>
              A partir de la definición clásica de ruta de evacuación,
              identificamos que en la Konrad Lorenz ocurre un fenómeno
              recurrente: los planos y avisos están presentes, pero la mayoría
              de estudiantes, docentes y administrativos no los reconoce ni los
              usa en situaciones reales de emergencia.
            </p>
            <p>
              El análisis del problema inicial mostró causas de fondo: poco
              conocimiento de las rutas, comprensión limitada del protocolo,
              escasa capacitación práctica y ausencia de apoyos visibles que
              orienten en tiempo real bajo presión.
            </p>
            <p className="border-l-4 border-red-600 pl-4 text-neutral-900">
              Esto nos llevó a replantear el problema como una{" "}
              <span className="font-semibold">
                brecha entre el protocolo formal y la experiencia real de
                evacuación
              </span>
              , más que como un simple asunto de cartelería o infraestructura.
            </p>
          </div>
        </div>
      </section>

      {/* RESTRICCIONES + CUESTIONAMIENTOS */}
      <section
        id="restricciones"
        className="border-b border-neutral-200 bg-neutral-50 py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
            02 · Restricciones y preguntas clave
          </h2>
          <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
            Soluciones posibles dentro de un campus con límites reales.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                Restricciones económicas
              </h3>
              <p className="mt-3">
                No es viable transformar toda la infraestructura ni construir
                rampas en todos los puntos. Las intervenciones deben ser{" "}
                <span className="font-semibold">
                  de bajo costo y alto impacto
                </span>{" "}
                aprovechando lo que ya existe.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                Accesibilidad limitada
              </h3>
              <p className="mt-3">
                La infraestructura no garantiza accesibilidad plena para
                personas con discapacidad, lo que exige{" "}
                <span className="font-semibold">
                  apoyos claros y roles definidos
                </span>{" "}
                para asistirlas durante la evacuación.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                Cultura de prevención
              </h3>
              <p className="mt-3">
                El interés por los simulacros y la retención de información es
                bajo. La presencia del grupo de reacción es poco visible, por lo
                que el protocolo{" "}
                <span className="font-semibold">no se vuelve memoria</span>{" "}
                cotidiana.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-neutral-800 sm:text-[15px]">
            El análisis de{" "}
            <span className="font-semibold">cuestionamientos y suposiciones</span>{" "}
            mostró que la universidad sí cuenta con presupuesto para prevención
            y con el apoyo cercano del Cuerpo de Bomberos de Chapinero. El reto
            no es solo de recursos, sino de{" "}
            <span className="font-semibold text-red-600">
              gestión inteligente y visibilización
            </span>{" "}
            de los procesos existentes.
          </p>
        </div>
      </section>

      {/* MAPA DE EMPATÍA */}
      <section
        id="empatia"
        className="border-b border-neutral-200 bg-white py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
            03 · Mapa de empatía
          </h2>
          <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
            Diseñar desde lo que una persona vive en medio de la evacuación.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-900">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                ¿Qué piensa, siente, ve y oye?
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Confusión, ansiedad y miedo frente a qué hacer.</li>
                <li>• Ve pasillos congestionados y señales poco visibles.</li>
                <li>• Oye alarmas, ruido y mensajes que no siempre son claros.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-900">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                ¿Qué dice, hace y necesita?
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Pregunta “¿por dónde salgo?” o “¿qué pasó?”.</li>
                <li>• Busca compañía y referencias visibles para seguir.</li>
                <li>
                  • Espera sentirse segura, identificar rutas y reconocer quién
                  la puede guiar.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-800 sm:text-[15px]">
            Los <span className="font-semibold">pains</span> más fuertes son
            actuar bajo presión y no distinguir a los brigadistas; los{" "}
            <span className="font-semibold">gains</span> deseados son seguridad,
            orientación y claridad. Estos elementos guiaron las decisiones de
            diseño de Línea Roja.
          </p>
        </div>
      </section>

      {/* IDEACIÓN */}
      <section
        id="ideacion"
        className="border-b border-neutral-200 bg-neutral-50 py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
            04 · Ideación y creatividad
          </h2>
          <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
            De palabras aleatorias a soluciones aplicables en el campus.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                “Nube”
              </h3>
              <p className="mt-3">
                Inspiró ideas vinculadas a visibilidad, humo y clima: se
                exploraron recursos que hicieran la{" "}
                <span className="font-semibold">
                  señalización más intuitiva
                </span>{" "}
                y reconocible en condiciones adversas.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                “Violín”
              </h3>
              <p className="mt-3">
                Aportó nociones de ritmo, orden y cuerdas guía, dando lugar a
                la idea de{" "}
                <span className="font-semibold">
                  bastones lumínicos y roles marcados
                </span>{" "}
                para los brigadistas.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-800 sm:text-[15px]">
            Estos ejercicios permitieron salir de lo obvio y llegar a una
            solución que sigue siendo creativa, pero{" "}
            <span className="font-semibold text-red-600">
              viable y aplicable
            </span>{" "}
            a la realidad de la universidad.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN: LÍNEA ROJA, KIT, MANUAL */}
      <section
        id="solucion"
        className="border-b border-neutral-200 bg-white py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
            05 · Propuesta integral Línea Roja
          </h2>
          <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
            Tres componentes coordinados para acompañar la evacuación.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Línea Roja Reflectiva */}
            <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-900">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-600">
                5.1 · Línea Roja reflectiva
              </span>
              <p className="mt-3">
                Una línea roja instalada en techos o paredes que crea un{" "}
                <span className="font-semibold">camino continuo</span> hacia las
                salidas de emergencia, visible incluso con humo o baja luz.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-800">
                <li>• Rutas unificadas y fáciles de seguir.</li>
                <li>• Refuerza la memoria al verse a diario.</li>
                <li>• Reduce dudas en momentos críticos.</li>
              </ul>
            </div>

            {/* Kit para Brigadistas */}
            <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-900">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-600">
                5.2 · Kit de emergencia
              </span>
              <p className="mt-3">
                Un kit portátil que reúne implementos esenciales (linterna,
                cuerdas, botiquín básico, elementos impermeables, silbato y
                medios de comunicación) para{" "}
                <span className="font-semibold">
                  apoyar y orientar a la comunidad
                </span>{" "}
                durante la evacuación.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-800">
                <li>• Mejora la capacidad de respuesta.</li>
                <li>• Refuerza la autoridad del brigadista.</li>
                <li>• Aumenta la percepción de acompañamiento.</li>
              </ul>
            </div>

            {/* Manual de evacuación */}
            <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-900">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-600">
                5.3 · Manual de evacuación
              </span>
              <p className="mt-3">
                Un manual ilustrado que explica de forma sencilla qué hacer,
                qué evitar, cómo seguir la Línea Roja y cómo{" "}
                <span className="font-semibold">
                  asistir a personas con movilidad reducida
                </span>
                .
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-800">
                <li>• Refuerza el protocolo antes de la emergencia.</li>
                <li>• Clarifica roles y responsabilidades.</li>
                <li>• Facilita la apropiación del proceso de evacuación.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDACIÓN */}
      <section
        id="validacion"
        className="border-b border-neutral-200 bg-neutral-50 py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
            06 · Encuestas y resultados
          </h2>
          <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
            La comunidad validó la claridad y utilidad de la propuesta.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-900">
              <p className="text-3xl font-bold text-red-600">✓</p>
              <p className="mt-3">
                La mayoría de participantes percibió la{" "}
                <span className="font-semibold">Línea Roja</span> como un
                recurso claro y sencillo de seguir durante la evacuación.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-900">
              <p className="text-3xl font-bold text-red-600">✓</p>
              <p className="mt-3">
                El <span className="font-semibold">kit</span> fue valorado como
                una herramienta útil y reconocible para apoyar a brigadistas y
                comunidad en momentos de crisis.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-900">
              <p className="text-3xl font-bold text-red-600">✓</p>
              <p className="mt-3">
                El <span className="font-semibold">manual</span> se reconoció
                como clave para comprender los pasos del protocolo y reducir la
                improvisación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOMBRE DEL GRUPO + CONCLUSIONES */}
      <section
        id="conclusiones"
        className="border-b border-neutral-200 bg-white py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
              07 · Nombre y significado
            </h2>
            <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              “Línea Roja”: una guía directa, simple y decisiva.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-neutral-800 sm:text-[15px]">
              El nombre del grupo simboliza una línea que conecta a las
              personas con la salida más segura en el momento crítico. Es una
              metáfora de{" "}
              <span className="font-semibold">
                decisión, urgencia y protección
              </span>{" "}
              frente al riesgo.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
              08 · Conclusiones del proyecto
            </h2>
            <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              Seguridad desde la creatividad, la empatía y la gestión de
              recursos.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-neutral-800 sm:text-[15px]">
              Línea Roja se consolida como una solución innovadora y accesible
              para fortalecer los protocolos de evacuación en la Universidad
              Konrad Lorenz. La combinación de señalización visual clara,
              acompañamiento humano y herramientas prácticas{" "}
              <span className="font-semibold">
                mejora la eficacia y la confianza
              </span>{" "}
              en los procesos de salida del campus.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-neutral-800 sm:text-[15px]">
              Más allá del producto, el proyecto permitió comprender mejor el
              comportamiento humano bajo estrés, potenciar la cultura de la
              prevención y demostrar que la{" "}
              <span className="font-semibold text-red-600">
                gestión inteligente de recursos existentes
              </span>{" "}
              puede transformar la manera en que vivimos las emergencias.
            </p>
          </div>
        </div>
      </section>

      

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-black py-5 text-[11px] text-neutral-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Proyecto Línea Roja · Fundación
            Universitaria Konrad Lorenz.
          </p>
          <p className="text-[10px]">
            Integrantes: Jairo Perilla, Jorge Triana, Martín Aldana, Natalia
            Correa, Valentina Peña, Sebastián Vargas.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
