export class ProductEntityProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
}

export class ProductEntity {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;

  constructor({ id, name, description, price, imageUrl }: ProductEntityProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
