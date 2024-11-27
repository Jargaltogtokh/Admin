"use client";

import Image from "next/image";
import "./style.css";
import { useState } from "react";
import USERSDATA from "./usersData.json";
import { userAgent } from "next/server";
import { UserCard } from "./card";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {USERSDATA.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
