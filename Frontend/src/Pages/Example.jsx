import React from "react";
import { useNavigate } from "react-router-dom";
import ReactDatamaps from "react-india-states-map";

const Example = () => {
  const navigate = useNavigate();

  const stateOnClick = (data, name) => {
    navigate(`/state/${name}`);
  };

  return (
    <ReactDatamaps
      onClick={stateOnClick}
      mapLayout={{
        stateColor: "#ffffff" 
      }}
    />
  );
};

export default Example;
