import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarketIndexes from '@/components/MarketIndexes';
import MutualFundLogos from '@/components/MutualFundLogos';
import Footer from '@/components/Footer';
import LogoCloud from '@/components/LogoCloud';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MarketIndexes />
        <LogoCloud />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
