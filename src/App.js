import React, { useEffect, useState } from "react";
import { RiSpeedFill } from "react-icons/ri";
import { Buttons } from "./components/Buttons";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatas(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          <Buttons datas={datas} />
          {/* <button className="job-btn active-btn">TOMMY</button>
          <button className="job-btn false">BIGDROP</button>
          <button className="job-btn false">CUKER</button> */}
        </div>
        <article className="job-info">
          {/* <h3>full stack</h3>
          <h4>Tommy</h4>
          <p className="job-date">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit corporis quam animi hic eligendi corrupti placeat
            voluptate aspernatur beatae necessitatibus.
          </p> */}
          <div className="job-desc">
            {/* <RiSpeedFill className="job-icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et
              corrupti repellat repellendus explicabo porro quaerat! Atque
              eligendi officia accusamus.
            </p> */}
          </div>
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
