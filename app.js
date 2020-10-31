        // function insert(num)
        // {
        //     document.form.textview.value = document.form.textview.value + num 
        // }
        // function equal()
        // {
        //     var exp = document.form.textview.value;
        //     if(exp)
        //     {
        //     document.form.textview.value=eval(exp)
        //     }
        // }
        // function clean()
        // {
        //     document.form.textview.value = "";
        // }
        // function back()
        // {
        //     var exp = document.form.textview.value;
        //     document.form.textview.value = exp.substring(0,exp.length-1);
        // }
         
        

        function getNumber(num){
            // console.log(num)
            var result = document.getElementById("result")
            result.value += num
        }
        function clearResult(){
            // console.log()
            var result = document.getElementById("result")
            result.value = ""
        }

        function getResult(){
            // console.log()
            var result = document.getElementById("result")
            result.value = eval(result.value)
        }
        function del()
        {
            var result = document.getElementById("result")
             result.value = result.value.substring(0,result.value.length-1);
        }
        function log(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.log(result.value);
        }
        function tan(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.tan(result.value);
        }
        function sin(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.sin(result.value);
        }
        function cos(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.cos(result.value);
        }
        function sqr(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.pow(result.value,2);
        }
        function cube(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.cube(result.value,3);
        }
        function sqrt(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.sqrt(result.value);
        }
        function pi(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.PI;
        }
        function exp(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.exp(result.value);
        }
        function atan(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.atan(result.value*Math.PI);
        }function acos(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.acos(result.value*Math.PI);
        }function asin(){
            // console.log()
            var result = document.getElementById("result")
            result.value  = Math.round(asin(result.value));
           

        }
        

