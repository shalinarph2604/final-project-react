'use client'
import React from 'react'
// import HomePage from "./components/HomePage/HomePage";
// import OrderList from "./components/OrderList/OrderList";
// import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
// import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import "./globals.css";
import axios from 'axios'
import { useState, type FormEvent, type ChangeEvent } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import Link from "next/link"

interface LoginFormData {
  email: string
  password: string
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
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

    // Here you would typically handle the login logic
    // For this example, we'll just simulate a login attempt
    if (formData.email === "user@example.com" && formData.password === "password") {
      alert("Login successful!")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div>
        <div className="place-content-center">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>    
                <div className="space-y-2">
                    <label htmlFor="password">Password</label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button type="submit" className="w-full">
                Login
                </button>
                <p className="text-center text-sm">
                Don't have an account?{" "}
                    <Link href="/signup" className="text-blue-500 hover:underline">
                    Sign up
                    </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default LoginForm

