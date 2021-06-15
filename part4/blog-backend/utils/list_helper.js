const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((totalLikes, blog) => totalLikes + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce(
    (favoriteBlog, blog) =>
      favoriteBlog.likes > blog.likes ? favoriteBlog : blog,
    {}
  )
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
