import express from 'express';

const router=express.Router();

router.use((req,res,next)=>{
    console.log("Admin router middleware");
    next();
});

router.get('/dashboard',(req,res)=>{
    res.send("Admin Dashboard");
});

router.get('/profile',(req,res)=>{
    res.send("Admin Profile")
});

export default router;