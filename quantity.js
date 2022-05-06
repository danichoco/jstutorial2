product ={
    name:"Harina",
    quantity: 20,
    measure: "1lbs",
    transaction:[5, 20, -5, 10, -6],
     updateQuantity: function(){
        quantity=0;
    
        for(i=0; i< this.transaction.length; i++){
            quantity= quantity + this.transaction[i];
        }
        this.quantity=quantity;
        return this.quantity; 
   }
 }

 console.log(product.updateQuantity);
 console.log(product.updateQuantity());