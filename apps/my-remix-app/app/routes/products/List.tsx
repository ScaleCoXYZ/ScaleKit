import { useState, useEffect } from "react";
import { trpcReact } from "~/trpc/trpc";
import type { PaginatedResponse } from "../../../../trpc-express-api/src/utils/pagination";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

interface ListProps {
  pagination: PaginatedResponse<Product>;
}

export function List({ pagination: initialPagination }: ListProps) {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const { data: paginatedData = initialPagination } =
    trpcReact.products.list.useQuery(
      { page, limit },
      {
        initialData: initialPagination,
        refetchOnWindowFocus: false,
        trpc: {
          context: { skipBatch: true },
          abortOnUnmount: true,
        },
        staleTime: 0,
        gcTime: 0,
      }
    );

  useEffect(() => {
    if (paginatedData) {
      console.log("tRPC products.list query succeeded:", {
        page,
        limit,
        totalItems: paginatedData.pagination.totalItems,
        receivedItems: paginatedData.items.length,
      });
    }
  }, [paginatedData, page, limit]);

  const handleNextPage = () => {
    console.log("Clicking next page, current page:", page);
    setPage((p) => p + 1);
  };

  const handlePrevPage = () => {
    console.log("Clicking previous page, current page:", page);
    setPage((p) => Math.max(1, p - 1));
  };

  return (
    <div>
      {/* Product list */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {paginatedData.items.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of{" "}
          {Math.ceil(paginatedData.pagination.totalItems / limit)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            page >= Math.ceil(paginatedData.pagination.totalItems / limit)
          }
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
