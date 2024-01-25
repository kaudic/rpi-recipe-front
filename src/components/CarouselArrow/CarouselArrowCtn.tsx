import React from "react";
import CarouselArrow from "./CarouselArrow";
import { useSelector } from "react-redux";

const CarouselArrowCtn: React.FC<any> = ({ direction }) => {
  // Get all recipes to find next or previous recipe
  const recipes = useSelector((state) => (state as any).recipes.searchList);

  return <CarouselArrow direction={direction} recipes={recipes} />;
};

export default React.memo(CarouselArrowCtn);
