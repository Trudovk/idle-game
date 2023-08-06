"use client";

import { useEffect, useState } from "react";
import { Button1 } from "./buttons";
import { useGameStore } from "@/lib/store";

export const Game: React.FC = () => {
  const count = useGameStore((s) => s.count);
  const clickPower = useGameStore((s) => s.clickPower);
  const addToCount = useGameStore((s) => s.addToCount);
  const setClickPower = useGameStore((s) => s.setClickPower);
  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      console.log("Success onkeyup", e);
      if (!["E", "S"].includes(e.key.toUpperCase())) return;
      addToCount(clickPower);
    };
    document.addEventListener("keyup", handlePress);
    return () => document.removeEventListener("keyup", handlePress);
  }, [clickPower]);
  return (
    <div>
      <div>Points: {count}</div>
      <Button1 onClick={() => addToCount(clickPower)}>Click</Button1>
      <Button1 onClick={() => setClickPower(clickPower + 1)}>Upgrade</Button1>
    </div>
  );
};
