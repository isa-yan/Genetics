let a1 = document.getElementById('first-allele')
let a2 = document.getElementById('second-allele')
let a3 = document.getElementById('third-allele')
let a4 = document.getElementById('fourth-allele')

let geno1 = document.getElementById('geno1')
let geno2 = document.getElementById('geno2')

let calc1 = document.getElementById('calc-one')
let calc2 = document.getElementById('calc-two')
let calc3 = document.getElementById('calc-three')
let calc4 = document.getElementById('calc-four')

let pheno1 = document.getElementById('pheno1')
let pheno2 = document.getElementById('pheno2')

let pure1 = document.getElementById('pure1')
let half1 = document.getElementById('half1')

let pure2 = document.getElementById('pure2')
let half2 = document.getElementById('half2')

pure1.addEventListener("click",()=>{
    pure1.classList.add("clicked")
    half1.classList.remove("clicked")
})

half1.addEventListener("click",()=>{
    half1.classList.add("clicked")
    pure1.classList.remove("clicked")

})

pure2.addEventListener("click",()=>{
    pure2.classList.add("clicked")
    half2.classList.remove("clicked")

})

half2.addEventListener("click",()=>{
    half2.classList.add("clicked")
    pure2.classList.remove("clicked")

})

function mix(){
    if (half1.classList.contains('clicked')){
        
    }

}



geno1.addEventListener("input", () =>{
    a1.innerText = geno1.value.charAt(0)
    a2.innerText = geno1.value.charAt(1)
    check();
})

geno2.addEventListener("input", () =>{
    a3.innerText = geno2.value.charAt(0)
    a4.innerText = geno2.value.charAt(1)
    check();
})

function check(){
    if (geno1.value!='' && geno2.value!=""){
        calc1.innerText = geno1.value.charAt(0) + geno2.value.charAt(0)
        calc2.innerText = geno1.value.charAt(1) + geno2.value.charAt(0)
        calc3.innerText = geno1.value.charAt(0) + geno2.value.charAt(1)
        calc4.innerText = geno1.value.charAt(1) + geno2.value.charAt(1)
    }
}

function phege(result){
    if (result.charAt(0)===result.charAt(0).toUpperCase()){

    }
}