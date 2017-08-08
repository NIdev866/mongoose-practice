const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Fluffies")

var Cat = mongoose.model('cats', { name: String});

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});


app.get("/cats", function(req, res){
  mongoose.model("cats").find(function(err, cats){
    res.send(cats)
  })
})

app.listen(3000, () => console.log("working"))