import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-footer text-white py-6 px-2 text-center lg:flex lg:justify-between">
            <div className="lg:basis-1/3">
                <h2 className="text-xl font-graphik font-bold">SMDesign</h2>
                <p className="font-graphik">
                    Boostez l'image de votre restaurant avec des visuels
                    impactants !
                </p>
            </div>
            <div className="flex justify-center space-x-4 mt-4 lg:basis-1/3">
                <a
                    href="https://www.instagram.com/smdesign76_84/"
                    target="_blank"
                    className="social-icon"
                >
                    <Image
                        src="/assets/instagram.svg"
                        alt="instagram-icon"
                        width={40}
                        height={40}
                    />
                </a>
            </div>

            <p className="text-white font-graphik text-sm mt-4 lg:basis-1/3">
                © 2025 SMDesign. Tous droits réservés.
            </p>
        </footer>
    );
};

export default Footer;
