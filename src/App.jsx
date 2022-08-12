import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

import Title from "./component/Title";
import Table from "./component/Table";

export default function App() {
  const [table, setTable] = useState(null);

  const handleForce = (data, fileInfo) => {
    setTable(data);
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_")
  };

  return (
    <div className="App">
      <Title />
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      {table && <Table table={table} />}
    </div>
  );
}
