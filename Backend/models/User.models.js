import mongoose  from 'mongoose'
import bcrypt from  'bcrypt'

const userSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
},
 {
    timestamps:true
}
);

// userSchema.pre('save',async function(next){
//     if(!this.isModified('password'))
//         return next();

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// })

// userSchema.methods.comparePassword = function (CandidatePassword){
//     return bcrypt.compare(CandidatePassword, this.password);
// }

const User = mongoose.model("User",userSchema)

export default  User