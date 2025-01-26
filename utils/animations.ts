import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1 } },
};
