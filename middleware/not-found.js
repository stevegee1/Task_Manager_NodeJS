//this module is considered a fallback function when the route is not found

const notFound= (req,res)=>res.status(404).send("route not found")

module.exports= notFound