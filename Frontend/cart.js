import navbar from "./components/navbar.js";

let nav=document.getElementById("navbar");

nav.innerHTML=navbar();


const get_data= async()=>{
 
    try {
    let data=await fetch("http://localhost:3000/cart");

    let res= await data.json();

    console.log(res);
    append_data(res);

    } catch (error) {
        console.log("err:",error);
    }
    
}

get_data();


const append_data=(data)=>{

    let cont=document.getElementById("cont");
    cont.innerHTML=null;
    data.forEach((el)=>{
     let div= document.createElement("div");
     let div1=document.createElement("div");
     let div2=document.createElement("div");
     let div3=document.createElement("div");

     let des=document.createElement("h3");
     des.innerText=el.description;
     let div12=document.createElement("div");
     let img=document.createElement("img");
     img.src=el.images[0];
     let div123=document.createElement("div");
     let brand=document.createElement("p");
     brand.innerText="Brand:"+el.brand;
     let type=document.createElement("p");
     type.innerText="Type of product:"+el.category;
     let title=document.createElement("p");
     title.innerText="Title:"+el.title;
     let rating=document.createElement("p");
     rating.innerText="Rating:"+el.rating;

     let remove=document.createElement("button");
     remove.innerText="Remove";


    // div2

    let rbtn=document.createElement("button");
    rbtn.innerText="-";
    let quant=document.createElement("p");
    quant.innerText=1;
    let ibtn=document.createElement("button");
    ibtn.innerText="+"

    div2.append(rbtn,quant,ibtn);


    // div3

    let gst=(el.price/100)*18;

    let total=el.price+gst;

    let tprice=document.createElement("h2");
    tprice.innerText="Rs."+total;

    let oprice=document.createElement("p");
    oprice.innerText="Price: Rs."+el.price;

    let ogst=document.createElement("p");
    ogst.innerText="GST@18%: Rs."+gst;

    let fprice=document.createElement("p");
    fprice.innerText="Final Price: Rs."+total;
     
     div3.append(tprice,oprice,ogst,fprice);


     div123.append(brand,type,title,rating,remove);
     div12.append(img,div123);
     div1.append(des,div12)
     div.append(div1,div2,div3);
     cont.append(div);
    })

}

let start=document.getElementById("start");
start.onclick=()=>{
    window.location.href="./index.html"
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
