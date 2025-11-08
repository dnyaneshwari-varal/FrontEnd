function showDetails(){
    let fname=document.getElementById("Fname").value;
    let lname=document.getElementById("Lname").value;
    let mob=document.getElementById("mob").value;
    let location=document.getElementById("location").value;


//for gender
let gender="";
if(document.getElementById("F").checked){
    gender="Female";

}else if(document.getElementById("M").checked){
    gender="Male";

}

//course and fees
let selectedCourse = document.querySelector('input[name="course"]:checked');

let courseName="";
let fee=0;

if(selectedCourse){
    courseName=selectedCourse.value;
    fee=parseInt(selectedCourse.getAttribute("fee"));
}

  let discount = 0;
  let discounts = document.getElementsByName("discount");
  if (discounts[0].checked) {
    discount = 10;
  } else if (discounts[1].checked) {
    discount = 20;
  }

  // calculate fee after discount
  let finalFee = fee - (fee * discount) / 100;

  // show all information below the button
  let output = `
    <h3>Student Details</h3>
    <p><b>Name:</b> ${fname} ${lname}</p>
    <p><b>Mobile No.:</b> ${mob}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Location:</b> ${location}</p>
    <p><b>Selected Course:</b> ${courseName}</p>
    <p><b>Course Fee:</b> ₹${fee}</p>
    <p><b>Discount Applied:</b> ${discount}%</p>
    <p><b>Final Fee After Discount:</b> ₹${finalFee}</p>
  `;

  // create or update output div
  let existingOutput = document.getElementById("output");
  if (!existingOutput) {
    existingOutput = document.createElement("div");
    existingOutput.id = "output";
    document.body.appendChild(existingOutput);
  }
  existingOutput.innerHTML = output;

}