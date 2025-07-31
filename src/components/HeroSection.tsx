import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Users, Calendar, Instagram, Youtube } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png" alt="GT Gestão Digital" className="h-20 md:h-24 mx-auto mb-6" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Target className="w-4 h-4" />
            🔥 OFERTA ESPECIAL ESTA SEMANA
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Multiplique Suas Vendas com
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Tráfego Pago{" "}
            </span>
            e Redes Sociais
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>Gestão completa do seu Google Ads ou Meta Ads</strong> + conteúdo profissional para suas redes sociais. 
            <strong>Aumente suas vendas em até 300%</strong> com nossa estratégia comprovada.
          </p>
          
          {/* Offer Box */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">🎯 Oferta Exclusiva desta Semana</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">📈 Tráfego Pago Completo</h4>
                <p className="text-sm text-muted-foreground">Google Ads OU Meta Ads</p>
                <p className="text-sm text-muted-foreground">Configuração + Otimização</p>
                <p className="text-sm text-muted-foreground">Relatórios mensais detalhados</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">📱 Gestão de Redes Sociais</h4>
                <p className="text-sm text-muted-foreground">12 posts profissionais</p>
                <p className="text-sm text-muted-foreground">4 reels de alta qualidade</p>
                <p className="text-sm text-muted-foreground">Stories + Legendas otimizadas</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm font-medium text-primary">+ Relatórios mensais de performance completos</p>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Target className="w-5 h-5 text-primary" />
              <span>Campanhas Otimizadas</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>ROI Garantido</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Users className="w-5 h-5 text-primary" />
              <span>Conteúdo Profissional</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20de%20tr%C3%A1fego%20pago%20%2B%20redes%20sociais.', '_blank')}>
              Garantir Oferta Especial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p className="mb-4">✅ Mais de 500 empresas aumentaram suas vendas conosco</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-60">
              <span className="bg-secondary px-3 py-1 rounded-md">Google Partner</span>
              <span className="bg-secondary px-3 py-1 rounded-md">Meta Business</span>
              <span className="bg-secondary px-3 py-1 rounded-md">Resultados Comprovados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;