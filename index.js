const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    alert("click en el botón");
})

$(()=>{

    $("#btn").click(()=>{
        console.log("hola, estoy utilizando jQuery");
    })

})