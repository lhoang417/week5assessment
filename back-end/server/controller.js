const pics = require('./pics.json')//need to bring in Json file using require method
const itemsArr = ['nails','hammer','parka'];// created items array for item functions below

module.exports = {//module.exports is required for controller files, this is where you create your functions for your index files and export to your index js file
    getCompliment: function (req, res){// function called getCompliment with req and res parameters
        const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!","Your Javascript skills are stellar.",];//an array of strings assigned to a variable called compliments
        let randomIndex = Math.floor(Math.random() * compliments.length);//math equation to create random choices function and assign to variable called randomIndex
        let randomCompliment = compliments[randomIndex];//create new variable and apply above function by name to the compliments array
        res.status(200).send(randomCompliment);//send back a response with a status of 200 and also the new variable
    },
    getFortune: function(req,res){
        const fortunes = ["The fortune you seek is in another cookie","We don’t know the future, but here’s a cookie", "That wasn’t chicken", "This cookie contains 117 calories", "Don’t eat the paper"];
        let randomInd = Math.floor(Math.random() * fortunes.length);//same equation as above for random choices
        let randomFortune = fortunes[randomInd]
        res.status(200).send(randomFortune)
    },
    getForm: function(req,res){
        let bestThings = ['Instructor/Mentor','Cohort','Material','Structure']
        res.status(200).send(bestThings)//just sending back the array of bestThings created above
    },
    getImg: function(req,res){
        
        // let randomInd = Math.floor(Math.random() * pics.length);
        // let randomPics = pics[randomInd]
        res.status(200).send(pics)//sending back array of pics variable created from Json file at the top
    },
    getItem: function(req,res){
        res.status(200).send(itemsArr)//sending back array of items from the variable created at the top
    },
    addItem: function(req, res){
        const{ newItem } = req.body;//destructuring the value of the item sent in by the user with req.body and assigning to varible called newItem.
        itemsArr.push(newItem);//adding the above item to the array using .push method
        res.sendStatus(200);//just sending back a status of 200
    },
    deleteItem: function(req,res){
        const{ indexPos } = req.params;//destructuring the parameter sent in by the user and assigning it to variable called indexPos
        const removedItem = itemsArr.splice(+indexPos, 1);//converting the variable above to an integer and using the .splice method to remove the desired item from the array. (.splice) takes two arguments, the index value and then how many items to remove
        res.status(200).send(removedItem)
    },
    deletePic: function(req, res){
        const{ picIndex } = req.params;
        const removedPic = pics.splice(+picIndex, 1)
        res.status(200).send(pics)
    }

}