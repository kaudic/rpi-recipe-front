import React from "react";
import Forms from "./Forms";
import { useSelector } from "react-redux";

const FormsCtn: React.FC<any> = () => {
  // Get datas from the redux store
  const units = useSelector((state) => (state as any).units.list);
  const types = useSelector((state) => (state as any).types.list);
  const ingredients = useSelector((state) => (state as any).ingredients.list);

  return <Forms units={units} types={types} ingredients={ingredients} />;
};

export default React.memo(FormsCtn);
