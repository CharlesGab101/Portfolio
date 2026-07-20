import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
    return (
        <div>
            <nav className="frame_about">
                    <Link href="/"><button>Home</button></Link>
                    <Link href="/projects"><button>Projects</button></Link>
            </nav>
            <h1>About Me</h1>
            <div className="about">
                <div>
                    <Image
                        src="/image/profile.jpg"
                        alt="Profile Picture"
                        width={300}
                        height={300}
                        className="profile-picturep-about"
                    />
                    <p className="about-name">Charles Gabut</p>
                    <p className="about-title">Aspiring Software Developer</p>
                </div>
                <div>
                    <h2>Hello World!</h2>
                    <p className="about-description">
                        Hello! I'm Charles Gabut, a passionate software developer with a love for creating innovative solutions. With a background in computer science and experience in various programming languages, I enjoy tackling complex problems and building applications that make a difference. In my free time, I like to explore new technologies, contribute to open-source projects, and continuously improve my skills. I'm always eager to connect with like-minded individuals and collaborate on exciting projects!
                    </p>
                </div>
                    
            </div>
            
            
        </div>
    )
}
