"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";
import { useRef } from 'react'

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

          <h1>Connect With Me!</h1>
      </div> 
      


     </section>

    </div>
  )
  
}

export default Home;
