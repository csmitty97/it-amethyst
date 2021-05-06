function roverresults() {
    var form = $("#roverform");
    if (form.valid()) {
        var date = document.getElementById("date").value; //s
        
        var rover  ;
        if(document.getElementById("curiosity").checked){
            rover = document.getElementById("curiosity").value;
        }
        
        if(document.getElementById("opportunity").checked){
            rover = document.getElementById("opportunity").value;
        }
        if(document.getElementById("spirit").checked){
            rover= document.getElementById("spirit").value;
        }
        
        var result;
        var apiKey = "tM3hyKqKLzpMrQcQQfXEB3c4S66PHekKqy5rzQau"
        var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + date + "&api_key=" + apiKey
        var myMethod = "GET"
            //read as string
            //date = document.getElementById("date").value;
            
            //convert from string to floating point
            //datefp = parseFloat( date );
            
            
             //     var myData = {};
        //myData.date = date;
       
            
            $.ajax({
                method:myMethod,
                url:myURL
            })
            
            
            .done(function( msg  ) {
 

              /* Your code to process the result goes here  
                    display the returned message */
                var pictures = msg.photos.length;
         
            
                if (pictures > 0) {
                    for (i = 0; i < 25; i++) {
                        if (i<pictures){
    // Note how we construct the name for image1, image2, etc...this sets the image source
                            document.getElementById("image" + i).src = msg.photos[i].img_src;
                            document.getElementById("image" + i).style.visibility = "visible"; 
                            document.getElementById("anchor" + i).href = msg.photos[i].img_src;
                            document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
                        }
                        else {
                            document.getElementById("image" + i).style.visibility = "hidden"; 
                        }
                    //for (var i = 0; i < numdays; i++) {
                        
                    }
                };
            });
        }
        
}
  
  
  
  
  
  
  //prompts form to clear
    function clearForm()
        {
            document.getElementById("date").value = "";
            document.getElementById("dateerror").innerHTML = "";
            document.getElementById("rovererror").innerHTML ="";
            document.getElementById("result").innerHTML = "";
        }