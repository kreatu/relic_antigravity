import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductProps {
    productImages: string[];
}

const Product: React.FC<ProductProps> = ({ productImages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % productImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    return (
        <section className="py-24 bg-[#121212] text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Carousel Side */}
                <div className="relative group">
                    <div className="relative bg-[#1a1a1a] p-8 md:p-12 overflow-hidden aspect-square flex items-center justify-center">
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex}
                                src={productImages[currentIndex]}
                                alt={`Buddha Product Shot ${currentIndex + 1}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full object-contain shadow-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        {productImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-[#D4AF37] transition-all rounded-full backdrop-blur-sm"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-[#D4AF37] transition-all rounded-full backdrop-blur-sm"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Indicators */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {productImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#D4AF37] w-6' : 'bg-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Details Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h3 className="text-3xl font-serif mb-2">Голова Будди</h3>
                        <p className="text-gray-500">Sculpture Edition</p>
                    </div>

                    <div className="space-y-6 text-lg font-light">
                        <div className="flex justify-between border-b border-gray-800 pb-4">
                            <span className="text-gray-400">Матеріал</span>
                            <span>Архітектурний бетон (Висока щільність)</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-4">
                            <span className="text-gray-400">Вага</span>
                            <span>16 кг (Суцільний масив)</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-4">
                            <span className="text-gray-400">Розміри</span>
                            <span>В 30 см | Ш 22 см | Г 27 см</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-4">
                            <span className="text-gray-400">Покриття</span>
                            <span>Ручне зістарювання, патина</span>
                        </div>
                    </div>

                    <a
                        href="https://t.me/bistycrime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
                    >
                        Замовити
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Product;
