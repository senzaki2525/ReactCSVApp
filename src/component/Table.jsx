import React from "react";

export default function Table(props) {
  const table = props.table;
  let arr = [];
  Object.keys(table[0]).map((key) => {
    arr.push(key);
  });

  return (
    <div className="table">
      <h2>データの読み込みが完了しました</h2>
      <table border="1">
        <thead>
          <tr>
            {arr.map((key, index) => {
              return <th><font color="white">{key}</font></th>;
            })}
          </tr>
        </thead>
        <tbody>
          {table.map((test, index) => {
            return (
              <tr>
                {Object.values(test).map((value) => {
                  return <td>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
