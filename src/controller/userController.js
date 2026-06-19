const index=async(req,res)=>{
    res.send("hello1");
    
};
const createuser=async(req,res)=>{
    res.send("hello2");
    
};
const saveuser=async(req,res)=>{
    res.send("hello3");
    
};
module.exports={index,createuser,saveuser};