import { useState } from 'react';
import { servicesItems } from '@/utils/constants';

const SelectComponent = ({
    selectedService,
    setSelectedService,
}: {
    selectedService: string | null;
    setSelectedService: (service: string) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Gère le clic sur un service
    const handleSelect = (service: string) => {
        setSelectedService(service);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="input-text bg-white flex justify-between items-center cursor-pointer"
            >
                {selectedService
                    ? servicesItems.find((s) => s.type === selectedService)
                          ?.title
                    : 'Sélectionner un service'}
                <img
                    src="/assets/arrow-collapse.png"
                    alt="arrow-collapse"
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <ul
                className="absolute top-full left-0 mt-2 w-full bg-white border rounded-md shadow-md transform origin-top scale-y-0 transition-transform duration-300 ease-in-out"
                style={{ transform: isOpen ? 'scaleY(1)' : 'scaleY(0)' }}
            >
                {servicesItems.map((service) => (
                    <li
                        key={service.id}
                        onClick={() => handleSelect(service.type)}
                        className="input-text cursor-pointer hover:bg-gray-100"
                    >
                        {service.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectComponent;
