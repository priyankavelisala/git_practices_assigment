1.prime or not

let num=13;

for(let i=2; i<num; i++){
if(num%i==1){
  return console.log("false");
}
}
console.log("true");
  

2.check palindrome
let str="madam";
let bag=""
for(let i=str.length-1; i>=0; i--){
bag+=str[i]
}

if(bag!==str){
print "yes"
}else{
print "no"
}