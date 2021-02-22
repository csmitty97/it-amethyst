$( "#calculatorform" ).validate({

});
    
    function displayanswer() {
        if ($("#calculatorform").valid()) {
            /*document.getElementById("operand").innerHTML = "";*/
            
            var operand1;  //string of operand1
            var operand1fp;  //floating point of operand1
            var operand2 ;  //string of operand2
            var operand2fp;  //floating point of operand2
            var result;  // displayable result
            
            //read as string
            operand1 = document.getElementById("operand1").value;
            operand2= document.getElementById("operand2").value;
            
            
            //convert from string to floating point
            operand1fp = parseFloat( operand1 );
            operand2fp = parseFloat( operand2 );
            
            
            if (document.getElementById("add").checked) {
                result = operand1fp + operand2fp;
            }
            if (document.getElementById("subtract").checked) {
                result = operand1fp - operand2fp;
            }
             if (document.getElementById("multiply").checked) {
                 result = operand1fp * operand2fp;
            }
             if (document.getElementById("divide").checked) {
                 result = operand1fp / operand2fp;
            }
            document.getElementById("result").innerHTML = result.toString();
        }
    }
    
    
        //prompts form to clear
    function clearForm()
        {
            document.getElementById("operand1").value = "";
            document.getElementById("operand1error").innerHTML = "";
            document.getElementById("add").checked = false;
            document.getElementById("subtract").checked = false;
            document.getElementById("multiply").checked = false;
            document.getElementById("divide").checked = false;
            document.getElementById("operatorerror").innerHTML ="";
            document.getElementById("operand2").value = "";
            document.getElementById("operand2error").innerHTML="";
            document.getElementById("result").innerHTML = "";
        }
    