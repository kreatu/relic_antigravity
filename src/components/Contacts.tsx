import { motion } from 'framer-motion';
import { Instagram, Send, Mail } from 'lucide-react';
import portraitImg from '../assets/portrait.JPG';

const Contacts: React.FC = () => {
    return (
        <section className="py-24 bg-[#121212] text-white">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-32 h-32 md:w-48 md:h-48 bg-gray-800 rounded-full mb-8 overflow-hidden border-2 border-[#333]"
                >
                    <img
                        src={portraitImg}
                        alt="Master Portrait"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-serif mb-2">Relic Ston Workshop</h2>
                    <p className="text-gray-500 mb-8 flex items-center justify-center gap-2">
                        Based in Odesa, Ukraine <span className="text-xl">🇺🇦</span>
                    </p>

                    <div className="flex gap-4 justify-center mb-12">
                        <a href="https://instagram.com/relic_ston" target="_blank" rel="noopener noreferrer"
                            className="p-4 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all group"
                            aria-label="Instagram">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://t.me/bistycrime" target="_blank" rel="noopener noreferrer"
                            className="p-4 border border-gray-700 rounded-full hover:bg-[#0088cc] hover:border-[#0088cc] hover:text-white transition-all"
                            aria-label="Telegram">
                            <Send className="w-6 h-6" />
                        </a>
                        <a href="mailto:stonrelic@gmail.com" className="p-4 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all"
                            aria-label="Email">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    <p className="text-[#D4AF37] text-sm tracking-[0.2em] opacity-50 uppercase">
                        © 2025 Relic. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacts;
