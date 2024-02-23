/* Create an array called numbers containing some numerical values. 
Then, use array methods to manipulate the array on the click
 eventlistner(e.g., add elements, remove elements, and find theindex of an element). */

  var numbers = ['2','3', '4', '5'];

  var arr = document.getElementById("ary");
  arr.innerHTML=numbers;

  document.getElementById("add").addEventListener("click", Add );
  document.getElementById("remove").addEventListener("click", Remove );
  document.getElementById("index").addEventListener("click", Index);

  function  Add(){
    var num = +prompt("Enter new element to add");
    numbers.push(num);
    arr.innerHTML=numbers;
  }

    function Remove(){
       numbers.pop();
      arr.innerHTML=numbers;
    }

    function Index(){
      var numb = 4;
      var indx = numbers.indexOf('4');
      console.log(indx);
      var index = "The index of " + numb + " is " + " " + indx;
      arr.innerHTML=index;
    }
 

    