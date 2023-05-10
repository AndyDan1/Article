import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
// import { addNewArticle } from "../../../features/sliceArticle";
import { addNewArticle } from "../../../features/sliceArticle";

import Button from "../../../components/ui/Button";
import TextField from "../../../components/ui/TextField/TextField";

interface IFormProps {}

const Form: FC<IFormProps> = ({}) => {
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  const handleAddArticle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newArticle.title.trim().length) {
      dispatch(
        addNewArticle({
          id: Date.now(),
          title: newArticle.title,
          description: newArticle.description,
          pinned: false,
        })
      );
      setNewArticle({
        title: "",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleAddArticle}>
      <TextField
        placeholder="Article title"
        value={newArticle.title}
        onChange={(e) =>
          setNewArticle((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <TextField
        placeholder="Article description"
        value={newArticle.description}
        onChange={(e) =>
          setNewArticle((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <Button type="submit">Add Article</Button>
    </form>
  );
};

export default Form;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// export interface Post {
//   id: number;
//   name: string;
// }

// const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/",
//   }),
//   tagTypes: ["Post"],
//   endpoints: (build) => ({
//     getPost: build.query<Post, number>({
//       query: (id) => `post/${id}`,
//       providesTags: ["Post"],
//     }),
//     updatePost: build.mutation<void, Pick<Post, "id"> & Partial<Post>>({
//       query: ({ id, ...patch }) => ({
//         url: `post/${id}`,
//         method: "PATCH",
//         body: patch,
//       }),
//       invalidatesTags: ["Post"],
//       async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
//         const patchResult = dispatch(
//           api.util.updateQueryData("getPost", id, (draft) => {
//             Object.assign(draft, patch);
//           })
//         );
//         try {
//           await queryFulfilled;
//         } catch {
//           patchResult.undo();
//         }
//       },
//     }),
//   }),
// });
