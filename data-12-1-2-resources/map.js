var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num*2;
});
console.log(doubled);

var numbers = [0,2,4,6,8];
var addFive = numbers.map(num => num+5);
console.log(addFive);

var numbers = [1,2,3,4,5];
var larger = numbers.filter(num => num>1);
console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sWords = words.filter(word => word[0]=='s');
console.log(sWords);