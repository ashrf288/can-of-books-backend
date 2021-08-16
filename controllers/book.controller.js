const Book=require('../moudle/book.modle');

let booksArr=[
    {
        title: 'Things Fall Apart',
        description: ' Things Fall Apart is the first of three novels in Chinua Achebes critically acclaimed African Trilogy. It is a classic narrative about Africa\'s cataclysmic encounter with Europe as it establishes a colonial presence on the continent.',
        status: 'avialable',
        email: 'ashrfmathkour@gmail.com'  
    },
    {
        title: 'Moby-Dick',
        description: '  Moby-Dick is a vivid documentary of life aboard a nineteenth-century whaler, a virtual encyclopedia of whales and whaling, replete with facts, legends, and trivia that Melville had gleaned from personal experience and scores of sources. ',
        status: 'avialable',
        email: 'ashrfmathkour@gmail.com'
    }
]
let bookController=(req,res)=>{
    const book=booksArr.map(obj=>{
        return new Book({
            title: obj.title,
            description: obj.description ,
            status: obj.status,
            email: obj.email  
        })

    })
    
  
res.json(book)
}

module.exports=bookController

