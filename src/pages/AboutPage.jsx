import { Tooltip } from "react-tooltip";
// Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoPerson } from "react-icons/io5";

import { motion } from "framer-motion";

function AboutPage() {
    return (
        <motion.section
            className="min-h-screen block justify-center items-center mx-12 md:mt-[25%] lg:mt-0 lg:grid lg:grid-cols-2 lg:mx-72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* About Me */}
            <div className="pt-10 text-white">
                <div className="flex justify-center items-center gap-2 text-4xl font-bold text-white">
                    <span className="text-teal-400">
                        <IoPerson />
                    </span>
                    <h1 className="text-center font-bold">Sobre Mi</h1>
                </div>
                <p className="pt-5">
                    Hello I am Erick Ortiz, Computer Systems Engineer focused on the
                    programming branch, I am a full stack developer with 3 years of
                    experience in the management of various technologies, especially in
                    Reactjs, my goal is to find a company that will allow me to grow and
                    improve within the same and go learning from my teammates within the
                    team, and also give me the opportunity to put into practice my
                    skills and knowledge acquired in the years of study.
                </p>
            </div>
            {/* Skills  */}
            <div className="pt-10 text-white">
                <h1 className="text-center font-bold text-3xl">Skills</h1>
                <div className="grid grid-cols-3 gap-4 place-items-center text-3xl cursor-pointer pt-5">
                    <Tooltip
                        id="my-tooltip"
                        style={{
                            fontSize: "15px",
                            padding: "0.3rem",
                            fontWeight: "bold",
                        }}
                    />
                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="HTML"
                    >
                        <FaHtml5 />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="CSS"
                    >
                        <FaCss3Alt />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="JavaScript"
                    >
                        <RiJavascriptFill />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="TypeScript"
                    >
                        <BiLogoTypescript />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="React"
                    >
                        <FaReact />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="NodeJs"
                    >
                        <FaNodeJs />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Express"
                    >
                        <SiExpress />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content=".NET"
                    >
                        <SiDotnet />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="C#"
                    >
                        <TbBrandCSharp />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="MySQL"
                    >
                        <SiMysql />
                    </span>

                    <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="MongoDB"
                    >
                        <SiMongodb />
                    </span>
                </div>
            </div>

        </motion.section>
    );
}

export default AboutPage;
