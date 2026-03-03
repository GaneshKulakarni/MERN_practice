const stcokprice =[
    {
         name :"wipro",
        lastprice : 200,
        currprice : 210
    },

    {
         name :"Deloite",
        lastprice : 250,
        currprice : 270
    },

    {
         name :"HDFC",
        lastprice : 200,
        currprice : 290
    }
]
function stockPercentage(stcokprice){
    for(let i=0;i<stcokprice.length;i++){
        stcokprice[i].growth = stcokprice[i].currprice - stcokprice[i].lastprice;
        stcokprice[i].percetage = (stcokprice[i].growth*100)/stcokprice[i].lastprice
    }
}
stockPercentage(stcokprice);
console.log(stcokprice)