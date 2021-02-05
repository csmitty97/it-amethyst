     $( "#CircleForm" ).validate({

    });
    
    function displayDiameter() {
        if ($("#CircleForm").valid()) {
            /*document.getElementById("radius").innerHTML = "";*/
            
            var Radius;  //string of radius
            var Radiusfp;  //floating point of radius
            var Diameter;  //floating point diameter
            var Circumference ;  //floating point Cirmcumference
            var Area;  //floating point Area
            var result;  // displayable result
            
            //read radius as string
            Radius = document.getElementById("Radius").value
            
            
            //convert from string to floating point
            Radiusfp = parseFloat( Radius );
            
            
            //calculate diameter
            Diameter = calcDiameter(Radiusfp);
            //calculate Circumfernce
            Circumference = calcCircuference(Radiusfp);
            //calculate Area
            Area = calcArea(Radiusfp);
        
            //display diameter
            //display circumference
            //display area
            document.getElementById("Diameter").innerHTML = Diameter.toString();
            document.getElementById("Circumference").innerHTML = Circumference.toString();
            document.getElementById("Area").innerHTML = Area.toString();
        }
    }
    
    function calcDiameter (Radiusvalue)
    //returns diameter of a circle
    // Diamter is 2 times radius
    { 
        return Radiusvalue * 2;
    }
    
    function calcCircuference (Radiusvalue)
    //returns circumference of a circle
    // Circumference is pi times 2 times radius
    { 
        return Math.PI * 2 * Radiusvalue ;
    }
    function calcArea (Radiusvalue)
    //returns Area of a circle
    // Area is pi times radius times radius OR radius squared
    { 
        return Math.PI * Radiusvalue * Radiusvalue;
    }

        //prompts form to clear
    function clearForm()
        {
            document.getElementById("Radius").value = "";
            document.getElementById("Radiuserror").innerHTML = "";
            document.getElementById("Diameter").innerHTML = "";
            document.getElementById("Circumference").innerHTML = "";
            document.getElementById("Area").innerHTML = "";
        }
    
    

    