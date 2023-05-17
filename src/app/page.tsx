import Image from "next/image";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Button1 } from "@/components/buttons";

export default async function Home() {
  return (
    <main className="flex justify-center">
      <Button1 className="">Тык Сюды!</Button1>
    </main>
  );
}
