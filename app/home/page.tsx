"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

function Home() {
  const [animation, setAnimation] = React.useState(true);

  React.useEffect(() => {
    // Stop the animation after 3 seconds (3000ms)
    setAnimation(true); // Start the animation when the pathname changes
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Run the effect whenever the pathname changes

  return (
    
    <div>
      <nav className="frame">
            <Link href="/about"><button>About</button></Link>
            <Link href="/projects"><button>Projects</button></Link>
      </nav>
     <img src={animation ? "/gif_folder/MYNAME.gif" : "/gif_folder/MYNAME.png"} 
     alt="My Name Is Charles Gabut" className={animation ? "text_header" : "text_header_static"} />
     <Image
       src="/image/profile.jpg"
       alt="Profile Picture"
       width={300}
       height={300}
       className="profile-picture"
     />

    </div>
  )
  
}

export default Home;
