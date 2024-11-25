"use client";

import Image from "next/image";
import "./style.css";
import { useState } from "react";

const MyButton = () => {
  return <button> Click </button>;
};
export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onclick={handleClick}> Click </button>
    </div>
  );
}
