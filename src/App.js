import React, { useEffect, useState } from "react";
import { Buttons } from "./components/Buttons";
import { JobDesc } from "./components/JobDesc";
import { JobInfo } from "./components/JobInfo";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [datas, setDatas] = useState([]);
  const [idItem, setIdItem] = useState();

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatas(data);
    setIdItem(data[0].id);
    return data;
  };

  const choseCompany = (e) => {
    const id = e.target.getAttribute("id");
    setIdItem(id);
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
          <Buttons datas={datas} choseCompany={choseCompany} />
        </div>
        <article className="job-info">
          <JobInfo datas={datas} idItem={idItem} />

          <JobDesc datas={datas} idItem={idItem} />
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
