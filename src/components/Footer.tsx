import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png"
                alt="GT Gestão Digital"
                className="h-8"
              />
              <h3 className="text-2xl font-bold">GT Gestão Digital</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Agência especializada em criação de sites e Google Ads para clínicas médicas e estéticas.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a href="mailto:contato@gtgestaodigital.com.br" className="text-white/80 hover:text-white transition-colors">
                  contato@gtgestaodigital.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <a
                  href="https://wa.me/5531984005700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (31) 9 8400-5700
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Belo Horizonte, MG - Brasil</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100092534148492&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/gt.gestaodigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">gtgestaodigital.com.br</p>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm">
            <div>© {currentYear} GT Gestão Digital. Todos os direitos reservados.</div>
            <div className="mt-1 select-none pointer-events-none">CNPJ: 50.371.469/0001-05</div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/politica-de-privacidade" className="text-white/80 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="text-white/80 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="/lgpd" className="text-white/80 hover:text-white transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
