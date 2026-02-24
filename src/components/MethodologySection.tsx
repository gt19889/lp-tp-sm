import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, Megaphone, LineChart, ArrowRight } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico",
      description:
        "Analisamos seu mercado, concorrentes e potencial de busca na sua região antes de criar qualquer coisa.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      number: "02",
      title: "Site de Alta Conversão",
      description:
        "Criamos um site profissional, rápido e otimizado para transformar visitantes em pacientes que ligam ou agendam.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Megaphone,
      number: "03",
      title: "Ativação do Google Ads",
      description:
        "Criamos e ativamos as campanhas segmentadas para o seu público, nos horários certos, com o orçamento certo.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: LineChart,
      number: "04",
      title: "Otimização Contínua",
      description:
        "Monitoramos, ajustamos e enviamos relatórios mensais para que o resultado só melhore com o tempo.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            Método GT
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Método GT de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Crescimento para Clínicas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4 etapas para transformar sua clínica em referência no Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>

                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="text-6xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{step.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-20">
                    <ArrowRight className="absolute -top-2 -right-1 w-5 h-5 text-primary/50" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
