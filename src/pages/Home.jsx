import useHashScroll from '../hooks/useHashScroll';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import ProductCategories from '../components/ProductCategories/ProductCategories';
import Industries from '../components/Industries/Industries';
import PakistanChinaComparison from '../components/PakistanChina/PakistanChinaComparison';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import GlobalNetwork from '../components/GlobalNetwork/GlobalNetwork';
import WhySynvora from '../components/WhySynvora/WhySynvora';
import Leadership from '../components/Leadership/Leadership';
import CTA from '../components/CTA/CTA';

export default function Home() {
  useHashScroll();

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <ProductCategories />
      <Industries />
      <PakistanChinaComparison />
      <HowWeWork />
      <GlobalNetwork />
      <WhySynvora />
      <Leadership />
      <CTA />
    </>
  );
}
