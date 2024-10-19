let randomBackground;
let backgroundOption=true;
// get main color in local storage
    window.onload=function(){

        // main color
        if(localStorage.getItem("mainColor")){
            console.log(localStorage.getItem("mainColor"))

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

        // random background

        if(localStorage.getItem("isRandomBackground")){


            if(localStorage.getItem("isRandomBackground")==="yes"){
                backgroundOption=true
                randomBackground()
            }
            if(localStorage.getItem("isRandomBackground")==="no"){
                backgroundOption=false
                clearInterval(randomBackground)
            }

            document.querySelectorAll(".option-box span").forEach(el=>{
                if(el.classList.contains("active")){
    
                    el.classList.remove("active")
                }
                if(el.dataset.random===localStorage.getItem("isRandomBackground")){
                    el.classList.add("active")
                }
            })

        }

        document.querySelectorAll(".option-box span").forEach(el=>{
            if(el.classList.contains("active")){

                el.classList.remove("active")
            }
            if(el.dataset.random===localStorage.getItem("isRandomBackground")){
                el.classList.add("active")
            }
        })
        



    }
}


// toggle spin icon
document.querySelector(".settings-box i").onclick = function() {
    console.log("done")
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
        //1-remove active from  all element
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active")
        })

        //2-add active to  the clicked element
        e.target.classList.add("active")
        console.log(e.target.classList)
    })
})



// random background
document.querySelectorAll(".option-box  span ").forEach((li)=>{
    li.addEventListener("click",(e)=>{
        
    
        if(e.target.dataset.random==="no"){
            console.log("no")

            backgroundOption=false;
            clearInterval(randomBackground)
        }

        else{
            backgroundOption=true
            console.log("yes")
            setIntervalBackground()
        }
            

        // store this color in local storage
        localStorage.setItem("isRandomBackground",e.target.dataset.random)

        // set active class to this element
        //1-remove active from  all element
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active")
        })

        //2-add active to  the clicked element
        e.target.classList.add("active")
        console.log(e.target.classList)
    })
})


// let links= document.querySelectorAll(".landing-page .links li");
// links.forEach(li=>{
//     li.addEventListener("mouseenter",(e)=>{
    
//         // set active class to this element
//         //1-remove active from  all element
//         e.target.parentElement.querySelectorAll(".active").forEach(el=>{
//             el.classList.remove("active")
//         })

//         //2-add active to  the clicked element
//         e.target.classList.add("active")
//         console.log(e.target.classList)
//     })
// });

let landingPage=document.querySelector(".landing-page");
let imgs=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

landingPage.style.transition = ".6s";


function setIntervalBackground(){
    if(backgroundOption){

        randomBackground=setInterval(() => {
            let randomNumber=Math.floor(Math.random()*imgs.length);
            landingPage.style.backgroundImage=`url("../imgs/${imgs[randomNumber]}")` 
        }, 1000);
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


    console.log("the scroll" , scrollTop)
    console.log("sum" ,(offset + outerHeight- windowHeight ) )

    if(scrollTop >= (offset + outerHeight- windowHeight )){

        let progress=document.querySelectorAll(".skill-progress span")
        progress.forEach(p=>{
            p.style.width=p.dataset.progress;
        })
    }
    // else{
    //     let progress=document.querySelectorAll(".skill-progress span")
    //     progress.forEach(p=>{
    //         p.style.width="0";
    //         console.log(p.style.width)
    //     })

    // }

}
