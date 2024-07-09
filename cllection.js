var sidenav = document.querySelector(".side-navbar")

function shownavbar(){
    sidenav.style.left = "0" 
}

function closenavbar(){
    sidenav.style.left= "-60%"
}



var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll(".product-box")

search.addEventListener("keyup",function(){
    var enterdvalue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enterdvalue)<0){
            productlist[count].style.display="none"
        }

        else{
            productlist[count].style.display="block"
        }
    }
})