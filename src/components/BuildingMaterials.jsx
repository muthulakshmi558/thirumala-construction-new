import { motion } from "motion/react";
import { Link } from "react-router-dom";

import mSandImg from "../assets/msand.png";
import pSandImg from "../assets/psand.png";
import riverSandImg from "../assets/riversand.png";
import cementImg from "../assets/cement.png";
import redBricksImg from "../assets/red_bricks.png";
import AACBlockImg from "../assets/aac_block.png";
import interlockImg from "../assets/interlock_mud_bricks.png";
import JalliImg from "../assets/jalli.png";
import QuarryImg from "../assets/quarry_stone.png";
import gravelImg from "../assets/gravel.png";


const materials = [
  {
    id: "m-sand",
    title: "M Sand",
    image: mSandImg,
    accent: "pink",
  },
  {
    id: "p-sand",
    title: "P Sand",
    image: pSandImg,
    accent: "cyan",
  },
  {
    id: "river-sand",
    title: "River Sand",
    image: riverSandImg,
    accent: "pink",
  },
  {
    id: "cement",
    title: "Cement",
    image: cementImg,
    accent: "cyan",
  },
  {
    id: "red-bricks",
    title: "Red Bricks",
    image: redBricksImg,
    accent: "pink",
  },
  {
    id: "aac-block",
    title: "AAC Block",
    image: AACBlockImg,
    accent: "cyan",
  },
  {
    id: "interlock-mud-bricks",
    title: "Interlock Mud Bricks",
    image: interlockImg,
    accent: "pink",
  },
  {
    id: "jalli",
    title: "Jalli",
    image: JalliImg,
    accent: "cyan",
  },
  {
    id: "quarry-stone",
    title: "Quarry Stone",
    image: QuarryImg,
    accent: "pink",
  },
  {
    id: "gravel",
    title: "Gravel",
    image: gravelImg,
    accent: "cyan",
  },
];

function BuildingMaterials() {
  return (
    <section
      id="materials"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Background Decorations */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-pink-500" />

            <p className="text-sm font-bold tracking-[0.22em] text-pink-500">
              OUR RANGE
            </p>

            <span className="h-[2px] w-10 bg-cyan-400" />
          </div>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-gray-900
              md:text-5xl
              lg:text-6xl
            "
          >
            Building{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Materials
            </span>
          </h2>

          <div className="mx-auto mt-5 flex w-fit">
            <span className="h-[3px] w-12 rounded-l-full bg-pink-500" />

            <span className="h-[3px] w-12 rounded-r-full bg-cyan-400" />
          </div>
        </motion.div>

        {/* Materials Grid */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-6xl
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {materials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
                ease: "easeOut",
              }}
              className={index === 9 ? "lg:col-start-2" : ""}
            >
              <MaterialCard item={item} index={index} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12 text-center"
        >
          <Link
            to="/#contact"
            className="
              group
              relative
              inline-flex
              overflow-hidden
              rounded-xl
              p-[1px]
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-pink-500
                to-cyan-400
              "
            />

            {/* <span
              className="
                relative
                rounded-[11px]
                bg-white
                px-8
                py-3.5
                text-base
                font-bold
                text-gray-900
                transition-all
                duration-300
                group-hover:bg-transparent
                group-hover:text-white
              "
            >
              View All Materials
            </span> */}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function MaterialCard({ item, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={`/building-materials/${item.id}`}
      className="group block h-full"
    >
      <motion.div
        whileHover={{
          y: -10,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          h-full
          overflow-hidden
          rounded-[26px]
          bg-white
          p-2
          shadow-[0_15px_45px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
          group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.18)]
        "
      >
        {/* Image Container */}

        <div
          className="
            relative
            h-[270px]
            overflow-hidden
            rounded-[20px]
            sm:h-[300px]
            lg:h-[320px]
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[900ms]
              ease-out
              group-hover:scale-110
            "
          />

          {/* Light Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/10
            "
          />

          {/* Pink / Cyan Hover Light */}

          <div
            className={`
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              opacity-0
              blur-3xl
              transition-all
              duration-700
              group-hover:right-0
              group-hover:top-0
              group-hover:opacity-30
              ${
                item.accent === "pink"
                  ? "bg-pink-500"
                  : "bg-cyan-400"
              }
            `}
          />

          {/* Card Number */}

          <div
            className={`
              absolute
              left-4
              top-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/95
              text-sm
              font-black
              shadow-lg
              backdrop-blur
              ${
                item.accent === "pink"
                  ? "text-pink-500"
                  : "text-cyan-500"
              }
            `}
          >
            {number}
          </div>
        </div>

        {/* Material Title */}

        <div className="relative px-4 pb-5 pt-5">
          <h3
            className="
              text-center
              text-xl
              font-black
              text-gray-900
              transition-all
              duration-300
              group-hover:-translate-y-1
              md:text-2xl
            "
          >
            {item.title}
          </h3>

          {/* Animated Title Line */}

          <div
            className={`
              mx-auto
              mt-3
              h-[3px]
              w-8
              rounded-full
              transition-all
              duration-500
              group-hover:w-20
              ${
                item.accent === "pink"
                  ? "bg-pink-500"
                  : "bg-cyan-400"
              }
            `}
          />
        </div>

        {/* Animated Bottom Border */}

        <div
          className={`
            absolute
            bottom-0
            left-1/2
            h-[3px]
            w-0
            -translate-x-1/2
            rounded-full
            transition-all
            duration-500
            group-hover:w-[75%]
            ${
              item.accent === "pink"
                ? "bg-pink-500"
                : "bg-cyan-400"
            }
          `}
        />
      </motion.div>
    </Link>
  );
}

export default BuildingMaterials;