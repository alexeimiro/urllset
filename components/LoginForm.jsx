"use client";

import { XCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
  
        if (res.error) {
          setError("Invalid Credentials");
          return;
        }
  
        router.replace("dashboard");
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-cyan-400">
                <h1 className=" grid place-items-center text-xl font-bold my-4">Sign in</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                    onChange={(e) => setEmail(e.target.value)} 
                    type="text" 
                    placeholder="Email" 
                    />
                    <input
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                    />
                    <button className="font-bold cursor-pointer">Sign in</button>

                    {error && (
                    <div className='flex place-items-center text-sm py-2 px-2'>
                    <XCircleIcon className="h-6 w-6 text-red-500" /><p>Invalid credentials</p>
                    </div>
                    )}

                    <Link className='mt-3 text-right' href={'/register'}>
                        Don't have an account? <span className='underline'>Register</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}