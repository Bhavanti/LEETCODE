const maxProfit = (price) =>{
    let profit=0;
    let maxprofit=0;
    let minPrice=price[0];
    for(let i=0; i<price.length ; i++){
        if(price[i]<minPrice){
            minPrice=price[i];
        }
        profit=price[i]-minPrice;
        if(profit>maxprofit){
            maxprofit=profit;
        }
    }
    return maxprofit;
}
maxProfit([7,1,5,3,6,4])