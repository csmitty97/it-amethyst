$( "#forexform" ).validate({

});
    var form = $("#forexform");
    form.validate();
    
    function forexresults() {
        if (form.valid()) {
            
            
            var basecurrency = document.getElementById("basecurrency").value;  //string of basecurrency
            var convertcurrency = document.getElementById("convertcurrency").value;  //string of convertcurrency
            var fromdate = document.getElementById("fromdate").value;  //string of fromdate
           /* var fromdatefp;*/  //floating point fromdate
            var todate = document.getElementById("todate").value; //string of todate
            /*var todatefp; *///floating point of todate
            var result;  // displayable result
            
            var apiKey = "mK2qqhQ1cecfATonUC9rioWIfLC5__KZ"
            
            //URL for AJAX Call
            var myURL = "https://api.polygon.io/v2/aggs/ticker/C:" + basecurrency + convertcurrency + "/range/1/day/" + fromdate + "/" + todate + "?unadjusted=true&sort=asc&limit=120&apiKey=mK2qqhQ1cecfATonUC9rioWIfLC5__KZ"
            
            
            if (document.getElementById("basecurrency").checked) {
                basecurrency = document.getElementById("baecurrency").value;
                
            }
            
            
            
            
            
            
            var myMethod = "GET"
            //read as string
            fromdate = document.getElementById("fromdate").value;
            todate = document.getElementById("todate").value;
            
            //convert from string to floating point
            
            fromdatefp = parseFloat( fromdate );
            todatefp = parseFloat( todate );
            
            
            
            
            
                var myData = {};
        myData.fromdate = fromdate;
        myData.todate = todate;
        myData.basecurrency = basecurrency;
        myData.convertcurrency = convertcurrency;
            
            $.ajax({
                method:myMethod,
                data:myData,
                url:myURL
                
            })
            
            
             .done(function( msg ) {
 

              /* Your code to process the result goes here  
                    display the returned message */
                var currencydate = [];
                var currencyvalue = [];
                var numdays = msg.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        currencyvalue[i] = msg.results[i].c;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg.results[i].t);
                        /* extract the date string from the value */
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }


              var currencyvaluetable = "";
                if (numdays > 0) {
                    currencyvaluetable = currencyvaluetable + "<table><caption>Currency Price</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        currencyvaluetable = currencyvaluetable + "<tr><td>" + currencydate[i] + "</td><td>" + currencyvalue[i] + "</td></tr>";
                    }
                    currencyvaluetable = currencyvaluetable + "</table>"
                    document.getElementById("CurrencyValueTable").innerHTML = currencyvaluetable;
                }
          

                

               
        
        
        
            var ctx = document.getElementById("chartjs-0");

            var myChart = new Chart(ctx, {
             "type":"line",
             "data": {
                    "labels": currencydate,
                 "datasets":[{
                     "data": currencyvalue,
                     fill: false
                 }]
             },
             "options":{ 
                 responsive: false,
                 maintainAspectRatio: true,
             }
            });
    
    });
    
        
        }    
        
    }
    
    
    
    
            //prompts form to clear
    function clearForm()
        {
            document.getElementById("fromdate").value = "";
            document.getElementById("fromdateerror").innerHTML = "";
             document.getElementById("todate").value = "";
            document.getElementById("todateerror").innerHTML="";
            document.getElementById("basecurrencyerror").innerHTML ="";
            document.getElementById("convertcurrency").innerHTML ="";
            document.getElementById("result").innerHTML = "";
        }