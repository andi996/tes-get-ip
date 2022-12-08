import React, { useEffect, useState } from "react";
import { get } from "browser-cookies";
export const useGeoLocation = () => {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    const loc = get("loc") ?? "";
    const _data = loc.split(",");
    setData(_data);
  }, []);

  const [ip, country] = data;
  return {
    ip,
    country,
  };
};
