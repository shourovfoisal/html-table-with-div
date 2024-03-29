import "./App.css";
import { mockData, tableHeaders } from "./mockData";

function App() {
  return (
    <div className="tableOuter">
      <div className="table">
        {tableHeaders.map((header, idx, mainArr) => (
          <div
            className="row"
            style={idx === mainArr.length - 1 ? { borderBottom: "none" } : {}}
            key={header.accessorKey}
          >
            <div className="cell headerCell">{header.header}</div>
            {mockData.map((data) => (
              <div className="cell" key={data["date"]}>
                {data[header.accessorKey as keyof typeof data]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
