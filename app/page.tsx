'use client';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import Services from '../sections/Services';
import About from '../sections/About';
import Reviews from '@/sections/Reviews';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import { useState } from 'react';
export default function Home() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    return (
        <main>
            <Navbar />
            <Hero />
            <Expertise />
            <Services setSelectedService={setSelectedService} />
            <About />
            <Reviews />
            <Contact
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />
            <Footer />
        </main>
    );
}
