const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name: String,
    age:Number,
    health:String
    
}
const mydata = mongoose.model('cats', schema);

// const kitty = new mydata({ name1: 'testZildjian2' });
// kitty.save().then(() => console.log('testmeow1'));
// const kitty1=new mydata({name:"zhang3",age:1,health:"good"})
// kitty1.save().then(()=>console.log("new schema writed"))
mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})