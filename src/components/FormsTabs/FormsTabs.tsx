import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./formsTabs.scss";

const FormsTabs: React.FC<any> = ({ handleTabsChange, tabsValue }) => {
  return (
    <div className="FormsMenu">
      <Tabs
        selectionFollowsFocus={true}
        orientation="vertical"
        value={tabsValue}
        onChange={handleTabsChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        textColor="primary"
      >
        <Tab label="Recette" />
        <Tab label="Ingrédient" />
        <Tab label="Unité" />
      </Tabs>
    </div>
  );
};

FormsTabs.propTypes = {};

export default React.memo(FormsTabs);
