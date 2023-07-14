import react from "react";
import Image from 'next/image';

interface UserDetailProps {
  user: {
    _id: string;
    name: string;
    avatarSrc: string;
    description: string;
    rank: string;
    village: string;
    // Add other properties as needed
  };
}


 export default function userDetail({ user } : UserDetailProps) {
  return (
    <>
      {user && Object.keys(user).length > 0 ? (
        <div className="">
          <h2 className=" ">USER DETAILS</h2>
          <div className="font-bold text-black"> ID </div>
          <div> {user._id}</div>

          <div className="font-bold"> Name </div>
          <div> {user.name} </div>

          <div className="font-bold"> Image </div>
          <Image
            src={user.avatarSrc}
            alt={user.name}
            width={50}
            height={50}
          />

          <div className="font-bold"> About </div>
          <div> {user.description}</div>

          <div className="font-bold"> Rank </div>
          <div>{user.rank}</div>

          <div className="font-bold"> Village </div>
          <div>{user.village}</div>
        </div>
      ) : null}
    </>
  );
}
