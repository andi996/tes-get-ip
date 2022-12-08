import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import cookies from "browser-cookies";
const HomePage: NextPage = () => {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    const loc = typeof window !== "undefined" ? cookies.get("loc") ?? "" : "";
    const _data = loc.split(",");
    setData(_data);
  }, []);

  const [ip, country] = data;
  return (
    <div className="container">
      <p>Your ip: {ip}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default HomePage;
