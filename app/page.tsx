
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServiceSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { OfficeCard } from '../components/OfficeCard';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <OfficeCard />
      <Footer />
    </main>
  );
}

