const pics = require('./pics.json')
const itemsArr = ['nails','hammer','parka'];

module.exports = {
    getCompliment: function (req, res){
        const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!","Your Javascript skills are stellar.",];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    getFortune: function(req,res){
        const fortunes = ["The fortune you seek is in another cookie","We don’t know the future, but here’s a cookie", "That wasn’t chicken", "This cookie contains 117 calories", "Don’t eat the paper"];
        let randomInd = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomInd]
        res.status(200).send(randomFortune)
    },
    getForm: function(req,res){
        let bestThings = ['Instructor/Mentor', 'Cohort', 'Material', 'Structure']
        res.status(200).send(bestThings)
    },
    getImg: function(req,res){
        res.status(200).send(pics)
    },
    getItem: function(req,res){
        res.status(200).send(itemsArr)
    },
    addItem: function(req, res){
        const{ newItem } = req.body;
        itemsArr.push(newItem);
        res.sendStatus(200);
    },
    deleteItem: function(req,res){
        const{ indexPos } = req.params;
        const removedItem = itemsArr.splice(+indexPos, 1);
        res.status(200).send(removedItem)
    }

}