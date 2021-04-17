import React, { useState } from "react";
import "./styles.css";

const Card = () => {
  const [color, setColor] = useState("gray");
  const [lock, setLock] = useState(false);

  const handleChange = (e) => {
    setColor(e.target.value === "" ? "gray" : e.target.value);
  };

  return (
    <div className="card" style={{ background: color }}>
      {lock == false ? (
        <div>
          <input placeholder="ej: #33C1FF/tomato" onChange={(e) => handleChange(e)}></input>{" "}
          <span onClick={()=>setLock(true)}>X</span>
        </div>
      ) : (
        color
      )}
    </div>
  );
};

export default Card;
