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
        console.log(service);

        document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return servicesItems.map(
        ({ id, title, type, price, description, available, unavailable }) => (
            <motion.div
                key={id}
                className={`child ${id === 2 ? ' bg-blue-600' : 'bg-neutral-700'} m-2 p-2 text-white rounded-lg basis-1/4`}
                variants={fadeInUp}
            >
                <h3 className="text-xl font-bold font-roboto py-2 text-center">
                    {title}
                </h3>
                <p className="font-roboto text-3xl py-2 text-center">
                    {id === 4 ? (
                        <span className="font-bold">{price}</span>
                    ) : (
                        <>
                            <span className="font-bold">{price}</span>{' '}
                            <span className="font-medium">/mois</span>
                        </>
                    )}
                </p>
                <p className="font-roboto text-lg py-4 mb-2 text-center">
                    {description}
                </p>
                <div className=" w-full flex items-center justify-center border-y-2 border-white p-2">
                    <button
                        className={`${id === 2 ? 'bg-white hover:bg-white/90 text-black' : 'bg-blue-600 hover:bg-blue-600/80 text-white'} font-semibold font-roboto text-lg w-3/4  py-2 mx-auto rounded-lg`}
                        onClick={() => handleServiceClick(type)}
                    >
                        Contactez-moi
                    </button>
                </div>
                <div className="my-4">
                    <ul>
                        {available.map((feature, index) => (
                            <li key={index} className="flex mt-2 font-roboto">
                                <div className="w-[16px] h-[16px] flex flex-none translate-y-[6px]">
                                    <Image
                                        src="/assets/check.svg"
                                        alt="check-icon"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div className="font-medium pl-2">
                                    {feature}
                                </div>
                            </li>
                        ))}
                        {unavailable.map((feature, index) => (
                            <li key={index} className="flex mt-2 font-roboto">
                                <div className="w-[16px] h-[16px] flex flex-none translate-y-[6px]">
                                    <Image
                                        src="/assets/red-cross.svg"
                                        alt="cross-icon"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div className="font-medium pl-2">
                                    {feature}
                                </div>
                            </li>
                        ))}
                    </ul>
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
                        <h2 className="text-center py-2 text-white text-4xl font-roboto font-bold">
                            Services
                        </h2>
                        <motion.div
                            className="flex flex-col lg:flex-row md:p-5"
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
                <div
                    className="p-5 scroll-mt-16 md:scroll-mt-20 bg-neutral-900"
                    id="services"
                >
                    <div className="max-w-7xl mx-auto flex flex-col justify-center">
                        <h2 className="text-center py-2 text-white text-4xl font-roboto font-bold">
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
