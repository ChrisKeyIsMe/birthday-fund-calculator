// Necessary Functions:
/* 
1. Get the number of staff in a team
2. Get the total number of bdays in a given month
3. Calculate how much each group should pay
*/


// calculate function
function calculateBirthdayCost() {
    //Get numbers from the HTML form
    let amountPerBirthday = document.getElementById('amount').value;
    let numEmployees = document.getElementById('employees').value;
    let numBirthdays = document.getElementById('birthdays').value;
    let totalMonthly = amountPerBirthday * numBirthdays; //e.g., 35 dollars per bday and 5 bdays = 175 dollars

    //Calculate the cost of employees (both with and without birthdays this month)
    let fullCost = (amountPerBirthday / (numEmployees - 1) * numBirthdays).toFixed(2);
    let partialCost = (amountPerBirthday / (numEmployees - 1) * (numBirthdays - 1)).toFixed(2) ;

    //Create answers
    document.getElementById('totalcost-withbirthday').innerHTML = `$${partialCost}`;
    document.getElementById('totalcost').innerHTML = `$${fullCost}`;
}
