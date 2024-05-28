const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("get for posts");
});

router.get("/:id",(req,res)=>{
    let {id}=req.params;
    res.send(`get post ${id}`);
});
router.post("/",(req,res)=>{
    res.send("post for post");
});

module.exports=router;