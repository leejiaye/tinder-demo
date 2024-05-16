import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
import UserMainDrawer from "@/components/drawer/UserMainDrawer";

export default function UserMainHeader() {
  return (
    <div className="flex relative w-full items-center justify-evenly">
      <UserMainDrawer />
      <Image
        style={{ objectFit: "contain", width: "140px", height: "auto" }}
        alt="tinder logo"
        src="/tinder.png"
        sizes="100vw"
        width={0}
        height={0}
        priority={true}
      />
      <IoReorderThreeOutline fontSize="2rem" className="text-gray-500" />
    </div>
  );
}
