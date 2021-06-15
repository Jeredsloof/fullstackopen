const { text } = require('express')
const listHelper = require('../utils/list_helper')

const listWithZeroBlogs = []

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
]

const listWithMultipleBlogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 3,
    __v: 0,
  },
]

describe.skip('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test('when list has no blogs return 0 likes', () => {
    expect(listHelper.totalLikes(listWithZeroBlogs)).toBe(0)
  })

  test('when list multiple blogs, equals sum of likes of blogs', () => {
    expect(listHelper.totalLikes(listWithMultipleBlogs)).toBe(10)
  })
})

describe('favorite blog', () => {
  test('the favorite blog of an empty blog list is empty object', () => {
    expect(listHelper.favoriteBlog([])).toEqual({})
  })
  test('the favorite blog is the blog with the most likes', () => {
    expect(listHelper.favoriteBlog(listWithMultipleBlogs)).toEqual(
      listWithMultipleBlogs[0]
    )
  })
})
