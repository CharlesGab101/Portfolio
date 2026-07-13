"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";
import { useRef } from 'react'
import Email from "./Email.jsx";
import Game from "./game/Game.jsx" 


function Home() {
  const [animation, setAnimation] = React.useState(true);

  //======= Scroll Down functionality=======
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

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
            <button onClick={scrollToContact}>Contact</button>
            <Link href="/projects"><button>Projects</button></Link>
      </nav>
    
      <Game />
      <img src={animation ? "/gif_folder/MYNAME.gif" : "/gif_folder/MYNAME.png"} 
      alt="My Name Is Charles Gabut" className={animation ? "text_header" : "text_header_static"} />
    
     
     <Image
       src="/image/profile.jpg"
       alt="Profile Picture"
       width={300}
       height={300}
       className="profile-picture"
     />
     
     <section ref={contactRef} style={{ minHeight: '100vh' }}>
      <div className="flex justify-center items-center flex-col">
          <h1>Let's Connect!</h1>
          <h1>Contact information</h1>
          <p>Email: kengabut@gmail.com</p>
          <p>Phone: 657-226-7547</p>
          <p>Location: Anaheim, CA</p>
          <div className ="logo-button">
            <Link href="https://www.linkedin.com/in/charlesgabut/">
                <img src="/gif_folder/InBug-White.png" width={40} height={40}alt="InBug Logo" className="inbug-logo" />
            </Link>
            <Link href="https://github.com/CharlesGab101?tab=repositories">
                <img src="/gif_folder/GitHub_Invertocat_White.png" width={40} height={40}alt="InBug Logo" className="inbug-logo" />
            </Link>
          </div>
        
          <h1>Connect With Me!</h1>
          <Email />
      </div> 
      


     </section>

    </div>
  )
  }

export default Home;
