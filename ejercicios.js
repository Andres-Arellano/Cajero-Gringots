function popUp () {
    document.querySelector(".popup1").style.display = "flex";
}

function byePopUp () {
    document.querySelector(".popup1").style.display = "none";
}

function logInHarry () {
    let password = document.getElementById ("hedwig").value

    if (password === "Hedwig") {
        document.querySelector(".profiles1").style.display = "flex";
    } else {
        alert ("impostor")
    }
}

function popUpH () {
    document.querySelector(".popup2").style.display = "flex";
}

function byePopUpH () {
    document.querySelector(".popup2").style.display = "none";
}

function logInHermione () {
    let password = document.getElementById ("crookshanks").value

    if (password === "Crookshanks") {
        document.querySelector(".profiles2").style.display = "flex";
    } else {
        alert ("impostor")
    }
}

function popUpR () {
    document.querySelector(".popup3").style.display = "flex";
}

function byePopUpR () {
    document.querySelector(".popup3").style.display = "none";
}

function logInRon () {
    let password = document.getElementById ("pigwidgeon").value

    if (password === "Pigwidgeon") {
        document.querySelector(".profiles3").style.display = "flex";
    } else {
        alert ("impostor")
    }
}

let harryPotter = 940

function saldo () { 
    document.getElementById("saldo").innerHTML = (`Tu saldo es de ${harryPotter}` )
}

function retiro () { 
    let monto = parseInt(document.getElementById("monto").value)
    let saldo = harryPotter
    let minimum = saldo - 10
    harryPotter = saldo - monto
    

    if (harryPotter<10) {
        document.getElementById("resultado").innerHTML = (`Solo has podido retirar ${minimum}`)
        harryPotter = 10
    } else {
        document.getElementById("resultado").innerHTML = (`${harryPotter}`)
    }
}


function deposito () {
    let ingreso = parseInt(document.getElementById ("deposit").value)
    let saldo = harryPotter
    let maximum = 990 - saldo
    harryPotter = saldo + ingreso 
    

    if (harryPotter>990) {
        document.getElementById("resultado").innerHTML = (`Solo se han podido ingresar ${maximum}`)
        harryPotter = 990
    } else {
        document.getElementById("resultado").innerHTML = (`${harryPotter}`)
    }
}

function byeBank () {
    document.querySelector(".profiles1").style.display = "none"
}

let Hermione = 230

function saldoH () { 
    document.getElementById("saldoH").innerHTML = (`Tu saldo es de ${Hermione}` )
}

function retiroH () { 
    let monto = parseInt(document.getElementById("montoH").value)
    let saldo = Hermione
    let minimum = saldo - 10
    Hermione = saldo - monto
    

    if (Hermione<10) {
        document.getElementById("resultadoH").innerHTML = (`Solo has podido retirar ${minimum}`)
        Hermione = 10
    } else {
        document.getElementById("resultadoH").innerHTML = (`${Hermione}`)
    }
}


function depositoH () {
    let ingreso = parseInt(document.getElementById ("depositH").value)
    let saldo = Hermione
    let maximum = 990 - saldo
    Hermione = saldo + ingreso 
    

    if (Hermione>990) {
        document.getElementById("resultadoH").innerHTML = (`Solo se han podido ingresar ${maximum}`)
        Hermione = 990
    } else {
        document.getElementById("resultadoH").innerHTML = (`${Hermione}`)
    }
}

function byeBankH (){
    document.querySelector(".profiles2").style.display = "none"
}

let ron = 10

function saldoR () { 
    document.getElementById("saldoR").innerHTML = (`Tu saldo es de ${ron}` )
}

function retiroR () { 
    let monto = parseInt(document.getElementById("montoR").value)
    let saldo = ron
    let minimum = saldo - 10
    ron = saldo - monto
    

    if (ron<10) {
        document.getElementById("resultadoR").innerHTML = (`Solo has podido retirar ${minimum}`)
        ron = 10
    } else {
        document.getElementById("resultadoR").innerHTML = (`${ron}`)
    }
}


function depositoR () {
    let ingreso = parseInt(document.getElementById ("depositR").value)
    let saldo = ron
    let maximum = 990 - saldo
    ron = saldo + ingreso 
    

    if (ron>990) {
        document.getElementById("resultadoR").innerHTML = (`Solo se han podido ingresar ${maximum}`)
        ron = 990
    } else {
        document.getElementById("resultadoR").innerHTML = (`${ron}`)
    }
}

function byeBankR () {
    document.querySelector(".profiles3").style.display = "none"
}




