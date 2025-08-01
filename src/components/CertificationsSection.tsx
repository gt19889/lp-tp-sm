import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Zap } from "lucide-react";

// Import logos
import googlePartnerLogo from "@/assets/logos/google-partner.png";
const rdStationLogo = "/lovable-uploads/b711e4c8-a267-4251-b329-b365c2e79e8e.png";
import activeCampaignLogo from "@/assets/logos/activecampaign.png";
import metaLogo from "@/assets/logos/meta.png";
import clickUpLogo from "@/assets/logos/clickup.png";
import kommoLogo from "@/assets/logos/kommo.png";
const googleAnalyticsLogo = "/lovable-uploads/5ac49712-0494-405f-9cf1-a169e1f32acd.png";
const hotmartLogo = "/lovable-uploads/86b66055-54af-4a06-8071-77a246e13ad1.png";
import zapierLogo from "@/assets/logos/zapier.png";
import whatsappLogo from "@/assets/logos/whatsapp.png";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Google Partner",
      description: "Certificação oficial Google Ads",
      logo: googlePartnerLogo,
      verified: true
    },
    {
      name: "RD Station",
      description: "Parceiro oficial de automação",
      logo: rdStationLogo,
      verified: true
    },
    {
      name: "Active Campaign",
      description: "Especialista em email marketing",
      logo: activeCampaignLogo,
      verified: true
    },
    {
      name: "Meta Business",
      description: "Certificado Facebook & Instagram",
      logo: metaLogo,
      verified: true
    }
  ];

  const tools = [
    {
      name: "ClickUp",
      category: "Gestão de Projetos",
      logo: clickUpLogo
    },
    {
      name: "Kommo CRM",
      category: "Gestão de Vendas",
      logo: kommoLogo
    },
    {
      name: "Google Analytics",
      category: "Análise de Dados",
      logo: googleAnalyticsLogo
    },
    {
      name: "Hotmart",
      category: "Produtos Digitais",
      logo: hotmartLogo
    },
    {
      name: "Zapier",
      category: "Automação",
      logo: zapierLogo
    },
    {
      name: "WhatsApp Business",
      category: "Comunicação",
      logo: whatsappLogo
    }
  ];

  const securityFeatures = [
    "Dados protegidos com criptografia SSL",
    "Conformidade com LGPD",
    "Backups automáticos diários",
    "Monitoramento 24/7"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
            Certificações & Parceiros
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Expertise
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Certificada
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos parceiros oficiais das principais plataformas de marketing digital e 
            possuímos as certificações mais importantes do mercado.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 relative">
              {cert.verified && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src={cert.logo} alt={cert.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Ferramentas & Integrações
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Utilizamos as melhores ferramentas do mercado para garantir resultados excepcionais 
            e integração completa com seu negócio.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center group hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20">
                <CardContent className="p-4">
                  <div className="mb-2 flex justify-center">
                    <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security & Trust */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Segurança & Confiabilidade
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Sua empresa e dados estão em mãos seguras. Seguimos os mais altos padrões 
                de segurança e conformidade do mercado.
              </p>
              
              <ul className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-6 text-center border border-border/50">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">5+</div>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center border border-border/50">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime Garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;