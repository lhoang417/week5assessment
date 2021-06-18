const pics = require('./pics.json')


module.exports = {
    getCompliment: function (req, res){
        const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
];

// choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: function(req,res){
        const fortunes = ["The fortune you seek is in another cookie","We don’t know the future, but here’s a cookie", "That wasn’t chicken", "This cookie contains 117 calories", "Don’t eat the paper",];
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
    }
}