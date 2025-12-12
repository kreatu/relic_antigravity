import { motion } from 'framer-motion';

const Partners: React.FC = () => {
    return (
        <section className="py-24 bg-black text-white relative border-t border-gray-900">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-sans tracking-[0.2em] uppercase mb-4">For Partners</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Ми відкриті до співпраці з дизайнерами та комплектаторами.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Special Conditions", desc: "Партнерська знижка — 20% (або індивідуальні умови)." },
                        { title: "Rental", desc: "Безкоштовна оренда декору для ваших фотосесій та стилізації об'єктів." },
                        { title: "Customization", desc: "Можливість тонування скульптури під палітру вашого проекту." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="border border-gray-800 p-8 hover:border-[#D4AF37] transition-colors duration-500 group"
                        >
                            <div className="w-2 h-2 bg-[#D4AF37] mb-6 rounded-full group-hover:scale-150 transition-transform" />
                            <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
