import React from 'react'
const feed = [{
    item_description: "This is a text only item",
    id:123,
    image: "",
    likes: 10,
    isLiked: false,
    comments: [{
        comment: "This is a comment",
        created_at: "Fri May 11 2018 19: 17: 43 GMT + 0530(IST)"
    }, {
        comment: "This is another comment",
        created_at: "Fri May 10 2018 15: 23: 36 GMT + 0530(IST)"
    }]
}, {
    item_description: "This is an item with an image",
    id:124,
    image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    likes: 20,
    isLiked:false,
    comments: [{
        comment: "beautiful",
        created_at: "Fri May 11 2018 19: 17: 43 GMT + 0530(IST)"
    }, {
        comment: "This is another comment",
        created_at: "Fri May 10 2018 15: 23: 36 GMT + 0530(IST)"
    }]
}]

export default feed;