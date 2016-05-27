var accounts = [];

function createAccount (account) {
    accounts.push(account);
    return account;
}

function getAccount (username) {
    var matchedAccount;
    accounts.forEach(function(account) {
        if(account.username === username) {
            matchedAccount = account;
        }
    });
    
    return matchedAccount;
}


function getAccount (username) {
    var matchedAccount;
    
    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    } 
    
    return matchedAccount;
}






function deposit(account, amount) {
    if(typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('deposit failed. amount is not a number.');
    }
    
}

function withdraw (account, amount) {
    if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('Withdraw failed. amount is not a number');
    }
    
}

function getBalance(account) {
    return account.balance;
}


function createBalanceGetter (account) {
    return function() {
        return account.balance;
    }
}

var andrew = createAccount({
    username: 'Andrew',
    balance: 0
});

deposit(andrew, 120);
withdraw(andrew, 'my string');

var andrew2 = getAccount('Andrew');
var getAndrew2Balance = createBalanceGetter(andrew2);
console.log(getAndrew2Balance());

var jensAccount = createAccount({
    username: 'jen001',
    balance: 12
})

console.log(accounts);


