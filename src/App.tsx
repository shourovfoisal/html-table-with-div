import "./App.css";
import { mockDataLong, tableHeaders } from "./mockData";

function App() {
  return (
    <div className="tableOuter">
      <div className="table">
        {tableHeaders.map((header) => (
          <div className="row" key={header.accessorKey}>
            {mockDataLong.map((data) => (
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
