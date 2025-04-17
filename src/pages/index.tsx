import Head from 'next/head';
import Script from 'next/script';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Diferenciais from '@/components/Diferenciais';
import ComoFunciona from '@/components/ComoFunciona';
import Destinos from '@/components/Destinos';
import CuradoriaHumana from '@/components/CuradoriaHumana';
import ProvasSociais from '@/components/ProvasSociais';
import ChamadaFinal from '@/components/ChamadaFinal';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomade Guru</title>
        <meta name="description" content="Viaje com propósito, viva com liberdade." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HY9T63HTNN" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HY9T63HTNN');
        `}
      </Script>

      <Header />

      <main className="pt-[100px]">
	
        <HeroSection />
        <Diferenciais />
        <ComoFunciona />
        <Destinos />
        <CuradoriaHumana />
        <ProvasSociais />
        <ChamadaFinal />
        <NewsletterForm />
        <Footer />
      </main>
    </>
  );
}
