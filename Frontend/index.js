
import navbar from "./components/navbar.js";

let nav=document.getElementById("navbar");

nav.innerHTML=navbar();


import footer from "./components/footer.js";

let foot=document.getElementById("footer");

foot.innerHTML=footer();

let sarr=["https://static3.industrybuying.com/homepage/1673953632Desktop-524xx334-Green-Soul-new.jpg","https://static3.industrybuying.com/homepage/1674019851Desktop-524xx334-Auto-oprema.jpg","https://static3.industrybuying.com/homepage/1671432246CP-PLUS-DESKTOP-(524X334).png","https://static3.industrybuying.com/homepage/1672383942Air-Purifier-Desktop-banner-524x334-2.png","https://static3.industrybuying.com/homepage/1667890944Industrial-buying-524x334-4.jpg","https://static3.industrybuying.com/homepage/1650877078AGRIPRO.png"]

let i=0;

const slider=()=>{
 let simg=document.getElementById("slider");


setInterval(()=>{
    if(i==6)
    {
        i=0;
    }
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[i];
    simg.append(img);
i++;
},2000)


}


slider();