const getGCD = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
   return false;
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   let t = y;
   y = x % y;
   x = t;
 }
 return x; 
}

const getLCM = (x, y) => {
     //Find the gcd first 
 let gcd = getGCD(x, y);

 //then calculate the lcm
 return (x * y) / gcd;
}

function getTotalX(a, b) {
   // Write your code here
   let result = 0;
   
   // Get LCM of element a
   let lcm = a[0];
   for (let int of a) {
       lcm = getLCM(lcm, int);
   }
   
   // Get GCD of all elements of b
   let gcd = b[0];
   for (let int of b) {
       gcd = getGCD(gcd, int)
   }
   
   let multiple = 0;
   
   while (multiple <= gcd) {
       multiple += lcm;
       
       if(gcd % multiple == 0) {
           result++;
       }
   }
   
   return result
}