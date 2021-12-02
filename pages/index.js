import CarouselGallery from '../components/carousel-gallery.js';
import Head from 'next/head'

import Hero from '../components/hero';
import Features from '../components/features';
import Team from '../components/team';
import CTA from '../components/cta';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Fredi.wtf - Demo Page</title>
      </Head>
      <Hero />
      <Features />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
