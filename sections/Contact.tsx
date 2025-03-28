'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SelectComponent from '@/components/SelectComponent';

interface ContactProps {
    selectedService: string | null;
    setSelectedService: (service: string) => void;
}

const Contact: React.FC<ContactProps> = ({
    selectedService,
    setSelectedService,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        service: '',
    });

    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => {
                setStatusMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [statusMessage]);

    useEffect(() => {
        if (selectedService) {
            setForm((prev) => ({ ...prev, service: selectedService }));
        }
    }, [selectedService]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const checkIfServiceIsSelected = (): boolean => {
        console.log(form.service);

        if (!form.service) {
            setStatusMessage({
                type: 'error',
                message: 'Veuillez sélectionner un service.',
            });
            setIsLoading(false);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage(null);

        if (!checkIfServiceIsSelected()) {
            setIsLoading(false);
            return;
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: form.name,
                    to_name: 'MSDigital',
                    reply_to: form.email,
                    to_email: 'yacineddev@gmail.com',
                    message: form.message,
                    selected_service: form.service,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );

            setStatusMessage({
                type: 'success',
                message: 'Votre message a bien été envoyé !',
            });
            setIsLoading(false);
            setForm({
                name: '',
                email: '',
                message: '',
                service: '',
            });
        } catch (error) {
            console.log(error);
            setStatusMessage({
                type: 'error',
                message: 'Une erreur est survenue. Veuillez réessayer.',
            });
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            className="bg-gradient-to-b from-white to-black p-5 scroll-mt-16 md:scroll-mt-20"
            id="contact"
        >
            <div className="max-w-xl mx-auto">
                <h2 className="text-center py-2 text-4xl font-graphik font-bold">
                    Discutons
                </h2>
                <p className="text-center font-bold text-text-secondary font-graphik text-2xl py-4">
                    Que vous ayez une idée de projet, une demande de devis ou
                    une question, je vous réponds rapidement.
                </p>
                <div className=" mx-auto md:p-5">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-7"
                    >
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">Nom ou Société</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Mon restaurant"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="input-text"
                            />
                        </label>
                        <label htmlFor="email" className="space-y-3 ">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="monrestaurant@gmail.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="input-text"
                            />
                        </label>
                        <label htmlFor="service" className="space-y-3">
                            <span className="field-label">Service</span>
                            <SelectComponent
                                selectedService={selectedService}
                                setSelectedService={setSelectedService}
                                setFormService={(service: string) =>
                                    setForm({ ...form, service })
                                }
                            />
                        </label>
                        <label htmlFor="message" className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                placeholder="Ici je fais ma demande au meilleur designer de France"
                                required
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                className="input-text"
                            ></textarea>
                        </label>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center font-graphik font-bold text-lg text-white px-5 py-2 gap-3 mx-auto min-h-12 text-center bg-blue-500 hover:bg-blue-400 rounded-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow"
                                className="w-2.5 h-2.5 object-contain invert brightness-0"
                            />
                        </button>
                    </form>
                </div>
            </div>
            {statusMessage && (
                <div
                    className={`max-w-[90%] whitespace-nowrap fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white rounded-lg transition-opacity duration-500 ${
                        statusMessage.type === 'success'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                    }`}
                >
                    {statusMessage.message}
                </div>
            )}
        </section>
    );
};

export default Contact;
