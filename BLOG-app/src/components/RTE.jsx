import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

//*TEXT EDITOR CONTAINER
export default function RTE({
  name = "Blog",
  control,
  label,
  defaultValue = "",
}) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name}
        control={control}
        //! render Editor onchange event
        render={({ field: { onChange } }) => {
          return (
            <Editor
              initialValue={defaultValue}
              init={{
                branding: false,
                height: 500,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace  visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | block | image | forecolor | formatselect | bold italic | underline |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformate| help",
                content_style:
                  "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
              }}
              onEditorChange={onChange}
            />
          );
        }}
      ></Controller>
    </div>
  );
}


//?NOTE: No explicit return: If parentheses () are used, the function implicitly returns the value inside.
//?NOTE: Explicit return needed: If curly braces {} are used in the arrow function, you must explicitly return the value