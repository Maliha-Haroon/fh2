import Image from "next/image";

const products = [
  { id: 1, src: "/img1.png", alt: "Product 1", title: "Product 1", price: "$50" },
  { id: 2, src: "/img2.png", alt: "Product 2", title: "Product 2", price: "$65" },
  { id: 3, src: "/img3.png", alt: "Product 3", title: "Product 3", price: "$80" },
  { id: 4, src: "/img4.png", alt: "Product 4", title: "Product 4", price: "$45" },
  { id: 5, src: "/img5.png", alt: "Product 5", title: "Product 5", price: "$90" },
  { id: 6, src: "/img6.png", alt: "Product 6", title: "Product 6", price: "$120" },
  { id: 7, src: "/img7.png", alt: "Product 7", title: "Product 7", price: "$120" },
  { id: 8, src: "/img8.png", alt: "Product 8", title: "Product 8", price: "$120" }
];

export default function FeaturedProducts() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">FEATURED PRODUCTS</h2>
      <p className="text-base text-gray-600 text-center mb-8">
        Explore our carefully curated collection of products.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[240px] h-[615px] bg-white shadow-md rounded-lg flex flex-col items-center overflow-hidden"
          >
            <Image
              src={product.src}
              alt={product.alt}
              width={240}
              height={360} // Fixed height for the image
              className="object-cover"
            />
            <div className="flex flex-col items-center justify-between p-4 w-full h-[255px]">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {product.title}
              </h3>
              <p className="text-gray-500 text-center">{product.price}</p>
              <button className="mt-4 bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

