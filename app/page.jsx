import Welcome from "@/components/Welcome";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SessionProvider } from "next-auth/react"
import UserInfo from "@/components/UserInfo";


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className="grid place-items-center h-screen">
      <div><Welcome/></div>
    </main>
  );
}
