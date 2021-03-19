var express = require('express');
var router = express.Router();

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

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

module.exports = router;
