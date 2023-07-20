import { FaRegTrashAlt } from "react-icons/fa";

const CommentCardDelete = ({
  comment_id,
  handleDelete,
  isDeleting,
  isError,
}) => {
  if (isDeleting) {
    return <p>Deleting comment...</p>;
  } else if (isError) {
    return (
      <p className="comment-delete-error">Sorry, your comment cannot be deleted at the moment</p>
    );
  } else {
    return (
      <button
        className="comment-card-delete"
        onClick={() => {
          handleDelete(comment_id);
        }}
      >
        Delete Comment {FaRegTrashAlt()}
      </button>
    );
  }
};

export default CommentCardDelete;
