class Books{
    constructor(title, author, ISBN, isAvailable){
       
this.title=title;
this.author=author;
this.ISBN=ISBN;


    }
    isAvailable(){

    }
}
let Book = new Books("Pysics", "R.D Sharma",88890)
console.log(Book)

class User{
    constructor(name, userId , booksCheckedOut){
       this.name=name;
       this.userId=userId;
    }
    booksCheckedOut(){

    }   
}

let users= new User("Ravi",1234)
console.log(users)