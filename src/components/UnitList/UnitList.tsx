import React from "react";
import "./unitList.scss";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UnitForm from "../UnitForm/UnitForm";

const UnitList: React.FC<any> = ({
  handleUnitDialBoxClickOpen,
  units,
  updateUnitChange,
  deleteUnit,
  unitListClassName,
  unitFormClassName,
}) => {
  return (
    <>
      <h1 className="recipeForm-title">
        Liste des unités
        <Tooltip title="Ajouter Unité">
          <IconButton onClick={handleUnitDialBoxClickOpen}>
            <AddCircleIcon color="success" />
          </IconButton>
        </Tooltip>
      </h1>
      <ul className={unitListClassName}>
        {units.map((unit: any) => (
          <UnitForm
            key={unit.id}
            unit={unit}
            units={units}
            updateUnitChange={updateUnitChange}
            deleteUnit={deleteUnit}
            unitFormClassName={unitFormClassName}
          />
        ))}
      </ul>
    </>
  );
};

export default React.memo(UnitList);
