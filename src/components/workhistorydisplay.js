import React from "react";

export function WorkHistoryDisplay({ history }) {
    let companies = []
    let startDates = []
    let endDates = []
    function logCompany() {

            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                console.log(history.jobs[i].Company)
                    companies.push(`Worked at ${history.jobs[i].Company}`)
            }
            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                startDates.push(`${history.jobs[i].Start}`)
            }
            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                endDates.push(`${history.jobs[i].End}`)
            }
    }

  return (
    <div>
      <h2>Work History</h2>
      {logCompany()}
      {companies.map((i,x) => {
          return (
              <div key={x}>
                  {}
              </div>
          )
      })}
    </div>
  );
}
