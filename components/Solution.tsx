"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Solution() {
  const products = [
    {
      num: "01",
      name: "samba code",
      tagline: "Gestão de Ocorrências",
      desc: "Plataforma de registro e gestão de ocorrências interdisciplinares — centralize, acompanhe e resolva incidentes com visibilidade total para toda a equipe.",
      logo: "/imgs/code-logo1.svg",
      features: ["Registro centralizado de ocorrências", "Categorização interdisciplinar", "Acompanhamento e resolução em tempo real", "Relatórios e histórico completo"],
      color: "text-violet-500",
      bg: "bg-violet-500/8 dark:bg-violet-500/12",
      border: "border-violet-500/20",
      accent: "bg-violet-500",
      href: "https://code.escolacabral.com.br",
    },
    {
      num: "02",
      name: "samba edvance",
      tagline: "Simulados Padronizados",
      desc: "Editor, gerenciador e padronizador de simulados para redes de ensino — crie, distribua e analise avaliações com consistência pedagógica em toda a rede.",
      logo: "/imgs/edvance-logo1.svg",
      features: ["Editor de simulados integrado", "Padronização por rede de ensino", "Distribuição digital e impressa", "Análise de desempenho por turma e aluno"],
      color: "text-primary",
      bg: "bg-primary/8 dark:bg-primary/12",
      border: "border-primary/20",
      accent: "bg-primary",
      href: "https://edvance.escolacabral.com.br",
    },
    {
      num: "03",
      name: "samba flourish",
      tagline: "Monitoramento IoT",
      desc: "Central de monitoramento de hortas com sensores Arduino — acompanhe umidade, temperatura, luminosidade e saúde das plantas em tempo real, de qualquer lugar.",
      logo: "/imgs/flourish-logo1.svg",
      features: ["Sensores Arduino integrados", "Dashboard em tempo real", "Alertas automáticos por threshold", "Histórico e análise de dados"],
      color: "text-emerald-500",
      bg: "bg-emerald-500/8 dark:bg-emerald-500/12",
      border: "border-emerald-500/20",
      accent: "bg-emerald-500",
      href: "https://flourish.escolacabral.com.br",
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-primary/8 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-3"
          >
            Nossos Produtos
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Soluções construídas para o mundo real
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Cada produto resolve um desafio específico com profundidade — não somos uma plataforma genérica.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-card rounded-[2.5rem] border ${product.border} shadow-xl p-8 md:p-10 flex flex-col gap-6 overflow-hidden group hover:shadow-2xl transition-shadow`}
            >
              {/* Background accent */}
              <div className={`absolute -right-16 -top-16 w-48 h-48 ${product.bg} rounded-full blur-[60px] pointer-events-none`}></div>

              {/* Header */}
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${product.bg} border ${product.border} p-3`}>
                    <Image src={product.logo} alt={product.name} width={40} height={40} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black ${product.color} opacity-50`}>{product.num}</span>
                    </div>
                    <h4 className="text-2xl font-extrabold text-foreground">{product.name}</h4>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${product.bg} ${product.color} border ${product.border}`}>{product.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed relative z-10">{product.desc}</p>

              {/* Features */}
              <ul className="space-y-3 relative z-10">
                {product.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${product.bg} border ${product.border} shrink-0`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${product.accent}`}></div>
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 inline-flex items-center gap-2 font-bold ${product.color} hover:gap-3 transition-all mt-2 group/link`}
              >
                Saiba mais <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Coming soon teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 border border-dashed border-border rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-muted/20"
        >
          <div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Em breve</div>
            <h4 className="text-2xl font-extrabold text-foreground">Mais produtos no portfólio</h4>
            <p className="text-muted-foreground mt-1">Estamos sempre construindo. Cadastre-se para ser o primeiro a saber.</p>
          </div>
          <a
            href="#contato"
            className="shrink-0 flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Quero saber primeiro <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
