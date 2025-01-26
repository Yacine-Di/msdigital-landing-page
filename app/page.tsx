import Navbar from '@/components/Navbar/Navbar';
import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import Services from '../sections/Services';
import About from '../sections/About';
import Reviews from '@/sections/Reviews';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Expertise />
            <Services />
            <About />
            <Reviews />
        </main>
    );
}
