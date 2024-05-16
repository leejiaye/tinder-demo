import UserMainHeader from "@/components/header/UserMainHeader";
import { getRecommendedUsers } from "@/server/userActions";
import TinderSwipeCard from "@/components/card/TinderSwipeCard";

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

export default async function Home() {
  const users: any = await getRecommendedUsers();

  let errMessage;

  if (users.err) {
    errMessage = users.message;
  }

  return (
    <main className="flex min-h-screen w-screen flex-col items-center gap-5 py-16">
      <UserMainHeader />
      <div className="flex justify-center mt-20">
        <div className="absolute top-1/3 text-lg font-semibold text-gray-400 text-center">
          {errMessage || (
            <>
              You have reached the daily limit.
              <br />
              Please subscribe to get unlimited swipes!
            </>
          )}
        </div>
        {!errMessage &&
          users.map((user: userProfile, index: number) => (
            // user with lower score will be displayed first
            <TinderSwipeCard
              key={user.id}
              userProfile={user}
              firstProfile={index === 0}
            />
          ))}
      </div>
    </main>
  );
}
