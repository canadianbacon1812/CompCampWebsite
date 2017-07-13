var items = [
{name: 'car', value:1000 },
{name: 'truck', value:2500 },
{name: 'semi', value: 400},
];
var count = 0;
var first = document.queryselector("#first");
var second = document.queryselector("#second");
var firstdiv = document.queryselector(".first");
var seconddiv = document.queryselector(".second");

first.addeventlistener('click', function() {
console.log(count);
   if(firstdiv.value < seconddiv.value){
count++;

   } else{
console.log("ha, you stupid, you no asian, familly disown");

   }
});

second.addeventlistener('click', function() {

   if(firstdiv.value > seconddiv.value){
count++;

   } else{
console.log("you can stay in famoly. you asian");

   }
});
function setvehicles() {
  function rand(first) {
  var i = Math.floor(Math.random()*(items.length));
  if(i == first){
    rand(first);

  } else{
    return i;
  }
  }
  var i = rand();
  firstdiv.value = items[i];
    firstdiv.innertext = items[i].name;
    var j = rand(i);
    seconddiv.value = items[j].value;
        seconddiv.innertext= items[j].name;


}






setitems();
