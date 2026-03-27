import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          Çalışan izinlerini dakikalar içinde yönetin
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
          İzin talepleri, onaylar ve takvim — hepsi tek platformda. Manuel
          e-postalar ve Excel tablolarına son.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg">Ücretsiz Başla</Button>
          <Button variant="outline" size="lg">
            Demo İzle
          </Button>
        </div>

        <p className="mt-5 text-sm text-zinc-500">
          500+ şirket kullanıyor · Kredi kartı gerekmez
        </p>
      </div>
    </section>
  );
}
