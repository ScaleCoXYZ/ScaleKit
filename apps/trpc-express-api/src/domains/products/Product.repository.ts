import { OffsetPaginationParams } from "../../utils/pagination";
import { ProductEntity } from "./Product.entity";
import { fakeProducts } from "./Product.fakedata";

export class ProductRepository {
  async list({
    offset,
    limit,
  }: OffsetPaginationParams): Promise<ProductEntity[]> {
    return fakeProducts.slice(offset, offset + limit);
  }

  async count(): Promise<number> {
    return fakeProducts.length;
  }

  async getById(id: number): Promise<ProductEntity | null> {
    return fakeProducts.find((product) => product.id === id) || null;
  }
}
