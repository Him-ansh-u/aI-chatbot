import AboutSection from '@/component/AboutSection';
import BuiltFor from '@/component/BuiltFor';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import HeroSection from '@/component/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <BuiltFor />
      <Footer />
    </div>
  );
}
