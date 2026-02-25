import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppLeadModal from "@/components/WhatsAppLeadModal";

const CTASection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              lotar sua agenda?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vagas por região são limitadas. Garanta a sua antes que um concorrente garanta a dele.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setModalOpen(true)}
          >
            👉 Falar com a GT no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Sem compromisso. Nossa equipe vai entender sua clínica antes de qualquer proposta.
          </p>
        </div>
      </div>

      <WhatsAppLeadModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default CTASection;
