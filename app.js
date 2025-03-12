const api = "https://fakestoreapi.com/products/";

fetch(api)
.then((res)=>{
    return res.json()
}).then((data)=>{
  data.map((item)=>{
    const display = document.createElement("div");
    display.style.width="330px"
    display.style.display="inline-block"
    // display.style.border="1px solid gray"
    display.style.margin="20px"


    // image section
    const image = document.createElement("img");
    image.src=item.image
    image.style.width="100%";
    
    // title section 
    const name= document.createElement("h2");
    name.innerText=item.id;
    name.style.textAlign="center"

    // price section 
    const price = document.createElement("h4");
    price.innerText="$"+item.price
    // desc section
    const desc = document.createElement("p");
    desc.innerText=item.title; 

    // category  section
    const category = document.createElement("h5");
    category.innerHTML= item.category; 

    display.appendChild(name);
    display.appendChild(image);
    display.appendChild(desc);
    display.appendChild(price);
    display.appendChild(category);

    const render = document.getElementById("main");

    render.appendChild(display);
  })
    
}).catch(()=>{
  console.log(
    "loading error"
  );
  

})





























