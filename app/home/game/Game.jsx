"use client"; 
import { useEffect, useRef } from "react";
import Phaser from "phaser";
import config from "./config";

export default function Game() { 
  const gameRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      ...config,
      parent: gameRef.current,
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} className="animated-1"></div>;
}

