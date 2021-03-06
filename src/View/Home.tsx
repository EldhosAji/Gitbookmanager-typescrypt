import React from "react";
import { HomeList } from "../Components/Index";
import "../Components/Style.css";
import { useSelector } from "react-redux";
import { Data } from "../Components/Types/Type";

export default function Home() {
  const state = useSelector((State: Data[]) => State);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        data-testid="home-screen"
      >
        <HomeList data={state} />
      </div>
    </div>
  );
}
