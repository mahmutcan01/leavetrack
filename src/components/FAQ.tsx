import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ücretsiz deneme süresi var mı?",
    answer:
      "Evet, tüm planlar için 14 gün ücretsiz deneme sunuyoruz. Deneme boyunca tüm temel özellikleri kullanabilirsiniz.",
  },
  {
    question: "Kaç çalışan ekleyebilirim?",
    answer:
      "Seçtiğiniz plana göre çalışan limiti değişir. İhtiyacınız arttığında planınızı tek tıkla yükseltebilirsiniz.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Evet. Verileriniz şifreli şekilde saklanır, erişimler rol bazlı yönetilir ve düzenli güvenlik kontrolleri uygulanır.",
  },
  {
    question: "İptal etmek kolay mı?",
    answer:
      "Oldukça kolay. Hesap ayarlarından aboneliğinizi iptal edebilir, dönem sonuna kadar kullanmaya devam edebilirsiniz.",
  },
  {
    question: "Mobil uygulama var mı?",
    answer:
      "Şu an mobil uyumlu web deneyimi sunuyoruz. Yakında iOS ve Android uygulamalarını da yayınlıyoruz.",
  },
] as const;

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-3 text-zinc-600">
            Karar vermeden önce en çok sorulan sorulara göz atın.
          </p>
        </div>

        <Accordion defaultValue={["item-0"]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
