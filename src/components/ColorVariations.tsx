import React from "react";
import { IColorDetails } from "../types";
import ColorsRow from "./ColorsRow";

const ColorVariations = ({ colorDetails }: { colorDetails: IColorDetails }) => {
  return (
    <div className="grid gap-4">
      <ColorsRow colors={colorDetails.shades} title="Shades" />
      <ColorsRow colors={colorDetails.tints} title="Tints" />
      <ColorsRow colors={colorDetails.tones} title="Tones" />
      <ColorsRow colors={colorDetails.hues} title="Hues" />
      <ColorsRow colors={colorDetails.tailwindcss} title="Tailwind CSS" />
    </div>
  );
};

export default ColorVariations;
