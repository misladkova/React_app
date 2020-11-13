const totalLikes = (blogs) =>{
    if(blogs.length===0){
        return 0
    }else if(blogs.length===1){
        return blogs[0].likes
    }else{
        return blogs.reduce((sum, {likes})=>sum+likes, 0)
    }
}

const favoriteBlog = (blogs)=>{
    if(blogs.length===0){
        return []
    }else if(blogs.length===1){
        return {title: blogs[0].title, author: blogs[0].author, likes: blogs[0].likes}
    }else {
        const newObj = blogs.reduce((largest, curr)=>{
            if(curr.likes>largest.likes){
                return curr
            }else{
                return largest
            }
        })
        return {title: newObj.title, author: newObj.author, likes: newObj.likes}
    }
}

module.exports = {
    totalLikes,
    favoriteBlog
}