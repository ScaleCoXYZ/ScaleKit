import { ProductDto } from "../domains/products/Product.dto";
import { ProductRepository } from "../domains/products/Product.repository";
import {
  PaginatedResponse,
  paginationData,
  ControllerPaginationParams,
} from "../utils/pagination";

export class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async listProducts(
    params: ControllerPaginationParams
  ): Promise<PaginatedResponse<ProductDto>> {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.productRepository.list({ offset, limit }),
      this.productRepository.count(),
    ]);

    return {
      items: products,
      pagination: paginationData(page, limit, total),
    };
  }

  async getProductById(id: number) {
    return this.productRepository.getById(id);
  }
}
