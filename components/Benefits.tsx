"use client";

import { motion } from "framer-motion";
import { Building2, BookOpen, Code, Check } from "lucide-react";

export function Benefits() {
  const cases = [
    {
      target: "Para Empresas",
      icon: Building2,
      points: [
        "Produtos que se adaptam ao seu fluxo de trabalho real",
        "Integração com ferramentas que você já utiliza",
        "Suporte dedicado e onboarding estruturado",
      ],
      bg: "bg-blue-50 dark:bg-blue-500/10",
      color: "text-primary dark:text-blue-400",
      border: "hover:border-primary/50",
    },
    {
      target: "Para Educação",
      icon: BookOpen,
      points: [
        "Digitalização de processos pedagógicos complexos",
        "Dados analíticos para decisões baseadas em evidência",
        "Escalabilidade para redes escolares de qualquer tamanho",
      ],
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      color: "text-indigo-600 dark:text-indigo-400",
      border: "hover:border-indigo-400/50",
    },
    {
      target: "Para Desenvolvedores",
      icon: Code,
      points: [
        "APIs documentadas e bem estruturadas",
        "Ferramentas que aumentam a produtividade real do time",
        "Plataforma colaborativa do planejamento à entrega",
      ],
      bg: "bg-violet-50 dark:bg-violet-500/10",
      color: "text-violet-600 dark:text-violet-400",
      border: "hover:border-violet-400/50",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-3"
          >
            Para quem é
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Benefícios para quem importa
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((bnf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] bg-card border border-border shadow-md transition-all duration-300 ${bnf.border} hover:shadow-xl`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${bnf.bg}`}>
                <bnf.icon className={`w-8 h-8 ${bnf.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{bnf.target}</h3>
              <ul className="space-y-4">
                {bnf.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground font-medium">
                    <div className={`mt-0.5 p-1 rounded-full ${bnf.bg} shrink-0`}>
                      <Check size={14} className={bnf.color} strokeWidth={3} />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
