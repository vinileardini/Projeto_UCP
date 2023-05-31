var Reg = [0,0,0,0] // Vetor para valores do registro
var Aponta = [0,0,0]
var Total = 0
var operacao = ""
var base = 'Dec'
var NumBase = 1
var guardavalor = ["","","","","","","","","",""]
function Extrai(nPosic){
    Reg[nPosic] = document.getElementById("Reg"+nPosic.toString()).value;
}

function Endec(cBuss, nPosic){

    if (cBuss == "A"){
        if(nPosic == 1){
            Aponta[1] = 1
        }
        if(nPosic == 2){
            Aponta[1] = 2          
        }
        if(nPosic == 3){
            Aponta[1] = 3       
        }
        if(nPosic == 4){
            Aponta[1] = 4
        }
    }
    else if(cBuss == "B"){
        if(nPosic == 1){
            Aponta[2] = 2
        }
        if(nPosic == 2){
            Aponta[2] = 2          
        }
        if(nPosic == 3){
            Aponta[2] = 3       
        }
        if(nPosic == 4){
            Aponta[2] = 4
        }
    }
    else if(cBuss == "C")
    {
        if(nPosic == 1){
            Aponta[3] = 1
        }
        if(nPosic == 2){
            Aponta[3] = 2          
        }
        if(nPosic == 3){
            Aponta[3] = 3       
        }
        if(nPosic == 4){
            Aponta[3] = 4
        }
    }  
}

function Math(cBase){
    operacao = cBase
}

function Dec_Bin(nVal){

    if(nVal == 2){
        base = 'Bin'
    }
    else{
        base = 'Dec'
    }
}

function iniciar(){
    var Boop = [0,0,0,0,0,0,0,0,0,0]
    var lRet = false
    var nCont = 1
    var cAlias = ""
    var nCont2 = 0

    document.getElementById("CampoA").value = Reg[Aponta[1]]
    document.getElementById("CampoB").value = Reg[Aponta[2]]
           
    if(operacao == '+'){
        Total = parseInt(Reg[Aponta[1]]) + parseInt(Reg[Aponta[2]])
    }
    if(operacao == '*'){
        Total = parseInt(Reg[Aponta[1]]) * parseInt(Reg[Aponta[2]])
    }
    if(operacao == '-'){
        Total = parseInt(Reg[Aponta[1]]) - parseInt(Reg[Aponta[2]])
    }
    if(operacao == '/'){
        Total = parseInt(Reg[Aponta[1]]) / parseInt(Reg[Aponta[2]])
    }   

    setTimeout(function(){
        document.getElementById("CampoC").value = Reg[Aponta[1]]
        document.getElementById("CampoD").value = Reg[Aponta[2]]
        document.getElementById("CampoE").value = Total.toString()
        
        if(Total == 0){
            document.getElementById("CampoG").value = 'X'
        }
        else if(Total < 0){
            document.getElementById("CampoF").value = 'X'
        }
    },5000)

    setTimeout(function(){
        document.getElementById("CampoH").value = Total
        document.getElementById("Reg"+Aponta[3]).value = Total.toString()
       
    },10000)


    setTimeout(function(){
        document.getElementById("CampoC").value = Reg[Aponta[1]]
        document.getElementById("CampoD").value = Reg[Aponta[2]]
        document.getElementById("CampoE").value = Total.toString()
        
        if(Total == 0){
            document.getElementById("CampoG").value = 'X'
        }
        else if(Total < 0){
            document.getElementById("CampoF").value = 'X'
        }
    },5000)

    setTimeout(function(){
        Boop[1] = document.getElementById("Dit1").value
        Boop[2] = document.getElementById("Dit2").value
        Boop[3] = document.getElementById("Dit3").value
        Boop[4] = document.getElementById("Dit4").value
        Boop[5] = document.getElementById("Dit5").value
        Boop[6] = document.getElementById("Dit6").value
        Boop[7] = document.getElementById("Dit7").value
        Boop[8] = document.getElementById("Dit8").value
        Boop[9] = document.getElementById("Dit9").value
        Boop[10] = document.getElementById("Dit10").value


        for(nCont = 1 ; nCont <= 10; nCont++){
            nCont2++
            if(Boop[nCont2] == ''){
                cAlias = "Dit" + nCont.toString()
                lRet = true
                break
            }
        }

        if(lRet == false){
            document.getElementById("Dit1").value = Total.toString()
        }
        else{
           
            document.getElementById(cAlias).value = Total.toString()
        }
       
    },20000)  

}

function Converte(cEsc){
    var Aux = 0
    var nCont = 0
    var nQuo = 0 
    var nDivisor = 0
    var nCont2 = 0
    var nCont3 = 0 
    var nCont4 = 0
    var cResto = ""
    var str = ""
    var Auxc = ""
    var nMulti = 0
    var nSoma = 0
    const dois = 2


    if(cEsc == '2'){
        nCont3 = 0
        nCont2 = 0
        nCont4 = 0
        nCont = 0
        for(nCont = 0; nCont <= 9; nCont++){
            nCont2++
            cResto =""
            nDivisor = document.getElementById("Dit"+nCont2.toString()).value
            if(guardavalor[nCont] != nDivisor){
                while(nDivisor >=  1){
                    Aux = nDivisor % 2
                    str = Aux.toString()
                    cResto += str.substr(0, 1)
                    nDivisor = nDivisor / 2
                }
                nCont4 = cResto.length
                for(nCont3 = 0; nCont3 <= cResto.length; nCont3++){
                    Auxc += cResto.substr(nCont4, 1)
                    nCont4--
                }
                cResto = Auxc
                Auxc = ""
                guardavalor[nCont] = cResto
                document.getElementById("Dit"+nCont2.toString()).value = cResto
            }
            if(nCont2 == 10){
                break
            }
        }     
    }
    if(cEsc == '1'){
        nCont3 = 0
        nCont2 = 0
        nCont4 = 0
        for(nCont = 0; nCont <= 10; nCont++){ 
            nCont3++
            Auxc = document.getElementById("Dit"+nCont3.toString()).value
            if(Auxc != ""){
                for(nCont2 = Auxc.length-1; nCont2 >= 0; nCont2--){
                    nMulti = parseInt(Auxc.substr(nCont4,1))*(dois**nCont2)
                    nSoma += nMulti
                    nCont4++
                }
                document.getElementById("Dit"+nCont3.toString()).value = nSoma
                nSoma = 0
                Auxc = ""      
            }
            if(nCont3 == 10){
                break
            }   
        }  
    }

}