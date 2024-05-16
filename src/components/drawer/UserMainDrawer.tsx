"use client";

import { useEffect, useState } from "react";
import { FaUserLarge, FaHeart } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RxReset } from "react-icons/rx";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { currentUserProfile } from "@/db/mockData/user";

export default function UserMainDrawer() {
  const [userMainDrawerOpen, setUserMainDrawerOpen] = useState(false);
  const [swipeCount, setSwipeCount] = useState({ leftCount: 0, rightCount: 0 });
  const { firstName, lastName, age, gender, university, interests, location } =
    currentUserProfile;

  useEffect(() => {
    if (userMainDrawerOpen) {
      let swipeCount: any = localStorage.getItem("swipeCount");

      if (swipeCount) {
        try {
          swipeCount = JSON.parse(swipeCount);
        } catch (err) {
          swipeCount = {
            leftCount: 0,
            rightCount: 0,
          };
        }
      } else {
        swipeCount = {
          leftCount: 0,
          rightCount: 0,
        };
      }

      setSwipeCount(swipeCount);
    }
  }, [userMainDrawerOpen]);

  const handleResetSwipeCount = () => {
    localStorage.removeItem("swipeCount");
    setUserMainDrawerOpen(false);
  };

  return (
    <Drawer
      direction="left"
      open={userMainDrawerOpen}
      onOpenChange={setUserMainDrawerOpen}
    >
      <DrawerTrigger asChild>
        <span>
          <FaUserLarge
            fontSize="1.7rem"
            className="text-gray-500 cursor-pointer"
          />
        </span>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 left-0 right-auto mt-0 w-[500px] rounded-none">
        <ScrollArea className="h-screen">
          <div className="mx-auto w-full p-5">
            <DrawerHeader>
              <DrawerTitle className="font-bold text-xl">
                MY PROFILE
              </DrawerTitle>
              <DrawerDescription>
                Update your profile to make more friends &#128516;
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-4 font-semibold">
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">First Name: </label>
                <span className="text-gray-500">{firstName}</span>
              </div>
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">Last Name: </label>
                <span className="text-gray-500">{lastName}</span>
              </div>
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">Age:</label>
                <span className="text-gray-500">{age}</span>
              </div>
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">Gender:</label>
                <span className="text-gray-500 capitalize">{gender}</span>
              </div>
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">University:</label>
                <span className="text-gray-500">{university}</span>
              </div>
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">Interests:</label>
                <span className="text-gray-500 capitalize">
                  {interests.join(", ")}
                </span>
              </div>
              <div className="flex items-center gap-5 rounded-lg h-10">
                <label className="text-amber-500">Location:</label>
                <span className="text-gray-500">{location}</span>
              </div>
              <div
                style={{ color: "#ec5e6f" }}
                className="flex items-center gap-5 rounded-lg h-10 text-3xl pt-20"
              >
                <span>
                  <IoClose />
                </span>
                <span>{swipeCount.leftCount}</span>
              </div>
              <div
                style={{ color: "#76e2b3" }}
                className="flex items-center gap-5 rounded-lg h-10 text-3xl pt-20"
              >
                <span>
                  <FaHeart />
                </span>
                <span>{swipeCount.rightCount}</span>
              </div>
              <div
                style={{ color: "#915dd1" }}
                className="flex flex-col gap-5 rounded-lg h-10 pt-10 italic"
              >
                <span className="text-gray-400 text-sm">
                  The count is just stored for fun at the moment in
                  localStorage. Feel free to reset them.
                </span>
                <span
                  onClick={handleResetSwipeCount}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <RxReset /> Reset
                </span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
