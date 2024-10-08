import React from "react";
import  DetailLampiranAG  from "./DetailLampiranAG";

export default function TableDataKendaraan() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <tbody>
          {[
            {
              left: {
                title: "NO. SRUT",
                desc: "479988/IX/SRUT-153/DJPD-SPD/7/2024",
              },
              right: {
                title: "NAMA KAROSERI",
                desc: "PT. ADHIKARISMA PRATAMA",
              },
            },
            {
              left: {
                title: "NO. SK RANCANG BANGUN",
                desc: "SK.221/AJ.402/DRJD/2018",
              },
              right: {
                title: "TANGGAL SK RANCANG BANGUN",
                desc: "9 SEPTEMBER 2018",
              },
            },
            {
              left: {
                title: "NOMOR RANGKA",
                desc: "MHCNLR55HJJ081119",
              },
              right: {
                title: "NOMOR MESIN",
                desc: "M081119",
              },
            },
            {
              left: {
                title: "MEREK",
                desc: "ISUZU/ NLR 55 T LX",
              },
              right: {
                title: "JENIS KENDARAAN",
                desc: "MICROBUS",
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
          <tr className="bg-gray-100">
            <td className="p-4 border border-gray-200">
              <span className="text-[#17aabb]">WARNA</span>
              <br />
              <span className="text-[#28A745]">PINK MAGENTA</span>
            </td>
            <td className="p-4 border border-gray-200 ">
              <span className="text-[#17aabb]">LAMPIRAN</span>
              <br />
              {/* <button className="px-2 py-1 bg-[#28A745] text-sm md:text-md text-white rounded">LIHAT LAMPIRAN KENDARAAN</button> */}
              <DetailLampiranAG />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
