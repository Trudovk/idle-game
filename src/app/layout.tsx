import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Idle Game",
  description: "Waste your time",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center bg-orange-700 p-3">
          <h1>Idle Game</h1>
          {!session && <a href="/api/auth/signin">Sign in</a>}
          {!!session && !!session.user && (
            <p className="flex items-center gap-3">
              {session.user.name}
              <img
                src={session.user.image ?? undefined}
                alt="avatar"
                className="rounded-full h-10"
              />
            </p>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}
