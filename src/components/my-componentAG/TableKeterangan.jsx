import React from "react";

export default function TableKeterangan() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <tbody>
          {[
            {
              left: {
                title: "UKURAN BAN PADA SUMBU 1",
                desc: "225/70/R15 (TUNGGAL)",
              },
              right: {
                title: "UKURAN BAN PADA SUMBU 2",
                desc: "225/70/R15 (TUNGGAL)",
              },
            },
            {
              left: {
                title: "UKURAN BAN PADA SUMBU 3",
                desc: "-",
              },
              right: {
                title: "UKURAN BAN PADA SUMBU 4",
                desc: "-",
              },
            },
            {
              left: {
                title: "KEKUATAN RANCANGAN SUMBU 1",
                desc: "2550",
              },
              right: {
                title: "KEKUATAN RANCANGAN SUMBU 2",
                desc: "2550",
              },
            },
            {
              left: {
                title: "KEKUATAN RANCANGAN SUMBU 3",
                desc: "0",
              },
              right: {
                title: "KEKUATAN RANCANGAN SUMBU 4",
                desc: "0",
              },
            },
            {
              left: {
                title: "KONFIGURASI SUMBU",
                desc: "1.1",
              },
              right: {
                title: "KELAS JALAN",
                desc: "III",
              },
            },
            {
              left: {
                title: "LEBAR PINTU SUPIR",
                desc: "0",
              },
              right: {
                title: "JARAK BANGKU",
                desc: "0",
              },
            },
            {
              left: {
                title: "BERAT KOSONG (KG)",
                desc: "0",
              },
              right: {
                title: "DAYA ANGKUT BARANG (KG)",
                desc: "0",
              },
            },
          ].map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="w-1/2 p-4 text-sm md:text-md border-b border-gray-200">
                <span className="text-[#17aabb]">{row.left.title}</span>
                <br />
                <span className="text-[#28A745]">{row.left.desc}</span>
              </td>
              <td className="w-1/2 p-4 text-sm md:text-md border border-gray-200">
                <span className="text-[#17aabb] text-sm md:text-md">{row.right.title}</span>
                <br />
                <span className="text-[#28A745] text-sm md:text-md">{row.right.desc}</span>
              </td>
            </tr>
          ))}
          <tr className={"bg-white"}>
            <td colSpan={1} className="w-1/2 p-4 text-sm md:text-md border border-gray-200">
              <span className="text-[#17aabb] text-sm md:text-md">DAYA ANGKUT PENUMPANG (KG)</span>
              <br />
              <span className="text-[#28A745] text-sm md:text-md">20</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
