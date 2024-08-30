import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";
// import { Label } from "@/components/ui/label"

export function DetailLampiran() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-2 py-1 bg-[#28A745] text-sm md:text-md hover:bg-green-700 hover:text-white text-white rounded">
          LIHAT LAMPIRAN KENDARAAN
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl max-w-sm md:mx-0 mx-auto h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-[#17a2b8] font-light">LAMPIRAN DOKUMEN KENDARAAN</DialogTitle>
        </DialogHeader>
        <div className="h-[25rem]">
          <div className="w-full h-full border-2 overflow-scroll border-black">
            <div className="h-[15rem]  w-fit">
              <img src={"/stnk_palsu.jpeg"} alt="stnk" className="h-[20rem] object-cover" />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogPrimitive.Close>
            <div className="w-full flex items-end justify-end">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Keluar</Button>
            </div>
          </DialogPrimitive.Close>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
