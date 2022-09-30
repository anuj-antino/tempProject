const router = require("express").Router();

router.get('/',async (req,res,next)=>{
    console.log('>>>4');
    console.log(req.body);
    res.json({
        status:'success'
    })
})


module.exports = router;
