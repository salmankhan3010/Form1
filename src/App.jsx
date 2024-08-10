import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [rollNo, setEnrollNum] = useState();
  const [tableData, setTableData] = useState([]);

  const handleSubmit = () => {
    if (name && rollNo) {
      const newEntry = { name, rollNo };
      setTableData((prevData) => [...prevData, newEntry]);
      setName("");
      setEnrollNum("");
    }
  };

  return (
    <div>
      <div className=" inline-grid gap-6 mt-20 ">
        <input
          className=" p-4 border-4 rounded-xl w-50 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className=" p-4 border-4 rounded-xl w-50 outline-none"
          value={rollNo}
          onChange={(e) => setEnrollNum(e.target.value)}
          type="text"
          placeholder="Enter Your Roll No"
        />
        <button
          onClick={handleSubmit}
          className=" bg-slate-800 text-white font-bold p-4 rounded-xl"
        >
          Submit
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg mt-10">
        <thead>
          <tr>
            <th className="px-6 py-3 text-sm text-center font-semibold text-gray-700 bg-gray-100 border-b border-gray-200">
              Name
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 bg-gray-100 border-b border-gray-200">
              Roll no
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, key) => (
            <tr key={key} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                {val.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                {val.rollNo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
