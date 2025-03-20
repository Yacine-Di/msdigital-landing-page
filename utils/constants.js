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
    " Votre restaurant n'a pas de design moderne ? Il est temps de propulser son image. Avec des photos attrayantes, des vidéos captivantes et des menus actualisés, vous offrirez à vos clients une expérience qui met en valeur la qualité de vos plats.";

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
        price: 'À partir de 590€/mois',
        description:
            'Idéal pour poser les bases et captiver vos clients avec des visuels soignés.',
        available: [
            '5 photos culinaires professionnelles',
            '1 Vidéo courte (15-30 sec)',
            '4 posts réseaux sociaux',
            'Retouches incluses',
            'Formats optimisés pour les réseaux sociaux',
            'Conseils basiques pour la mise en avant sur Instagram',
        ],
        unavailable: [
            'Stories Instagram / Facebook',
            'Rapport et analyse de performances',
            'Réponses aux commentaires et messages privés',
        ],
    },
    {
        id: 2,
        title: 'Classique',
        type: 'classic',
        price: 'À partir de 1190€',
        description:
            'Un pack complet pour attirer plus de clients et valoriser votre restaurant.',
        available: [
            '10 photos culinaires professionnelles',
            '2 Vidéos courtes (15-30 sec)',
            '4 posts réseaux sociaux',
            '2 stories réseaux sociaux par semaine',
            'Retouches incluses',
            'Formats optimisés pour les réseaux sociaux',
            'Conseils basiques pour la mise en avant sur Instagram',
            'Réponses aux commentaires et messages privés',
        ],
        unavailable: ['Rapport et analyse de performances'],
    },
    {
        id: 3,
        title: 'Premium',
        type: 'premium',
        price: 'À partir de 2390€',
        description:
            'La solution parfaite pour booster et améliorer votre image et fidéliser vos clients.',
        available: [
            '20 photos culinaires professionnelles',
            '2 Vidéos courtes (~ 15-30 sec)',
            '1 Vidéo longue (~ 60 sec)',
            '8 posts réseaux sociaux',
            '3 stories réseaux sociaux par semaine',
            'Retouches incluses',
            'Formats optimisés pour les réseaux sociaux',
            'Plan stratégique personnalisé et publications professionnelles',
            'Réponses aux commentaires et messages privés, ',
            'Mise en avant des abonnés',
            'Rapport et analyse de performances',
        ],
        unavailable: [],
    },
    {
        id: 4,
        title: 'Sur mesure',
        type: 'custom',
        price: 'Tarif personnalisé',
        description:
            'Des solutions créatives et adaptées pour répondre à vos besoins spécifiques.',
        available: [
            'Photographie et vidéo personnalisées.',
            'Conception de campagnes uniques.',
            'Création de contenus sur demande.',
        ],
        unavailable: [],
    },
];

export const aboutItems = {
    description:
        'Je suis MSDigital, expert en montage vidéo et photo depuis plus de 6 ans. J’ai eu l’opportunité de collaborer avec des YouTubeurs connus, ainsi que des restaurants et snacks, ce qui m’a permis d’affiner mon regard et mon expertise dans la mise en valeur des marques et des plats. Au-delà de mon métier, je suis passionné par la peinture, une discipline qui nourrit ma créativité et m’inspire au quotidien pour créer du contenu percutant et esthétique.',
    callToAction:
        'Transformons ensemble votre image en une véritable vitrine digitale !',
};

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
        restaurantName: 'Oz Grill',
        text: 'lorem epsLorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestias quaerat soluta excepturi rem totam id cupiditate atque suscipit? Aperiam necessitatibus facere commodi, voluptatum error tenetur illo libero nam earum.',
        rating: 5,
        image: '/assets/goldbeef.jpg',
        location: 'Rouen, France',
        serviceProvided: '',
        date: '01-01-2025',
    },
];
