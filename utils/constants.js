export const navLinks = [
    {
        id: 1,
        name: 'Accueil',
        href: '#home',
    },
    {
        id: 2,
        name: 'Expertise',
        href: '#expertise',
    },
    {
        id: 3,
        name: 'Services',
        href: '#services',
    },
    {
        id: 4,
        name: 'À propos',
        href: '#about',
    },
    {
        id: 5,
        name: 'Témoignages',
        href: '#reviews',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 7,
        name: 'FAQ',
        href: '#faq',
    },
];

export const expertiseSubtitle =
    " Votre restaurant n'a pas de design moderne ? Il est temps de propulser son image. Avec des photos attrayantes, des vidéos captivantes et des menus actualisés, vous offrirez à vos clients une expérience qui met en valeur l'ambiance et la qualité de vos plats.";

export const expertiseItems = [
    {
        id: 1,
        icon: '/assets/photo.svg',
        alt: 'photo-icon',
        title: 'Des photos et vidéos engageantes pour valoriser vos plats.',
        text: 'Je mets en valeur vos plats avec des concepts originaux et des rendus vidéos et photos de qualité.',
    },
    {
        id: 2,
        icon: '/assets/handshake.svg',
        alt: 'handshake-icon',
        title: 'Un processus collaboratif pour des résultats sur mesure.',
        text: "J'échange avec vous pour comprendre vos besoins puis je conçois des visuels percutants qui mettent en valeur votre identité",
    },
    {
        id: 3,
        icon: '/assets/map.svg',
        alt: 'map-icon',
        title: 'Un déplacement sur site pour un service unique.',
        text: 'Je me déplace dans votre restaurant pour mettre en valeur vos produits pour produire une solution unique',
    },
];

export const servicesItems = [
    {
        id: 1,
        title: 'Starter',
        type: 'starter',
        price: 'À partir de 499€',
        description:
            'Idéal pour poser les bases et captiver vos clients avec des visuels soignés.',
        features: [
            '5 photos culinaires professionnelles',
            'Retouches incluses',
            'Formats optimisés pour les réseaux sociaux',
            'Livraison rapide sous 5 jours',
            'Conseils basiques pour la mise en avant sur Instagram',
        ],
    },
    {
        id: 2,
        title: 'Avancé',
        type: 'advanced',
        price: 'À partir de 1199€',
        description:
            'Un pack complet pour attirer plus de clients et valoriser votre restaurant.',
        features: [
            '10 photos culinaires professionnelles',
            '1 vidéo promotionnelle (30 secondes)',
            'Retouches incluses',
            'Livraison sous 2 semaines',
            'Création de posts et stories prêts à publier',
            'Mini-guide pour booster l’engagement sur vos réseaux',
        ],
    },
    {
        id: 3,
        title: 'Premium',
        type: 'premium',
        price: 'À partir de 1999€',
        description:
            'La solution parfaite pour améliorer votre image et fidéliser vos clients.',
        features: [
            '25 photos culinaires professionnelles.',
            '1 vidéo immersive (1 minute).',
            'Refonte complète de votre menu.',
            'Refonte de menus (design inclus)',
            'Déplacement sur site',
            'Livraison sous 3 semaines',
            'Création d’un mini-clip pour vos campagnes publicitaires',
            'Conseils en branding pour améliorer votre image de marque',
            'Planification d’un calendrier de publication pour vos réseaux sociaux',
        ],
    },
    {
        id: 4,
        title: 'Sur mesure',
        type: 'custom',
        price: 'Tarif personnalisé',
        description:
            'Des solutions créatives et adaptées pour répondre à vos besoins spécifiques.',
        features: [
            'Photographie et vidéo personnalisées.',
            'Conception de campagnes uniques.',
            'Création de contenus sur demande.',
        ],
    },
];

export const reviewItems = [
    {
        id: 1,
        restaurantName: 'Hom Resto',
        text: 'lorem epsLorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestias quaerat soluta excepturi rem totam id cupiditate atque suscipit? Aperiam necessitatibus facere commodi, voluptatum error tenetur illo libero nam earum.',
        rating: 5,
        image: '/assets/homresto.png',
        location: 'Rouen, France',
        serviceProvided: '',
        date: '01-01-2025',
    },
    {
        id: 2,
        restaurantName: 'Gold Beef',
        text: 'lorem epsLorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestias quaerat soluta excepturi rem totam id cupiditate atque suscipit? Aperiam necessitatibus facere commodi, voluptatum error tenetur illo libero nam earum.',
        rating: 5,
        image: '/assets/goldbeef.jpg',
        location: 'Rouen, France',
        serviceProvided: '',
        date: '01-01-2025',
    },
    {
        id: 3,
        restaurantName: 'Smashed',
        text: 'Encore une fois parfait, on est écouté et conseillé du début à la fin et il n’hésite pas à faire des retouches jusqu’à ce que le résultat soit parfait ! Pas la première ni la dernière collaboration !',
        rating: 5,
        image: '/assets/smashed.png',
        location: 'Rouen, France',
        serviceProvided: 'Sur mesure',
        date: '01-01-2025',
    },
    {
        id: 4,
        restaurantName: 'Gold Beef',
        text: 'lorem epsLorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestias quaerat soluta excepturi rem totam id cupiditate atque suscipit? Aperiam necessitatibus facere commodi, voluptatum error tenetur illo libero nam earum.',
        rating: 5,
        image: '/assets/goldbeef.jpg',
        location: 'Rouen, France',
        serviceProvided: '',
        date: '01-01-2025',
    },
];
