import React from "react";

export const JobInfo = ({ datas, idItem }) => {
  return datas.map((item) => {
    const { id, title, company, dates } = item;
    if (id === idItem) {
      return (
        <>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
        </>
      );
    }
  });
};
