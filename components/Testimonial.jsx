import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";

import { fadeInOnScroll } from "@/motion/motionVariants";

const testimonial = [
  {
    name: "Abaddon",
    message: "Service incroyable! C'est exactement ce qu'il me fallait et je ne peux pas être plus heureux avec ces résultats",
  },
  {
    name: "Azrael",
    message: "Merci Thomas! Mon patron sera content de ce suivi",
  },
  {
    name: "Perturabo",
    message: "Outil parfait pour moi! C'est exactement ce qu'il me fallait pour être performant et tout suivre en un coup d'oeil",
  },
  {
    name: "Jagathai Khan",
    message: "Parfait quand on est en déplacement! Design agréable et fluide",
  },
  {
    name: "Sevatar",
    message: "Outil formidable! Gain de temps et productivité amélioré",
  },
  {
    name: "Barabas Dantioch",
    message: "Iron Within, Iron Without",
  },
  {
    name: "Malcador le Sigilith",
    message: "Même l'empereur n'aurait pas pensé à inventer cette outil",
  },
  {
    name: "Juliette Maignan",
    message: "Un outil que j'utilise chaque jour dans mon travail, c'est beau et pratique",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hidden">
        {/* text */}
        <motion.div variants={fadeInOnScroll(0.2, 0.4)} initial="hidden" whileInView="visible">
          <h2 className="h2 mb-6 text-center">Ce que les gens disent</h2>
          <p className="lead text-center mb-24">Ecouter directement des personnes qui ont amélioré leurs efficacités et organisation</p>
        </motion.div>
        {/* card list */}

        <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible" className="flex">
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex">
            {testimonial.map((item, index) => {
              return (
                <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                  <p className="mb-4 text-lg text-white/80">{item.message}</p>
                  <p className="text-xl">{item.name}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex">
            {testimonial.map((item, index) => {
              return (
                <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                  <p className="mb-4 text-lg text-white/80">{item.message}</p>
                  <p className="text-xl">{item.name}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
