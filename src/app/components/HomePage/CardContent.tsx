'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const CardContent = () => {
    const router = useRouter();

    return (
        <div>
           <button className='view-restaurant' onClick={() => router.push('./restaurant-detail')}>View Restaurant</button> 
        </div>
    )
}

export default CardContent;