const router = require('express').Router()
const multer=require('multer')

const {authMiddleware} = require('../middleware/userAuth')
const {authAdmin}=require('../middleware/AdminAuth')

const Image=require('../Models/image');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

// Upload image only admin can use
router.post('/',[upload.single('baby'),authMiddleware, authAdmin], (req, res) =>{
  console.log('image')
    let path= req.protocol+"://"+req.hostname+":"+5000+"/uploads/"+req.file.filename
    let newImage= new Image({imagename:path})

    newImage.save()
    .then (img=>res.status(201).send(img))
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send("Server Error")
    });
});








module.exports = router
