import { Link } from "react-router-dom";
import Partial from "../../../components/layouts/admin/partial";
import GlobalTable from "../../../components/resusable/table";
import { Button } from "flowbite-react";

const userColumns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Status", accessor: "status" },
  { header: "Role", accessor: "role" },
  { header: "Created At", accessor: "createdAt" },
  {
    header: "Actions",
    render: (row) => (
      <div className="flex gap-2">
        <button className="text-blue-500 hover:underline" onClick={() => console.log("Edit", row)}>Edit</button>
        <button className="text-red-500 hover:underline" onClick={() => console.log("Delete", row)}>Delete</button>
      </div>
    ),
    align: "text-right",
  },
];


const userData = [
  {
    name: "Alice",
    email: "alice@example.com",
    status: "Active",
    role: "Admin",
    createdAt: "2024-01-15",
  },
  {
    name: "Bob",
    email: "bob@example.com",
    status: "Inactive",
    role: "Editor",
    createdAt: "2024-03-02",
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    status: "Active",
    role: "Viewer",
    createdAt: "2024-04-20",
  },
];




const Media = () =>{
    return (
        <div>
            <Partial page="Media" section="Home" link="/admin/media" />
            <Link to="/admin/media/create" className="btn btn-primary mb-4">
                <Button>Create Media</Button>
            </Link>
            <div className="mt-5">
                <GlobalTable columns={userColumns} data={userData} />
            </div>
          

        </div>
    )
}

export default Media;