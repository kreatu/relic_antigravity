import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InSituProps {
    horizontalImages: string[];
    verticalImages: string[];
}

const InSitu: React.FC<InSituProps> = ({ horizontalImages, verticalImages }) => {
    const [hIndex, setHIndex] = useState(0);
    const [vIndex, setVIndex] = useState(0);

    const nextH = () => setHIndex((prev) => (prev + 1) % horizontalImages.length);
    const prevH = () => setHIndex((prev) => (prev - 1 + horizontalImages.length) % horizontalImages.length);

    const nextV = () => setVIndex((prev) => (prev + 1) % verticalImages.length);
    const prevV = () => setVIndex((prev) => (prev - 1 + verticalImages.length) % verticalImages.length);

    return (
        <section className="py-24 bg-[#1E1E1E] overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-8 md:items-end mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white"
                    >
                        В ІНТЕР'ЄРІ
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:border-l md:border-gray-700 md:pl-8 text-gray-400 max-w-md"
                    >
                        <p className="mb-2">Ідеально для стилів:</p>
                        <ul className="flex flex-wrap gap-4 text-[#D4AF37]">
                            <li>Japandi</li>
                            <li>Loft</li>
                            <li>Brutalism</li>
                            <li>Dark Minimalism</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Gallery Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Vertical Slider */}
                    <div className="md:col-span-4 lg:col-span-5 relative group">
                        <div className="h-[600px] relative overflow-hidden bg-black/20">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={vIndex}
                                    src={verticalImages[vIndex]}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </AnimatePresence>

                            {/* V-Nav */}
                            {verticalImages.length > 1 && (
                                <>
                                    <button onClick={prevV} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-[#D4AF37] text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button onClick={nextV} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-[#D4AF37] text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Horizontal Slider + Text */}
                    <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
                        <div className="w-full aspect-video relative group overflow-hidden bg-black/20">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={hIndex}
                                    src={horizontalImages[hIndex]}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </AnimatePresence>
                            <div className="absolute bottom-6 left-6 text-white text-sm tracking-[0.2em] uppercase opacity-80 bg-black/50 px-4 py-2 z-10">
                                Visual Focal Point
                            </div>

                            {/* H-Nav */}
                            {horizontalImages.length > 1 && (
                                <>
                                    <button onClick={prevH} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-[#D4AF37] text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all z-20">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button onClick={nextH} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-[#D4AF37] text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all z-20">
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </div>

                        <p className="text-gray-500 font-light text-sm italic border-l-2 border-[#D4AF37] pl-4">
                            Створює візуальний центр тяжіння (focal point) у будь-якому просторі.
                            Додає характеру та глибини мінімалістичним інтер'єрам.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InSitu;
