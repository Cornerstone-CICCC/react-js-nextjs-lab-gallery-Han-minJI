"use client";

import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          username,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log("Unable to log in");
        return;
      }

      router.push("/gallery");
      alert(data.message);
    } catch (err) {
      console.error(err);
    }

    setUsername("");
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username..."
          className="border p-1"
        />
        <button type="submit" className="border p-1 bg-amber-100">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
