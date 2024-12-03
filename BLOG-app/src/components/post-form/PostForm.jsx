import React, { useCallback, useState } from "react";
import { Btn, Input, Select, RTE } from "../index";
import { useForm } from "react-hook-form";
import appwriteService from "../../appwrite/config_service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.$id || "",
        status: post?.status || "active",
      },
    });

  const [imagePreview, setImagePreview] = useState(null); // State for file preview

  const navigate = useNavigate();
  const userdata = useSelector((state) => state.auth.userData);
  const userId = userdata.userData.$id;

  // Function to handle form submission
  const submit = async (data) => {
    try {
      let fileId = null;
      // Handle file upload if an image is selected
      if (data.image && data.image[0]) {
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
          fileId = file.$id; // Get uploaded file ID
        }
      }

      // If editing an existing post
      if (post) {
        if (fileId) {
          // Delete the old file if a new one is uploaded
          await appwriteService.deleteFile(post.featured_image);
          console.log("festured iamge", post.featured_image);
        }

        // Update the post
        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featured_image: fileId,
          // Use new or existing image
        });
        console.log("file iamge", fileId);
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        // If creating a new post
        const dbPost = await appwriteService.createPost({
          ...data,
          featured_image: fileId, // Set the uploaded image
          userid: userId, // Attach user ID
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  // slug transform for transforming slug like space turns into a dash
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      const slug = value.toLowerCase().replace(/ /g, "-");
      setValue("slug", slug);
      return slug;
    } else {
      return "";
    }
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Preview selected file
    }
  };

  // Main return
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder={post?.title || "title"}
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder={post?.title || "Slug"}
          className="mb-4"
          {...register("slug", { required: !post })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={post?.content || getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
          onChange={handleFileChange} // Set up file change handler
        />
        {imagePreview || (post && post.featured_image) ? (
          <div className="w-full mb-4">
            <img
              src={
                imagePreview ||
                appwriteService.getFilePreview(post?.featured_image)
              }
              alt={post?.title || "Preview"}
              className="rounded-lg"
            />
          </div>
        ) : null}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: !post })}
        />
        <Btn
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Btn>
      </div>
    </form>
  );
}

export default PostForm;
