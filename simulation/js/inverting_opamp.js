
function sliderChange() {
  var  sliderVal = document.getElementById("vdc").value;
    document.getElementById("dc").value = sliderVal;
    check();
}

function textChange() {
 var   txtVal = document.getElementById("res1").value;
    document.getElementById("res").value = txtVal;
    
}
function textChangerf() {
  var  txtValrf = document.getElementById("res1rf").value;
    document.getElementById("resrf").value = txtValrf;
    
}

var r1,rf,vin;
var vo;
var gain;
function check(){
   
    r1 = document.getElementById("res").value; // in kOhm
    rf = document.getElementById("resrf").value; // in kOhm
    vin = document.getElementById("dc").value;
   

    vo =-vin*(rf/r1); //volt
   
    i=(vin-vo)/(r1+rf); //miliamp
	
	gain=-(rf/r1);
   
    document.getElementById("voutput").value = vo.toPrecision(3);//volt  
     document.getElementById("amp").value=parseFloat(i).toPrecision(3); //miliamp
	  document.getElementById("avgain").value=gain; 
}

var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var chart;
var dataPoints = [];
// var showAlert;
//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {

 table = document.getElementById("mytable");
    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("dc").value;
    arr[2] = document.getElementById("voutput").value;
    arr[3] = document.getElementById("amp").value;
    //arr[3] = document.getElementById("res").value;

    if (document.getElementById("dc").value == "") {
        //Alert.render("Enter the Input Voltage");
        document.getElementById("dc").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }
    else if (document.getElementById("res").value == "") {
        // Alert.render("Enter the Resistance Value");
        document.getElementById("res").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Resistance (R1) Value";
    }
    else if (document.getElementById("resrf").value == "") {
        // Alert.render("Enter the Resistance Value");
        document.getElementById("resrf").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Enter the Resistance (Rf) Value";
    }
   
    else if (table.rows.length <= 15) {
        document.getElementById("dc").style.borderColor = "";
        document.getElementById("res").style.borderColor = "";
        document.getElementById("voutput").style.borderColor = "";
        document.getElementById("demo").innerHTML = "";

       
        document.getElementById("rs").value = document.getElementById("res").value;
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 4; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

        }

    }

//    columns = table.rows[1].cells[3];
//    rest = columns.innerHTML;
    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (document.getElementById("res").value != document.getElementById("rs").value) {
        //  document.getElementById("add").style.display = "none";
        //Alert.render("Same resistance value required for linear graph");
        document.getElementById("demo").innerHTML = "Keep the Resistance Value Constant";
        document.getElementById("res").style.borderColor = "red";
    }

}



//--------------------------------------------------------- print-------------------------------------------------------//
function printf() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";

    window.print();
}
//--------------------------------------------------------- scroll to bottom--------------------------------------------------//
 $(document).ready(function () {
    $("#plt").click(function () {
        $('html,body').animate({
            scrollTop: $("#grpwrap").offset().top},
        'slow');
    });
});

// -------------------------------------canvas.js ------------------------//
function plot() {
    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;

        dataPoints.push({x: parseFloat(rwe1[1].innerHTML), y: parseFloat(rwe1[2].innerHTML)});
    }

    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Vo-Vi Plot "
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            title: "Input Voltage (V)",
        },
        axisY: {
            title: "Output Voltage (V)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
    });

    chart.render();

    document.getElementById("demos").innerHTML = "Print It <br><br>Take another sets of readings for different R1 and Rf";

}

//---------------------------------------clear data----------------------------------------------------------------------------//
function clearf() {

    document.getElementById("dc").value = "";
    document.getElementById("vdc").value = "";
    document.getElementById("amp").value = "";
    document.getElementById("res").value = "";
    document.getElementById("res1rf").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("resrf").value = "";
	document.getElementById("voutput").value  = "";
	document.getElementById("avgain").value = "";
	document.getElementById("rs").value = "";
    document.getElementById("chartContainer").innerHTML = "";
	
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demos").innerHTML = "";
    document.getElementById("dc").style.borderColor = "";
    document.getElementById("res").style.borderColor = "";
  
    // document.getElementById("prnt").style.display="none";
	
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);

    }
    tabrowindex = 0;
    dataPoints = [];


}
