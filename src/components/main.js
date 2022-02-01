import React from "react";
import { PersonalInput } from "./inputs/personalinput";
import { useState } from "react";
import { JobInput } from "./inputs/jobinput";
import { JobHistoryInput } from "./inputs/workhistoryinput";
export function Main() {
  const [name, setName] = useState("");
  const [job, setJob] = useState([]);
  const [history, setHistory] = useState({ jobs: "" });
  const [jobDisplay, setJobDisplay] = useState([]);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateJobTitle = (e) => {
    setJob(e.target.value);
  };
  const updateJobHistory = (e,h) => {
    const indexia = jobDisplay.length;
    setHistory((prevState) => ({
      ...prevState,
      jobs: {
        ...prevState.jobs,
        [indexia]: {
            ...prevState.jobs[indexia],
            Company: e.target.value,
        },
      },
    }));
  };

  const updateJobHistoryStart = e => {
      setHistory((prevState) => ({
          ...prevState,
          jobs: {
              ...prevState.jobs,
              [jobDisplay.length]: {
                  ...prevState.jobs[jobDisplay.length],
                  Start: e.target.value
              }
          }
      }))
  }

  const updateJobHistoryEnd = e => {
      setHistory((prevState) => ({
          ...prevState,
          jobs: {
              ...prevState.jobs,
              [jobDisplay.length]: {
                  ...prevState.jobs[jobDisplay.length],
                  End: e.target.value
              }
          }
      }))
  }
  const onAddBtnClick = () => {
    setJobDisplay(
      jobDisplay.concat(
        <JobHistoryInput
          updateJobHistory={updateJobHistory}
          updateJobHistoryStart={updateJobHistoryStart}
          updateJobHistoryEnd={updateJobHistoryEnd}
          key={jobDisplay.length}
        />
      )
    );
  };

  const showHistory = ({history}) => {
    return (
        <div>
            {
                Object.entries(history).map(([key, val]) => {
                    <p key={key}>{key}: {val}</p>
                })
            }
        </div>
    )
  }
  return (
    <div className="container">
      <div className="input-container">
        <PersonalInput setName={updateName} />
        <JobInput updateJobTitle={updateJobTitle} />
        <button onClick={onAddBtnClick}>Add work experience</button>
        {jobDisplay}
      </div>
      <div className="output-container">
        <div className="name-container">
          <p>Name:</p>
          <p>{name}</p>
        </div>
        <div className="job-container">
          <p>Title</p>
          <p>{job}</p>
        </div>
        <div className="job-history-container">
          <p>Job</p>
          {/* <p>{console.log(history.jobs[0,0].Company == undefined ? history.jobs[0,0].Company : 'hello')}</p> */}
          <p>Company name: {history.jobs && history.jobs[0].Company}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
