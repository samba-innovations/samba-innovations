"use client";

import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Pronto para inovar com a gente?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Fale com nossa equipe e descubra como os produtos da Samba Innovations podem transformar seu negócio ou instituição.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground">E-mail</div>
                  <div className="text-lg font-medium text-foreground">contato@sambainnovations.com.br</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground">Telefone</div>
                  <div className="text-lg font-medium text-foreground">(11) 98765-4321</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border p-8 md:p-10 rounded-[2rem] shadow-xl">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                import('sonner').then(({ toast }) => {
                  toast.success("Mensagem enviada! Entraremos em contato em breve.");
                });
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Nome Completo</label>
                  <input required type="text" className="w-full bg-card border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors" placeholder="João da Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Cargo</label>
                  <input required type="text" className="w-full bg-card border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors" placeholder="Ex: CTO, Diretor, Gerente" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Empresa / Instituição</label>
                  <input required type="text" className="w-full bg-card border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors" placeholder="Nome da organização" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">E-mail Corporativo</label>
                  <input required type="email" className="w-full bg-card border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors" placeholder="joao@empresa.com.br" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Como podemos ajudar?</label>
                <textarea required rows={4} className="w-full bg-card border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors resize-none" placeholder="Conte-nos sobre seu desafio ou interesse em nossos produtos..."></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="news" className="w-5 h-5 rounded border-border text-primary focus:ring-primary accent-primary" />
                <label htmlFor="news" className="text-sm text-muted-foreground font-medium">Quero receber novidades sobre os produtos da Samba Innovations.</label>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
