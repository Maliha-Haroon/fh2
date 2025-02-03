import Image from 'next/image';

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "/post1.png", // Replace with your image paths
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "/post2.png", // Replace with your image paths
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "/post3.png", // Replace with your image paths
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-sm font-semibold text-blue-500 uppercase">
          Practice Advice
        </h2>
        <h1 className="text-3xl font-bold text-gray-900">Featured Posts</h1>
        <p className="mt-2 text-gray-600">
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4">
              <div className="flex space-x-2 text-sm text-gray-500 mb-2">
                {post.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>
                  <i className="far fa-comments"></i> {post.comments} comments
                </span>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href="#"
                className="text-blue-500 font-semibold text-sm hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
