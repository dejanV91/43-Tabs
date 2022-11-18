import React from "react";

export const Buttons = ({ datas, choseCompany }) => {
  return datas.map((item) => {
    return (
      <button
        key={item.id}
        id={item.id}
        className="job-btn false"
        onClick={(e) => choseCompany(e)}
      >
        {item.company}
      </button>
    );
  });
};
