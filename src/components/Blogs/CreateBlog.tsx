import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useCreateBlog } from "../../queryHooks/blogs/useCreateBlog";
import parse from "html-react-parser";

// const HtmlToText = ({ htmlContent }) => {
//   const divRef = useRef(null);

//   useEffect(() => {
//     if (divRef.current) {
//       console.log(divRef.current.textContent); // Extracted text
//     }
//   }, [htmlContent]);

//   return <div ref={divRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// };

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const { mutateAsync: createBlog } = useCreateBlog();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const res = await createBlog({
      title: title,
      description: textEditor,
    });
    console.log(res);

    // console.log({
    //   title: title,
    //   description: textEditor,
    // });
    // const res = await createExprience(data);
    // console.log(res);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <CKEditor
            editor={ClassicEditor}
            data={textEditor}
            // onReady={(editor) => {
            //   // You can store the "editor" and use when it is needed.
            // }}
            onChange={(editor: any) => {
              const data = editor.getData();

              setTextEditor(data);
            }}
          />

          {/* {convert(textEditor, {
            selectors: [{ selector: "p" }],
          })} */}

          {textEditor}
          {parse(textEditor)}
          {/* <HtmlToText htmlContent={textEditor} /> */}
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
