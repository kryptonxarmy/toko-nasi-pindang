import React from "react";

export default function TableDimensiKendaraan() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <tbody>
          {[
            {
              left: {
                title: "PANJANG TOTAL",
                desc: "6120",
              },
              right: {
                title: "LEBAR TOTAL",
                desc: "1740",
              },
            },
            {
              left: {
                title: "TINGGI TOTAL",
                desc: "2350",
              },
              right: {
                title: "JARAK SUMBU 1 - 2",
                desc: "3405",
              },
            },
            {
              left: {
                title: "REAR OVERHANG (ROH)",
                desc: "1700",
              },
              right: {
                title: "JARAK SUMBU 2 - 3",
                desc: "0",
              },
            },
            {
              left: {
                title: "FRONT OVERHANG (FOH)",
                desc: "1015",
              },
              right: {
                title: "JARAK SUMBU 3 - 4",
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
        </tbody>
      </table>
    </div>
  );
}
