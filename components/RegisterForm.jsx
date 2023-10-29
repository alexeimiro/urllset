"use client";

import Link from "next/link"
import { useState } from "react";
import { XCircleIcon } from '@heroicons/react/solid';
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!name || !email || !password) {
        setError("All fields are necessary.");
        return;
      }
  
      try {
        const resUserExists = await fetch("api/userExists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        const { user } = await resUserExists.json();
  
        if (user) {
          setError("User already exists.");
          return;
        }
  
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
  
        if (res.ok) {
          const form = e.target;
          form.reset();
          router.push("/");
        } else {
          console.log("User registration failed.");
        }
      } catch (error) {
        console.log("Error during registration: ", error);
      }
    };

    return (
    <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-cyan-400">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input onChange={e => setName(e.target.value) } 
                    type="text" 
                    placeholder="Full Name" 
                    />
                    <input onChange={e => setEmail(e.target.value)} 
                    type="text" 
                    placeholder="Email" 
                    />
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button className="font-bold cursor-pointer">Register</button>

                    { error && (
                    <div className="flex gap-1"><XCircleIcon className="h-6 w-6 text-red-500" /><p>{error}</p></div>
                    )
                    }
                    <Link className='mt-3 text-right' href={'/signin'}>
                        Already have an account? <span className='underline'>Login</span>
                    </Link>
                    
                </form>
            </div>
        </div>
    );
}