import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$29/ay",
    description: "25 çalışana kadar, temel özellikler",
    cta: "Başla",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79/ay",
    description: "100 çalışana kadar, tüm özellikler + raporlar",
    cta: "Başla",
    highlighted: true,
    badge: "En Popüler",
  },
  {
    name: "Enterprise",
    price: "Görüşme",
    description: "Sınırsız, özel entegrasyon",
    cta: "İletişime Geç",
    highlighted: false,
  },
] as const;

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Fiyatlandırma
          </h2>
          <p className="mt-3 text-zinc-600">
            Takım büyüklüğüne göre esnek planlar.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative rounded-xl border bg-white p-6",
                plan.highlighted ? "border-zinc-900 shadow-sm" : "border-zinc-200"
              )}
            >
              {plan.badge ? (
                <span className="absolute -top-3 right-4 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                  {plan.badge}
                </span>
              ) : null}

              <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
                {plan.price}
              </p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-600">
                {plan.description}
              </p>

              <Button
                className="mt-6 w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
