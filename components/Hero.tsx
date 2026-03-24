"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

const products = [
  {
    name: "samba code",
    tagline: "Gestão de Ocorrências",
    description: "Registro e gestão de ocorrências interdisciplinares com visibilidade total.",
    logo: "/imgs/code-logo1.svg",
    href: "https://code.escolacabral.com.br",
    badgeClass: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    name: "samba edvance",
    tagline: "Simulados Padronizados",
    description: "Editor, gerenciador e padronizador de simulados para redes de ensino.",
    logo: "/imgs/edvance-logo1.svg",
    href: "https://edvance.escolacabral.com.br",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
  },
  {
    name: "samba flourish",
    tagline: "Monitoramento IoT",
    description: "Central de monitoramento de hortas com sensores Arduino em tempo real.",
    logo: "/imgs/flourish-logo1.svg",
    href: "https://flourish.escolacabral.com.br",
    badgeClass: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center pt-28 pb-16 lg:pt-32 overflow-hidden bg-background">

      {/* Blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="pointer-events-none absolute -top-[10%] -left-[10%] w-[50%] h-[50%] z-0"
      >
        <div className="w-full h-full min-w-100 min-h-100 bg-primary/25 dark:bg-primary/15 rounded-[40%_60%_70%_30%] blur-[120px]" />
      </motion.div>
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="pointer-events-none absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] z-0"
      >
        <div className="w-full h-full min-w-75 min-h-75 bg-indigo-500/30 dark:bg-indigo-500/15 rounded-full blur-[100px]" />
      </motion.div>
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ willChange: "transform" }}
        className="pointer-events-none absolute top-[20%] left-[30%] w-[30%] h-[30%] z-0"
      >
        <div className="w-full h-full min-w-50 min-h-50 bg-primary/15 dark:bg-primary/10 rounded-full blur-[90px]" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* ── Left ── */}
          <div className="lg:w-[55%] text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 text-primary dark:text-blue-300 text-sm font-semibold mb-6 shadow-sm"
            >
              <Sparkles size={14} />
              Inovação em Tecnologia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "backOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight mb-8"
            >
              Tecnologia que{" "}
              <span className="text-gradient block mt-2">resolve.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
              className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              A samba innovations cria produtos de software para desafios reais
              — da educação ao campo, com soluções que fazem diferença no dia a
              dia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
              className="bg-card w-full max-w-lg p-3 rounded-2xl border border-border shadow-2xl flex flex-col sm:flex-row gap-3 focus-within:border-primary/50 transition-colors"
            >
              <input
                type="email"
                placeholder="Seu e-mail corporativo"
                className="w-full bg-transparent px-4 py-3 outline-none text-foreground placeholder-muted-foreground"
              />
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md shrink-0 whitespace-nowrap"
              >
                Conhecer Produtos <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Produtos prontos para uso
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Suporte especializado
              </div>
            </motion.div>
          </div>

          {/* ── Right — Product Cards ── */}
          <div className="lg:w-[45%] w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden p-8 flex flex-col gap-6">

                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-foreground">samba innovations</div>
                    <div className="text-xs text-muted-foreground">Nosso portfólio de produtos</div>
                  </div>
                </div>

                {/* Product cards */}
                {products.map((product, i) => (
                  <motion.a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-border transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-card border border-border shrink-0 p-2">
                      <Image src={product.logo} alt={product.name} width={32} height={32} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-black text-foreground">{product.name}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${product.badgeClass}`}>
                          {product.tagline}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                    <ExternalLink size={15} className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors shrink-0 mt-1" />
                  </motion.a>
                ))}

                {/* Coming soon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-dashed border-border bg-muted/30"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-muted border border-border shrink-0">
                    <span className="text-xl">✦</span>
                  </div>
                  <div>
                    <span className="font-bold text-muted-foreground">Mais produtos chegando</span>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Estamos sempre construindo.</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -top-6 bg-card border border-border p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">3 produtos ativos</div>
                  <div className="text-[10px] text-muted-foreground">samba innovations</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
