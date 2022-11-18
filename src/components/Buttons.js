import React from "react";

export const Buttons = ({ datas }) => {
  return datas.map((item) => {
    return (
      <button key={item.id} className="job-btn false">
        {item.company}
      </button>
    );
  });
};
