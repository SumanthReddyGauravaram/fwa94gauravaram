var express =require('express');
var router = express.Router();
var storeValue1;
var storeValue2;
var storeValue3;


router.get('/',function(req,res,next){
    fake_url = "https://fake.com/path"+req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    storeValue = Number(search_params.get("x"))

    if(storeValue == 0)
    {
        storeValue1 = Math.random()
        storeValue2 = Math.random()
        storeValue3 = Math.random()
    }
        
    
    res.write("Computes the values for Math.hypot and Math.ceil function." + "\n");
    res.write('Math.log2 applied to ' + storeValue1 + " is " + Math.cos(storeValue1) + "\n");
    res.write('Math.log2 applied to ' + storeValue2 + " is " + Math.asin(storeValue2) + "\n");
    res.end('Math.cosh applied to ' + storeValue3 + " is " + Math.asinh(storeValue3));
});

module.exports = router;