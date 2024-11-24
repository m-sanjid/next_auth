"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {

  const [token, setToken] = useState("")
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      axios.post('/api/users/verifyemail', { token })
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);

    }
  }

  useEffect(() => {
    const urlToken = window.location.search.split(s"=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div>
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-red-300 text-black">{token ? `${token}` : "no token"}</h2>

      {verified && (
        <div>
          <h2>Email Verified</h2>
          <Link href="/login">
            Login
          </Link>
        </div>
      )}

      {error && (
        <div>
          <h2 className="text-2xl bg-red-600">Error</h2>
        </div>
      )}
    </div>
  )
}
