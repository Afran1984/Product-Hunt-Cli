import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (loading || !user?.email) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/${user?.email}`
        );
        setRole(data.role);
        console.log("Fetched role:", data.role);
      } catch (error) {
        console.error("Failed to fetch role:", error);
        setRole(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRole();
  }, [user, loading]);

  return [role, isLoading];
};

export default useRole;
