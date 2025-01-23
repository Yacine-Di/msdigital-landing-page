import Navbar from '@/components/Navbar/Navbar';
import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import Services from '../sections/Services';
import About from '../sections/About';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Expertise />
            <Services />
            <About />
        </main>
    );
}
