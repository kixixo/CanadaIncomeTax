import Framework7 from 'framework7/framework7-bundle'
//const HST = require("./HST.js"); 
const IncomeTax = require("./IncomeTax")

// If your using custom DOM library, then save it to $$ variable
const $$ = Dom7;

// Init F7
const app = new Framework7();

// Add the view
app.view.create('#app', {

  // enable the dynamic navbar for this view:
  dynamicNavbar: true
});

//SAMPLE CODE
 $$("#incometax").on("submit", evt=>{
    evt.preventDefault();
    const oData = app.form.convertToData("#incometax")           //Convert
    //alert("adding: " + oData.amount);
    var taxableIncome = Number(oData.taxableIncome);             //Store the value of the taxableIncome from the html page to a variable
    //const nHst = HST.calculate("ON", nSubtotal);
    const pTax = IncomeTax.calcProvinceTax(taxableIncome);    //Calculate the province tax for the taxable Income
    const fTax = IncomeTax.calcFederalTax(taxableIncome);     //Calculate the federal tax for the taxable income
    //alert(pTax + ", " + fTax);                                        //Alert both province and federal tax
    var taxDeducted = Number(oData.taxDeducted);
    var tax = pTax + fTax;
    var due = tax - taxDeducted;
    $$("#provinceTax").html(pTax);                            //Send the value of the province tax to the html page to be displayed
    $$("#federalTax").html(fTax);                             //Send the value of the federal tax to the html page to be displayed
    $$("#total").html(tax);
    $$("#due").html(due);
    //$$("#amounts").prepend("<p>"+ oData.amount + "</p>");
  });