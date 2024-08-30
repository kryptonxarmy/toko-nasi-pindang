import React from "react";

export default function TableKaroseriKendaraan() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <tbody>
          {[
            {
              left: {
                title: "JUMLAH SILINDER",
                desc: "4",
              },
              right: {
                title: "ISI SILINDER",
                desc: "2771",
              },
            },
            {
              left: {
                title: "PANJANG BOX / BAK / TANGKI",
                desc: "0",
              },
              right: {
                title: "DAYA MOTOR",
                desc: "91,94 KW/2900 RPM",
              },
            },
            {
              left: {
                title: "LEBAR BOX / BAK / TANGKI",
                desc: "0",
              },
              right: {
                title: "JUMLAH TEMPAT DUDUK",
                desc: "19",
              },
            },
            {
              left: {
                title: "TINGGI BOX / BAK / TANGKI",
                desc: "0",
              },
              right: {
                title: "RUMAH BADAN",
                desc: "1",
              },
            },
            {
              left: {
                title: "JBB/JBKB",
                desc: "5100",
              },
              right: {
                title: "JENIS ANGKUTAN",
                desc: "ANGKUTAN ORANG",
              },
            },
            {
              left: {
                title: "JBI/JBKI",
                desc: "5100",
              },
              right: {
                title: "BAHAN BAKAR",
                desc: "SOLAR",
              },
            },
            {
              left: {
                title: "SUDUT PERGI",
                desc: "21",
              },
              right: {
                title: "PINTU KELUAR DARURAT",
                desc: "0",
              },
            },
            {
              left: {
                title: "VARIAN",
                desc: "STANDART",
              },
              right: {
                title: "KETERANGAN BAK/TANGKI",
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
        </tbody>
      </table>
    </div>
  );
}
