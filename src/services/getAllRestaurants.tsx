import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'; // Install: npm install js-cookie

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = Cookies.get("token"); // Ambil token dari cookies
        const response = await axios.get("https://delta-indie.vercel.app/restaurants/getAll", {
          headers: { Authorization: `Bearer ${token}` }, // Kirim token di headers
        });
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h2>Daftar Restoran</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
