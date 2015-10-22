//               YOU WILL NOT SEE THE CONSOLE.LOG AND ALERT MESSAGES FROM THE SCRIPT.JS FILE   	 
//	                  - 
//   	
//
//
//     	
//     
//
//
//                       			 JOE MCDONALD  OCTOBER 20 2015
//
// ==========================================================================================================
// ==========================================================================================================
//						                 	 ASSIGNMENT    6 
//								           
//  ---------------------------------------------                            -------
 //  jQuery 
 //  !function(){
//	      console.log('self invoking anonymous funcion'); 
//   } ();
//
//       window.onLoad = function() {}      
 
//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  --------------------------------  PIZZA ORDER FORM          -------------
//  ----------------------------------------------------------------------------------------   

//  ----------------------------------------------------------------------------------------
//  -----------------------------    PART 1                         -------------  
//  ----------------------------------------------------------------------------------------

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/

//   console.log("\n\n----------                                                -----------");

function writeMessage() {
	window.alert("I have been clicked 1");
}


//  ----------------------------------------------------------------------------------------

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/



//window.addEventListener("load", init, false);      
//	function init() 								// USER DEFINED FUNCTION 
//	{




function validateForm() 
    {

		
		
		
//  ADDRESS TYPE FOR OTHER TYPE HIDDEN 	
   document.getElementById("othertype").type = "hidden";     
   if ( document.getElementById("dropdownAddress").value == "other") {  
      document.getElementById("othertype").type = "text"; 
    }

//  PIZZA PRICES MENU

var PizzaInfo = {
  key1: {
	dough: "Hand Tossed",
	size:  "small",
	price:  "9.99",
  },
  key2: {
	dough:"Hand Tossed",  
	size: "medium",
	price: "12.99",
  },
  key3: {
	dough: "Hand Tossed", 
	size:  "large",
	price: "14.99", 
  },
  key4: {
	dough: "Thin Crust",  
	size:  "medium",
	price: "11.99", 
  },	
  key5: {
	dough: "Thin Crust", 
	size: "large",
	price:  "13.99",
  },	
   key6: {
	dough: "New York Style", 
	size: "large", 
	price:  "16.99",
  },
  key7: {
	dough: "New York Style", 
	size:  "extra large",
	price:  "19.99",
  },	
  key8: {
	dough: "Gluten Free", 
	size:  "small",
	price:  "10.99",
  },	
  
	displayPizzaDough: function(dough, size, price) {
		return obj.dough + "  c Selected: " + obj.size + " ($" + obj.price+") " 
	}
}


divdoughId.addEventListener("click", doughChoice, false);	
var value;
function doughChoice() {		
value = document.getElementsByName('dough').value;
console.log (" b"   );
}	

		
		
/*	
var radios = document.getElementsByName('dough');
 for (i = 0; i < radios.length; i++) {
    if (radios[i].type == 'radio' && radios[i].checked) {
		var radioValue = radios[i].value;
		console.log (" a " + radioValue + " radios[i].value  " + radios[i].value );
    }
}

*/


		
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

		
//  ----------------------------------------------------------------------------------------
		

		
// Billing Information NAME 	
	var lettersPattern = /^[A-Za-z]+$/;
 //   var x = document.forms["myForm"]["bifname"].value;
	
    if (document.forms["myForm"]["bifname"].value == null || document.forms["myForm"]["bifname"].value == "") {
		 document.forms["myForm"]["bifname"].focus(); 
       isValid = false;
		 alert (" mssing Business Info name " );
	  }
	else  if(document.forms["myForm"]["bifname"].value.match(lettersPattern))	
	{  
	  document.forms["myForm"]["bifname"].focus(); 
	  isValid = true;  
	}
	 else
	 {
	  document.forms["myForm"]["bifname"].focus(); 
		 alert (" Invalid Business Info name " );
		 isValid = false;
     } 
	
		
// Billing Information STATE 		
	var statePattern = /^[A-Za-z]{2}$/; 	
 //   var x = document.forms["myForm"]["bistate"].value;
	// alert ("  Business Info  state " );
	
    if (document.forms["myForm"]["bistate"].value == null || document.forms["myForm"]["bistate"].value == "") {
		 document.forms["myForm"]["bistate"].focus(); 
       isValid = false;
		 alert (" Missing Business Info state " );
	  }
	else  if(document.forms["myForm"]["bistate"].value.match(statePattern))	
	{  
	    document.forms["myForm"]["bistate"].focus(); 
	isValid = true;  
	}
	 else
	 {   
	  document.forms["myForm"]["bistate"].focus(); 
		  alert (" Invalid Business Info  state " );
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
			 alert (" missing  Business Info zip " );
		} else {
			 document.forms["myForm"]["bizip"].focus(); 
           isValid = false; 
			 alert (" Invalid Business Info zip " );
          }  
		}
				

//  ----------------------------------------------------------------------------------------
		
	
		
function validate(){
if (document.getElementById('di').checked){
          alert("checked") ;
}else{
alert("You didn't check it! Let me check it for you.")
}
}		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//  ----------------------------------------------------------------------------------------
		
// prevent the submission of the form if any entries are invalid 
	if (isValid == false) {
		event.preventDefault();				
		}	

		

}         /*   === ======= END OF VALIDATE FUNCTION =========  */

//  ----------------------------------------------------------------------------------------

//   SAME AS DELIVERY INFO CHECKBOX  

function checkDelivery(){
if (document.getElementById('di').checked == 1) {
          alert("checked") ;
}else{
       alert("You didn't check it! Let me check it for you.");
    }
}		

document.getElementById('bifnameid').value = document.getElementById('fname').value;











































//  ----------------------------------------------------------------------------------------
















//  ----------------------------------------------------------------------------------------
//  -----------------------------                  -------------  



//  ----------------------------------------------------------------------------------------
//console.log("\n\n----------  S  -----------");

/*  ----------------------------- BEGINNING OF MULTILINE COMMENT ----------------------
*/

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









