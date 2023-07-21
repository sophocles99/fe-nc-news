import axios from "axios";
const baseURL = "https://nc-news-dvu9.onrender.com/api/";
const ncNews = axios.create({ baseURL });

const getArticles = (topic, sort_by, order) => {
  return ncNews
    .get("articles", { params: { topic, sort_by, order } })
    .then(({ data }) => data);
};

const getArticleById = (articleId) => {
  return ncNews.get(`articles/${articleId}`).then(({ data }) => data);
};

const patchArticleVote = (articleId, inc_votes) => {
  const newVote = { newVote: { inc_votes } };
  return ncNews
    .patch(`articles/${articleId}`, newVote)
    .then(({ data }) => data);
};

const getCommentsByArticleId = (articleId) => {
  return ncNews.get(`articles/${articleId}/comments`).then(({ data }) => data);
};

const postCommentByArticleId = (articleId, newComment) => {
  return ncNews
    .post(`articles/${articleId}/comments`, { newComment })
    .then(({ data }) => data);
};

const deleteComment = (comment_id) => {
  return ncNews.delete(`comments/${comment_id}`);
};

const getTopics = () => {
  return ncNews.get("topics").then(({ data }) => data);
};

export {
  getArticles,
  getArticleById,
  patchArticleVote,
  getCommentsByArticleId,
  postCommentByArticleId,
  deleteComment,
  getTopics,
};
