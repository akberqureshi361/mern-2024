const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});


// hum password ko sucure aese bhi kar sakte hain 
// userSchema.pre("save",async function (next){
//         const user = this ;
//         if (!user.isModified("password")){
//             next();
//         }
//         try {
//            const saltRound = await bcrypt.genSalt(10);
//            const hash_password = await bcrypt.has(user.password,saltRound);
//            user.password = hash_password; 
//         } catch (error) {

//         }
// });
// const bcrypt = require("bcryptjs");  yaad rakhe ye aapko import karna hoga upar 



// json web token (jwt token )
// jwt ko hum kabhi bhi server p store nahi karte hain blaki hum ise apne server p hi karte hain
// or hum jab apne browser p data ko save karte  hain use (cookie) kaha jata h !!yaad rakhan
//  ye bahut important h yaad rakhe 

userSchema.methods.generateToken = async function () {

    try {

        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,


        }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        )
    } catch (error) {

    }
};








// define the model or the collection name 
const User = new mongoose.model("User", userSchema);
module.exports = User;