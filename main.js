let Name =document.getElementById("Name");
let Position =document.getElementById("Position");
let inputSalary =document.querySelectorAll("#inputSalary input");
let Department =document.getElementById("Department");
let Counter =document.getElementById("Counter");
let btnCreat =document.getElementById("btnCreat");
let tbody =document.getElementById("tbody");

if(localStorage.Empolyees == null){
     Empolyees = [] ;
}
else{
    Empolyees = JSON.parse(localStorage.Empolyees);
}
// getsalary
let Salary = () => {
    let Gross = inputSalary[0].value;
    let Tax = inputSalary[1].value;
    let TranCost = inputSalary[2].value;
    let Bonous = inputSalary[3].value;
    

    let TaxCost = +Gross * (Tax/100);
    let GrossAfterTax = +Gross - +TaxCost;
    let GrossAfterTranCost = +GrossAfterTax - +TranCost;
    let GrossAfterBonous = +GrossAfterTranCost + +Bonous ;
    inputSalary[4].value = GrossAfterBonous ;

};
for(let i=0 ; i<inputSalary.length ; i++){
    inputSalary[i].addEventListener("keyup",Salary)
}

let CreatObject = () => {
    let Empolyee ={
        Name : Name.value ,
        Position : Position.value ,
        Gross : inputSalary[0].value ,
        Tax : inputSalary[1].value ,
        TranCost : inputSalary[2].value ,
        Bonous : inputSalary[3].value ,
        Totle : inputSalary[4].value ,
        Department : Department.value ,
        Counter : Counter.value ,
        
    };
    if(Empolyee.Counter <=1){
        Empolyees.push(Empolyee);
    }
    else{
        for(let i=0 ; i<Empolyee.Counter ; i++){
            Empolyees.push(Empolyee);
        }
    }
    ShowData();
    ResetData();
    localStorage.setItem("Empolyees", JSON.stringify(Empolyees));
};
btnCreat.addEventListener("click",CreatObject);

let ResetData = () => {
        Name.value = "" ;
        Position.value = "" ;
        inputSalary[0].value = "" ; 
        inputSalary[1].value = "" ;
        inputSalary[2].value = "" ;
        inputSalary[3].value = "" ;
        inputSalary[4].value = "" ;
        Department.value = "" ;
        Counter.value = "" ;
};



let ShowData = () => {
    let tr = "" ;
    for(let i=0 ; i<Empolyees.length ; i++){
        tr +=`
        <tr>
            <td>${i+1}</td>
            <td>${Empolyees[i].Name}</td>
            <td>${Empolyees[i].Position}</td>
            <td>${Empolyees[i].Department}</td>
            <td>${Empolyees[i].Gross}</td>
            <td>${Empolyees[i].Tax}</td>
            <td>${Empolyees[i].TranCost}</td>
            <td>${Empolyees[i].Bonous}</td>
            <td>${Empolyees[i].Totle}</td>
        </tr>
        `;
    };
    tbody.innerHTML = tr ;
};
ShowData() ;
