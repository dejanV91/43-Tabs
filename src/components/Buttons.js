import React, { useState } from "react";

export const Buttons = ({ datas, choseCompany }) => {
  const [show, setShow] = useState(0);

  return datas.map((item, index) => {
    return (
      <button
        key={item.id}
        id={item.id}
        className={show === index ? "job-btn active-btn" : "job-btn false"}
        onClick={(e) => {
          choseCompany(e);
          setShow(index);
        }}
      >
        {item.company}
      </button>
    );
  });
};
