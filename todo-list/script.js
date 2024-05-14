// let inputBox=document.getElementById("input-box").value
// console.log(inputBox)
// const demo=document.getElementById("demo")
// const myArr=[]
//  function pushTodo(){
//     demo.innerHTML=inputBox
//     ;
//  
const myArr=[]
showTodo()
function showTodo(){
    let mylist=''
    for (let i = 0; i < myArr.length; i++) {
       let items=myArr[i] ;
        const {name,dueDate}=items;
       const html=`
       <div>${name}</div>
       <div>${dueDate}</div>
       <button id="del" onclick="
       myArr.splice(${i},1)
       showTodo()">Delete</button>
       `
       mylist +=html ;
    }
    document.querySelector('#demo').innerHTML=mylist;
}

function myFunction() {
    var y= document.getElementById("myText");
    var name=y.value
    var z= document.getElementById("myDate");
    var dueDate=z.value

    myArr.push({
        name,
        dueDate
    })
    y.value=''
  console.log(myArr)
  showTodo()
}
