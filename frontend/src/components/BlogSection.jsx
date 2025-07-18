import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "BLOG 01",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1608599065798-4c1b785be4a3?auto=format&fit=crop&w=1080&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "BLOG 02",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1601121141954-28b9c3f74d2b?auto=format&fit=crop&w=1080&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "BLOG 03",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1593629485941-f87e0b819ac5?auto=format&fit=crop&w=1080&q=80",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-gray-400 uppercase font-bold tracking-widest text-sm mb-2 relative inline-block">
          <span
            className="px-4 before:absolute before:w-10 before:h-px before:bg-gray-600 before:left-0 before:top-1/2 before:-translate-y-1/2
                          after:absolute after:w-10 after:h-px after:bg-gray-600 after:right-0 after:top-1/2 after:-translate-y-1/2"
          >
            OUR BLOGS
          </span>
        </h3>
        <h2 className="text-green-500 font-bold text-3xl md:text-4xl mb-10">
          Illuminate your world with expert tips
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="group bg-black text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="overflow-hidden rounded-lg shadow-md border border-gray-800">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300">{post.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* More Blogs Button */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block rounded-md bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 transition-colors"
          >
            More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
