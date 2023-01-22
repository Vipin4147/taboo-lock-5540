
import navbar from "./components/navbar.js";

let nav=document.getElementById("navbar");

nav.innerHTML=navbar();


import footer from "./components/footer.js";

let foot=document.getElementById("footer");

foot.innerHTML=footer();

let sarr=["https://static3.industrybuying.com/homepage/1673953632Desktop-524xx334-Green-Soul-new.jpg","https://static3.industrybuying.com/homepage/1674019851Desktop-524xx334-Auto-oprema.jpg","https://static3.industrybuying.com/homepage/1671432246CP-PLUS-DESKTOP-(524X334).png","https://static3.industrybuying.com/homepage/1672383942Air-Purifier-Desktop-banner-524x334-2.png","https://static3.industrybuying.com/homepage/1667890944Industrial-buying-524x334-4.jpg","https://static3.industrybuying.com/homepage/1650877078AGRIPRO.png"]

let i=1;
let simg=document.getElementById("sliderimg");
let img=document.createElement("img");
    img.src=sarr[0];
    simg.append(img);
const slider=()=>{
 


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


let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");

btn1.onclick=()=>{
    btn1.style.backgroundColor="#d23d1b";
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[0];
    simg.append(img);
    btn2.style.backgroundColor="#999999";
    btn3.style.backgroundColor="#999999";
    btn4.style.backgroundColor="#999999";
    btn5.style.backgroundColor="#999999";
    btn6.style.backgroundColor="#999999";
}

btn2.onclick=()=>{
    btn2.style.backgroundColor="#d23d1b";
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[1];
    simg.append(img);
    btn1.style.backgroundColor="#999999";
    btn3.style.backgroundColor="#999999";
    btn4.style.backgroundColor="#999999";
    btn5.style.backgroundColor="#999999";
    btn6.style.backgroundColor="#999999";
}

btn3.onclick=()=>{
    btn3.style.backgroundColor="#d23d1b";
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[2];
    simg.append(img);
    btn2.style.backgroundColor="#999999";
    btn1.style.backgroundColor="#999999";
    btn4.style.backgroundColor="#999999";
    btn5.style.backgroundColor="#999999";
    btn6.style.backgroundColor="#999999";
}

btn4.onclick=()=>{
    btn4.style.backgroundColor="#d23d1b";
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[3];
    simg.append(img);
    btn2.style.backgroundColor="#999999";
    btn3.style.backgroundColor="#999999";
    btn1.style.backgroundColor="#999999";
    btn5.style.backgroundColor="#999999";
    btn6.style.backgroundColor="#999999";
}

btn5.onclick=()=>{
    btn5.style.backgroundColor="#d23d1b";
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[4];
    simg.append(img);
    btn2.style.backgroundColor="#999999";
    btn3.style.backgroundColor="#999999";
    btn4.style.backgroundColor="#999999";
    btn1.style.backgroundColor="#999999";
    btn6.style.backgroundColor="#999999";
}

btn6.onclick=()=>{
    btn6.style.backgroundColor="#d23d1b";
    simg.innerHTML=null;
    let img=document.createElement("img");
    img.src=sarr[5];
    simg.append(img);
    btn2.style.backgroundColor="#999999";
    btn3.style.backgroundColor="#999999";
    btn4.style.backgroundColor="#999999";
    btn5.style.backgroundColor="#999999";
    btn1.style.backgroundColor="#999999";
}

let count=document.getElementById("count");


const get_count=async ()=>{
    try {
        let res =await fetch("http://localhost:3000/cart");
        let data=await res.json();
        count.innerText=data.length;
    } catch (error) {
        console.log("err:",error);
    }
}

get_count();


const get_data= async()=>{
 
    try {
    let data=await fetch("http://localhost:3000/products");

    let res= await data.json();

    console.log(res);
    append_data(res);

    } catch (error) {
        console.log("err:",error);
    }
    
}

get_data();

const append_data=(data)=>{

    let cont=document.getElementById("container");

    data.forEach((el)=>{
     let div= document.createElement("div");
     let img=document.createElement("img");
     img.src=el.images[0];
     let title=document.createElement("h3");
     title.innerText=el.title;
     let brand=document.createElement("p");
     brand.innerText=el.brand;
     let price=document.createElement("h2");
     price.innerText="Rs."+el.price;
     let btn =document.createElement("button");
     btn.innerText="ADD TO CART";
     btn.onclick= async()=>{
        let res =await fetch(`http://localhost:3000/cart`,{
            method :"POST",
            body: JSON.stringify(el),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let daat = await res.json();
        console.log(daat)
     }

     div.append(img,title,brand,price,btn);
     cont.append(div);
    })

}




const cart=document.getElementById("cart")
cart.onclick=()=>{
    console.log("hello")
    window.location.replace("./cart.html")
};


