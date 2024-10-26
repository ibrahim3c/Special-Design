let randomBackground;
let backgroundOption=true;
// get main color in local storage
    window.onload=function(){

        // main color
        if(localStorage.getItem("mainColor")){

        document.documentElement.style.setProperty('--main-color',localStorage.getItem("mainColor"))

        // add active class to the main colored element
        document.querySelectorAll(".colors-list li").forEach(el=>{
            if(el.classList.contains("active")){

                el.classList.remove("active")
            }
            if(el.dataset.color===localStorage.getItem("mainColor")){
                el.classList.add("active")
            }
        })
    }
        // random background

        if(localStorage.getItem("isRandomBackground")){


            if(localStorage.getItem("isRandomBackground")==="yes"){
                backgroundOption=true
            }
            if(localStorage.getItem("isRandomBackground")==="no"){
                backgroundOption=false
                clearInterval(randomBackground)
            }

            document.querySelectorAll(".background-option span").forEach(el=>{
                console.log(el) // no
                if(el.classList.contains("active")){
    
                    el.classList.remove("active")
                }
                if(el.dataset.random===localStorage.getItem("isRandomBackground")){
                    el.classList.add("active")
                }
            })

           
        }




          //bullet option

          if(localStorage.getItem("isBulletShowed")){
            document.querySelectorAll(".bullets-option span").forEach(el=>{
                if(el.classList.contains("active")){
    
                    el.classList.remove("active")
                }
                if(el.dataset.show===localStorage.getItem("isBulletShowed")){
                    el.classList.add("active")
                }
            })


            if(localStorage.getItem("isBulletShowed")==="yes"){

                document.querySelector(".nav-bullets").style.display = "block";
            }

            if(localStorage.getItem("isBulletShowed")==="no"){
                document.querySelector(".nav-bullets").style.display = "none";
            }

        }
        }

      

       
        //

       
        



    


// toggle spin icon
document.querySelector(".settings-box i").onclick = function() {
    // for spin
    this.classList.toggle("fa-spin");
    // for open and close sidebar
    document.querySelector(".settings-box").classList.toggle("opened")
    
    // for logo
    document.querySelector(".landing-page .logo").classList.toggle("disappear");
}; 

// switch color
let colorsList=document.querySelectorAll(".colors-list li");
colorsList.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        
        // store this color in local storage
        localStorage.setItem("mainColor",e.target.dataset.color)

        // set active class to this element
        HandleActive(e)
    })
})


// random background and bullet option
document.querySelectorAll(".background-option span ").forEach((li)=>{
    li.addEventListener("click",(e)=>{
        
    
        if(e.target.dataset.random==="no"){

            backgroundOption=false;
            clearInterval(randomBackground)
        }

        else{
            backgroundOption=true
            setIntervalBackground()
        }

      
            

        // store this color in local storage
        localStorage.setItem("isRandomBackground",e.target.dataset.random)

        // set active class to this element
        //1-remove active from  all element
       HandleActive(e)
    })
})


let landingPage=document.querySelector(".landing-page");
let imgs=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

landingPage.style.transition = ".6s";


function setIntervalBackground(){
    if(backgroundOption){

        randomBackground=setInterval(() => {
            let randomNumber=Math.floor(Math.random()*imgs.length);
            landingPage.style.backgroundImage=`url("../imgs/${imgs[randomNumber]}")` 
        }, 10000);
    }
    
}

setIntervalBackground();

// skill-box
let ourSkills=document.querySelector(".skills");
window.onscroll=function(){
    // skill offset top
    let offset = ourSkills.offsetTop;
    // outer height
    let outerHeight = ourSkills.offsetHeight;
    // window height
    let windowHeight = this.innerHeight;
    // scroll top
    let scrollTop = this.pageYOffset;



    if(scrollTop >= (offset + outerHeight- windowHeight )){

        let progress=document.querySelectorAll(".skill-progress span")
        progress.forEach(p=>{
            p.style.width=p.dataset.progress;
        })
    }
    

}


// our gallery
document.querySelectorAll(".gallery img").forEach(img=>{
    img.addEventListener("click",(e)=>{
        // create overlay
        let overlay=document.createElement("div");
        overlay.className="popup-overlay"
        document.body.appendChild(overlay);

        // create popup box
        let popupBox=document.createElement("div");
        popupBox.className="popup-box";

        // create image header
        if(img.alt!=null){
            text=document.createTextNode(img.alt);
            imageHeader=document.createElement("h3");
            imageHeader.appendChild(text);

            popupBox.appendChild(imageHeader)
        }

        //create image
        let image=document.createElement("img");
        image.src=img.src;

        popupBox.appendChild(image);

        // create closedButton
        closedButton=document.createElement("span");
        btnText=document.createTextNode("X");
        closedButton.appendChild(btnText)
        closedButton.className="btn-closed";

        popupBox.appendChild(closedButton)

        document.body.appendChild(popupBox)
    })
});

// close popup
document.addEventListener("click" ,(e)=>{
    if(e.target.className=="btn-closed"){
        e.target.parentElement.remove();


        document.querySelector(".popup-overlay").remove();
    }
})

// bullets
document.querySelectorAll(".bullet").forEach(b=>{
    b.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
})


// handle activeClass
function HandleActive(e){
    e.target.parentElement.querySelectorAll(".active").forEach(el=>{
        el.classList.remove("active")
    })

    //2-add active to  the clicked element
    e.target.classList.add("active")
}





// random background and bullet option
document.querySelectorAll(".bullets-option span ").forEach((li)=>{
    li.addEventListener("click",(e)=>{
        
        
        if(e.target.dataset.show==="no"){
            document.querySelector(".nav-bullets").style.display = "none";
            
        }
        
        else{
            document.querySelector(".nav-bullets").style.display="block"
            
        }
        
        
        
        
        // store this color in local storage
        localStorage.setItem("isBulletShowed",e.target.dataset.show)

        // set active class to this element
        //1-remove active from  all element
       HandleActive(e)
    })
})



// reset button
document.querySelector(".reset-option").addEventListener("click",()=>{
    // clear local storage
    localStorage.removeItem("mainColor")
    localStorage.removeItem("isRandomBackground")
    localStorage.removeItem("isBulletShowed")
    

    window.location.reload();
})


document.querySelector(".toggle-menu").onclick=function(){
    let links=document.querySelector(".landing-page .links ");

    links.classList.toggle("open")

}