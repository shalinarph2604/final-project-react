'use client'
import React from 'react'
import "./globals.css";
import Link from "next/link"

const App = () => {
 return (
    <div className='bg-slate-200 min-h-screen flex items-center justify-center'>
        <div className="justify-center items-center bg-white p-6 rounded shadow-md">
            <Link href="/Login" className="w-full bg-sky-600 text-neutral-50 rounded-lg p-1">Login</Link>
            <br></br>
            <Link href="/Register" className="w-full bg-sky-600 text-neutral-50 rounded-lg p-1">Register</Link>
        </div>
    </div>
 )
}

export default App