import { animate, useMotionValue, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import useMeasure from 'react-use-measure';
import PhotoCard from '@/components/PhotoCard';

interface ScrollingCarouselProps {
    direction: string;
    photosExample: string[];
}

const ScrollingCarousel: React.FC<ScrollingCarouselProps> = ({
    direction = 'ltr',
    photosExample,
}) => {
    const [ref, { width }] = useMeasure();
    const XTranslation = useMotionValue(0);
    const FAST_DURATION = 35;
    const SLOW_DURATION = 75;
    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    const isLeftToRight = useMemo(() => direction === 'ltr', [direction]);

    useEffect(() => {
        if (!width) return;

        let controls;
        let startPosition, finalPosition;

        if (isLeftToRight) {
            // Direction gauche à droite: commence à -width et va vers 0
            startPosition = -width / 2 - 8;
            finalPosition = 0;
        } else {
            // Direction droite à gauche: commence à width et va vers 0
            startPosition = 0;
            finalPosition = -width / 2 - 8;
        }

        if (mustFinish) {
            const currentPosition = XTranslation.get();
            const remainingDistance = Math.abs(finalPosition - currentPosition);
            const totalDistance = Math.abs(finalPosition - startPosition);
            const remainingDurationFactor = remainingDistance / totalDistance;

            controls = animate(XTranslation, [currentPosition, finalPosition], {
                ease: 'linear',
                duration: duration * remainingDurationFactor,
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(XTranslation, [startPosition, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }
        return controls?.stop;
    }, [XTranslation, width, duration, mustFinish, rerender, isLeftToRight]);

    return (
        <div className="relative w-full overflow-hidden py-10">
            <motion.div
                className="flex my-4 gap-4 w-max"
                ref={ref}
                style={{ x: XTranslation }}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...photosExample, ...photosExample].map((photo, index) => (
                    <PhotoCard key={index} image={photo} />
                ))}
            </motion.div>
        </div>
    );
};

export default ScrollingCarousel;
