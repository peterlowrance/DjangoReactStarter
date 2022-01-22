import { useEffect, useState } from "react";
import Table from "./Table";
import Header from "./Header";

export default function App() {
  const [columnNames, setColumnNames] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setColumnNames(["ID", "name", "value"]);
    setData([
      [1, "jack", "asdf"],
      [2, "jill", "ghjk"]
    ]);
  }, []);

  return (
    <div className="App">
      <Header columnNames={columnNames} />
      <Table columnNames={columnNames} data={data} />
    </div>
  );
}
