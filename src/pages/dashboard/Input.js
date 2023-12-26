// Mengimpor React dan beberapa hook dari pustaka React
import React, { useState, useEffect } from 'react';
// Mengimpor gaya CSS dari './tabelStyle.css'
import './tabelStyle.css';

// Komponen Input
const Input = () => {
  // State 'data' dan fungsi 'setData' menggunakan useState
  const [data, setData] = useState([]);
  // Menggunakan useEffect untuk pemanggilan data dari API
  useEffect(() => {
    // Fungsi fetchData untuk melakukan pemanggilan data asinkron
    const fetchData = async () => {
      try {
        // Memanggil API menggunakan fetch
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Mendapatkan hasil respon dalam format JSON
        const results = await response.json();
        // Mengatur hasil respon ke dalam state 'data' menggunakan setData
        setData(results);
      } catch (error) {
        // Menangani kesalahan jika terjadi selama pemanggilan data
        console.error("Error Menampilkan data", error);
      }
    };
    // Menjalankan fungsi fetchData saat komponen diinisialisasi
    fetchData();
  }, []);

  // Mereturn elemen JSX yang akan ditampilkan dalam komponen Input
  return (
    <div>
      {/* Menampilkan elemen h1 dengan teks 'Ini adalah Halaman Dashboard' */}
      <h1>Ini adalah Halaman Dashboard</h1>
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
            <tr key={user.id}>
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
  );
};

// Mengekspor komponen Input agar dapat digunakan di tempat lain dalam aplikasi
export default Input;
