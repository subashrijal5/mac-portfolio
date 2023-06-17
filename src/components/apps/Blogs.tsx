import React, { useState } from "react";

const Blogs = () => {
  const tags = [
    { id: 1, name: "Technology", color: "border-red" },
    { id: 2, name: "Travel", color: "border-blue" },
    { id: 3, name: "Food", color: "border-green" },
    { id: 4, name: "Fashion", color: "border-black" }
  ];

  const [activeTag, setActiveTag] = useState<number | null>(null);

  const handleTagClick = (tagId: number) => {
    setActiveTag(tagId);
  };
  return (
    <div className={`container mx-auto h-full bg-light dark:bg-dark grid grid-cols-5`}>
      <div className="sidebar sticky top-0 h-full w-full bg-gray-700 text-white overflow-y-scroll">
        <h2 className="border-b-2 border-gray text-xl font-bold">
          <span className="underline-border">Tags</span>
        </h2>

        <div className="flex gap-2 w-full flex-wrap mt-5 pl-4">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className={`p-1 border-rounded border ${tag.color}`}
              onClick={() => handleTagClick(tag.id)}
            >
              #{tag.name}
            </button>
          ))}
        </div>
      </div>
      <section className="col-span-4 grid gap-4 overflow-scroll ">
        <div>
          <article
            className={`card shadow-md rounded-lg dark:bg-dark text-black dark:text-white transition duration-200 transform hover:scale-101 m-4 m-4`}
          >
            <div className="flex flex-row">
              <img
                className="card-image rounded-lg"
                src="https://source.unsplash.com/user/c_v_r/300x200"
                alt="Blog Post"
              />
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold mb-2">Third Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article
            className={`card shadow-md rounded-lg dark:bg-dark text-black dark:text-white transition duration-200 transform hover:scale-101 m-4`}
          >
            <div className="flex flex-row">
              <img
                className="card-image rounded-lg"
                src="https://source.unsplash.com/user/c_v_r/300x200"
                alt="Blog Post"
              />
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold mb-2">Third Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article
            className={`card shadow-md rounded-lg dark:bg-dark text-black dark:text-white transition duration-200 transform hover:scale-101 m-4`}
          >
            <div className="flex flex-row">
              <img
                className="card-image rounded-lg"
                src="https://source.unsplash.com/user/c_v_r/300x200"
                alt="Blog Post"
              />
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold mb-2">Third Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article
            className={`card shadow-md rounded-lg dark:bg-dark text-black dark:text-white transition duration-200 transform hover:scale-101 m-4`}
          >
            <div className="flex flex-row">
              <img
                className="card-image rounded-lg"
                src="https://source.unsplash.com/user/c_v_r/300x200"
                alt="Blog Post"
              />
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold mb-2">Third Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article
            className={`card shadow-md rounded-lg dark:bg-dark text-black dark:text-white transition duration-200 transform hover:scale-101 m-4`}
          >
            <div className="flex flex-row">
              <img
                className="card-image rounded-lg"
                src="https://source.unsplash.com/user/c_v_r/300x200"
                alt="Blog Post"
              />
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold mb-2">Third Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article
            className={`card shadow-md rounded-lg dark:bg-dark text-black dark:text-white transition duration-200 transform hover:scale-101 m-4`}
          >
            <div className="flex flex-row">
              <img
                className="card-image rounded-lg"
                src="https://source.unsplash.com/user/c_v_r/300x200"
                alt="Blog Post"
              />
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold mb-2">Third Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
