"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>{data === 'nothing' ? "Nothing" : <Link href={`profile/${data}`}>{data}
      </Link>}</h2>
      <hr />
      <button
        onClick={logout}
        className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded mt-5"
      >Logout</button>
      <button
        onClick={logout}
        className="bg-green-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded mt-5"
      >GetUser details</button>


    </div>
  )
} 
