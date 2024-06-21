"use client";
import React from "react";
import Documentation from "@/components/component/Documentation";
import { data } from "./java";

const App: React.FC = () => {
  return (
    <div className="mt-24">
      <Documentation data={data} />
    </div>
  );
};

export default App;
