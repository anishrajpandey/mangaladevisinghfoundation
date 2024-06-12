"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const img = searchParams.get("img") || "/images/image1.jpg";
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-transparent m-auto p-8 relative">
            <div className="flex flex-col items-center relative w-[90vw] h-[90vh] mx-auto">
              <Image
                src={img}
                width={700}
                height={700}
                alt="unable to load image"
              />

              <br />
              <Link href={pathname}>
                <button
                  type="button"
                  className="bg-red-400 text-white rounded-full p-4 px-6 flex justify-center items-center top-4 right-4 fixed text-4xl"
                >
                  x
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
