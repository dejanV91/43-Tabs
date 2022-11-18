import React from "react";
import { RiSpeedFill } from "react-icons/ri";

export const JobDesc = ({ datas, idItem }) => {
  return datas.map((item) => {
    const { id, duties } = item;

    return duties.map((text) => {
      if (id === idItem) {
        return (
          <div className="job-desc">
            <RiSpeedFill className="job-icon" />
            <p>{text}</p>
          </div>
        );
      }
    });
  });
};

// return (
//   <>
//     <RiSpeedFill className="job-icon" />
//     <p>{text}</p>
//   </>
// );
