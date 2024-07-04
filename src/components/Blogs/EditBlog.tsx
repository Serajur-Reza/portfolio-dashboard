import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";

const EditBlog = () => {
  const [textEditor, setTextEditor] = useState("");

  return (
    <div>
      <div className="relative max-w-xs mb-5">
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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

        {textEditor}
      </div>
    </div>
  );
};

export default EditBlog;
