import { GraduationCap, Code2, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bolext-4xl md:text-5xl mb-4">
              <span className="neon-text">Sobre Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl glow-border mb-12 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Foto */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl"></div>
                  <img
                    src="/portfolio/denisson.png"
                    alt="Denisson Freitas"
                    className="relative w-full h-full object-cover rounded-full border-4 border-primary/50 glow-border"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="flex-1">
                <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 text-justify">
                  Olá! Sou <span className="text-primary font-semibold">Denisson Freitas, M.Sc.</span>,
                  engenheiro de software, pesquisador e especialista em Proteção de Dados Pessoais.
                  Sou mestre em Ciência da Computação pela Universidade Federal de Sergipe (UFS),
                  especialista em Lei Geral de Proteção de Dados (LGPD) e bacharel em Ciência da
                  Computação pela mesma instituição.
                </p>

                <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 text-justify">
                  Ao longo da minha trajetória acadêmica e profissional, desenvolvi projetos e realizei pesquisas em
                  Engenharia de Software, Segurança e Privacidade da Informação, conformidade com a LGPD e Inteligência Artificial.
                  Entre as experiências mais relevantes, destacam-se o desenvolvimento de plataformas de orçamento
                  participativo digital baseadas em Blockchain, sistemas de gerenciamento de egressos e, mais recentemente,
                  a concepção e implementação de um framework para conformidade contínua com a LGPD em pipelines DevSecOps,
                  registrado como software e fundamentado nos princípios de <i>Compliance as Code</i> e <i>Privacy by Design</i>.
                </p>

                <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 text-justify">
                  Este portfólio reúne minha trajetória acadêmica e profissional, apresentando experiências,
                  projetos, publicações científicas, registros de software, certificações e áreas de interesse.
                  Natural de Sergipe, cristão e movido pela paixão por tecnologia, busco constantemente o
                  aprimoramento técnico e científico, contribuindo para o desenvolvimento de soluções inovadoras,
                  seguras e alinhadas às melhores práticas da Engenharia de Software.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in">
              <GraduationCap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-bold text-xl text-center mb-2">
                Formação
              </h3>
              <p className="font-rajdhani text-center text-muted-foreground">
                Mestre em Ciência da Computação (UFS)
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <Code2 className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-bold text-xl text-center mb-2">
                Especialidade
              </h3>
              <p className="font-rajdhani text-center text-muted-foreground">
                Engenharia de Software & LGPD
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-bold text-xl text-center mb-2">
                Interesses
              </h3>
              <p className="font-rajdhani text-center text-muted-foreground">
                Segurança, Privacidade e IA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;