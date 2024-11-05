import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "design-system";
import { useRef, useState } from "react";
import { trpcClient } from "~/trpc/trpc";

export const meta: MetaFunction = () => {
  return [
    { title: "ScaleKit Remix App" },
    { name: "description", content: "Hello and Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const greeting = await trpcClient.hello.query("Remix");
  return json({ greeting });
};

export default function Index() {
  const { greeting } = useLoaderData<typeof loader>();
  const [currentGreeting, setCurrentGreeting] = useState(greeting);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to ScaleKit Demo</h1>
      <p className="leading text-md font-bold text-gray-800 dark:text-gray-100">
        {currentGreeting}
      </p>
      <nav className="space-x-4">
        <Link
          to="/products"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Products
        </Link>
        <Link
          to="/users"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Users
        </Link>
        <Link
          to="/about"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          About
        </Link>
      </nav>
      <div className="flex gap-4">
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Enter your name"
          ref={inputRef}
        />
        <Button
          onClick={async () => {
            const newGreeting = await trpcClient.hello.query(
              inputRef.current?.value
            );
            setCurrentGreeting(newGreeting);
          }}
        >
          Click Me
        </Button>
      </div>
    </div>
  );
}
