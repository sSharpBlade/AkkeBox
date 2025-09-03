import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, BookOpen, Users, Lightbulb, ArrowRight, Calendar, User } from "lucide-react"

export default function AkkeBoxPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">AkkeBox</h1>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </a>
                <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
                <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="py-20 bg-gradient-to-br from-background to-card/50 dark:from-background dark:to-card/30"
      >
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Innovación en Software
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Soluciones de Software que
            <span className="text-primary"> Transforman</span> el Futuro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            En AkkeBox desarrollamos software innovador y compartimos conocimiento a través de nuestro blog educativo
            especializado en tecnología y desarrollo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Explorar Soluciones
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Leer Blog
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-card/30 dark:bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Blog Académico</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Análisis de herramientas CASE: Taxonomía, integración y aplicaciones en el desarrollo de software
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <Badge variant="outline">Artículo Académico</Badge>
                </div>
                <CardTitle className="text-balance text-2xl">
                  Herramientas CASE: Taxonomía e Integración en el Desarrollo de Software
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>15 Enero 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Equipo AkkeBox</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Síntesis de la Lectura */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Síntesis de la Lectura
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Las fuentes describen la taxonomía de las herramientas CASE (Ingeniería de Software Asistida por
                      Computadora), que son instrumentos diseñados para apoyar diversas actividades dentro del proceso
                      de desarrollo de software.
                    </p>
                    <p className="leading-relaxed">El texto enfatiza dos puntos clave:</p>
                    <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">1. Clasificación de las herramientas</h4>
                        <p className="text-sm">
                          Las herramientas CASE se pueden clasificar según diferentes criterios, como su función, su rol
                          (para administradores o personal técnico), los pasos del proceso en que se usan, o la
                          arquitectura del entorno que las soporta. La clasificación principal presentada se basa en la
                          función que desempeñan.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2. Integración de las herramientas</h4>
                        <p className="text-sm">
                          Aunque las herramientas individuales pueden ser eficientes, la verdadera potencia de la
                          tecnología CASE se alcanza a través de la integración. La integración permite que distintas
                          herramientas se comuniquen y compartan información, facilitando una transferencia fluida de
                          datos entre las diferentes fases del ciclo de vida del software.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Fundamentos Clave */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-secondary" />
                    Fundamentos Clave del Artículo
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Necesidad de una taxonomía</h4>
                          <p className="text-sm text-muted-foreground">
                            Es necesario crear una taxonomía para comprender la amplitud de las herramientas CASE y
                            saber dónde aplicarlas en el proceso de software.
                          </p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4">
                          <h4 className="font-semibold text-foreground">Clasificación por Función</h4>
                          <p className="text-sm text-muted-foreground">
                            La clasificación principal utilizada es funcional, agrupando las herramientas según el
                            propósito específico que cumplen en el desarrollo.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground">El Poder de la Integración (I-CASE)</h4>
                          <p className="text-sm text-muted-foreground">
                            El mayor beneficio de la tecnología CASE se obtiene cuando las herramientas están
                            integradas, mejorando la comunicación y ofreciendo beneficios sustanciales.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Niveles de Integración</h4>
                          <p className="text-sm text-muted-foreground">
                            Desde herramientas individuales hasta EAIP (Entornos de Apoyo Integrado a Proyectos),
                            representando el nivel más alto de integración.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Beneficios de I-CASE:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Transferencia fluida de información entre herramientas y fases del proyecto</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Reducción del esfuerzo en actividades globales como gestión de configuración</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mejora del control del proyecto mediante mejor planificación y monitoreo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mejor coordinación entre los miembros del equipo en proyectos grandes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Ejemplos y Casos */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Ejemplos y Casos Breves
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          Caso 1
                        </Badge>
                        Desarrollo de un Sistema Bancario Complejo
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Un equipo necesita desarrollar un nuevo sistema de gestión de cuentas. Para asegurar que todos
                        los requisitos del cliente se cumplan, utilizan herramientas de seguimiento de requisitos para
                        aislar, almacenar y categorizar cada requisito desde la especificación inicial.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Para modelar cómo funcionará el sistema, emplean herramientas de análisis y diseño que les
                        permiten crear representaciones de los datos, la funcionalidad y el comportamiento del sistema,
                        ayudando a detectar errores antes de la implementación.
                      </p>
                    </div>

                    <div className="border border-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Caso 2
                        </Badge>
                        Mantenimiento de Software Heredado (Legacy)
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Una empresa tiene un sistema antiguo escrito en un lenguaje de programación obsoleto y necesita
                        modernizarlo. Utilizan herramientas de reingeniería inversa para tomar el código fuente
                        existente y generar modelos gráficos y de diseño que les ayuden a entender su estructura.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Posteriormente, usan herramientas de reestructuración de código para analizar la sintaxis del
                        programa original y generar automáticamente una versión más estructurada y mantenible.
                      </p>
                    </div>

                    <div className="border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Badge variant="outline" className="border-accent text-accent text-xs">
                          Caso 3
                        </Badge>
                        Garantizar la Calidad del Software
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Un equipo de control de calidad necesita verificar un nuevo módulo de software. Primero, usan
                        herramientas de análisis estático que analizan el código fuente sin ejecutarlo para identificar
                        posibles fallos o incumplimiento de estándares.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Luego, emplean herramientas de análisis dinámico que interactúan con el programa mientras se
                        ejecuta para verificar la cobertura de las rutas de código y el valor de variables específicas,
                        asegurando que el software se comporte como se espera.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Referencias */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Referencias
                  </h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Fuente principal:</strong> Artículo sobre taxonomía de herramientas CASE y su integración
                      en el desarrollo de software moderno.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Este análisis forma parte del contenido académico desarrollado por el equipo de AkkeBox para
                      integrar fundamentos teóricos con aplicaciones prácticas en el desarrollo de software empresarial.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-card border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">AkkeBox</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transformando ideas en soluciones de software innovadoras y compartiendo conocimiento para el
                crecimiento de la comunidad tecnológica.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Equipo de 5 desarrolladores</span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Nuestro Equipo de Desarrollo</h4>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="https://github.com/Papuxking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Papuxking
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/TicheKiwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        TicheKiwar
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/AngieaCaiza27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        AngieaCaiza27
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/SafeBryans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        SafeBryans
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/SharpBlade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        SharpBlade
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <strong>¿Tienes un proyecto en mente?</strong> Conecta con nuestro equipo en GitHub para colaborar
                  en soluciones innovadoras.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-12" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 AkkeBox. Todos los derechos reservados. Desarrollado con ❤️ y tecnología de vanguardia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
