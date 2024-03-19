let images1=document.querySelectorAll("img");
let wrapper=document.getElementById("wrapper");
let imgWrapper=document.getElementById("fullImg");
let close=document.querySelector("span");


images1.forEach((img,index) => {
    img.addEventListener("click", () =>{
        openModal(`images/Img${index}.jpg`)
    });

});

function openModal(pic){
    wrapper.style.display="flex";
    imgWrapper.src=pic
}

close.addEventListener("click", () => (wrapper.style.display="none"))