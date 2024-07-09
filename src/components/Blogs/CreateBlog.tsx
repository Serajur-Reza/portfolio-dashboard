import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useCreateBlog } from "../../queryHooks/blogs/useCreateBlog";
// import parse from "html-react-parser";
import toast from "react-hot-toast";

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

    if (res?.status === 200) {
      toast.success("successfully created blog");
    }
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
            onReady={(editor: any) => {
              console.log("editor is ready to use", editor);
            }}
            onChange={(event: any, editor: any) => {
              console.log(event);
              const data = editor?.getData();
              setTextEditor(data);
            }}
          />

          {/* {convert(textEditor, {
            selectors: [{ selector: "p" }],
          })} */}

          {/* {textEditor}
          {parse(textEditor)} */}
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
