export interface ControllerPaginationParams {
  page: number;
  limit: number;
}

export interface OffsetPaginationParams {
  offset: number;
  limit: number;
}

export type PaginatedResponse<T> = {
  items: T[];
  pagination: ReturnType<typeof paginationData>;
};

export const paginationData = (page: number, limit: number, total: number) => {
  return {
    currentPage: page,
    pageSize: limit,
    totalItems: total,
    totalPages: Math.ceil(total / limit),
  };
};
