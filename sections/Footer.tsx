const Footer = () => {
    return (
        <footer className="bg-footer text-white py-6 px-2 text-center lg:flex lg:justify-between">
            <div className="lg:basis-1/3">
                <h2 className="text-xl font-lato font-bold">MSDigital</h2>
                <p className="font-lato">
                    Boostez l'image de votre restaurant avec des visuels
                    impactants !
                </p>
            </div>
            <div className="flex justify-center space-x-4 mt-4 lg:basis-1/3">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    className="social-icon"
                >
                    <img
                        src="/assets/instagram.svg"
                        alt="instagram-icon"
                        className=""
                    />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    className="social-icon"
                >
                    <img
                        src="/assets/youtube.svg"
                        alt="youtube-icon"
                        className=""
                    />
                </a>
            </div>

            <p className="text-white font-lato text-sm mt-4 lg:basis-1/3">
                © 2025 MSDigital. Tous droits réservés.
            </p>
        </footer>
    );
};

export default Footer;
