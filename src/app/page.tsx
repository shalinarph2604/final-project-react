'use client'
import React from 'react'
import "./globals.css";
import Link from "next/link"

const App = () => {
 return (
    <div className='bg-slate-200 min-h-screen flex items-center justify-center'>
        <div className="justify-center items-center bg-white p-6 rounded shadow-md flex gap-2">
            <Link href="/login" className="w-24 font-semibold bg-sky-600 text-neutral-50 rounded-lg p-2 mr-2 text-center">Login</Link>
            <br></br>
            <Link href="/register" className="w-24 font-semibold bg-green-600 text-neutral-50 rounded-lg p-2 ml-2 text-center">Register</Link>
        </div>
    </div>
 )
}

export default App