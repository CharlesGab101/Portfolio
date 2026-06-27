import Link from "next/link";
import React from "react";

function skills() {
    return (
        <div>
            <nav className="frame_skills">
                <Link href="/"><button>Home</button></Link>
                <Link href="/about"><button>About</button></Link>
                <Link href="/projects"><button>Projects</button></Link>
            </nav>

        </div>
    )
}

export default skills;