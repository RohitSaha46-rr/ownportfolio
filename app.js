let moon=document.getElementById('moon');
let rs=document.getElementById('rs');
let check=true;
moon.addEventListener('click', () =>{
     if(check){
         document.body.classList.add("dark");
         moon.classList.replace('fa-moon','fa-sun');
         rs.src="rr.png";
         check=false;
     }
     else{
        document.body.classList.remove("dark");
        moon.classList.replace('fa-sun','fa-moon');
        rs.src="RS-1.png";
        check=true;
     }
})