import { motion } from 'framer-motion';

// Placeholder for the hero image - will use the generated one
// Assuming we will move the generated image to src/assets later, or import by URL for now if needed.
// For now, I'll use a placeholder variable that the user can replace or I will wire up.

interface HeroProps {
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end pb-20 md:pb-32 px-6 md:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt="Bronze Buddha Head Sculpture" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-wide mb-4">
            rel!c
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
            Interior Sculpture Art
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 md:mt-0 max-w-sm text-right md:text-right"
        >
          <p className="text-[#D4AF37] italic font-serif text-lg md:text-xl">
            "Wabi-sabi aesthetics for modern spaces."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
