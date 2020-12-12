import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

interface IPost {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

const Post = () => {
  // Set our initial state
  const [postData, setPost] = useState<IPost[] | null>(null);
  console.log({ postData });

  // Fetch data with our sanityClient and GROQ
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  // Now that we've got our data, let's render the HTML
  // TODO Could refactor into smaller components
  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-gray-900 flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData?.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative rounded-md shadow leading-snug bg-white border-l-8 border-yellow-400"
                  key={index}
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h3 className="text-gray-900 text-lg font-bold px-3 py-4 bg-yellow-400 text-yellow-100 bg-opacity-75 rounded-md">
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
