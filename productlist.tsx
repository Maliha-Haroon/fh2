import Image from 'next/image';

interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="mb-12">
      <h2 className="text-center text-lg font-semibold text-gray-600 mb-4">
        Featured Products
      </h2>
      <h1 className="text-center text-3xl font-bold mb-6">
        BESTSELLER PRODUCTS
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between the two major realms
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 text-center">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.category}</p>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
