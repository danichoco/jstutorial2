statements= require("./fin-statements.json");

function findUserList(){
    list=[];
    for( month of statements){
        for(balances of month.balances){
            contiene=list.includes(balances.user)
            if(!contiene){
            list.push(balances.user)
            }
        }

    }
  return list;
}

function calcIncome(name){
    income=0;
    prevBalance=0;
  for(months of statements){
      for(balances of months.balances){
          if(balances.user ==name){
             monthIncome = balances.amount-prevBalance
             prevBalance=balances.amount;
             income+= monthIncome
          }
      }
  }
  return income;
}
userList=findUserList();
for(user of userList ) {   
    console.log("total income for user"  +  user  +  "is equal to:" + calcIncome("Jade"))
}

