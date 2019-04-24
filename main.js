// Comma function made by Elias Zamaria from stackoverflow.com

function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// Navigation Script

function nav() {
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// Cost Splitter Scripts

function split() {
    var bill = (document.getElementById("bill").value);
    var tip = 1 +(document.getElementById("tip").value / 100);
    var people = (document.getElementById("people").value);
    
    var total = document.getElementById("total");
    total.value = (bill * tip).toFixed(2);
    
    // Total Tip (ttip)
    var ttip = document.getElementById("ttip");
    ttip.value = ((bill * tip) - bill).toFixed(2);
    
    // Total Per Person (tppl)
    var tppl = document.getElementById("tppl");
    tppl.value = (total.value / people).toFixed(2);
    
    // Sets Person to 1 if nothing is put in the person input
    
    if (tppl.value == 0) {
        tppl.value = total.value;
    }
}


// Loan Calculator

function loan() {
    var loan = (document.getElementById("loan").value);
    var interest = 1 +(document.getElementById("interest").value / 100);
    var term = (document.getElementById("term").value);
    if (term == ""){
        term = 1;
    }
    var total = document.getElementById("total-loan");
    var tot = (loan * interest);
    total.value = comma(tot.toFixed(2));
    
    // Total Interest (tInt)
    var tInt = document.getElementById("tInt");
    var totalInt = (loan * interest) - loan;
    tInt.value = comma(totalInt.toFixed(2));
    
    // Total Per Month (tMonth)
    
    var tMonth = document.getElementById("tMonth");
    var totalMonth = tot / term;
    tMonth.value = comma(totalMonth.toFixed(2));
}


// Savings Calculator

function save() {
    
    var intAm = (document.getElementById("intAmm").value * 1);
    var annInt = 1 + ((document.getElementById("annInt").value) / 100);
    var moDep = (document.getElementById("moDep").value) * 12;
    
    var y1 = document.getElementById("y1");
    var year1 = (intAm + moDep) * annInt;
    y1.value = comma(year1.toFixed(2));
    
    
    
    var y2 = document.getElementById("y2");
    var year2 = (Number(year1 + moDep) * annInt);
    y2.value = comma(year2.toFixed(2)); 

    
    var y3 = document.getElementById("y3");
    var year3 = (Number(year2 + moDep) * annInt);
    y3.value = comma(year3.toFixed(2)); 
    
    var y4 = document.getElementById("y4");
    var year4 = (Number(year3 + moDep) * annInt);
    y4.value = comma(year4.toFixed(2)); 
    
    var y5 = document.getElementById("y5");
    var year5 = (Number(year4 + moDep) * annInt);
    y5.value = comma(year5.toFixed(2)); 
}