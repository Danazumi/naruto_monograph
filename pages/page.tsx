import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ui/profileCard";
import Login from "@/components/ui/login";

const Home = () => {
    const {authStatus} = useAuth()

    return (
        <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
                {authStatus ? (
                    <div className="max-w-md">
                        <ProfileCard />
                    </div>
                ) : (
                    <Login />
                )}
            </div>
    )
}
export default Home