import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'
import "@/styles/typewriter.module.css"

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
        <div className="container   items-center ">
          {/* <h2 className=" ">USER DETAILS</h2> */}
          {/* <div className="font-bold text-black"> ID </div>
          <div> {user._id}</div> */}

          <h2  className="scroll-m-20 text-2xl font-bold tracking-tight"> Name </h2>
          <p className = "scroll-m-20  text-lg font-thin tracking-tight pb-4"> {user.name} </p>

          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> Image </h2>
          <Image
            src={user.avatarSrc}
            alt={user.name}
            width={100}
            height={100}
            className = "pt-2 pb-8"
          />

          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> About </h2>
          <p className="scroll-m-20 text-lg font-thin tracking-tight pb-8"> {user.description}</p>

          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> Rank </h2>
          <p className="scroll-m-20 text-lg font-thin tracking-tight pb-8">{user.rank}</p>

          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> Village </h2>
          <p className="scroll-m-20 text-lg font-thin tracking-tight pb-4">{user.village}</p>
        </div>
      ) : " No character like that"}
    </>
  );
}


// {user && Object.keys(user).length > 0 ? (
//         <div className="container   items-center ">
//           {/* <h2 className=" ">USER DETAILS</h2> */}
//           {/* <div className="font-bold text-black"> ID </div>
//           <div> {user._id}</div> */}

//           <h2  className="scroll-m-20 text-2xl font-bold tracking-tight"> Name </h2>
//           <p className = "scroll-m-20  text-lg font-thin tracking-tight pb-4"> {user.name} </p>

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> Image </h2>
//           <Image
//             src={user.avatarSrc}
//             alt={user.name}
//             width={100}
//             height={100}
//             className = "pb-8"
//           />

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> About </h2>
//           <p className="scroll-m-20 text-lg font-thin tracking-tight pb-8"> {user.description}</p>

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> Rank </h2>
//           <p className="scroll-m-20 text-lg font-thin tracking-tight pb-8">{user.rank}</p>

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> Village </h2>
//           <p className="scroll-m-20 text-lg font-thin tracking-tight pb-4">{user.village}</p>
//         </div>
//       ) : " No character like that"}
//     </>
//   );


{/* <Typewriter
            words={["wetin dey happen"]}
            cursor
            cursorStyle='_'
            typeSpeed={70}
          
          />  */}



//  export default function userDetail({ user } : UserDetailProps) {
//   return (
//     <>
//       {user && Object.keys(user).length > 0 ? (
//         <div className="container   items-center ">
//           {/* <h2 className=" ">USER DETAILS</h2> */}
//           {/* <div className="font-bold text-black"> ID </div>
//           <div> {user._id}</div> */}

//           <h2  className="scroll-m-20 text-2xl font-bold tracking-tight">
//             <Typewriter
//           words={["Name"]}
//           cursor
//           cursorStyle='_'
//           typeSpeed={70}
//         />
//           </h2>

//           <p className = "scroll-m-20  text-lg font-thin tracking-tight pb-4">
//             <Typewriter
//           words={[user.name]}
//           cursor
//           cursorStyle='_'
//           typeSpeed={70}
//         />
//           </p>

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> 

//            <Typewriter
//           words={["Image"]}
//           cursor
//           cursorStyle='_'
//           typeSpeed={70}
//           /> 
//            </h2>
//           <Image
//             src={user.avatarSrc}
//             alt={user.name}
//             width={100}
//             height={100}
//             className = "pt-2 pb-8"
//           />

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> 
//            <Typewriter
//           words={["About"]}
//           cursor
//           cursorStyle='_'
//           typeSpeed={70}
//         />
//           </h2>
//           <p className="scroll-m-20 text-lg font-thin tracking-tight pb-8"> 
//             <Typewriter
//             words={[user.description]}
//             cursor
//             cursorStyle='_'
//             typeSpeed={70}
//           />
//           </p>

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight"> 
            
//             <Typewriter
//             words={["Rank"]}
//             cursor
//             cursorStyle='_'
//             typeSpeed={70}
//           />
//            </h2>
//           <p className="scroll-m-20 text-lg font-thin tracking-tight pb-8">
//             <Typewriter
//             words={[user.rank]}
//             cursor
//             cursorStyle='_'
//             typeSpeed={70}
//           />
//           </p>

//           <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
//             <Typewriter
//             words={["Village"]}
//             cursor
//             cursorStyle='_'
//             typeSpeed={70}
//           />
//           </h2>
//           <p className="scroll-m-20 text-lg font-thin tracking-tight pb-4">

//             <Typewriter
//             words={["Village"]}
//             cursor
//             // cursorStyle='_'
//             typeSpeed={70}
//           />
//           </p>
//         </div>
//       ) : " No character like that"}
//     </>
//   );
// }



