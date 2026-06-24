import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config'

export default function WhatsappFloatButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-black text-brand-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <MessageCircle size={28} />
    </a>
  )
}
