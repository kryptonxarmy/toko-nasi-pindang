import React from "react";
import { Separator } from "../ui/separator";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="bg-[#07aabf] py-8 md:h-[70vh] px-[2rem] md:px-[8rem] z-[50] w-full bottom-0 gap-8 flex flex-col md:flex-row justify-between text-white items-center">
        <div className="w-full md:w-[35%] flex flex-col gap-2 h-[70%]">
          <h1 className="font-semibold">ALAMAT</h1>
          <div className="flex">
            <Separator className="w-[4rem] h-[.18rem] bg-[#18d26e]" />
            <Separator className="w-[80%] h-[.18rem] bg-[#555555]" />
          </div>
          <p>Jl.Medan Merdeka Barat No 8. Jakarta Pusat. DKI Jakarta 10110 - Indonesia</p>
          <div className="mt-6">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.64995846932!2d106.822747!3d-6.175918000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42b949bdca3%3A0xe84e3d2305bf84e9!2sJl.%20Medan%20Merdeka%20Barat%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010110%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1724981613184!5m2!1sid!2sus"
              width="600"
              height="700"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-2 h-[70%]">
          <h1 className="font-semibold">TENTANG KAMI</h1>
          <div className="flex">
            <Separator className="w-[4rem] h-[.18rem] bg-[#18d26e]" />
            <Separator className="w-[80%] h-[.18rem] bg-[#555555]" />
          </div>
          <p className="text-sm text-justify md:text-md md:leading-7">
            Untuk Peningkatan Pelayanan Penerbitan Sertifkasi Registrasi Uji Tipe Kendaraan Bermotor, Kementerian Perhubungan Mengembangkan Sistem SRUT Rancang Bangun 2018 Dimana Permohonan SRUT Dapat Diajukan Secara Online Dan Persyaratan
            Permohonan Sertifkasi Registrasi Uji Tipe Kendaraan Bermotor Dapat Dipelajari Pada Sistem Ini.
          </p>
          <div className="flex gap-4">
            <div className="bg-[#333333] hover:bg-[#28a745] p-2 rounded-full">
              <FaTwitter className="text-2xl" />
            </div>
            <div className="bg-[#333333] hover:bg-[#28a745] p-2 rounded-full">
              <IoLogoFacebook className="text-2xl" />
            </div>
            <div className="bg-[#333333] hover:bg-[#28a745] p-2 rounded-full">
              <FaInstagram className="text-2xl" />
            </div>
            <div className="bg-[#333333] hover:bg-[#28a745] p-2 rounded-full">
              <IoMdMail className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[12vh] md:text-start md:px-[8rem] text-white flex items-center justify-center md:justify-start bg-[#00bcd4]">
        <p className="text-[14px] text-center md:text-md md:text-start">Copyright by Sistem Sertifikasi Registrasi Uji Tipe 2019. All right reserved.</p>
      </div>
    </>
  );
}

export default Footer;
