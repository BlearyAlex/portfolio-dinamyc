// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { motion } from "framer-motion";

function ProjectsPage() {
    return (
        <motion.section
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="grid grid-cols-1 mx-10 pt-10 gap-5 mb-28 md:grid-cols-2 md:mb-0 lg:grid-cols-3 lg:mb-0">
                <div
                    div
                    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                >
                    <a href="#">
                        <img
                            class="rounded-t-lg"
                            src="/src/assets/W11 Wallpaper.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-gray-900 bg-teal-400 rounded-lg hover:bg-teal-500 hover:-translate-y-2 ease-in duration-300 focus:ring-4 focus:outline-none focus:ring-teal-500"
                            >
                                Demo
                                <FaExternalLinkAlt />
                            </a>
                            <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-gray-900  bg-teal-400 rounded-lg hover:bg-teal-500 hover:-translate-y-2 ease-in duration-300 focus:ring-4 focus:outline-none focus:ring-teal-500"
                            >
                                GitHub
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    div
                    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-4 ease-in duration-300 "
                >
                    <a href="#">
                        <img
                            class="rounded-t-lg"
                            src="/src/assets/W11 Wallpaper.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-gray-900 bg-teal-400 rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-500"
                            >
                                Demo
                                <FaExternalLinkAlt />
                            </a>
                            <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-gray-900  bg-teal-400 rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-500"
                            >
                                GitHub
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    div
                    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-4 ease-in duration-300 "
                >
                    <a href="#">
                        <img
                            class="rounded-t-lg"
                            src="/src/assets/W11 Wallpaper.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-gray-900 bg-teal-400 rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-500"
                            >
                                Demo
                                <FaExternalLinkAlt />
                            </a>
                            <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-gray-900  bg-teal-400 rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-500"
                            >
                                GitHub
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
export default ProjectsPage;
