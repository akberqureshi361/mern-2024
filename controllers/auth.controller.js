const User = require("../models/user-models");




const home = async (req, res) => {
    try {
        res.send("welcome to world best mern series by ahad qureshi  using router");
    } catch (error) {
        console.log("error");
    }
};
// user Registration Logic 
// 1. Get Registration data : Retrive user data (username, email , password );
// 2. Check email exitence : Check if the email is already registred;
// 3. Hash Password : Securely has the password ;
// 4. Create User : Create a new user with hashed  passoword .
// 5. Save to DB : Save usdrdata to database ,
// 6. Respond : Respond with "Registration Succesfull " or handle errors .





const register = async (req, res) => {


    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email : email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });


        res.status(200).json({ msg: userCreated });

    }catch (error) {
        res.status(500).json({ msg: "page not found " });
    }
};

module.exports = { home, register };
