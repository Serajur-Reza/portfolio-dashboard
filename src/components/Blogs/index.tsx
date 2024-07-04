import { useGetBlogs } from "../../queryHooks/blogs/useGetBlogs";
import parse from "html-react-parser";

const Blogs = () => {
  const { data: blogs } = useGetBlogs();
  console.log(blogs);
  return (
    <div>
      {blogs?.data?.data?.map((item: any) => (
        <article
          className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
          key={item._id}
        >
          <a>
            <img
              loading="lazy"
              alt={item.title}
              className="w-full h-48 rounded-t-md"
            />
            <div className="flex item-center mt-2 pt-3 ml-4 mr-2">
              {/* <div className="flex-none w-10 h-10 rounded-full">
                <img
                  src={item.authorLogo}
                  className="w-full h-full rounded-full"
                  alt={item.authorName}
                />
              </div> */}
              <div className="ml-3">
                <span className="block text-gray-900">{item.title}</span>
                <span className="block text-gray-400 text-sm">
                  {item.createdAt}
                </span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              {/* <h3 className="text-xl text-gray-900">{item.title}</h3> */}
              <p className="text-gray-400 text-sm mt-1 truncate">
                {parse(item.description)}
              </p>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default Blogs;
