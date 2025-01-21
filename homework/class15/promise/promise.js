
//using promise chaining
var id = 2;
var orderId = 20;
var paymentMethod = "credit card"

let p1 = new Promise(function(resolve,reject){
    // const id = 2;
    if(id == 2){
        resolve("resolve : id: "+id);
    }else{
        reject("reject");
    }
})


let p2 = new Promise(function(p1Result,reject){
    if(orderId == 2){
        p1Result("order Id: "+orderId);
    }
    else{
        reject("orderId not found");
    }
})


let p3 = new Promise(function(p2Result){
    if(paymentMethod == "credit card"){
        p2Result("payment method: "+paymentMethod);
    }
    // else{
    //     reject("payment method not found");
    // }
})
// p3.then(function(m){
//     console.log(m);
// }).catch(function(m){
//     console.log(m)
// })
p1.then(function(result){
    console.log(result)
    p2.then(function(p1result){
        console.log(p1result)
        p3.then(function(p2result){
            console.log(p2result)
        })
    })
})

//using async await

const users = [
    {
        id : 1,
        name  : "Ali"
    },
    {
        id : 2,
        name : "Zahra"
    }
]

const metaData = [
    {
        orderId : 1,
        userId : 1,
        order : "Yellow Dress"
    },
    {
        orderId : 2,
        userId : 1,
        order : "Watch"
    }
]

function userData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            users.forEach(user => {
                if(user.id == 1){
                    
                    
                    resolve(user)
                }
            });
        }, 1000);
    })
}

function userOrder(user){
    return new Promise((resolve)=>{
        setTimeout(() => {
            metaData.forEach(order => {
                if(order.userId == user.id){
    
                    resolve(order)
                }
            });
        }, 1000);
    })
}

async function DisplayUser(){
    const data = await userData();
    const order = await userOrder(data);
    // console.log(data,order);
    return [data.name,order.order]
}
DisplayUser().then((data)=>{
    console.log(data)
});