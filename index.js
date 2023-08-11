const but = document.getElementsByClassName('but')
const arean = document.getElementById("in_area")

for (let a = 0; a < but.length; a++)
{
    but[a].addEventListener("click",
        (event) =>
        {
            let v  = a+1
            switch (v)
            {
            
                case 1: arean.value = ""; break;
                case 2: arean.value = arean.value + "("; break;
                case 3: arean.value = arean.value + ")"; break;
                case 4: let str = arean.value;
                    arean.value = str.slice(0,str.length-1); break;
                case 5: arean.value = arean.value + "1"; break;
                case 6: arean.value = arean.value + "2"; break;
                case 7: arean.value = arean.value + "3"; break;
                case 8: arean.value = arean.value + "+"; break;
                case 9: arean.value = arean.value + "4"; break;
                case 10: arean.value = arean.value + "5"; break;
                case 11: arean.value = arean.value + "6"; break;
                case 12: arean.value = arean.value + "-"; break;
                case 13: arean.value = arean.value + "7"; break;
                case 14: arean.value = arean.value + "8"; break;
                case 15: arean.value = arean.value + "9"; break;
                case 16: arean.value = arean.value + "*"; break;
                case 17: arean.value = arean.value + "0"; break;
                case 18: arean.value = arean.value + "/"; break;
            

            
            }

            but[a].style.transform = "scale(0.9)"
           
            setTimeout(function ()
            {
                but[a].style.transform = "scale(1)"
            }, 100)
            
            
    })
}





document.getElementById("equal").addEventListener
    ("click",
        () =>
        {
         
            let str = eval(arean.value)
            arean.value = str
         
        })
    

        //////////////////////////////////

