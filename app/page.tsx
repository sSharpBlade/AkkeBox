"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code, BookOpen, Users, Lightbulb, ArrowRight, Calendar, User } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { SetStateAction, useState } from "react";

export default function AkkeBoxPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  type Blog = {
    title: string;
    date: string;
    author: string;
    content: string;
  };

  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const blogs: Blog[] = [
    {
      title: "Herramientas CASE: Taxonomía e Integración en el Desarrollo de Software",
      date: "15 Enero 2025",
      author: "Equipo AkkeBox",
      content: "Las herramientas CASE son instrumentos diseñados para apoyar diversas actividades dentro del proceso de desarrollo de software. Este artículo explora su taxonomía e integración.",
    },
    // Puedes agregar más blogs aquí
  ];

  const openModal = (blog: SetStateAction<{ title: string; date: string; author: string; content: string } | null>) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 animate-in slide-in-from-top duration-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary/25">
                <Code className="w-5 h-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h1 className="text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-primary">AkkeBox</h1>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group">
                  <span>Inicio</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#blog" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group">
                  <span>Blog</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group">
                  <span>Contacto</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </nav>
              <div className="animate-in fade-in duration-1000 delay-500">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-br from-background via-primary/5 to-card/50 dark:from-background dark:via-primary/10 dark:to-card/30 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-4 animate-in fade-in slide-in-from-top duration-700 hover:scale-110 transition-transform cursor-default">
            Innovación en Software
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Soluciones de Software que
            <span className="text-primary animate-pulse"> Transforman</span> el Futuro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            En AkkeBox desarrollamos software innovador y compartimos conocimiento a través de nuestro blog educativo especializado en tecnología y desarrollo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden">
              <span className="relative z-10">Explorar Soluciones</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button variant="outline" size="lg" className="group border-2 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                <BookOpen className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Leer Blog
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gradient-to-b from-card/30 via-secondary/5 to-card/20 dark:from-card/20 dark:via-secondary/10 dark:to-card/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Blog Académico</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explora nuestros artículos sobre tecnología y desarrollo de software.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => openModal(blog)}>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {selectedBlog && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Síntesis de la Lectura
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">Las herramientas CASE son instrumentos diseñados para apoyar diversas actividades dentro del proceso de desarrollo de software.</p>
                  <p className="leading-relaxed">El texto enfatiza dos puntos clave:</p>
                  <div className="bg-primary/5 p-4 rounded-lg space-y-3 border-l-4 border-primary/30">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">1. Clasificación de las herramientas</h4>
                      <p className="text-sm">Las herramientas CASE se pueden clasificar según diferentes criterios, como su función, su rol, los pasos del proceso en que se usan, o la arquitectura del entorno que las soporta.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">2. Integración de las herramientas</h4>
                      <p className="text-sm">La verdadera potencia de la tecnología CASE se alcanza a través de la integración, permitiendo que distintas herramientas se comuniquen y compartan información.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="group">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-secondary" />
                  Fundamentos Clave del Artículo
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="border-l-4 border-primary pl-4 p-3 rounded-r-lg">
                        <h4 className="font-semibold text-primary">Necesidad de una taxonomía</h4>
                        <p className="text-sm">Es necesario crear una taxonomía para comprender la amplitud de las herramientas CASE y saber dónde aplicarlas en el proceso de software.</p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4 p-3 rounded-r-lg">
                        <h4 className="font-semibold text-secondary">Clasificación por Función</h4>
                        <p className="text-sm">La clasificación principal utilizada es funcional, agrupando las herramientas según el propósito específico que cumplen en el desarrollo.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-accent pl-4 p-3 rounded-r-lg">
                        <h4 className="font-semibold text-accent">El Poder de la Integración</h4>
                        <p className="text-sm">El mayor beneficio de la tecnología CASE se obtiene cuando las herramientas están integradas, mejorando la comunicación y ofreciendo beneficios sustanciales.</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4 p-3 rounded-r-lg">
                        <h4 className="font-semibold text-primary">Niveles de Integración</h4>
                        <p className="text-sm">Desde herramientas individuales hasta EAIP, representando el nivel más alto de integración.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="group">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Ejemplos y Casos Breves
                </h3>
                <div className="space-y-6">
                  <div className="border border-primary/20 rounded-lg p-6">
                    <h4 className="font-semibold text-primary mb-3">Caso 1: Desarrollo de un Sistema Bancario Complejo</h4>
                    <p className="text-sm">Un equipo necesita desarrollar un nuevo sistema de gestión de cuentas. Utilizan herramientas de seguimiento de requisitos para aislar, almacenar y categorizar cada requisito desde la especificación inicial.</p>
                    <p className="text-sm">Para modelar cómo funcionará el sistema, emplean herramientas de análisis y diseño que les permiten crear representaciones de los datos, la funcionalidad y el comportamiento del sistema.</p>
                  </div>

                  <div className="border border-secondary/20 rounded-lg p-6">
                    <h4 className="font-semibold text-secondary mb-3">Caso 2: Mantenimiento de Software Heredado</h4>
                    <p className="text-sm">Una empresa tiene un sistema antiguo escrito en un lenguaje de programación obsoleto y necesita modernizarlo. Utilizan herramientas de reingeniería inversa para tomar el código fuente existente y generar modelos gráficos y de diseño.</p>
                    <p className="text-sm">Posteriormente, usan herramientas de reestructuración de código para analizar la sintaxis del programa original y generar automáticamente una versión más estructurada y mantenible.</p>
                  </div>

                  <div className="border border-accent/20 rounded-lg p-6">
                    <h4 className="font-semibold text-accent mb-3">Caso 3: Garantizar la Calidad del Software</h4>
                    <p className="text-sm">Un equipo de control de calidad necesita verificar un nuevo módulo de software. Primero, usan herramientas de análisis estático para identificar posibles fallos o incumplimiento de estándares.</p>
                    <p className="text-sm">Luego, emplean herramientas de análisis dinámico que interactúan con el programa mientras se ejecuta para verificar la cobertura de las rutas de código y el valor de variables específicas.</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gradient-to-t from-card to-background border-t py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Code className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">AkkeBox</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 hover:text-foreground transition-colors duration-300">Transformando ideas en soluciones de software innovadoras y compartiendo conocimiento para el crecimiento de la comunidad tecnológica.</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                <Users className="w-4 h-4 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                <span>Equipo de 5 desarrolladores especializados</span>
              </div>
            </div>

            <div className="lg:col-span-2 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="flex items-center gap-3 mb-8 group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">Nuestro Equipo de Desarrollo</h4>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://github.com/Papuxking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom delay-300"
                >
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                      <Code className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Papuxking</p>
                      <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/TicheKiwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom delay-400"
                >
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-secondary/50">
                      <Code className="w-6 h-6 text-secondary-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">TicheKiwar</p>
                      <p className="text-xs text-muted-foreground group-hover:text-secondary/70 transition-colors duration-300">Backend Developer</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/AngieaCaiza27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom delay-500"
                >
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-accent/50">
                      <Code className="w-6 h-6 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">AngieaCaiza27</p>
                      <p className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors duration-300">UI/UX Designer</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/SafeBryans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom delay-600"
                >
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                      <Code className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">SafeBryans</p>
                      <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">DevOps Engineer</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </a>

                <a
                  href="https://github.com/sSharpBlade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 sm:col-span-2 lg:col-span-1 animate-in fade-in slide-in-from-bottom delay-700"
                >
                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-secondary/50">
                      <Code className="w-6 h-6 text-secondary-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">sSharpBlade</p>
                      <p className="text-xs text-muted-foreground group-hover:text-secondary/70 transition-colors duration-300">Lead Developer</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-muted/20 via-primary/5 to-secondary/5 rounded-2xl border border-dashed border-muted-foreground/20 hover:border-primary/30 transition-all duration-300 group animate-in fade-in slide-in-from-bottom delay-800">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Lightbulb className="w-6 h-6 text-primary group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                    <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">¿Tienes un proyecto en mente?</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">Conecta con nuestro equipo en GitHub para colaborar en soluciones innovadoras</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors duration-300 cursor-default">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-secondary/20 transition-colors duration-300 cursor-default">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-xs hover:bg-accent/20 transition-colors duration-300 cursor-default">
                      Angular
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-primary/20 transition-colors duration-300 cursor-default">
                      Spring
                    </Badge>
                    <Badge variant="secondary" className="text-xs hover:bg-accent/20 transition-colors duration-300 cursor-default">
                      Java
                    </Badge>
                    <Badge variant="outline" className="text-xs hover:bg-primary/20 transition-colors duration-300 cursor-default">
                      Nest
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-12" />
          <div className="text-center animate-in fade-in duration-700 delay-1000">
            <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">&copy; 2025 AkkeBox. Todos los derechos reservados. Desarrollado con ❤️ y tecnología de vanguardia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
