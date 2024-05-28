const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("get for users");
});

router.get("/:id",(req,res)=>{
    let {id}=req.params;
    res.send(`get user ${id}`);
});
router.post("/",(req,res)=>{
    res.send("post for users");
});

module.exports=router;