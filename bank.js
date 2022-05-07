bank = {
    name: "Bank of america",
    clients: [
        {name: "Jorge", credit: 23 },
        {name: "Yenny", credit: 55 },
        {name: "Bob",   credit: 56 },
        {name: "Juan",  credit: 33 },
    ],
    findCredit: function(name){
        for(client of this.clients){
            if(client.name == name){
                return client.credit;
            }
        }
        return -1;
    }
};

console.log(bank.findCredit("Juan"))
console.log(bank.findCredit("Jorge"))
console.log(bank.findCredit("Yenny"))