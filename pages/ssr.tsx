import { GetServerSideProps, NextPage } from "next";
import React from "react";

type Props = {
  ip: string;
};

const SSRPage: NextPage<Props> = ({ ip }) => {
  return <div>IP: {ip}</div>;
};

export default SSRPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ip =
    req.headers["x-real-ip"] ?? req.headers["x-forwarded-for"] ?? "Unknown";

  return {
    props: {
      ip,
    },
  };
};
