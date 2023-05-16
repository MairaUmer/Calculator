function getNum(num){
    document.getElementById('result').value += num;
}
function clearNum(){
    document.getElementById('result').value = '';
}
function removeNumb(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1);

}
function getResults(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}
var isDegree = false;

    function appendToResult(value) {
      document.getElementById("result").value += value;
    }

    function convertToDegree() {
      isDegree = true;
      document.getElementById("result").value += "* (180 / Math.PI)";
    }
    function convertToRadian() {
        isDegree = false;
        document.getElementById("result").value += "* (Math.PI / 180)";
      }
    
      function clearResult() {
        document.getElementById("result").value = "";
      }
      function convertToDegree() {
        isDegree = true;
        document.getElementById("result").value += "* (180 / Math.PI)";
  }
  
  function convertToRadian() {
    isDegree = false;
    document.getElementById("result").value += "* (Math.PI / 180)";
  }
  var isDegree = false;

    function appendToResult(value) {
      document.getElementById("result").value += value;
    }
    