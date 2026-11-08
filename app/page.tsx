
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import BrandHero from '../components/BrandHero';
import ContactSection from '../components/ContactSection';
import StoreInfoSection from '../components/StoreInfoSection';
import FindUsCard from '../components/FindUsCard';
import Footer from '../components/Footer';
import ShareModal from '../components/ShareModal';

export default function HomePage() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3ED] text-[#191919] selection:bg-[#761D32] selection:text-[#F7F3ED]">
      <Header onOpenShare={() => setIsShareOpen(true)} />

      <main className="flex-1">
        <BrandHero />
        <ContactSection />
        <StoreInfoSection />
        <FindUsCard />
      </main>

      <Footer />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
