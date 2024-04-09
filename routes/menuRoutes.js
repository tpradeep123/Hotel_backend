const express = require('express')
const router = express.Router()
const MenuModel = require('../models/Menu')


router.post('/',async(req,res)=>{
    try {
        const data = req.body;
        const newData = new MenuModel(data)
        const MenuItemData = await newData.save()
        console.log('data is saved...')
        res.status(200).json(MenuItemData)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal error...'})
    }
})

router.get('/',async (req,res)=>{
 try {
    const data = await MenuModel.find()
    res.status(200).json(data)
 } catch (error) {
    console.log(error)
    res.status(500).json({message:"internal error..."})
 }
})


module.exports = router