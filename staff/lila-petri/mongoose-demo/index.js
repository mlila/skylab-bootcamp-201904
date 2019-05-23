const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-mongoose', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected')
});
const userSchema = new mongoose.Schema({
    name: String, 
    surname: String,
    email: {
        type: String,
        required: [true, 'preferences is required'],
        unique: [true, 'email has to be unique'],
        validate: {
            validator: email => {
                return /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email`
        }
    }
})
return (async ()=>{

    let Users = mongoose.model('Users', userSchema);
    await Users.create ({ name: 'Lila', surname: 'Petri', email: 'lila@lila.com' })
    try{
    const user= await Users.create({email:'mailgg@mail'})
    console.log(user)
    }catch(error){
        console.log(error.message)
    }
})()

