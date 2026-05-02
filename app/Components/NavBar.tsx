"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <div className="
            flex
            justify-start
            align-center
            gap-5
            p-4
            bg-neutral-800 
            text-lg
        ">
            <Link className="text-xl" href="#">GFG Blogs</Link>
            <Link href="#">Home</Link>
            <Link href="#">Create new Blog</Link>
        </div>
    );
}