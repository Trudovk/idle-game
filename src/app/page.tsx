import Image from "next/image";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Button1 } from "@/components/buttons";
import { Game } from "@/components/Game";

export default async function Home() {
  return (
    <main className="flex justify-center">
      <Game />
    </main>
  );
}
