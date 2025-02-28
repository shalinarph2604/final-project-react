'use client'
import React from 'react'
// import "./globals.css";
import axios from 'axios'
import { useState, type FormEvent, type ChangeEvent } from 'react'
import Link from "next/link"

interface LoginFormData {
  username: string
  password: string
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  })
  const [error, setError] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    try {
      const response = await axios.post("https://delta-indie.vercel.app/api/auth/login", formData)
      console.log("Login successful:", response.data)
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred during login")
      } else {
        setError("An unexpected error occurred")
      }
    }
  }

  return (
    <div className='bg-slate-200 min-h-screen flex items-center justify-center'>
        <div className="justify-center items-center bg-white p-6 rounded shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 flex flex-col">
                    <label htmlFor="username">Username</label>
                        <input
                        id="username"
                        name="username"
                        type="username"
                        placeholder="Enter your username"
                        className='p-2 rounded-lg'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>    
                <div className="space-y-2 flex flex-col">
                    <label htmlFor="password">Password</label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className='p-2 rounded-lg'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button type="submit" className="w-full bg-sky-600 text-neutral-50 rounded-lg p-1">
                Login
                </button>
                <p className="text-center text-sm">
                    Don't have an account? {""}
                    <Link href="/register" className="text-blue-500 hover:underline">
                    Sign up
                    </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default LoginForm

