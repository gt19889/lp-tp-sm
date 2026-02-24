import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O site já está incluso no valor de R$997?",
      answer:
        "Sim. A criação do site profissional faz parte do pacote, sem custo adicional. Ele é desenvolvido pela nossa equipe durante as primeiras semanas do contrato.",
    },
    {
      question: "Quem paga pelo investimento nos anúncios?",
      answer:
        "O valor dos cliques no Google (budget de anúncios) é pago diretamente por você à Google. O R$997 cobre exclusivamente a criação do site e a gestão das campanhas pela GT.",
    },
    {
      question: "Em quanto tempo começo a ver resultado?",
      answer:
        "Os primeiros resultados costumam aparecer entre 15 e 45 dias após o lançamento das campanhas. O crescimento se consolida ao longo dos 6 meses de contrato.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "Você tem acesso direto à equipe via WhatsApp com prioridade. Também enviamos relatórios mensais com os principais números da conta.",
    },
    {
      question: "O que acontece ao final dos 6 meses?",
      answer:
        "Você pode renovar, ajustar o plano ou encerrar sem multa. O site criado pela GT continua sendo seu independentemente da continuidade.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
