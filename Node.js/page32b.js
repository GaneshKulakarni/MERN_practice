import {showTransaction,checkbalance,withdraw,deposit,customers} from "./bank.js"

deposit(customers,1,500)
withdraw(customers,1,200)
withdraw(customers,2,1000)
checkbalance(customers,3)
showTransaction(customers,1)
showTransaction(customers,2)