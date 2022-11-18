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
        </div>
        <article className="job-info">
          {/* <JobInfo datas={datas} /> */}

          <div className="job-desc">{/* <JobDesc/> */}</div>
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
