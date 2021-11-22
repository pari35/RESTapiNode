import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users =[

];

router.get('/', (req,res)=>{
  
   
    res.send(users);
    
});

router.post('/',(req,res)=>{
    const user =req.body;
   
    users.push({...user,id:uuidv4()});

    res.send(`user with the name ${user.name} added to databse`);
});
router.get('/:id',(req,res)=>{
const { id } =req.params;

const userfi = users.find((user) =>user.id=== id);
res.send(userfi);

})
router.delete('/:id',(req,res)=>{
    const{id}=req.params;
    users =users.filter((user)=>true.id!=id);
    res.send(`user with id ${id} deleted from database`);
})
router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {name,lastname,age} = req.body;

    const user =users.find((user)=> user.id===id);
if(name)user.name =name;
if(lastname)
    user.lastname =lastname;
if(age)
    user.age=age;
res.send(`user with the ${id} has been updated`);
})

export default router