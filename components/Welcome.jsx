import Link from "next/link";

export default function Welcome() {
    return (
    <div className="grid place-items-center">
        <div className="shadow-lg p-5 rounded-lg place-items-center">
            <h1 className="grid place-items-center p-5 text-xl">Welcome to</h1>
            <div className="grid place-items-center text-2xl mb-3 font-bold">urllset</div>
            <div className="flex gap-20 place-items-center"> 
             <Link className="btn border rounded-lg px-6 py-2 hover:bg-blue-400 shadow-md" href={'/signin'}>Sign in</Link>
             <Link className="btn border rounded-lg px-6 py-2 hover:bg-blue-400 shadow-md" href={'/register'}>Register</Link>
            </div>
        </div>
    </div>
    );
}