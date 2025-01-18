import { servicesItems } from '@/constants';

const ServiceItems = () => {
    return servicesItems.map(
        ({ id, title, price, description, features, highlights }) => (
            <div
                key={id}
                className="m-2 p-2 border-4 border-dark rounded-lg basis-1/4"
            >
                <h3 className="text-xl font-bold font-playfair py-2">
                    {title}
                </h3>
                <p className="font-playfair text-2xl py-2 font-bold">{price}</p>
                <p className="font-lato text-lg py-2 border-b-2">
                    {description}
                </p>
                <div className="my-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex mt-2 font-lato">
                            <span className="featured-check"></span>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        ),
    );
};

const Services = () => {
    return (
        <div className="bg-default p-5" id="services">
            <div className="max-w-7xl mx-auto flex flex-col justify-center">
                <h2 className="text-center text-text-secondary text-4xl font-lato">
                    Services
                </h2>
                <div className="flex flex-col lg:flex-row p-5">
                    <ServiceItems />
                </div>
            </div>
        </div>
    );
};

export default Services;
