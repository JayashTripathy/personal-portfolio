"use client";
import { useOutsideClick } from '@/hooks/use-outside-click';
import { Project } from '@/types/project';
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'



type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <div className="fixed inset-0  grid place-items-center z-[100] ">
                        <motion.div className=" bg-secondary p-4" layoutId={`project-${id}-${active.title}`} ref={ref} >
                            <motion.h3
                                layoutId={`title-${active.title}-${id}`}
                                className="font-bold text-neutral-700 dark:text-neutral-200"
                            >
                                {active.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${active.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400"
                            >
                                {active.description}
                            </motion.p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <ul className="grid grid-cols-3 gap-3">
                {projects.map((project, index) => (
                    <motion.div
                        layoutId={`project-${id}-${project.title}`}
                        key={`project-${id}-${project.title}`}
                        onClick={() => setActive(project)}
                        className='border p-3 rounded-lg cursor-pointer'
                    >
                        <div className="">
                            <motion.h3
                                layoutId={`title-${project.title}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                            >
                                {project.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${project.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                            >
                                {project.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    )
}

export default Projects