const yelp = require('yelp-fusion');
        let API_KEY = "KxE9chw4rrYaPP4P3fCvbkfKJK-ZgaGJmZyGGKbAByRNKWKHgmeGENajXAhlc-ZkCKJ1H4hMmyw10yO7Kg06K3LsZiKdqbtA5neo3QEJiY0pvOQoaqNOV0_Zs1pJYHYx"

       
       
        const client = yelp.client(`${API_KEY}`);

        client.search({
        term: 'Four Barrel Coffee',
        location: 'san francisco, ca',
        }).then(response => {
        console.log(response.jsonBody.businesses[0]);
        }).catch(e => {
        console.log(e);
        });