const home = async ( req, res ) => {
    try{
        res.send("welcome to world best mern series by ahad using router");
    } catch (error) {
            console.log("error");
    }
};

const register = async ( req, res ) => {
try {
    res.send("welcome to register page using controllers ");
} catch (error) {
    res.send({msg:"page not found "})
}
}

module.exports = { home, register }; 
