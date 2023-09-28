const forms = document.getElementById("forms");
const tbody = document.getElementById("tbody");

let employees = [];



function addEmployee(employee){

     for(let i =0;i < employees.length;i++){
          let e=employees[i];
          if(e.email === employee.email){
            alert("email already exits");
            return;
          }else if(e.employeeid === employee.employeeid){
               alert("email Id  already exits");
               return;
          }
      }


    let tr = document.createElement("tr");
    tr.innerHTML=`<td>${employee.name} </td>
       <td>${employee.email}</td>
       <td>${employee.employeeid}</td>
       <td>${employee.company}</td>
       <td>${employee.designation}</td>
       <td>
       <button onclick="deleteEmployee(this)" data-employeeid="${employee.employeeid}">Delete</button>
       </td>
    `;

    tbody.appendChild(tr);
    employees.push(employee);
    forms.reset();
}

function deleteEmployee(buttonRef){
     let empId =buttonRef.getAttribute("data-employeeid");
     for(let i=0;i<employees.length;i++){
          
          if(employees[i].employeeid === empId){
               employees.splice(i,1);
               break;
          }
     }
     let parentTd = buttonRef.parentNode;
     let parentTr = parentTd.parentNode;

     parentTr.remove();
}

forms.addEventListener("submit",(event)=>{
     event.preventDefault();
     let employee={
          name : event.target.name.value,
          email : event.target.Email.value,
          employeeid :event.target.EmployeeId.value,
          company :event.target.company.value,
          designation:event.target.designation.value

     }
     console.log(employee);

     addEmployee(employee);
});