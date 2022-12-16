import React from "react";
import Table, { SelectColumnFilter, StatusPill } from "./Table"; // new
import Sidebar from "./components/sidebar";
import Content from "./components/content";

const getData = () => {
  const data = [
    {
      name: "Jane Cooper",
      count: 1,
      title: "-",
      department: "Optimization",
      status: "-",
      role: "Admin",
    },
    {
      name: "Cody Fisher",
      count: 2,
      title: "-",
      department: "Intranet",
      status: "-",
      role: "Owner",
    },
    {
      name: "Esther Howard",
      count: 2,
      title: "-",
      department: "Directives",
      status: "-",
      role: "Member",
    },
    {
      name: "Jenny Wilson",
      count: 2,
      title: "-",
      department: "Program",
      status: "-",
      role: "Member",
    },
    {
      name: "Kristin Watson",
      count: 2,
      title: "-",
      department: "Mobility",
      status: "-",
      role: "Admin",
    },
    {
      name: "Cameron Williamson",
      count: 2,
      title: "-",
      department: "Security",
      status: "-",
      role: "Member",
    },
  ];
  return [...data, ...data, ...data];
};

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Device Name",
        accessor: "name",
      },
      {
        Header: "Count",
        accessor: "count",
      },
      {
        Header: "Issued Date",
        accessor: "title",
      },
      {
        Header: "Return Date",
        accessor: "status",
      },

      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className="flex flex-row h-screen fixed bg-gray-100 text-gray-900">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-screen overflow-scroll ">
        <div>
          <Content />
        </div>
        <div className="pt-10">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
