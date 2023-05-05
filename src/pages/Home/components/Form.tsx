import { FC, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
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
