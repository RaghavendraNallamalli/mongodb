mongodb.js
show dbs
use mongo_practice
db.createCollection("movies")
db.movies.insertMany(
    [
    {
        title : "Fight Club",
        writer : "Chuck Palahniuko",
        year : 1999,
        actors : [
            "brad Pitt",
            "edward norton"
        ]
    },
    {
        title : "Pulp Fiction",
        writer : "Quentin Tarantino",
        year : 1994,
        actors : [ "John Travolta" , "Uma Thurman"]
    },
    {
        title : "Inglorious Basterds",
        writer : "Quentin Tarantino",
        year : 2009 ,
        actors : [ "Brad Pitt" , "Diane Kruger Eli Roth"]
    },
    {
        title : "The Hobbit: The Desolation of Smaug",
        writer : "J.R.R. Tolkein",
        year : 2013,
        franchise : "The Hobbit"

    },
    {
        title : "The Hobbit: An Unexpected Journey",
        writer : "J.R.R. Tolkein ",
        year: 2012,
        franchise : "The Hobbit"
    },
    {
        title : "The Hobbit: The Battle of the Five Armies",
        writer : "J.R.R. Tolkein",
        year : 2012,
        franchise : "The Hobbit",
        synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
    },
    {
        title : "Pee Wee Herman's Big Adventure"
    },
    {
        title : "Avatar"
    }

]
)

db.movies.find()
db.movies.find({writer: 'Quentin Tarantino'})
db.movies.find({actors: 'Brad Pitt' })
db.movies.find({franchise: 'The Hobbit'})
db.movies.find({year: {$lt :2000} })
db.movies.find( { $or: [ { year: { $lt: 2000 } }, {  year: { $gt: 2010 } } ] } )

db.movies.update( { title: "The Hobbit: An Unexpected Journey" }, { $set: { synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } } )
db.movies.find( { title: "The Hobbit: An Unexpected Journey" })
db.movies.update({title: "The Hobbit: The Desolation of Smaug"}, {$set: {synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
db.movies.update({title: "Pulp Fiction" }, {$addToSet: {actors: 'Samuel L. jackson' }})

//text search
db.movies.createIndex({synopsis:"text"})
db.movies.find({$text: {$search: "Bilbo"}})
db.movies.find({$text: {$search: "Gandalf"}})
db.movies.find({$text: {$search: "Bilbo -Gandalf"}})
db.movies.find({$text: {$search: "dwarves hobbit"}})

https://www.geeksforgeeks.org/search-text-in-mongodb/
db.movies.find({$text:{$search:"\"gold dragon\""}})

db.movies.deleteOne({title:"Pee Wee Herman's Big Adventure"})
db.movies.deleteOne({title:"Avatar"})

db.createCollection("users")
db.users.insertMany([{
    username : "GoodGuyGreg", 
    first_name : "Good Guy",
    last_name : "Greg"
},
{
    username : "ScumbagSteve",
    first_name : "Scumbag",
    last_name : "Steve"
}
]
)

db.createCollection("posts")
db.posts.insertMany(
    [
        {
    username : "GoodGuyGreg",
    title : "Passes out at party",
    body : "Wakes up early and cleans house"
},
{
    username : "GoodGuyGreg",
    title : "Steals your identity",
    body : "Raises your cresit score"
},
{
    username : "GoodGuyGreg",
    title : "Reports a bug in your code",
    body : "Sends you a Pull Request"
},
{
    username : "ScumbagSteve",
    title : "Borrows something",
    body : "Sells it"
},
{
    username : "ScumbagSteve",
    title : "Borrows everything",
    body : " The end"
},
{
    username : "ScumbagSteve",
    title : "Forks your repo on github",
    body : "Sets to private"
}])

   '0': ObjectId("6202ae744056de6680dc9425"),
    '1': ObjectId("6202ae744056de6680dc9426"),
    '2': ObjectId("6202ae744056de6680dc9427"),
    '3': ObjectId("6202ae744056de6680dc9428"),
    '4': ObjectId("6202ae744056de6680dc9429"),
    '5':

db.comments.insertMany([{
    username : "GoodGuyGreg",
    Comment : "Hope you got a good deal!",
    post :  ObjectId("6202ae744056de6680dc9427")
},
{
    username : "GoodGuyGreg",
    Comment : "What's mine is yours !",
    post :  ObjectId("6202ae744056de6680dc9428")
},
{
    username : "GoodGuyGreg",
    Comment : "Don't vioalte the licesing agreement!",
    post :  ObjectId("6202ae744056de6680dc942a")
},
{
    username : "ScumbagSteve",
     comment : "It still isn't clean", 
     post : ObjectId("6202ae744056de6680dc9425")
}
])
db.users.find()
db.posts.find()
db.posts.find({username:"GoodGuyGreg"})
db.posts.find({username:"ScumbagSteve"})
db.comments.find()
db.comments.find({username:"GoodGuyGreg"})
db.comments.find({username:"ScumbagSteve"})
db.comments.find({post:ObjectId("6202ae744056de6680dc9427")})