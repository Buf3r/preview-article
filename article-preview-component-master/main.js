const cajaDepassword= document.querySelector("caja");

const rangoBarra = document.querySelector(".caja input");
const numeroBarra = document.querySelector("numero");

rangoBarra.addEventListener("input", ()=>{
 numeroBarra.inner=rangoBarra.Value
})
