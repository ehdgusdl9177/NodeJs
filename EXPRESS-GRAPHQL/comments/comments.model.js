const comments = [
  {
    id: "comment1",
    text: "It is a first comment",
    likes: 1,
  },
];

const getAllComments = () => {
  return comments;
};

module.exports = {
  getAllComments,
};
