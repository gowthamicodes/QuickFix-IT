
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

console.log("Auth header:", authHeader)
    
    if (!authHeader) {
        return res.status(401).json({
        message: "Authentication failed"
    })
}

const token = authHeader.split(" ")[1];

console.log("Token:", token ? "Token received" : "No token")

try{
    const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET
    )

console.log("decoded token:", decodedToken)

    req.userData = decodedToken;
    next()

}catch (err) {

console.error("JWT error:", err.message)

    return res.status(401).json({
        message: "Authentication failed"
    })
    
}
}