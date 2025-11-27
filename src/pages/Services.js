import React from "react";

export default function Services() {
  const sectionStyle = {
    background: "linear-gradient(to right, #bec3caff, #d1ceceff)",
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  const imgStyle = {
    height: "200px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <div className="container py-5">

      {/* 1. RIKSA UJI SERVICES */}
      <section id="riksa-uji" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>1. RIKSA UJI SERVICES</h3>
        <h5 className="fw-bold px-3 py-2" style={{ color: "orange", width: "fit-content" }}>
          Pemeriksaan dan Pengujian
        </h5>
        <ul className="mt-3">
          <li>Pesawat Uap Bejana Tekan (PUBT)</li>
          <li>Pesawat Angkat dan Angkut (PAPA)</li>
          <li>Pesawat Tenaga dan Produksi (PTP)</li>
          <li>Penanggulangan Kebakaran</li>
          <li>Instalasi Listrik & Penyalur Petir</li>
          <li>Elevator & Eskalator</li>
        </ul>
        <p className="mt-3">
          Melalui jasa uji riksa K3 yang independen kami membantu perusahaan memastikan peralatan yang dimiliki memenuhi persyaratan layak dan aman sesuai standar, peraturan nasional maupun internasional.
        </p>
        <div className="row mt-4 g-3 justify-content-center">
          {["33.jpg", "14.jpg", "29.jpg", "20.jpg"].map((img, i) => (
            <div className="col-6 col-md-3" key={i}>
              <img src={`/${img}`} alt={img} style={imgStyle} />
            </div>
          ))}
        </div>
      </section>

      {/* 2. PUBT */}
      <section id="pubt" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>Pesawat Uap Bejana Tekan (PUBT)</h3>
        <ul className="mt-3">
          <li>Ketel Uap</li>
          <li>Bejana Uap (Steriliser)</li>
          <li>BPV</li>
          <li>Tangki Timbun</li>
          <li>Bejana Tekan (Compressor)</li>
          <li>Pipa Bertenaga</li>
        </ul>
        <div className="row mt-4 g-3 justify-content-center">
          {["12.jpg", "25.jpg", "8.jpg"].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <img src={`/${img}`} alt={img} style={imgStyle} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAPA */}
      <section id="papa" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>Pesawat Angkat dan Angkut (PAPA)</h3>
        <h6 className="mt-3">Pesawat Angkat</h6>
        <ul className="ms-4">
          <li><strong>Dongkrak</strong>: terdiri atas dongkrak hidraulik, dongkrak pneumatik, dongkrak
            post lift, dongkrak truck/car lift, lier, dan peralatan lain yang sejenis;</li>
          <li><strong>Keran angkat</strong>: terdiri atas overhead crane, overhead travelling crane,
            hoist crane, chain block, monorail crane, wall crane/jib crane, stacker crane,
            gantry crane, semi gantry crane, launcher gantry crane, roller gantry,crane,
            rail mounted gantry crane, rubber tire gantry, crane, ship unloader crane,
            gantry luffing crane, container crane, portal crane, ship crane, barge crane,
            derrick ship crane, dredging crane, ponton crane, floating crane, floating
            derricks crane, floating ship crane, cargo crane, crawler crane, mobile crane,
            lokomotif crane dan/atau railway crane, truck crane, tractor crane, side boom
            crane/crab crane, derrick crane, tower crane, pedestal crane, hidraulik drilling
            rig, pilling crane/mesin pancang dan peralatan lain yang se jenis</li>
          <li><strong>Alat angkat pengatur posisi</strong>: pengatur posisi benda kerja, terdiri atas rotator, robotik, takel dan
            peralatan lain yang sejenis;</li>
          <li><strong>Personal platform</strong>: terdiri atas passenger hoist, gondola dan peralatan lain sejenis.</li>
        </ul>
        <h6 className="mt-3">Pesawat Angkut</h6>
        <ul className="ms-4">
          <li><strong>Alat berat</strong>: terdiri atas forklift, lifttruck, reach
            stackers, telehandler, hand lift/hand pallet, excavator,
            excavator grapple, backhoe, loader, dozer, traktor,
            grader, concrete paver, asphalt paver, asphalt sprayer,
            aspalt finisher, compactor roller/vibrator roller, dan
            peralatan lain yang sejenis</li>
          <li><strong>Kereta</strong>: erdiri atas kereta gantung, komidi putar,
            roller  coaster, kereta ayun, lokomotif beserta
            rangkaiannya, dan peralatan lain yang sejenis;</li>
          <li><strong>Personal basket</strong>: terdiri atas manlifi/boomlift,
            scissor lift, hydraulic stairs dan peralatan lain yang sejenis</li>
          <li><strong>Truk</strong>: terdiri atas tractor, truk pengangkut bahan
            berbahaya, dump truck, cargo truck lift, trailer, side
            loader truck, module transporter, axle transport, car
            towing, dan peralatan lain yang sejenis;</li>
          <li><strong>Robotik & konveyor</strong>: terdiri atas Automated
            Guided Vehicle, sabuk berjalan, ban berjalan, rantai
            berjalan dan peralatan lain yang sejenis</li>
        </ul>
        <div className="row mt-4 g-3 justify-content-center">
          {["54.jpg", "55.jpg", "56.jpg"].map((img, i) => (
            <div className="col-6 col-md-3" key={i}>
              <img src={`/${img}`} alt={img} style={imgStyle} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. PTP */}
      <section id="ptp" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>Pesawat Tenaga dan Produksi (PTP)</h3>
        <div className="row mt-4 align-items-start">
          <div className="col-md-7 text-start">
            <h6 className="fw-semibold">Penggerak Mula</h6>
            <ul>
              <li>Motor Bakar</li>
              <li>Turbin</li>
              <li>Kincir Angin</li>
              <li>Motor Penggerak Lain</li>
            </ul>
            <h6 className="fw-semibold mt-4">Transmisi Tenaga Mekanik</h6>
            <ul>
              <li>Transmisi Sabuk</li>
              <li>Transmisi Rantai</li>
              <li>Transmisi Roda Gigi</li>
            </ul>
            <h6 className="fw-semibold mt-4">Mesin Perkakas & Produksi</h6>
            <ul>
              <li>Mesin Asah</li>
              <li>Mesin Poles & Pelicin</li>
              <li>Mesin Tuang & Cetak</li>
              <li>Mesin Tempa & Pres</li>
              <li>Mesin Pon</li>
              <li>Mesin Penghancur</li>
              <li>Mesin Penggiling & Penumbuk</li>
              <li>Serta Mesin lain sejenis</li>
            </ul>
            <h6 className="fw-semibold mt-4">Tanur</h6>
            <ul>
              <li>Blast Furnace</li>
              <li>Basic Oxygen Furnace</li>
              <li>Electric Arc Furnace</li>
              <li>Refractory Furnace</li>
              <li>Tanur Pemanas (Reheating Furnace)</li>
              <li>Kiln</li>
              <li>Oven</li>
              <li>Furnace lain sejenis</li>
            </ul>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-start">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}>
              {["8.jpg", "12.jpg", "10.jpg", "43.jpg", "11.jpg", "26.jpg"].map((img, i) => (
                <img key={i} src={`/${img}`} alt={img} style={imgStyle} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Penanggulangan Kebakaran */}
      <section id="fire" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>Penanggulangan Kebakaran</h3>
        <ul>
          <li>Instalasi Hydrant & Sprinkler</li>
          <li>Instalasi Fire Alarm System</li>
          <li>Instalasi Flooding System</li>
          <li>Instalasi APAR</li>
        </ul>
        <div className="row mt-4 g-3 justify-content-center text-center">
          {["36.jpg", "32.jpg", "38.jpg"].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-4" key={i}>
              <img src={`/${img}`} alt={img} style={{ ...imgStyle, width: "300px" }} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. Instalasi Listrik & Penyalur Petir */}
      <section id="listrik" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>Instalasi Listrik & Penyalur Petir</h3>
        <h5>Instalasi Listrik (IL)</h5>
        <p> Listrik adalah bagian tak terpisahkan dalam menyelesaikan
          aktivitas perusahaan sehari-hari. Tanpa adanya listrik maka alat
          elektronik di perusahaan tak akan berfungsi. Tetapi di balik
          fungsinya itu, ada potensi bahaya yang ditimbulkan. Kesalahan
          instalasi listrik dapat mengancam keselamatan tenaga kerja,
          lingkungan, keamanan bangunan. Contohnya kebakaran. Karena
          itu tiap tenaga kerja yang berkaitan dengan listrik, untuk
          pemasangan, pengoperasian, perbaikan, dan pemeliharaan
          instalasi listrik itu wajib punya ketrampilan dan pengetahuan K3,
          dan membutuhkan surat izin beserta sertifikat K3</p>


        <h5>Penyalur Petir (IPP)</h5>
        <p> Pengujian baru & berkala di instalasi penyalur petir di gedung
          perusahaan. Ada 2 jenis bentuk dari penangkal petir yang umum
          dipakai, antara lain penangkal petir elektrostatis dan penangkal petir
          konvensional. Di mana antara keduanya itu yang menjadi pembeda
          yakni ruang lingkup proteksi dari bahaya petir sekaligus berbeda pada
          penempatannya.
          Yang perlu dipasang instalasi penyalur petir dan perlu dilakukan
          pemeriksaan dan pengujian berkala antara lain: Bangunan yang
          terpencil atau tinggi dan lebih tinggi dari pada bangunan
          sekitarnya seperti: </p>
        <ul>
          <li>menara-menara, cerobong, silo, antena pemancar, monumen dan
            lain-lain</li>
          <li> Bangunan dimana disimpan, diolah atau digunakan bahan
            yang mudah meledak atau terbakar seperti pabrik-pabrik amunisi,
            gudang penyimpanan bahan peledak dan lain-lain</li>
          <li>Bangunan untuk
            kepentingan umum seperti: tempat ibadah, rumah sakit, sekolah,
            gedung pertunjukan, hotel, pasar, stasiun, candi dan lain-lain;</li>
          <li>Bangunan untuk menyimpan barang-barang yang sukar diganti
            seperti: museum, perpustakaan, tempat penyimpanan arsip dan
            lain-lain</li>
          <li>Daerah-daerah terbuka seperti: daerah perkebunan,
            Padang Golf, Stadion Olah Raga dan tempat-tempat lainnya</li>
        </ul>
        <div className="row mt-4 g-3 justify-content-center text-center">
          {["57.webp", "59.jpg"].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-4" key={i}>
              <img src={`/${img}`} alt={img} style={{ ...imgStyle, width: "300px" }} />
            </div>
          ))}
        </div>
      </section>

      {/* 7. Elevator & Eskalator */}
      <section id="elevator" style={sectionStyle}>
        <h3 className="fw-bold" style={{ color: "blue" }}>Elevator & Eskalator</h3>
        <h6 className="fw-semibold mt-3">Elevator</h6>
        <ul>
          <li>Elevator panorama</li>
          <li>Elevator penumpang</li>
          <li>Elevator rumah tinggal</li>
          <li>Elevator kebakaran / fire elevator</li>
          <li>Elevator pasien</li>
          <li>Elevator barang</li>
        </ul>
        <p className="mt-3">
          Eskalator atau tangga jalan adalah sarana
          transportasi vertikal berupa konveyor untuk
          mengangkut orang, terdiri dari tangga terpisah yang
          dapat bergerak ke atas dan ke bawah mengikuti jalur
          berupa rail atau rantai yang digerakkan motor
        </p>
        <div className="row mt-4 g-3 justify-content-center text-center">
          {["elevator.jpg", "escalator.jpg"].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-4" key={i}>
              <img src={`/${img}`} alt={img} style={{ ...imgStyle, width: "300px" }} />
            </div>
          ))}
        </div>
      </section>

      {/* 8. NDT SERVICES */}
      <section id="ndt" style={sectionStyle}>
        <h3 style={{ color: "blue" }}>2. NDT SERVICES</h3>
        <p>
          Menawarkan jasa testing atau jasa inspeksi yang
          merupakan pengujian untuk mengetahui adanya
          keretakan, kerusakan, kebocoran atau cacat pada
          benda tanpa merusak benda tersebut. Diantaranya
          NDT Services untuk Magnetic – Penetrant Testing
          (MT-PT), Ultrasonic Testing (UT), Radiographic
          Inspection dan Visual Inspection
        </p>
        <div className="row mt-4 g-3 justify-content-center text-center">
          {["21.jpg", "22.jpg", "41.jpg"].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-4" key={i}>
              <img src={`/${img}`} alt={img} style={{ ...imgStyle, width: "300px" }} />
            </div>
          ))}
        </div>
      </section>

      {/* 9. RACKING INSPECTION */}
      <section id="racking" style={sectionStyle}>
        <h3 style={{ color: "blue" }}>3. RACKING INSPECTION</h3>
        <p>
          Berbicara tentang manajemen gudang, selalu lebih baik untuk prioritaskan keselamatan.
          Memastikan Anda menjadwalkan inspeksi visual secara rutin serta inspeksi rak tahunan
          akan menghemat waktu dan uang Anda dalam jangka panjang. Kegagalan untuk
          melakukan inspeksi rutin dengan perusahaan yang berkompeten dapat menyebabkan
          penuntutan jika kecelakaan terjadi, dan hal yang sama berlaku untuk ketidakcukupan
          perbaikan atau penggantian peralatan yang rusak atau patah. Di Rack It Up, kami memiliki
          pengalaman yang luas dalam industri rak palet dan sebagai hasilnya dapat memberikan
          saran dan bantuan dengan semua aspek dari desain, manufaktur, instalasi, dan inspeksi
          rak palet
        </p>
        <div className="row mt-4 g-3 justify-content-center text-center">
          {["52.jpg", "53.jpg"].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-4" key={i}>
              <img src={`/${img}`} alt={img} style={{ ...imgStyle, width: "300px" }} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
