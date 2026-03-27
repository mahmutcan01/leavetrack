import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2024 LeaveTrack</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-zinc-900" href="#">
              Gizlilik Politikası
            </a>
            <a className="hover:text-zinc-900" href="#">
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
