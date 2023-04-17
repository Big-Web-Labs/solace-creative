import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineLeft } from 'react-icons/ai'

const acc =
    [
        {
            name: 'COMFORT IN CHAOS',
            details: [
                "Our ultimate goal is to create a reality in which this world is an exciting place to exist in.",
                "We believe that it's possible to design things that make people feel happier to be alive."
            ],
            id: 1
        },
        {
            name: 'COLLABORATION',
            details: [
                "Change is driven by the force and will of passionate people.",
                "We create environments for people to thrive in their purest form."
            ],
            id: 2
        },
        {
            name: 'CREATION WITH INTENTION',
            details: [
                "We never do things for the sake of getting it done.  The intention and the process is equally as important as the final product."
            ],
            id: 3
        },
    ]

const Accordion = ({ i, expanded, setExpanded }) => {
    const isOpen = i.id === expanded;

    // By using `AnimatePresence` to mount and unmount the contents, we can animate
    // them in and out while also only rendering the contents of open accordions
    return (
        <>
            <div className="flex flex-col gap-y-4 w-full md:w-[600px] max-w-[600px]">
                <motion.div
                    animate={{ scale: isOpen ? 1.2 : 1 }}
                    onClick={() => setExpanded(isOpen ? false : i.id)}
                    className="flex gap-x-2 items-center cursor-pointer"
                >
                    <GoPrimitiveDot />
                    <h3 className="text-3xl">{i.name}</h3>
                    <motion.button initial={false} animate={{rotate: isOpen? -90 : 0}}><AiOutlineLeft /></motion.button>
                </motion.div>

                <AnimatePresence initial={false | 0}>
                    {isOpen && (
                        <motion.section
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            <div className="flex flex-col gap-y-4">
                                {i.details.map((detail, i) => (
                                    <p className="pl-10" key={i}>{detail}</p>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

const Ethos = () => {
    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.
    const [expanded, setExpanded] = useState(false);

    return acc.map((item) => (
        <Accordion i={item} expanded={expanded} setExpanded={setExpanded} key={item.id} />
    ));
};

export default Ethos