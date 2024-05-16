"use client";

import { useState } from "react";
import Image from "next/image";
import TinderCard from "react-tinder-card";
import { Skeleton } from "@/components/ui/skeleton";
import { currentUserProfile } from "@/db/mockData/user";

type userProfile = {
  id: number;
  firstName: string;
  gender: string;
  age: number;
  location: string;
  interests: string[];
  university: string;
  imageUrl: string;
};

type TinderSwipeCardProps = {
  userProfile: userProfile;
  firstProfile: boolean;
};

export default function TinderSwipeCard({
  userProfile,
  firstProfile,
}: TinderSwipeCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const updateUserSwipeCount = (direction: string) => {
    if (direction === "right" || direction === "left") {
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

      swipeCount[`${direction}Count`] += 1;

      localStorage.setItem("swipeCount", JSON.stringify(swipeCount));
    }
  };

  return (
    <TinderCard
      className="absolute bg-white rounded-3xl"
      preventSwipe={["up", "down"]}
      onSwipe={(direction) => updateUserSwipeCount(direction)}
    >
      <div className="relative shadow-[rgba(149,157,165,0.2)_0px_8px_24px_0px] w-[600px] max-w-[85vw] h-[50vh] rounded-3xl">
        {isImageLoading && (
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-full h-[46vh] bg-slate-200 rounded-3xl" />
          </div>
        )}
        <Image
          onMouseDown={(e) => e.preventDefault()}
          style={{
            visibility: `${isImageLoading ? "hidden" : "visible"}`,
            objectFit: "cover",
            width: "100%",
            height: "91%",
            objectPosition: "center",
            borderRadius: "24px 24px 0 0",
          }}
          draggable={false}
          priority={firstProfile}
          alt="user profile pic"
          src={userProfile.imageUrl}
          sizes="100vw"
          width={0}
          height={0}
          onLoad={() => setIsImageLoading(false)}
        />
        <label className="absolute text-gray-600 bottom-4 left-7 text-xl font-semibold">
          {userProfile.firstName}, {userProfile.age}
        </label>
      </div>
    </TinderCard>
  );
}
