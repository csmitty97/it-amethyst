$( "#unitconverterform" ).validate({

});
    
    function displayanswer() {
        $("#unitconverterform").validate();
        if ($("#unitconverterform").valid()) {
            /*document.getElementById("operand").innerHTML = "";*/
            
            var fromvalue;  //string of operand1
            var fromvaluefp;  //floating point of operand1
            var tovalue;
            var result;  
            var tounit;// displayable result
            var fromunit;
        
            
            //read as string
            fromvalue = document.getElementById("fromvalue").value;
            
            
            
            
            //convert from string to floating point
            fromvaluefp = parseFloat( fromvalue );
            
            
            
            
            if (document.getElementById("fromcentimeters").checked) {
                fromunit = document.getElementById("fromcentimeters").value;
                
            }
             if (document.getElementById("frommeters").checked) {
                fromunit = document.getElementById("frommeters").value;
             }
             
             if (document.getElementById("fromkilometers").checked) {
                fromunit = document.getElementById("fromkilometers").value;
             }
             
             if (document.getElementById("frominches").checked) {
                fromunit = document.getElementById("frominches").value;
             }
             
             if (document.getElementById("fromfeet").checked) {
                fromunit = document.getElementById("fromfeet").value;
             }
             
             if (document.getElementById("fromyards").checked) {
                fromunit = document.getElementById("fromyards").value;
             }
             
             if (document.getElementById("frommiles").checked) {
                fromunit = document.getElementById("frommiles").value;
             }
             
             
            if (document.getElementById("tocentimeters").checked) {
                tounit = document.getElementById("tocentimeters").value;
                
            }
             if (document.getElementById("tometers").checked) {
                tounit = document.getElementById("tometers").value;
             }
             
             if (document.getElementById("tokilometers").checked) {
                tounit = document.getElementById("tokilometers").value;
             }
             
             if (document.getElementById("toinches").checked) {
                tounit = document.getElementById("toinches").value;
             }
             
             if (document.getElementById("tofeet").checked) {
                tounit = document.getElementById("tofeet").value;
             }
             
             if (document.getElementById("toyards").checked) {
                tounit = document.getElementById("toyards").value;
             }
             
             if (document.getElementById("tomiles").checked) {
                tounit = document.getElementById("tomiles").value;
             } 
                
                    // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";
        
        
        var myData = {};
        myData.FromValue = fromvalue;
        myData.FromUnit = fromunit;
        myData.ToUnit = tounit;
               /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("result").innerHTML = msg;
                document.getElementById("resultunit").innerHTML =tounit;
            });
                
        }  
                
           
            
    }
    
    
    
    
    
        //prompts form to clear
    function clearForm()
        {
            document.getElementById("fromvalue").value = "";
            document.getElementById("fromvalueerror").innerHTML = "";
            document.getElementById("fromcentimeters").checked = false;
            document.getElementById("frommeters").checked = false;
            document.getElementById("fromkilometers").checked = false;
            document.getElementById("frominches").checked = false;
            document.getElementById("fromfeet").checked=false;
            document.getElementById("fromyards").checked=false;
            document.getElementById("frommiles").checked=false;
            document.getElementById("tocentimeters").checked = false;
            document.getElementById("tometers").checked = false;
            document.getElementById("tokilometers").checked = false;
            document.getElementById("toinches").checked = false;
            document.getElementById("tofeet").checked=false;
            document.getElementById("toyards").checked=false;
            document.getElementById("tomiles").checked=false;
            document.getElementById("fromuniterror").innerHTML ="";
            document.getElementById("touniterror").innerHTML="";
            document.getElementById("result").innerHTML = "";
            document.getElementById("resultunit").innerHTML ="";
        }
        
        
    
        