import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";
import Button from "./Button";

// components
import ButtonTertiary from "./ButtonTertiary";

const Trial = () => {
  return (
    <section className="xl:mb-32 w-full">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondary to-accent h-full flex items-center xl:rounded-2xl"
      >
        <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:px-24">
          <div>
            {/* text */}
            <div className="text-center mb-12 xl:mb-0 xl:text-left">
              <h2 className="text-[40px] leading-tight font-bold mb-2">Commencez votre essaie de 30 jours gratuit</h2>
              <p className="lead max-w-[400px] xl:max-w-[560px] mx-auto xl:mx-0">
                Expérimentez la pleine puissance de notre plateforme avec 30 jours d'essaie gratuit. Pas de carte de crédit requit.'
              </p>
            </div>
          </div>
          {/* btn */}
          <ButtonTertiary btnText="Essayez-moi" />
        </div>
      </motion.div>
    </section>
  );
};

export default Trial;
