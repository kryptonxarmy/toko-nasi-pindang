import Navbar from "@/components/my-component/Navbar";
import TableChecklistKesesuaian from "@/components/my-component/TableChecklistKesesuaian";
import TableDataKendaraan from "@/components/my-component/TableDataKendaraan";
import TableDimensiKendaraan from "@/components/my-component/TableDimensiKendaraan";
import TableKaroseriKendaraan from "@/components/my-component/TableKaroseriKendaraan";
import TableKeterangan from "@/components/my-component/TableKeterangan";
import { FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Footer from "@/components/my-component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen relative">
      <Navbar />
      <div className="flex flex-col w-full pb-10 px-[2rem] md:px-[8rem] mt-[8rem]">
        <Separator />
        <div className="flex flex-col mb-10 mt-3 relative">
          <h1 className="text-center text-[2.2rem] font-semibold">DATA SRUT</h1>
          <div className="relative flex mt-2 items-center justify-center">
            <Separator className="w-[6rem] mx-auto" />
            <div className="absolute w-[3rem] h-[.23rem] bg-[#18d26e] -top-[0.10rem]" />
          </div>
        </div>
        <Separator />
        <h1 className="font-semibold my-4 text-[#306cba] text-xl">DATA KENDARAAN :</h1>
        <Separator />
        <div className="mt-4">
          <TableDataKendaraan />
        </div>

        <Separator className="mt-4" />
        <h1 className="font-semibold my-4 text-[#306cba] text-xl">1. DIMENSI KENDARAAN :</h1>
        <Separator />
        <div className="mt-4">
          <TableDimensiKendaraan />
        </div>

        <Separator className="mt-4" />
        <h1 className="font-semibold my-4 text-[#306cba] text-xl">2. KAROSERI KENDARAAN :</h1>
        <Separator />
        <div className="mt-4">
          <TableKaroseriKendaraan />
        </div>

        <Separator className="mt-4" />
        <h1 className="font-semibold my-4 text-[#306cba] text-xl">3. BENTUK FISIK KENDARAAN :</h1>
        <Separator />
        <div className="flex px-4 flex-col md:flex-row gap-8 mt-4 justify-around">
          <div className="w-full md:w-1/3">
            <img className="w-full" src="https://ujitiperb-dephub-go.id/userfiles/images/450x338-img-20240707-wa0020.jpg" alt="depan" />
            <h1 className="text-center text-[#306cba] mt-2">TAMPAK DEPAN</h1>
          </div>
          <div className="w-full md:w-1/3">
            <img className="w-full" src="https://ujitiperb-dephub-go.id/userfiles/images/450x338-img-20240707-wa0019.jpg" alt="samping" />
            <h1 className="text-center text-[#306cba] mt-2">TAMPAK SAMPING</h1>
          </div>
          <div className="w-full md:w-1/3">
            <img className="w-full" src="https://ujitiperb-dephub-go.id/userfiles/images/450x338-img-20240707-wa0018.jpg" alt="belakang" />
            <h1 className="text-center text-[#306cba] mt-2">TAMPAK BELAKANG</h1>
          </div>
        </div>

        <Separator className="mt-4" />
        <h1 className="font-semibold my-4 text-[#306cba] text-xl">4. KETERANGAN :</h1>
        <Separator />
        <div className="mt-4">
          <TableKeterangan />
        </div>

        <Separator className="mt-4" />
        <h1 className="font-semibold my-4 text-[#306cba] text-xl">5. CEKLIST KESESUAIAN DATA FISIK KENDARAAN DENGAN SK RANCANG BANGUN :</h1>
        <Separator />
        <div className="mt-4">
          <TableChecklistKesesuaian />
        </div>

        <Separator className="mt-8 mb-3" />
        <div className="w-full flex justify-center">
          <Button className="gap-1 py-5 text-xl font-normal mx-auto bg-[#17a2b8]">
            <FaHome />
            Home
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
