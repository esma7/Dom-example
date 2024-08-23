

const header = document.getElementById("header").innerHTML = "Form"



const li = document.querySelectorAll(".list-group-item")




for(let i = 0; i< li.length; i++){
    if(i % 2 == 0){
        li[i].style.background = "white"
    } else{
        li[i].style.background = "lightblue"
    }
}


// li.forEach((item,index)=>{
//     if(index % 2 == 0 ){
//         item.style.background= "white"
//     }else{
//         item.style.background= "lightblue"
//     }
    
// })
 

