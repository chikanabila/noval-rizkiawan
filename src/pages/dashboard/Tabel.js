import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tabelStyle.css";

const Tabel = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(" https://jsonplaceholder.typicode.com/users");
        const results = await response.json();
        setdata(results);
      } catch (error) {
        console.error("Error Menampilkan data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to={"/login/dashboard"}>Tambah Data</Link>
      <div className="table-container">
        <div className="table-card">
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>No telephone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="table-row">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabel;