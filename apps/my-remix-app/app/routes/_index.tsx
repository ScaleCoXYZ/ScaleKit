import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "design-system";
import { trpc } from "~/utils/trpc";

export const meta: MetaFunction = () => {
  return [
    { title: "ScaleKit Remix App" },
    { name: "description", content: "Hello and Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const greeting = await trpc.hello.query("Remix");
  return json({ greeting });
};

export default function Index() {
  const { greeting } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
        {greeting}
      </h1>
      <Button onClick={() => alert("Hello")}>Click Me</Button>
    </div>
  );
}
