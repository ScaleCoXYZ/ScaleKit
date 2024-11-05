import { List } from "./List";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { trpcClient } from "~/trpc/trpc";

// Server-side loader
export async function loader({ request }: LoaderFunctionArgs) {
  // Get URL search params from the request object
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = Number(url.searchParams.get("limit")) || 10;

  const initialProducts = await trpcClient.products.list.query({
    page,
    limit,
  });

  return json({ initialProducts });
}

export default function Products() {
  const { initialProducts } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Products</h1>
      <List pagination={initialProducts} />
    </div>
  );
}
