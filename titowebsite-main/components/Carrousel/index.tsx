import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import classNames from "classnames";
import { persons } from "./persons";

const Team = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null); // Définir le type de hoveredItem comme number ou null
    const [activeGroup, setActiveGroup] = useState(0);

    const groupSize = 3; // Nombre d'images à afficher dans chaque groupe
    const totalGroups = Math.ceil(persons.length / groupSize);

    const goToGroup = (groupIndex: number) => {
        setActiveGroup(groupIndex);
    };

    const nextGroup = () => {
        setActiveGroup((prevGroup) => (prevGroup === totalGroups - 1 ? 0 : prevGroup + 1));
    };

    const prevGroup = () => {
        setActiveGroup((prevGroup) => (prevGroup === 0 ? totalGroups - 1 : prevGroup - 1));
    };

    return (
        <section className="relative py-16 md:py-20 lg:py-24 h-auto max-h-screen overflow-visible">
            <div className="flex h-full w-full items-center justify-center px-12">
                <div className="w-full max-w-screen-xl relative">
                    <ul
                        className="flex flex-row gap-5"
                        style={{
                            transform: `translateX(-${activeGroup * 100}%)`,
                            transition: "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                        }}
                    >
                        {persons.slice(activeGroup * groupSize, (activeGroup + 1) * groupSize).map((person, index) => (
                            <li
                                key={person.name}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={classNames(
                                    "relative cursor-pointer w-full transition-all duration-300",
                                    hoveredItem === index ? "scale-150 z-20" : "scale-100",
                                    hoveredItem !== null && hoveredItem !== index && "blur-sm",
                                    "rounded-md",
                                )}
                                style={{
                                    maxWidth: "400px",
                                    minWidth: "270px",
                                    margin: "10px",
                                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    className={classNames(
                                        "h-full w-full object-cover",
                                        hoveredItem === index ? "scale-110" : "scale-100",
                                    )}
                                    src={person.img}
                                    alt={person.name}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute left-0 right-0 flex justify-center bottom-8">
                {Array.from({ length: totalGroups }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToGroup(index)}
                        className={`w-4 h-4 rounded-full ${
                            index === activeGroup ? "bg-blue-600" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
            <button
                onClick={prevGroup}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-blue-600"
            >
                <FiChevronLeft size={64} />
            </button>
            <button
                onClick={nextGroup}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-blue-600"
            >
                <FiChevronRight size={64} />
            </button>
        </section>
    );
}

export default Team;
