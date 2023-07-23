
var drumButton = document.querySelectorAll('.drum').length;

for(var i =0;i<drumButton;i++){
    document.querySelectorAll("button")[i].addEventListener('click',()=>{
        alert('i just clicked');
    });
}



