

 const axios = require("axios")

let API_KEY = "KxE9chw4rrYaPP4P3fCvbkfKJK-ZgaGJmZyGGKbAByRNKWKHgmeGENajXAhlc-ZkCKJ1H4hMmyw10yO7Kg06K3LsZiKdqbtA5neo3QEJiY0pvOQoaqNOV0_Zs1pJYHYx"

// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/search?term=delis",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})

yelpREST(ENDPOINT, { params: { key: value } }).then(({ data }) => {
  // Do something with the data
  console.log(data)
})