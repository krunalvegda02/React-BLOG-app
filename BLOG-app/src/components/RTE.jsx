import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => {
          <Editor
            initialValue="default value"
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
          />;
        }}
      ></Controller>
    </div>
  );
}
