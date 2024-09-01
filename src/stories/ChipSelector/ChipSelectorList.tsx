import React from "react";
import { ChipSelector, ChipSelectProps } from "./ChipSelector";

const ChipSelectorList = ({ items }: { items: ChipSelectProps[] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 100%))",
        gap: "32px",
      }}
    >
      {items.map((chipSeletor) => (
        <ChipSelector {...chipSeletor} />
      ))}
    </div>
  );
};

export default ChipSelectorList;
