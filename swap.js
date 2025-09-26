//code currently commented can be used to swap 


// const axios = require('axios');

// const url = "https://quote-api.jup.ag/v6/quote?" +
//   "inputMint=So11111111111111111111111111111111111111112" + 
//   "&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" + 
//   "&amount=1000000000" + 
//   "&slippageBps=50"; 

// axios.get(url, { headers: { Accept: "application/json" } })
//   .then(res => console.log(JSON.stringify(res.data, null, 2)))
//   .catch(err => console.error(err.response?.data || err.message));


// let data = JSON.stringify({
//   "userPublicKey": "HCUrw9BrBGGvdWNLjy5EQvVCZggco5hmFGYX3Yxgxqbb",
//   "quoteResponse": {
//     "inputMint": "So11111111111111111111111111111111111111112",
//     "inAmount": "1000000",
//     "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//     "outAmount": "125630",
//     "otherAmountThreshold": "125002",
//     "swapMode": "ExactIn",
//     "slippageBps": 50,
//     "platformFee": null,
//     "priceImpactPct": "0",
//     "routePlan": [
//       {
//         "swapInfo": {
//           "ammKey": "AvBSC1KmFNceHpD6jyyXBV6gMXFxZ8BJJ3HVUN8kCurJ",
//           "label": "Obric V2",
//           "inputMint": "So11111111111111111111111111111111111111112",
//           "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//           "inAmount": "1000000",
//           "outAmount": "125630",
//           "feeAmount": "5",
//           "feeMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
//         },
//         "percent": 100
//       }
//     ]
//   },
//   "prioritizationFeeLamports": {
//     "priorityLevelWithMaxLamports": {
//       "maxLamports": 10000000,
//       "priorityLevel": "veryHigh"
//     }
//   },
//   "dynamicComputeUnitLimit": true
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://lite-api.jup.ag/swap/v1/swap',
//   headers: { 
//     'Content-Type': 'application/json', 
//     'Accept': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });


