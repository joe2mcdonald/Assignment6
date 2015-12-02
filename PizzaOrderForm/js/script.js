//     
//
//
//                       			 JOE MCDONALD  OCTOBER 20 2015
//
// ==========================================================================================================
// ==========================================================================================================
//						                 	 ASSIGNMENT    6 

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/
document.addEventListener("DOMContentLoaded", function () {

//================================================
  function log(message) {
    window.console.log(message);
  }

  function $(id) {
    return document.getElementById(id);
  }	
	
// $(document).ready(function() {
	
//window.addEventListener("load", init, false);      
//	function init() 								// USER DEFINED FUNCTION 
//	{
//
	
//								           
//  ---------------------------------------------                            -------
 //  jQuery 
 //  !function(){
//	      console.log('self invoking anonymous function'); 
//   } ();
//
//       window.onLoad = function() {}      
 
//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  ---------------------------- PIZZA ORDER FORM          ------------   
//  -----------------------------    PART 1                         -------------  
//  ----------------------------------------------------------------------------------------

						
//  ----------------------------------------------------------------------------------------

var finBtn = document.getElementById("finishBtnId");		
finBtn.onclick = function finishBtn(){
	var x;
	if( confirm("PRESS OK IF YOU ARE FINISHED BUILDING YOUR PIZZA?") == true)
		{
			x = "You are done building Your Pizza";
			document.getElementById("billId").style.display = "block";
		} else  {
			x = "You are not done ";
			document.getElementById("billId").style.display = "none";
 			}
	 document.getElementById("doneId").innerHTML = x;
	};

function fillBill(e) {
    if (e.target.checked) {	
document.forms["myForm"]["bifname"].value = document.forms["myForm"]["fname"].value ;
document.forms["myForm"]["bistreet"].value = document.forms["myForm"]["street"].value ;
document.forms["myForm"]["bisuite"].value = document.forms["myForm"]["suite"].value ;
document.forms["myForm"]["bicity"].value = document.forms["myForm"]["city"].value ;
document.forms["myForm"]["bistate"].value = document.forms["myForm"]["state"].value ;
document.forms["myForm"]["bizip"].value = document.forms["myForm"]["zip"].value ;
document.forms["myForm"]["biphone"].value = document.forms["myForm"]["phone"].value 		
      }   else   {	
document.forms["myForm"]["bifname"].value = "" ;
document.forms["myForm"]["bistreet"].value =  "" ;
document.forms["myForm"]["bisuite"].value =  "" ;
document.forms["myForm"]["bicity"].value =  "" ;
document.forms["myForm"]["bistate"].value =  "" ;
document.forms["myForm"]["bizip"].value =  "" ;
document.forms["myForm"]["biphone"].value =  "" ;
      }	
  }

  var crustSizePrices = { 
	'Hand Tossed': { Small: 9.99, Medium: 12.99, Large: 14.99 },
    'Thin Crust': {  Medium: 11.99, Large: 13.99 },
    'New York Style': { Large: 16.99, XLarge: 19.99 },
    'Gluten Free': { Small: 10.99 }
       };


  function buildDoughSizeSelect(e) {
    // get the select element
    var crustSelect = $('doughSizeSelect');
    var crust = getSelectedRadioValue('crust');

    function buildSelectSizeOptions(crust) {
      var str = '<option value="-select size-">- select size -</option>',
        prop,
        crustType = crustSizePrices[crust],
        newOption;

      for (prop in crustType) {
        if (crustType.hasOwnProperty(prop)) {
          str += '<option value="' + prop + '">' + prop + ' ($' + crustType[prop] + ')</option>';
        }
      }
      return str;
    }
    crustSelect.innerHTML = buildSelectSizeOptions(crust);
    $('doughSizeSelect').disabled = false;
    $('doughSizeSelect').style.border = '1px solid #f00';
    crustSizeValidate.validate();
    calcTotal();
    $('runningTotal').classList.remove('hidden');
  }
	
//  ----------------------------------------------------------------------------------------

function validateForm() 
    {
		
//  ADDRESS TYPE FOR OTHER TYPE HIDDEN 	
   document.getElementById("othertype").type = "hidden";     
   if ( document.getElementById("dropdownAddress").value == "other") {  
      document.getElementById("othertype").type = "text"; 
    }

 for (var key in PizzaInfo) {
	if (PizzaInfo.hasOwnProperty(key)) {
	     var obj = PizzaInfo[key];
		 //for (var prop in obj) {
			 
			//if (obj.hasOwnProperty(prop)){
			//	console.log(prop + " = " + obj[prop]);
			//	console.log (obj.dough + " a Selected: " + obj.size + " ($" + obj.price+") ");
		
				 console.log (" c " + value);
				 if (value ==  obj.dough )
				{	
					console.log (obj.dough + "  b Selected: " + obj.size + " ($" + obj.price + ") ");
					console.log(PizzaInfo.displayPizzaDough(obj.dough, obj.size, obj.price));
				}
		 //  }
	//	}
	 }
 }
	

//  ----------------------------------------------------------------------------------------

		
//    ----------------------------     FIELD VALIDATION    -----------   
		
//  -----------------------            DELIVERY -----------------------------------------------

var isValid = true;


// NAME 
	var lettersPattern = /^[A-Za-z]+$/;
    var x = document.forms["myForm"]["fname"].value;
	
    if (document.forms["myForm"]["fname"].value == null || document.forms["myForm"]["fname"].value == "") {
		 document.forms["myForm"]["fname"].focus(); 
       isValid = false;
		 alert (" mssing name " );
	  }
	else  if(document.forms["myForm"]["fname"].value.match(lettersPattern))	
	{  
	    document.forms["myForm"]["fname"].focus(); 
	isValid = true;  
	}
	 else
	 {
	  document.forms["myForm"]["fname"].focus(); 
		 alert (" Invalid name " );
		 isValid = false;
     } 

		
// STATE 		
	var statePattern = /^[A-Za-z]{2}$/; 	
    var x = document.forms["myForm"]["state"].value;
	
    if (document.forms["myForm"]["state"].value == null || document.forms["myForm"]["state"].value == "") {
		 document.forms["myForm"]["state"].focus(); 
       isValid = false;
		 alert (" Invalid  state " );
	  }
	else  if(document.forms["myForm"]["state"].value.match(statePattern))	
	{  
	    document.forms["myForm"]["state"].focus(); 
	isValid = true;  
	}
	 else
	 {   
	  document.forms["myForm"]["state"].focus(); 
		  alert (" Invalid state " );
		 isValid = false;
     } 
		
	
// ZIP		
	// validate the zip code entry (regular expression)
	var zipPattern = /^\d{5}(-\d{4})?$/;
	var zip = document.forms["myForm"]["zip"].value;
		{ 
	if(document.forms["myForm"]["zip"].value.match(zipPattern))  
        {  
		document.forms["myForm"]["zip"].focus(); 
        isValid = true;  
        }   else  if(document.forms["myForm"]["zip"].value == null || document.forms["myForm"]["zip"].value == "") 
        {  
		 document.forms["myForm"]["zip"].focus(); 
         isValid = false;
	     alert (" missing zip " );
		} else {
	     document.forms["myForm"]["zip"].focus(); 
         isValid = false; 
	     alert (" Invalid  zip " );
          }  
		}
				
		
//  PHONE 		
    var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
		
    if(document.forms["myForm"]["phone"].value.match(phonePattern ))  
        {  
			document.forms["myForm"]["phone"].focus();
           isValid =  true;  
        }   else  if(document.forms["myForm"]["phone"].value == null || document.forms["myForm"]["phone"].value == "") 
        {  
			document.forms["myForm"]["phone"].focus(); 
           isValid = false; 
			 alert (" Missing phnone " );
		} else {
  			document.forms["myForm"]["phone"].focus();
            isValid = false;  
			 alert (" Invalid phone " );
          }  
	 
//  EMAIL	
var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  		
if(document.forms["myForm"]["email"].value.match(mailPattern))  
      {  
	    document.forms["myForm"]["email"].focus(); 	  
		isValid = true; 
	  }  
else  
{  
document.forms["myForm"]["email"].focus();  
isValid = false;  
	 alert (" Invalid email " );
}

//  ----------------------- BILLING ----------------------------------------------------------
		
// Billing Information NAME 	
	var lettersPattern = /^[A-Za-z]+$/;
 //   var x = document.forms["myForm"]["bifname"].value;
	
    if (document.forms["myForm"]["bifname"].value == null || document.forms["myForm"]["bifname"].value == "") {
		 document.forms["myForm"]["bifname"].focus(); 
       isValid = false;
		 alert (" mssing Billing Info name " );
	  }
	else  if(document.forms["myForm"]["bifname"].value.match(lettersPattern))	
	{  
	  document.forms["myForm"]["bifname"].focus(); 
	  isValid = true;  
	}
	 else
	 {
	  document.forms["myForm"]["bifname"].focus(); 
		 alert (" Invalid Billing Info name " );
		 isValid = false;
     } 
	
		
// Billing Information STATE 		
	var statePattern = /^[A-Za-z]{2}$/; 	
 //   var x = document.forms["myForm"]["bistate"].value;
	// alert ("  Billing Info  state " );
	
    if (document.forms["myForm"]["bistate"].value == null || document.forms["myForm"]["bistate"].value == "") {
		 document.forms["myForm"]["bistate"].focus(); 
       isValid = false;
		 alert (" Missing Billing Info state " );
	  }
	else  if(document.forms["myForm"]["bistate"].value.match(statePattern))	
	{  
	    document.forms["myForm"]["bistate"].focus(); 
	isValid = true;  
	}
	 else
	 {   
	  document.forms["myForm"]["bistate"].focus(); 
		  alert (" Invalid Billing Info  state " );
		 isValid = false;
     } 
		
	
// Billing Information ZIP		
	// validate the zip code entry (regular expression)
			var zipPattern = /^\d{5}(-\d{4})?$/;
//			var zip = document.forms["myForm"]["bizip"].value;
		{ 
			if(document.forms["myForm"]["bizip"].value.match(zipPattern))  
        {  
		    document.forms["myForm"]["bizip"].focus(); 
           isValid = true;  
        }   else  if(document.forms["myForm"]["bizip"].value == null || document.forms["myForm"]["bizip"].value == "") 
        {  
			 document.forms["myForm"]["bizip"].focus(); 
            isValid = false;
			 alert (" missing Billing Info zip " );
		} else {
			 document.forms["myForm"]["bizip"].focus(); 
           isValid = false; 
			 alert (" Invalid Billing Info zip " );
          }  
		}
				

//  --------------------------------------------------------------------------------------

function validate(){
if (document.getElementById('di').checked){
          alert("checked") ;
}else{
          alert("You didn't check it!, \n Please enter the Billing Information")
}
}		
		
	
//  ----------------------------------------------------------------------------------------
		
// prevent the submission of the form if any entries are invalid 
	if (isValid == false) {
		event.preventDefault();				
		}	

		

}         /*   === ======= END OF VALIDATE FUNCTION =========  */

//  ----------------------------------------------------------------------------------------

//   BILLING INFO IS THE SAME AS DELIVERY INFO CHECKBOX  

function sameAsDelivery(){
if (document.getElementById('di').checked == 1) {
          alert("checked") ;
}else{
       alert("You didn't check it! Let me check it for you.");
    }
}		

	
//$('doughRadioButtons').addEventListener('change', buildDoughSizeSelect);
$('sameAsId').addEventListener('change', fillBill);
	

});                // End  addEventListener



//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  -----------------------------                  -------------  

/*	
function checkOther() 
    {
    var txt = "";
    if (document.getElementById("id1").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    } 
    document.getElementById("demo").innerHTML = txt;
}

*/
  //  });



