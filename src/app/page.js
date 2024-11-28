"use client";

import image from "next/image";
import style from "./style.css";
import { userState } from "react";
import USERSDATA from "./usersData.json";
import { userAgent } from "next/server";
import { UserCard } from "./card";

export default function Profile() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {USERSDATA.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
