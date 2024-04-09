const express = require('express')
const router = express.Router()
const PersonModel = require('../models/Person')


router.post('/',async(req,res)=>{
    try {
        const data =  req.body;
        const newPerson = new PersonModel(data)
        const response =  await newPerson.save()
        console.log('data is saved..')
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'internal error...'})
    }
})

router.get('/',async (req,res)=>{
    try {
        const data = await PersonModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal error..."})
    }
})

router.get('/:workType',async(req,res)=>{
    try {
        const workType = req.params.workType;
          console.log(workType)
      if (workType == "chef"|| workType == "manager"||workType == "waiter") {
        const response = await PersonModel.find({work:workType})
        console.log('data is fatched')
        console.log(response)
        res.status(200).json(response)
      } else {
        res.status(404).json({message:"invalid worktype"})
      }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal error..."})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const personData = req.body;

        const response = await PersonModel.findByIdAndUpdate(personId,personData,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({message:"invalid id..."})
        }
        console.log(response)
        res.status(200).json(response)

    } catch (error) {
         console.log(error)
        res.status(500).json({message:"Internal error..."})
    }
})


router.delete('/:id',async(req,res)=>{
    try {
        const personId = req.params.id
        
        const response = await PersonModel.findOneAndDelete({ _id: personId })
        if(!response){
            res.status(404).json({message:"invalid id..."})
        }
        console.log('person deleted...')
        res.status(200).json({message:'person deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal error..."})
    }
})

module.exports = router