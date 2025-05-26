const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    let likes = blogs[0].likes
    return likes
}

const maxLikes = (blogs) => {
    let maxLikes = 0
    for (let i = 0; i < blogs.length; i++) {
        if (maxLikes < blogs[i].likes) {
            maxLikes = blogs[i].likes
        }
    }
    let ind = blogs.findIndex((blog) => blog.likes == maxLikes)
    console.log(blogs[ind])
    return blogs[ind]
}

const mostBlogs = (blogs) => {
    let blogSet = {}
    let mostNoOfBlogs = 0
    for (let i = 0; i < blogs.length; i++) {
        if (blogSet.hasOwnProperty(blogs[i].author)) {
            blogSet[blogs[i].author].noOfBlogs++;
        }
        else {
            blogSet[blogs[i].author] = {
                noOfBlogs: 1
            }
        }
    }
    let author = ""
    for (let key in blogSet) {
        if (blogSet[key].noOfBlogs > mostNoOfBlogs) {
            mostNoOfBlogs = blogSet[key].noOfBlogs
            author = key
        }
    }
    return {
        author: author,
        blogs: mostNoOfBlogs
    }
}

module.exports = {
    dummy,
    totalLikes,
    maxLikes,
    mostBlogs
}