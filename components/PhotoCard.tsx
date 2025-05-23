import Image from 'next/image';

interface PhotoCardProps {
    image: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ image }) => {
    return (
        <div className="relative overflow-hidden md:h-[300px] md:min-w-[300px] h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center">
            <Image
                src={image}
                alt={image}
                sizes="(max-width: 768px) 200px, (min-width: 769px) 300px"
                fill
                className="object-cover"
            />
        </div>
    );
};

export default PhotoCard;
