import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

interface WhatsAppLeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName?: string;
}

const WhatsAppLeadModal = ({ open, onOpenChange, planName }: WhatsAppLeadModalProps) => {
  const [nome, setNome] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [nicho, setNicho] = useState("");
  const [atendimentos, setAtendimentos] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !localidade.trim() || !nicho.trim() || !atendimentos) return;

    const sanitizedNome = nome.trim().slice(0, 100);
    const sanitizedLocalidade = localidade.trim().slice(0, 100);
    const sanitizedNicho = nicho.trim().slice(0, 100);

    const lines = [
      planName ? `Olá! Tenho interesse no *${planName}*.` : "Olá! Quero saber mais sobre os serviços da GT.",
      "",
      `*Nome:* ${sanitizedNome}`,
      `*Localidade:* ${sanitizedLocalidade}`,
      `*Nicho:* ${sanitizedNicho}`,
      `*Atendimentos/mês:* ${atendimentos}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/5531984005700?text=${message}`, "_blank");

    // Reset
    setNome("");
    setLocalidade("");
    setNicho("");
    setAtendimentos("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Fale com nosso time</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para que nosso time comercial já tenha as informações necessárias.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="nome">Seu nome</Label>
            <Input
              id="nome"
              placeholder="Ex: Dr. João Silva"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="localidade">Cidade / Estado</Label>
            <Input
              id="localidade"
              placeholder="Ex: Belo Horizonte - MG"
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nicho">Nicho da clínica</Label>
            <Input
              id="nicho"
              placeholder="Ex: Dermatologia, Odontologia, Estética..."
              value={nicho}
              onChange={(e) => setNicho(e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="atendimentos">Atendimentos por mês</Label>
            <Select value={atendimentos} onValueChange={setAtendimentos} required>
              <SelectTrigger id="atendimentos">
                <SelectValue placeholder="Selecione uma faixa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Menos de 50">Menos de 50</SelectItem>
                <SelectItem value="50 a 100">50 a 100</SelectItem>
                <SelectItem value="100 a 200">100 a 200</SelectItem>
                <SelectItem value="200 a 500">200 a 500</SelectItem>
                <SelectItem value="Mais de 500">Mais de 500</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg"
          >
            Enviar e abrir WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppLeadModal;
