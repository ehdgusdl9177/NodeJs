const comments = [
  {
    id: "comment1",
    text: "It is a first comment",
    likes: 1,
  },
  {
    id: "comment2",
    text: "It is a second comment",
    likes: 10,
  },
  {
    id: "comment3",
    text: "It is a third comment",
    likes: 5,
  },
];

const getAllComments = () => {
  return comments;
};

const getCommentsByLikes = (minLikes) => {
  return comments.filter((comment) => {
    return comment.likes >= minLikes;
  });
};

module.exports = {
  getAllComments,
  getCommentsByLikes,
};
