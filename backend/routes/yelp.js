var express = require('express');
var router = express.Router();

const yelp = require('yelp-fusion');
const client = yelp.client('KxE9chw4rrYaPP4P3fCvbkfKJK-ZgaGJmZyGGKbAByRNKWKHgmeGENajXAhlc-ZkCKJ1H4hMmyw10yO7Kg06K3LsZiKdqbtA5neo3QEJiY0pvOQoaqNOV0_Zs1pJYHYx');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('yelp');
});


router.post('/business/search', function(req, res, next) {
    
    console.log(req.body)
    
  
 client.search(req.body).then(response => {
  res.json(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
}); 
    
    
}); 

router.post('/business/alias', function(req, res, next) {
    
    console.log(req.body)
    
  
client.business(req.body.alias).then(response => {
  res.json(response.jsonBody);
}).catch(e => {
  console.log(e);
});
    
    
}); 


router.post("/business/reviews",function(req,res,body){
    
        client.reviews(req.body.alias).then(response => {
            res.json(response.jsonBody);
        }).catch(e => {
            console.log(e)
        })
    
})



module.exports = router;
