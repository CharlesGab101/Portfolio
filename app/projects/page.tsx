"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from 'react'
import projectData, {ProjectType} from './descriptions'

interface ProjectCardProps {
    project: ProjectType;
}
 
function getLanguageClass(language: string) {
    const value = language.toLowerCase();

    if (value.includes("c++")) {
        return "project-tag tag-cpp";
    }
    if (value.includes("html/css")) {
        return "project-tag tag-cpp";
    }
    if (value.includes("javascript")) {
        return "project-tag tag-javascript";
    }
    if (value.includes("typescript")) {
        return "project-tag tag-typescript";
    }
    if (value.includes("java")) {
        return "project-tag tag-java";
    }
    if (value.includes("python")) {
        return "project-tag tag-python";
    }
    if (value.includes("react")) {
        return "project-tag tag-react";
    }
    if (value.includes("premiere")) {
        return "project-tag tag-video";
    }
    if (value.includes("object-oriented")) {
        return "project-tag tag-oop";
    }

    return "project-tag tag-default";
}

function ProjectCard({project}: ProjectCardProps) {
    const [flip, setFlip] = useState<boolean>(false);
    return (
        <div 
            className={`flip-card ${flip ? 'flipped' : ''}`} 
            onClick={() => setFlip(!flip)}
            >
                <div className="hover-indicator" aria-hidden="true">
                    {!flip ? <span>Click to flip</span> : null}
                </div>

                {/* Inner container handles the actual 3D rotation */}
                <div className="flip-card-inner">
                    
                    {/* Front Side */}
                    <div className="flip-card-front">
                        <div className="items-project">
                            <h1 className="project-card-title">{project.title}</h1>

                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    width={1000}
                                    height={700}
                                    className="project-image"
                                />
                            )}
                            <div className="project-tags">
                                {project.languages?.map((lang, langIndex) => (
                                    <p className={getLanguageClass(lang)} key={langIndex}>{lang}</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="view-site-button">
                        {project.url && (
                            <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                <button>
                                     {project.text}
                                </button>
                            </Link>
                        )}
                        </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="flip-card-back">
                        {project.description && (
                            <h3 className="project-description">{project.description}</h3>
                        )}
                    </div>
                </div>
            </div>
    )
}

function Project() {
    return (
        <div>
            <nav className="frame_skills">
                <h1 className="name-page">Projects</h1>
                <div className="nav-links">
                    
                    <Link href="/"><button>Home</button></Link>
                    <Link href="/about"><button>About</button></Link>
                </div>
            </nav>
            <div className="projects">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Project;