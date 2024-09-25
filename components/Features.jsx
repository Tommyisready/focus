"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const featuresData = [
  {
    imgSrc: "/features/img-1.svg",
    title: "Gestion intelligente des tâches",
    description: "Organise et priorise les tâches sans effort",
    highlights: ["définir des dates d'échéance et des rappels", "Suit les progrès et les jalons", "trier facilement les tâches par priorité"],
  },
  {
    imgSrc: "/features/img-2.svg",
    title: "Collaboration",
    description: "Collabore avec ton équipe en temps réel.",
    highlights: ["définir des dates d'échéance et des rappels", "Suit les progrès et les jalons", "trier facilement les tâches par priorité"],
  },
  {
    imgSrc: "/features/img-3.svg",
    title: "Analyses avancées",
    description: "Obtenez des informations pour augmenter votre productivité.",
    highlights: ["définir des dates d'échéance et des rappels", "Suit les progrès et les jalons", "trier facilement les tâches par priorité"],
  },
  {
    imgSrc: "/features/img-4.svg",
    title: "Customiser son espace de travail",
    description: "Personnalise ton espace de travail avec un maximum d'efficience.",
    highlights: ["définir des dates d'échéance et des rappels", "Suit les progrès et les jalons", "trier facilement les tâches par priorité"],
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className="text-white pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          {/* img */}
          <motion.div
            key={featuresData[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }}
            className="hidden xl:flex justify-center flex-1 w-full h-[480px] sticky top-[calc(50%-240px)]"
          >
            <div className="relative w-full h-full">
              <Image src={featuresData[imgIndex].imgSrc} fill alt="" className="h-full object-contain" />
            </div>
          </motion.div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-24">
            {featuresData.map((item, itemIndex) => {
              return (
                <motion.div
                  onViewportEnter={() => setIndex(itemIndex)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  key={itemIndex}
                  className="w-full h-auto xl:h-[480px] flex items-center"
                >
                  <div className="w-[89vw] xl:w-auto mx-auto xl:mx-0">
                    <h2 className="h2 mb-4">{item.title}</h2>
                    <p className="lead mb-8">{item.description}</p>
                    {/* highlight */}
                    <div className="flex flex-col gap-5">
                      {item.highlights.map((highlight, index) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <FaRegCheckCircle className="text-accent_secondary text-2xl" />
                            <p>{highlight}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
