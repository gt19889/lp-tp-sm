import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Nav CTA */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png"
            alt="GT Gestão Digital"
            className="h-12 md:h-16"
          />
          <Button
            size="sm"
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
            onClick={() =>
              window.open(
                "https://wa.me/5531984005700?text=Ol%C3%A1!%20Quero%20aparecer%20no%20Google%20com%20a%20GT.",
                "_blank"
              )
            }
          >
            Quero aparecer no Google
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tag line */}
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 text-sm">
            Para clínicas médicas e estéticas
          </Badge>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Sua clínica no topo do Google —{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              com site profissional e pacientes chegando todo mês
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            A GT cuida do site e dos anúncios. Você cuida dos pacientes.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Unimos criação de site de alta conversão com gestão profissional de Google Ads em um único pacote.
            Resultado: mais visibilidade, mais agendamentos, menos desperdício.
          </p>

          {/* Offer Card */}
          <Card className="max-w-xl mx-auto mb-10 border-2 border-primary/30 shadow-xl">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 mx-auto mb-3">
                ⭐ PLANO MAIS ESCOLHIDO
              </Badge>
              <CardTitle className="text-2xl md:text-3xl">Plano Crescimento Clínica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Site profissional criado pela GT</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Gestão de Google Ads dedicada</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Relatórios mensais de resultado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Suporte prioritário via WhatsApp</span>
                </li>
              </ul>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-4xl font-bold text-primary">R$ 997<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                <p className="text-sm text-muted-foreground mt-1">Contrato de 6 meses</p>
                <p className="text-xs text-muted-foreground italic mt-1">
                  (Investimento em anúncios não incluso — gerenciado por você com nossa orientação)
                </p>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-4 text-lg shadow-lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/5531984005700?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20o%20Plano%20Crescimento%20Cl%C3%ADnica.",
                    "_blank"
                  )
                }
              >
                👉 Quero começar agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Sem taxa de setup · Sem contratos ocultos · Vagas limitadas por região
              </p>
            </CardContent>
          </Card>

          {/* Proof numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">300+</div>
              <p className="text-sm text-muted-foreground">sites entregues</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">R$900 mil+</div>
              <p className="text-sm text-muted-foreground">gerenciados em Google Ads em 2025</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">325x</div>
              <p className="text-sm text-muted-foreground">ROI comprovado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
