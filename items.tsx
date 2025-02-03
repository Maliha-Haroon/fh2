import Image from "next/image";

const items = [
  { id: 1, src: "/mens.png", alt: "Men's Collection", label: "Men" },
  { id: 2, src: "/womens.png", alt: "Women's Collection", label: "Women" },
  { id: 3, src: "/Acc.png", alt: "Accessories Collection", label: "Accessories" },
  { id: 4, src: "/kids.png", alt: "Kid's Collection", label: "Kids" },
];

export default function ItemsSection() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">EDITOR'S PICK</h2>
      <p className="text-base text-gray-600 text-center mb-8">
        Problems trying to resolve <br /> the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={500}
              height={600}
              className="object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-semibold py-2 px-4 rounded-lg shadow-md">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
