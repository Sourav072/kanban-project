import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log("API Response:", response.data); // Log API response to debug
        // Assuming API response has tickets in a key, adjust accordingly
        setData(response.data.tickets || []); // Use the correct path for tickets
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
