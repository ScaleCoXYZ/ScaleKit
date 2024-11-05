import { ProductDto } from "./Product.dto";
import { ProductEntity } from "./Product.entity";

export function toDto(product: ProductEntity): ProductDto {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
  };
}
