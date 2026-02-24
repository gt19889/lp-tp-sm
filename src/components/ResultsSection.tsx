import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, DollarSign, Heart, Building2 } from "lucide-react";

const ResultsSection = () => {
  const testimonials = [
    {
      text: "Em 3 meses a agenda do turno da tarde lotou. O site ficou muito mais profissional do que o anterior e os anúncios trouxeram pacientes que realmente fechariam.",
      name: "Dra. Camila R.",
      company: "Clínica Estética, Belo Horizonte",
      avatar: "C",
    },
    {
      text: "Já tinha tentado Google Ads antes e perdi dinheiro. Com a GT foi diferente desde o primeiro mês. Eles sabem o que estão fazendo.",
      name: "Dr. Rafael M.",
      company: "Dermatologia, São Paulo",
      avatar: "R",
    },
    {
      text: "O pacote é justo pelo que entrega. Site novo + anúncios gerenciados por 997 reais é o melhor custo-benefício que encontrei.",
      name: "Dra. Letícia F.",
      company: "Odontologia, Curitiba",
      avatar: "L",
    },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: "3x",
      label: "mais agendamentos em 90 dias",
    },
    {
      icon: DollarSign,
      value: "8x",
      label: "ROI médio sobre o investimento",
    },
    {
      icon: Heart,
      value: "97%",
      label: "de satisfação entre clientes ativos",
    },
    {
      icon: Building2,
      value: "R$900mil+",
      label: "investidos em Google Ads em 2025",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
            Resultados Reais
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Clínicas que já crescem{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              com a GT
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
