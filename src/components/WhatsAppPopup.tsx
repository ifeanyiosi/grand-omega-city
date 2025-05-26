import { MessageCircle } from "lucide-react"; // or use any icon you like

const WhatsAppButton = () => {
  const phoneNumber = "+2349160597956"; // Replace with your phone number (country code + number)

  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
