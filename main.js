const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter two numbers : ', num => {
    const NUM = num.split(" ");
    let a = NUM[0]
    let b = NUM[1]
    
    let gcd =(x,y)=> {
        if (x==y){
            return x
        }
        else if (x > y) {
            return gcd(x-y , y)
        }
        else {
            return gcd(x , y-x)
        }
    }

    console.log(`GCD : ${gcd(a,b)}`)
    console.log(`LCM : ${(a*b / gcd(a,b))}`)
    readline.close();

  });