export const metadata = {
  title: "Profil | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Sejarah, Visi, Misi, dan Identitas Sekolah SMA-SMKS YAPIM Taruna Pandan.",
};

export default function ProfilPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl tracking-tight mb-4">
            Profil Sekolah
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Mengenal lebih dekat SMA-SMKS YAPIM Taruna Pandan, lembaga pendidikan unggulan di Tapanuli Tengah.
          </p>
        </div>

        {/* Identity Cards */}
        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 mb-12 border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b pb-4">Identitas Resmi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Nama Sekolah</p>
              <p className="font-bold text-lg text-slate-800 dark:text-slate-100">SMA-SMKS YAPIM TARUNA PANDAN</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">NPSN</p>
              <p className="font-bold text-lg text-slate-800 dark:text-slate-100">69762757</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Status</p>
              <p className="font-bold text-lg text-slate-800 dark:text-slate-100">Swasta</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Akreditasi</p>
              <p className="font-bold text-lg text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">B</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Kepala Sekolah</p>
              <p className="font-bold text-lg text-slate-800 dark:text-slate-100">Parunggulan Tobing</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Alamat</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">JL. AHMAD YANI PANDAN, Kec. Pandan, Kab. Tapanuli Tengah</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg shadow-blue-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-white/20 p-2 rounded-lg mr-3">🔭</span> Visi
            </h2>
            <p className="text-lg leading-relaxed">
              &quot;Menjadi institusi pendidikan menengah yang unggul dalam IPTEK, kokoh dalam IMTAQ, berwawasan global, serta menghasilkan lulusan yang berkarakter tangguh dan berjiwa kepemimpinan.&quot;
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3 text-blue-600">🎯</span> Misi
            </h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300 list-disc list-inside">
              <li>Menyelenggarakan proses pembelajaran yang inovatif, interaktif, dan berbasis teknologi.</li>
              <li>Menumbuhkembangkan nilai-nilai spiritual, kedisiplinan, dan budi pekerti luhur bagi seluruh warga sekolah.</li>
              <li>Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan.</li>
              <li>Membangun kemitraan strategis dengan berbagai institusi untuk memperluas wawasan siswa.</li>
            </ul>
          </div>
        </div>

        {/* History */}
        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Sejarah Singkat</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p className="mb-4">
              Yayasan Perguruan Indonesia Membangun (YAPIM) Taruna Pandan didirikan berlandaskan kepedulian yang mendalam terhadap kualitas pendidikan di wilayah Kabupaten Tapanuli Tengah. Sejak awal berdirinya, SMA-SMKS YAPIM Taruna Pandan selalu berupaya menjadi pelita pengetahuan yang tak hanya mengedepankan aspek kecerdasan kognitif, namun juga karakter Taruna yang disiplin dan bertanggung jawab.
            </p>
            <p>
              Hingga saat ini, dengan didukung oleh tenaga pendidik yang berdedikasi dan fasilitas yang terus dikembangkan, YAPIM Taruna Pandan telah mencetak ratusan alumni yang tersebar di berbagai perguruan tinggi terkemuka dan lapangan pekerjaan profesional di seluruh penjuru negeri.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
