import {
  OffsetPaginationParams,
  ControllerPaginationParams,
} from "../../utils/pagination";
import { ProductDto } from "./Product.dto";
import { ProductRepository } from "./Product.repository";
import { toDto } from "./toDto.mapper";

export class ProductService {
  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  listProducts({
    offset,
    limit,
  }: OffsetPaginationParams): Promise<ProductDto[]> {
    return this.productRepository
      .list({ offset, limit })
      .then((products) => products.map(toDto));
  }

  getProductById(id: number): Promise<ProductDto | null> {
    return this.productRepository.getById(id).then(toDto);
  }
}
