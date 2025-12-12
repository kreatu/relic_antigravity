import { motion } from 'framer-motion';

// Texture placeholder - to be replaced
interface ManifestProps {
    textureSrc: string;
}

const Manifest: React.FC<ManifestProps> = ({ textureSrc }) => {
    return (
        <section className="relative py-24 md:py-40 px-6 overflow-hidden bg-[#1a1a1a]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                <img src={textureSrc} alt="Concrete Texture" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Header Removed */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="space-y-8 font-serif text-2xl md:text-4xl leading-relaxed text-gray-200"
                >
                    <p>
                        Ми не створюємо мистецтво. <br className="hidden md:block" />
                        Ми видобуваємо його з пластів часу.
                    </p>
                    <p>
                        Кожна скульптура <span className="text-white italic">rel!c</span> — це ода недосконалості.
                    </p>
                    <p className="text-lg md:text-xl text-gray-400 font-sans font-light max-w-2xl mx-auto mt-12">
                        Важкий, тактильний матеріал, створений вручну, щоб повернути в інтер'єр відчуття заземленості та тиші.
                    </p>
                    <p className="text-base md:text-lg text-[#D4AF37] font-sans tracking-widest uppercase mt-8 border-t border-[#D4AF37]/30 pt-8 inline-block">
                        Це — противага цифровому шуму.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Manifest;
