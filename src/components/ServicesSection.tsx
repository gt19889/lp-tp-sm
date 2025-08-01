import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, BarChart3, Instagram, Video, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Google Ads Profissional",
      subtitle: "Campanhas de Alto Desempenho",
      description: "Gestão completa das suas campanhas no Google Ads com foco em conversão e ROI. Configuração, otimização e monitoramento diário.",
      features: ["Palavras-chave estratégicas", "Otimização de CPC", "Relatórios detalhados", "Gestão de orçamento"],
      badge: "Google Partner"
    },
    {
      icon: Users,
      title: "Meta Ads (Facebook/Instagram)",
      subtitle: "Alcance Seu Público Ideal",
      description: "Campanhas no Facebook e Instagram com segmentação avançada e criativos de alta conversão para maximizar seus resultados.",
      features: ["Segmentação avançada", "Criativos otimizados", "Teste A/B contínuo", "Pixel tracking"],
      badge: "Meta Business"
    },
    {
      icon: Instagram,
      title: "Gestão de Redes Sociais",
      subtitle: "Conteúdo Profissional",
      description: "Criação e publicação de conteúdo estratégico para suas redes sociais, incluindo posts, stories e reels de alta qualidade.",
      features: ["12 posts mensais", "4 reels profissionais", "Stories diários", "Hashtags estratégicas"],
      badge: "Criativo"
    },
    {
      icon: Video,
      title: "Produção de Reels",
      subtitle: "Conteúdo Viral",
      description: "Criação de reels profissionais otimizados para engajamento e alcance, seguindo as tendências mais atuais das redes sociais.",
      features: ["Roteiros criativos", "Edição profissional", "Tendências atuais", "Call-to-action otimizado"],
      badge: null
    },
    {
      icon: BarChart3,
      title: "Relatórios e Analytics",
      subtitle: "Dados que Importam",
      description: "Relatórios detalhados com métricas importantes, insights e recomendações para otimizar continuamente suas campanhas.",
      features: ["Métricas de conversão", "ROI detalhado", "Insights estratégicos", "Recomendações mensais"],
      badge: null
    },
    {
      icon: CheckCircle,
      title: "Otimização Contínua",
      subtitle: "Resultados Crescentes",
      description: "Monitoramento e otimização constante das campanhas para garantir o melhor desempenho e ROI crescente mês a mês.",
      features: ["Otimização diária", "Testes A/B", "Ajustes de público", "Melhoria contínua"],
      badge: "Performance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Estratégia
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Completa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tráfego pago otimizado + gestão profissional de redes sociais para maximizar suas vendas e presença digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 relative overflow-hidden">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{service.subtitle}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para aumentar suas vendas com tráfego pago + redes sociais?
          </p>
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/5531984005700?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20de%20tr%C3%A1fego%20pago%20%2B%20redes%20sociais.', '_blank')}
          >
            Garantir Oferta Especial
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;