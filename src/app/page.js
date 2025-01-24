
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="w-full">
        <Header />
        <Hero/>
        {/* All departments */}
        {/* All categories search bar */}
        {/* phone contact */}
        {/* header  */}
      </main>
      <Footer />
    </div>
  );
}
