const response=fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    const result=response.json()
    return result
    
    
})
.then(function(result){
    console.log(result);
    
})

.catch(function(error){
    console.log('error occured', error);
    
 })

// const myPromise = new Promise((resolve, reject)=>{
// const number = Math.floor(Math.random()*10)
// console.log(number);

// if(number<2){
//     resolve("Operation successful")
// }
//     else{
//         reject("Operation failed")
//     }

// })

// myPromise
//   .then((message) => {
//     console.log(message); 
//   })
//   .catch((error) => {
//     console.error(error); 
//   });

  const myPromise = new Promise((resolve, reject)=>{
    const number = Math.floor(Math.random()*10)
    console.log(number);
    
    if(number<2){
        resolve("Operation successful")
    }
        else{
            reject("Operation failed")
        }
    
    })

    async function PerformOperation() {
        try{
        const result=await myPromise;
        console.log(result);
    }catch(error){
console.log(error);

    }
        
    }

    PerformOperation();