import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeOff, Globe, DollarSign, CalendarX, BarChart3, TrendingUp } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: EyeOff,
      title: "Invisível no Google",
      description: "Concorrentes aparecem primeiro nas buscas e ficam com os melhores pacientes.",
    },
    {
      icon: Globe,
      title: "Site que não converte",
      description: "Você tem um site, mas ele não gera agendamentos nem passa credibilidade.",
    },
    {
      icon: DollarSign,
      title: "Dinheiro jogado fora em anúncios",
      description: "Já tentou Google Ads sozinho (ou com alguém sem experiência) e não teve retorno.",
    },
    {
      icon: CalendarX,
      title: "Agenda vazia nos horários ruins",
      description: "Falta previsibilidade. Alguns dias lotados, outros com horários em aberto.",
    },
    {
      icon: BarChart3,
      title: "Sem dados, sem controle",
      description: "Você não sabe de onde vêm os pacientes nem quais anúncios estão funcionando.",
    },
    {
      icon: TrendingUp,
      title: "Concorrência crescendo",
      description: "Enquanto você espera, outras clínicas estão investindo e dominando sua região.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Se você se identifica com algum desses cenários,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              a GT pode ajudar
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-destructive/30"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
