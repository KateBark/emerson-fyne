"use client";

import { useState } from "react";

export default function WritingList({ writings }) {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-12 w-full">
      {writings.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-4 hover:bg-gray-800 cursor-pointer transition"
          onClick={() => toggleOpen(item.id)}
        >
          <h2 className="text-xl font-semibold pb-3">{item.title}</h2>
          <p className="text-gray-400 whitespace-pre-line">
            {openId === item.id
              ? item.content
              : item.content.slice(0, 150) + "..."}
          </p>
        </div>
      ))}
    </div>
  );
}
