'use client';

import { fadeInUp, staggered } from '@/utils/animations';
import { servicesItems } from '@/utils/constants';
import useIsClient from '@/utils/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface ServiceItemProps {
    setSelectedService: (service: string) => void;
}

const ServiceItems: React.FC<ServiceItemProps> = ({ setSelectedService }) => {
    const handleServiceClick = (service: string) => {
        setSelectedService(service);

        document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return servicesItems.map(
        ({ id, title, type, price, description, available, unavailable }) => (
            <motion.div
                key={id}
                className={`child ${id === 2 ? ' bg-blue-600' : 'bg-neutral-700'} m-2 p-2  text-white rounded-lg basis-1/4`}
                variants={fadeInUp}
            >
                <h3 className="text-xl font-bold font-playfair py-2">
                    {title}
                </h3>
                <p className="font-playfair text-2xl py-2 font-bold">{price}</p>
                <p className="font-lato text-lg py-2 border-b-2 border-white">
                    {description}
                </p>
                <div className=" w-full flex items-center justify-center border-b-2 border-white p-2">
                    <button
                        className="text-text-footer font-lato text-lg w-3/4 bg-footer py-2 mx-auto rounded-lg"
                        onClick={() => handleServiceClick(type)}
                    >
                        Contactez-moi
                    </button>
                </div>
                <div className="my-4">
                    {available.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 mt-2 "
                        >
                            <Image
                                src="/assets/check.svg"
                                alt="check-icon"
                                width={16}
                                height={16}
                            />
                            <span>{feature}</span>
                        </div>
                    ))}
                    {unavailable.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 mt-2 "
                        >
                            <Image
                                src="/assets/red-cross.svg"
                                alt="cross-icon"
                                width={16}
                                height={16}
                            />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        ),
    );
};

const Services = ({
    setSelectedService,
}: {
    setSelectedService: (service: string) => void;
}) => {
    const isClient = useIsClient();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            {isClient ? (
                <motion.div
                    className="p-5 scroll-mt-16 md:scroll-mt-20 bg-neutral-900"
                    id="services"
                >
                    <div className="max-w-7xl mx-auto flex flex-col justify-center">
                        <h2 className="text-center py-2 text-white text-4xl font-lato font-bold">
                            Services
                        </h2>
                        <motion.div
                            className="flex flex-col lg:flex-row p-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: isMobile ? 0.1 : 0.3,
                            }}
                            variants={staggered}
                        >
                            <ServiceItems
                                setSelectedService={setSelectedService}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                <div className="p-5" id="services">
                    <div className="max-w-7xl mx-auto flex flex-col justify-center">
                        <h2 className="text-center text-text-secondary text-4xl font-lato font-bold">
                            Services
                        </h2>
                        <div className="flex flex-col lg:flex-row p-5">
                            <ServiceItems
                                setSelectedService={setSelectedService}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Services;
