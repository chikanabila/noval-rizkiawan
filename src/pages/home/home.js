import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
    // Menampilkan halaman web
    return (
      <html lang="en">
        <Navbar />
        <head >
          <title>Mebel Artomoro</title>
        </head>
        <body >
        
          <header >
            <h1>Mebel Artomoro</h1>
            <h2>Pembuatan Perlengkapan Rumah </h2>
          </header>
  
          <section id="tentang-kami">
            <h2>Tentang Kami</h2>
            <p>
                Mebel Artomoro adalah tempat Pembuatan Perlengkapan Rumah.
                Kami melayani jasa:
                <ul>
                    <li>Pembuatan Meja</li>
                    <li>Pembuatan Kursi</li>
                    <li>Pembuatan Almari</li>
                    <li>Pembuatan Pintu</li>
                    <li>Service Meja dan Kursi yang Rusak</li>
                    <li>Menjual Kayu,Batako,pasir</li>
                    <li>Dll...</li>
                </ul>
            </p>
          </section>
  
          <section id="kontak-kami">
            <h2>Kontak Kami</h2>
            <p>
                <h4>Mebel Artomoro</h4>
                <ul>
                    <h4>Nama Pemilik: Ponimin</h4>
                    <h4>Alamat: Jl. Ikan Layur SutriSobo</h4>
                    <h4>Telepon: 085331533600</h4>
                    <h4>Email: ArtomoroMebel@gmail.com</h4>
                </ul>
            </p>
          </section>
        
        </body>
      </html>
    );
};
  
  export default Home;