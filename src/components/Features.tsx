import {
  BellRing,
  CalendarDays,
  ClipboardCheck,
  FileBarChart2,
} from "lucide-react";

const features = [
  {
    title: "Kolay İzin Talebi",
    description: "Çalışanlar tek tıkla izin talep eder",
    icon: ClipboardCheck,
  },
  {
    title: "Anlık Onay Bildirimleri",
    description: "Yöneticiler mobilde anında onaylar",
    icon: BellRing,
  },
  {
    title: "Ekip Takvimi",
    description: "Kimin ne zaman izinli olduğunu görün",
    icon: CalendarDays,
  },
  {
    title: "Detaylı Raporlar",
    description: "Departman bazlı izin kullanım analizi",
    icon: FileBarChart2,
  },
] as const;

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Özellikler
          </h2>
          <p className="mt-3 text-zinc-600">
            Ekiplerin izin süreçlerini hızlandıran temel araçlar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <div className="mb-4 inline-flex rounded-lg bg-white p-2.5 text-zinc-700 ring-1 ring-zinc-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
