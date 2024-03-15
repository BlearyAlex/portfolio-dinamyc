import Image from "../assets/AlexT.png";

import { TypeAnimation } from "react-type-animation";

// Icons
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";

import { motion } from "framer-motion";

function HomePage() {
    return (
        <motion.section
            className="min-h-screen block justify-center items-center md:grid md:grid-cols-2 lg:mx-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* image */}
            <div className="flex justify-center items-center pt-10 md:pt-0">
                <img
                    className="w-64 h-64 p-1 rounded-full ring-2 ring-teal-400 dark:ring-teal-400"
                    src={Image}
                    alt="W11 Wallpaper"
                />
            </div>

            {/* text */}
            <div className="">
                <div className="flex justify-center items-center">
                    <h1 className="justify-center items-center text-4xl text-white font-bold pt-10">
                        Erick <span>Ortiz</span>
                    </h1>
                </div>

                {/* framer motion */}
                <div className="flex justify-center items-center font-semibold text-white leading-[-1]">
                    <span className="mr-1">I am a</span>
                    <div className="text-teal-400 font-semibold">
                        <TypeAnimation
                            sequence={[
                                "Web Developer",
                                2000,
                                "Full Stack Developer",
                                2000,
                                "Enigneer",
                                2000,
                            ]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </div>
                </div>

                <div className="mx-12 text-white pt-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        illo sed laboriosam soluta enim recusandae rem laborum sit magnam
                        aliquam aspernatur, fugit quos sint non consectetur nam in
                        expedita eos?
                    </p>
                </div>

                {/* socials */}
                <div className="pt-5 flex justify-center items-center gap-4">
                    <button className=" bg-teal-400 rounded-md p-2 flex items-center gap-2 text-sm hover:translate-y-[-0.5rem] duration-300 ease-in hover:bg-teal-500">
                        Descargar CV
                        <AiOutlineDownload />
                    </button>
                    <IconContext.Provider value={{ color: "white" }}>
                        <div className="ml-2 font-semibold text-2xl flex hover:cursor-pointer gap-4">
                            <FiGithub className="hover:translate-y-[-0.5rem] duration-300 ease-in" />
                            <CiLinkedin className="hover:translate-y-[-0.5rem] duration-300 ease-in" />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </ motion.section>
    );
}

export default HomePage;
