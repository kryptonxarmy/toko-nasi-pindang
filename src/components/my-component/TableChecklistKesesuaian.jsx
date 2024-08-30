import React from "react";

export default function TableChecklistKesesuaian() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <tbody>
          {[
            {
              left: {
                title: "A. KESESUAIAN LANDASAN",
                desc: "SESUAI",
              },
              right: {
                title: "G. KESESUAIAN DIMENSI BAK MUATAN",
                desc: "SESUAI",
              },
            },
            {
              left: {
                title: "B. KESESUAIAN BENTUK FISIK KENDARAAN",
                desc: "SESUAI",
              },
              right: {
                title: "H. KESESUAIAN VOLUME BAK MUATAN",
                desc: "SESUAI",
              },
            },
            {
              left: {
                title: "C. KESESUAIAN DIMENSI KENDARAAN",
                desc: "SESUAI",
              },
              right: {
                title: "I. KESESUAIAN DIMENSI DAN JUMLAH TEMPAT DUDUK",
                desc: "SESUAI",
              },
            },
            {
              left: {
                title: "D. KESESUAIAN MATERIAL",
                desc: "SESUAI",
              },
              right: {
                title: "J. KESESUAIAN JARAK TEMPAT DUDUK",
                desc: "SESUAI",
              },
            },
            {
              left: {
                title: "E. KESESUAIAN POSISI LAMPU - LAMPU",
                desc: "SESUAI",
              },
              right: {
                title: "K. KESESUAIAN FASILITAS TEMPAT KELUAR DARURAT",
                desc: "SESUAI",
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
              <span className="text-[#17aabb] text-sm md:text-md">F. KESESUAIAN UKURAN BAN</span>
              <br />
              <span className="text-[#28A745] text-sm md:text-md">SESUAI</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
