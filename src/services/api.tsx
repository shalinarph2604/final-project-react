import React from 'react'
import axios from 'axios'

const Axios = () => {

    useEffect(()=> {
        axios.get('https://delta-indie.vercel.app/api/restaurants/getAll')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])
    return (
        <div></div>
    )
}