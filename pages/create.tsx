import { useState } from "react";
import Router from "next/router";

const Create = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = { name, email, number };

    try {
      await fetch("/api/create-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container mx-auto my-20 prose prose-lg">
      <h1>Create New Contact</h1>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-5">
        <input
          className="p-2 border-2 border-black rounded shadow-sm"
          autoFocus
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
        />
        <input
          className="p-2 border-2 border-black rounded shadow-sm"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          className="p-2 border-2 border-black rounded shadow-sm"
          autoFocus
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          type="text"
        />

        <button className="px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Create New Contact
        </button>
      </form>
    </div>
  );
};

export default Create;
