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
    // let blog = blogs.findIndex((blog)=> )
    return maxLikes
}
module.exports = {
    dummy,
    totalLikes,
    maxLikes
}