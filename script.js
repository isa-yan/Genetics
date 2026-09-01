let a1 = document.getElementById('first-allele')
let a2 = document.getElementById('second-allele')
let a3 = document.getElementById('third-allele')
let a4 = document.getElementById('fourth-allele')

let calc1 = document.getElementById('calc-one')
let calc2 = document.getElementById('calc-two')
let calc3 = document.getElementById('calc-three')
let calc4 = document.getElementById('calc-four')

let pheno_dom = document.getElementById('pheno_dominant')
let pheno_rec = document.getElementById('pheno_recessive')

let pure1 = document.getElementById('pure1')
let half1 = document.getElementById('half1')

let pure2 = document.getElementById('pure2')
let half2 = document.getElementById('half2')

let parent_pheno1 = document.getElementById("parent_pheno1")
let parent_pheno2 = document.getElementById("parent_pheno2")

let final = document.getElementById('final')

pure1.addEventListener("click",()=>{
    pure1.classList.add("clicked")
    half1.classList.remove("clicked")
    mix()
})

half1.addEventListener("click",()=>{
    half1.classList.add("clicked")
    pure1.classList.remove("clicked")
    mix()

})

pure2.addEventListener("click",()=>{
    pure2.classList.add("clicked")
    half2.classList.remove("clicked")
    mix()

})

half2.addEventListener("click",()=>{
    half2.classList.add("clicked")
    pure2.classList.remove("clicked")
    mix()

})

let timer;
const donetyping = 500;

let option=document.createElement("option")
let option2=document.createElement("option")
let option3=document.createElement("option")
let option4=document.createElement("option")

var dominant="dominant";
var recessive="recessive";

pheno_dom.addEventListener('input',()=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
        parent_pheno1.append(option)
        parent_pheno1[0].value=dominant
        parent_pheno1[0].textContent=pheno_dom.value
        parent_pheno2.append(option2)
        parent_pheno2[0].value=dominant
        parent_pheno2[0].textContent=pheno_dom.value
        mix()
    },donetyping)



})

pheno_rec.addEventListener('input',()=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
        parent_pheno1.append(option3)
        parent_pheno1[1].value=recessive
        parent_pheno1[1].textContent=pheno_rec.value
        parent_pheno2.append(option4)
        parent_pheno2[1].value=recessive
        parent_pheno2[1].textContent=pheno_rec.value
        mix()
    },donetyping)

})

parent_pheno1.addEventListener('change', mix)
parent_pheno2.addEventListener('change', mix)

function mix(){
    if (half1.classList.contains('clicked')&&parent_pheno1.value=='dominant'){
        a1.textContent='A'
        a2.textContent='a'
        
    }else if (pure1.classList.contains('clicked')&&parent_pheno1.value=='recessive'){
        a1.textContent='a'
        a2.textContent='a'
        
    }else if(pure1.classList.contains('clicked')&&parent_pheno1.value=='dominant'){
        a1.textContent='A'
        a2.textContent='A'
    }

    if (half2.classList.contains('clicked')&&parent_pheno2.value=='dominant'){
        a3.innerText='A'
        a4.innerText='a'
        
    }else if (pure2.classList.contains('clicked')&&parent_pheno2.value=='recessive'){
        a3.innerText='a'
        a4.innerText='a'
        
    }else if(pure2.classList.contains('clicked')&&parent_pheno2.value=='dominant'){
        a3.innerText='A'
        a4.innerText='A'
    }

    check()
    calculate()

}

function check(){
    if (parent_pheno1.value!='' && parent_pheno2.value!=""){ 
        calc1.innerText = a1.textContent + a3.textContent
        calc2.innerText = a2.textContent + a3.textContent
        calc3.innerText = a1.textContent + a4.textContent
        calc4.innerText = a2.textContent + a4.textContent
    } 
}

function calculate(allele){
    let results=[
        calc1.innerText,
        calc2.innerText,
        calc3.innerText,
        calc4.innerText,
    ]

    var dominantcount=0
    var recessivecount=0

    for(i=0;i<4;i++){
        if(results[i].innerText=="Aa"||results[i].innerText=="AA"||results[i].innerText=="aA"){
            dominantcount++
        }else if(results[i].innerText="aa"){
            recessivecount++
        }
    }

    let dominantPercent = ((dominantcount) / 4) * 100
    let recessivePercent = (recessive) * 100

    final.innerText = "dom = " + dominantPercent + "rec = " + recessivePercent


}

