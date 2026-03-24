"use client";

import { motion } from "framer-motion";
import { Search, Layers, Rocket, RefreshCw } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Descoberta",
      desc: "Entendemos profundamente o problema — conversamos com quem vai usar o produto antes de escrever uma linha de código.",
      icon: Search,
    },
    {
      title: "Prototipação",
      desc: "Desenhamos e testamos soluções rapidamente, validando com usuários reais antes de escalar.",
      icon: Layers,
    },
    {
      title: "Lançamento",
      desc: "Implantamos com suporte dedicado, garantindo adoção real e não apenas entrega técnica.",
      icon: Rocket,
    },
    {
      title: "Evolução",
      desc: "Medimos resultados, coletamos feedback e continuamos melhorando — o produto nunca para de crescer.",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="comofunciona" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-3"
          >
            Nossa Abordagem
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            Como trabalhamos
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Da descoberta ao produto em produção — com foco em impacto real, não apenas em entrega.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-6 rounded-3xl border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/40 transition-colors group"
            >
              <div className="w-full aspect-video bg-muted rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <item.icon size={48} className="text-primary/40" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{i + 1}. {item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
