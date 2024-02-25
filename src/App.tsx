import "./App.css";
import { mockData, tableHeaders } from "./mockData";

function App() {
  return (
    <div className="table">
      {tableHeaders.map((header) => {
        return (
          <div className="row" key={header.accessorKey}>
            {mockData.map((data) => {
              return (
                <div className="cell" key={data["date"]}>
                  {data[header.accessorKey as keyof typeof data]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
