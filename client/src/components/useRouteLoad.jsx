import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "../axios/axios";

const useRouteLoad = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const response = await axios.get(
          "/profile"
        );
        if (!response.data) {
          navigate("/");
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    checkProfile();
  }, [location, navigate]);
};

export default useRouteLoad;
