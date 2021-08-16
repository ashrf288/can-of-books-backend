const mongoose=require("mongoose");



const BookSchema= new mongoose.Schema({
 title: String,
 description: String,
 status: String,
 email: String
})


const Book=mongoose.model('Book',BookSchema)


const seedBook=()=>{
    const newBooke=new Book({
        title: 'The Great Gatsby',
        description: ' The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession.',
        status: 'avialable',
        email: 'ashrfmathkour@gmail.com'   
    })

   
    newBooke.save()
   
    console.log(newBooke)

}

module.exports=Book;

