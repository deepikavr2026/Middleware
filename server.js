//syntax
// function myMiddleware(req,res,next){
//     console.log("Middleware executed");
//     next();
// }



// import express from 'express'
// const app=express();

// //middleware
// function myMiddleware(req,res,next){
//     console.log("Middleware is running");
//     next();
// }

// //register middleware
// app.use(myMiddleware);

// app.get('/',(req,res)=>{
//     res.send("Home Page");
// })

// app.get('/about',(req,res)=>{
//     res.send("About Page");
// })

// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// })



//Types of middlewares
//1. Application middleware
//2. Multiple middleware
//3. Built-in middleware
//4. Third party middleware
//5. Error handling middleware


//1. Application middleware
// import express from 'express';
// const app=express();

// app.use((req,res,next)=>{
//     console.log("Request Received:",res.method,req.url);
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send("Home");
// })

// app.get('/contact',(req,res)=>{
//     res.send("Contact");
// })

// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// })


//Middleware for a specific path
// app.use('/admin',(req,res,next)=>{
//     console.log("Admin middleware");
//     next();
// })


//2. Multiple middleware
// import express from 'express';
// const app=express();

// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("Middleware 2");
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send("Home");
// })

// app.get('/contact',(req,res)=>{
//     res.send("contact")
// })

// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
    
// })


// Middleware with data modification
// import express from 'express';
// const app=express();

// app.use((req,res,next)=>{
//     req.username="Anu";
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send(`Welcome ${req.username}`);
// })

// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// })