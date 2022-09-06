import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Terms = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get("https://gravitybites.in/api/stores/terms");
      console.log(data);
    }
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <h1>Terms and Conditions</h1>
    </div>
  );
};

export default Terms;
