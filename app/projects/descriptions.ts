// descriptions.js
export interface ProjectType {
  title: string;
  languages: string[]; //array
  image?: string;       // Optional property
  description?: string; // Optional property
  url?: string;
  text?: string;
}

const projectData: ProjectType[] = [
  
  {
    title: "BetterBoxd",
    image: "/gif_folder/Flashcards.gif",
    description: "The application is intended for users' social discovery and cinema enthusiasts. It addresses the need for users to track their movie history, reviews (such as ratings), make comments, review others' reviews, and add a movie watchlist for people who want to watch movies they want in the future. This platform will be implemented in a React-based environment, prioritizing the user’s personal cinema journey, where it manages the user's personal interests in movies and browses trending films.",
    languages: ["React", "HTML/CSS"],
    url: "https://betterbox-app.vercel.app/",
    text: "View Live Site"
  },
  {
    title: "Dessert Finder App",
    image: "/image/dessertfinder.png",
    description: "This project will benefit many users by enabling them to navigate through the application and search for the best Food Desserts in their area. Using this software, people can review and leave comments to share their own experience based on the feedback provided by others.",
    languages: ["React", "TailwindCSS"],
    url: "https://github.com/CharlesGab101/Dessert-Finder-App.git",
    text: "View Source Code"
  },
  {
    title: "Mouse and Cat Ricochet Ball",
    image: "/gif_folder/Mouse and Cat animation.gif",
    description: "This Java application demonstrates timer-driven animation by simulating a physics-based ball bouncing within a rectangular frame alongside an interactive chase sequence. Using a dedicated calculation class, the program dynamically updates the ball's trajectory based on user-defined angles and speeds, allowing the animation to be adjusted or halted in real time. Additionally, the project implements the distance formula to calculate a cat's pursuit trajectory as it tracks a moving mouse across the panel at adjustable speeds.",
    languages: ["Java"],
    url: "https://github.com/CharlesGab101/Mouse-and-cat-ricochet-ball.git",
    text: "View Source Code"
  },
  {
    title: "Student Demographics",
    description: "The program reads the data from the bin file and can add something. The program has a list (to list all the student information), add (to add a student to the bin file), search (to search for students and show their information), position (to output the position number of the student) telephone to change the phone number of the student.",
    languages: ["C"],
    url: "https://github.com/CharlesGab101/Student-Demographic.git",
    text: "View Source Code",
    image: "/gif_folder/studentdemo.png"
  },
  {
    title: "Food Wastage Tracker",
    description: "Built a final Object-Oriented Programming course project, a web-based application utilizing C++, that empowers individuals to track, manage, and minimize their food waste",
    languages: ["C++", "Object-Oriented Programming"]
  },
   {
    title: "Book Store (Doubly Linked List Adapter)",
    description: "Developed a custom C++ DoublyLinkedList template and a BookStore adapter class to simulate a retail inventory ecosystem. Implemented foundational low-level data storage alongside high-level features for tracking stock, adding new inventory, and processing customer transactions.",
    languages: ["C++", "HTML/CSS"]
  },
  {
    title: "Stop Motion Project Winner of 2023",
    image: "/gif_folder/mq2.png",
    url: "https://youtu.be/4EqY4A0PPCo",
    description: "This project is a stop motion animation that I created for my film production class. It was a project where we had to create a short film using stop motion animation techniques. We used clay and other materials to create the characters and sets. The film was about a character who goes on an adventure to find a lost treasure. It was a fun and challenging project that taught me a lot about the art of stop motion animation.",
    text: "View Video",
    languages: ["Premiere Pro"]
  },
  
];

export default projectData;