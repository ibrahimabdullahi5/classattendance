let number=1;
const tbody =document.getElementById("tbody")
const form =document.querySelector("form")
document.addEventListener("submit",function(e){
    if(e.target.input1.value===""&& e.target.input2.value===""&& e.target.input3.value===""&& e.target.input4.value===""&&){
        alert("form is empty");   
    }else{
        const row =document.createElement("tr");
        row.innerHTML=`<td>${add()}</td>
        <td>${input1.value}</td>
        <td>${e.target.input2.value}</td>
        <td>${e.target.input3.value}</td>
        <td>${e.target.input4.value}</td>`
        tbody.appendChild(row)
    }
    function add(){
        return number=number+1
    }
    

})