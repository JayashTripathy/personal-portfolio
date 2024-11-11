"use client";
import { useOutsideClick } from '@/hooks/use-outside-click';
import { Project } from '@/types/project';
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { techIcons } from '@/config/tech-icons';
import { Link2, MoveUpRight, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';




type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();
    const router = useRouter()
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
                    <motion.div
                        className="fixed inset-0 grid place-items-center z-[100] backdrop-blur  "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="p-8 border bg-card rounded-2xl w-full max-w-3xl relative flex flex-col gap-6 overflow-hidden "
                            layoutId={`project-${id}-${active.title}`}
                            ref={ref}
                        >
                            <div>

                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-medium text-foreground  text-2xl"
                                >
                                    {active.title}
                                </motion.h3>

                                <motion.p
                                    layoutId={`description-${active.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400"
                                >
                                    {active.description}
                                </motion.p>
                            </div>



                            <motion.div className='flex gap-2' layoutId={`tech-stack-${active.title}-${id}`}>
                                {active.techStack.slice(0, 3).map(tech => techIcons[tech].icon({ key: tech, className: 'w-10 h-10' }))}
                                {active.techStack.length > 3 && (
                                    <div className='w-5 h-5 text-emerald-400' >...</div>
                                )}
                            </motion.div>

                            <Button variant={"outline"} className=' gap-2 text-muted-foreground overflow-hidden overflow-ellipsis flex-1 ' onClick={() => window.open(active.url, '_blank')}><Link2 /> {active.url}</Button>


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <ul className="grid grid-cols-2 gap-3">
                {projects.map((project, index) => (
                    <motion.div
                        layoutId={`project-${id}-${project.title}`}
                        key={`project-${id}-${project.title}`}
                        onClick={() => setActive(project)}
                        className='border p-3 rounded-xl cursor-pointer bg-muted'
                    >
                        <div className="">
                            <motion.div className='flex justify-between'>
                                <motion.h3
                                    layoutId={`title-${project.title}-${id}`}
                                    className=" text-neutral-800 dark:text-neutral-200 text-center md:text-left font-bold "
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.div className='flex gap-1' layoutId={`tech-stack-${project.title}-${id}`}>
                                    {project.techStack.slice(0, 3).map(tech => techIcons[tech].icon({ key: tech, className: 'w-5 h-5' }))}
                                    {project.techStack.length > 3 && (
                                        <div className='w-5 h-5 text-emerald-400' >...</div>
                                    )}
                                </motion.div>

                            </motion.div>
                            <motion.p
                                layoutId={`description-${project.description}-${id}`}
                                className="text-foreground/50 mt-1 text-center md:text-left whitespace-nowrap overflow-hidden overflow-ellipsis"
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