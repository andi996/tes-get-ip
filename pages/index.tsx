import { NextPage } from "next";
import React from "react";
import { useGeoLocation } from "utils/useGeoLocation";

const HomePage: NextPage = () => {
  const { ip, country } = useGeoLocation();
  return (
    <div className="container">
      <p>Your ip: {ip}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default HomePage;
