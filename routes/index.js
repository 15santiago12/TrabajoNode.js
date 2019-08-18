const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index')
});

// inicio ejercicio uno 

router.get('/uno',(req, res, next) =>{
    res.render('uno')
});

router.post('/ejercicio', (req,res, next) => {

    
    var numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10;

    numero1= Math.floor(Math.random() * (1+100));
    numero2= Math.floor(Math.random() * (1+100));
    numero3= Math.floor(Math.random() * (1+100));
    numero4=Math.floor(Math.random() * (1+100));
    numero5=Math.floor(Math.random() * (1+100));
    numero6= Math.floor(Math.random() * (1+100));
    numero7=Math.floor(Math.random() * (1+100));
    numero8=Math.floor(Math.random() * (1+100));
    numero9= Math.floor(Math.random() * (1+100));
    numero10= Math.floor(Math.random() * (1+100));
    
    var Mayor = Math.max(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10);
    var Menor = Math.min(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10);
    
    

    res.render('uno',{
        numero1: numero1,
        numero2: numero2,
        numero3 : numero3,
        numero4: numero4,
        numero5: numero5,
        numero6: numero6,
        numero7: numero7,
        numero8: numero8,
        numero9: numero9,
        numero10 : numero10,
        Mayor: Mayor,
        Menor: Menor
        
    });

});

// fin ejercicio uno 

//inicio ejercicio dos

router.get('/dos', (req,res) => {
    res.render('dos');
});

router.post('/ejercicio2', (req,res) => {
    var mes = req.body.mes;
    var dia;
       switch(mes){
           case "1" :dia ='sabado';
           break;
           case "2" :dia ='domingo';
           break;
           case "3" :dia ='lunes';
           break;
           case "4" :dia ='martes';
           break;
           case "5" :dia ='miercoles';
           break;
           case "6" :dia ='jueves';
           break;
           case "7" :dia ='viernes';
           break;
           case "8" :dia ='sabado';
           break;
           case "9" :dia ='domingo';
           break;
           case "10" :dia ='lunes';
           break;
           case "11" :dia ='martes';
           break;
           case "12" :dia ='miercoles';
           break;
           case "13" :dia ='jueves';
           break;
           case "14" :dia ='viernes';
           break;
           case "15" :dia = 'sabado';
           break;
           case "16" :dia ='domingo';
           break;
           case "17" :dia ='lunes';
           break;
           case "18" :dia ='martes';
           break;
           case "19" :dia ='miercoles';
           break;
           case "20" :dia ='jueves';
           break;
           case "21" :dia ='viernes';
           break;
           case "22" :dia = 'sabado';
           break;
           case "23" :dia ='domingo';
           break;
           case "24" :dia ='lunes';
           break;
           case "25" :dia ='martes';
           break;
           case "26" :dia ='miercoles';
           break;
           case "27" :dia ='jueves';
           break;
           case "28" :dia ='viernes';
           break;
           case "29" :dia ='sabado';
           break;
           case "30" :dia ='domingo';
           break;
       }

    res.render('dos',{
        dia:dia
    })

});

// fin ejercicio dos 

// inicio ejercicio tres

router.get('/tres', (req,res) =>{
    res.render('tres');
});

router.post('/ejercicio3', (req,res) =>{
    var numero1,numero2,numero3;
    var resNum1,resNum2,resNum3;

    numero1 = Math.floor(Math.random() * (1+100));
    numero2 = Math.floor(Math.random() * (1+100));
    numero3 = Math.floor(Math.random() * (1+100));

    if(numero1 > 50){
        resNum1 = 'es mayor a 50';
    }else if(numero1 >= 0 && numero1 <= 20){
        resNum1 = 'menor de 20';
    }else if(numero1 < 0){
        resNum1 = 'es negativo';
    }else{
        resNum1 = 'no cumple con las condiciones';
    }

    if(numero2 > 50){
        resNum2 = 'es mayor a 50';
    }else if(numero2 >= 0 && numero2 <= 20){
        resNum2 = 'menor de 20';
    }else if(numero2 < 0){
        resNum2 = 'es negativo';
    }else{
        resNum2 = 'no cumple con las condiciones';
    }

    if(numero3 > 50){
        resNum3 = 'es mayor a 50';
    }else if(numero3 >= 0 && numero3 <= 20){
        resNum3 = 'menor de 20';
    }else if(numero3 < 0){
        resNum3 = 'es negativo';
    }else{
        resNum3 = 'no cumple con las condiciones';
    }

    res.render('tres',{
        numero1: numero1,
        numero2: numero2,
        numero3: numero3,
        resNum1:resNum1,
        resNum2:resNum2,
        resNum3:resNum3
    });
});

//fin ejercicio tres

// inicio ejercicio cuatro

router.get('/cuatro', (req,res) =>{
    res.render('cuatro');
});

router.post('/ejercicio4', (req,res) =>{
    var numero = Math.floor(Math.random() * (1+100));
    var resNumero;
    if(numero % 2 == 0){
        resNumero = 'Es par';
    }else{
        resNumero = 'Es impar';
    }

    res.render('cuatro',{
        numero: numero,
        resNumero:resNumero
    });
});

// fin ejercicio cuatro 

//inicio ejercicio cinco 
router.get('/cinco', (req,res) =>{
    res.render('cinco');
});

router.post('/ejercicio5', (req,res) =>{

    var pares = [];
    var impares = [];
    var numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10;

    numero1 = Math.floor(Math.random() * (1+100));
    numero2 = Math.floor(Math.random() * (1+100));
    numero3 = Math.floor(Math.random() * (1+100));
    numero4 = Math.floor(Math.random() * (1+100));
    numero5 = Math.floor(Math.random() * (1+100));
    numero6 = Math.floor(Math.random() * (1+100));
    numero7 = Math.floor(Math.random() * (1+100));
    numero8 = Math.floor(Math.random() * (1+100));
    numero9 = Math.floor(Math.random() * (1+100));
    numero10 = Math.floor(Math.random() * (1+100));

    var Mayor = Math.max(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10);
    var Menor = Math.min(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10);
    var numeros = [numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10];

    for(var i = 0; i <= numeros.length; i++){
        if(numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }else{
            impares.push(numeros[i]);
        }
    }

    res.render('cinco',{
        numero1: numero1,
        numero2: numero2,
        numero3: numero3,
        numero4: numero4,
        numero5: numero5,
        numero6:numero6,
        numero7: numero7,
        numero8: numero8,
        numero9: numero9,
        numero10: numero10,
        Mayor: Mayor,
        Menor: Menor,
        pares: pares,
        impares: impares
    });
});

//fin ejercicio cinco 
//inicio ejercicio seis

router.get('/seis', (req,res) =>{
    res.render('seis')
});

router.post('/ejercicio6', (req,res) =>{

    var nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25;
    var sumaNota = 0;
    var prom = 0;

    nota1 = parseInt(req.body.not1);
    nota2 = parseInt(req.body.not2);
    nota3 = parseInt(req.body.not3);
    nota4 = parseInt(req.body.not4);
    nota5 = parseInt(req.body.not5);
    nota6 = parseInt(req.body.not6);
    nota7 = parseInt(req.body.not7);
    nota8 = parseInt(req.body.not8);
    nota9 = parseInt(req.body.not9);
    nota10 = parseInt(req.body.not10);
    nota11 = parseInt(req.body.not11);
    nota12 = parseInt(req.body.not12);
    nota13 = parseInt(req.body.not13);
    nota14 = parseInt(req.body.not14);
    nota15 = parseInt(req.body.not15);
    nota16 = parseInt(req.body.not16);
    nota17 = parseInt(req.body.not17);
    nota18 = parseInt(req.body.not18);
    nota19 = parseInt(req.body.not19);
    nota20 = parseInt(req.body.not20);
    nota21 = parseInt(req.body.not21);
    nota22 = parseInt(req.body.not22);
    nota23 = parseInt(req.body.not23);
    nota24 = parseInt(req.body.not24);
    nota25 = parseInt(req.body.not25);

    var notas = [nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25];
    do{
        sumaNota = sumaNota + notas[prom];
        prom++;
    }while (prom < notas.length) 

    var promedio = parseFloat(sumaNota / notas.length);

    res.render('seis',{
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        nota4: nota4,
        nota5: nota5,
        nota6: nota6,
        nota7: nota7,
        nota8: nota8,
        nota9: nota9,
        nota10: nota10,
        nota11: nota11,
        nota12: nota12,
        nota13: nota13,
        nota14: nota14,
        nota15: nota15,
        nota16: nota16,
        nota17: nota17,
        nota18: nota18,
        nota19: nota19,
        nota20: nota20,
        nota21: nota21,
        nota22: nota22,
        nota23: nota23,
        nota24: nota24,
        nota25: nota25,
        notas:notas,
        prom: prom,
        sumaNota: sumaNota,
        promedio: promedio
    })

});

//fin ejercicio seis 

//inicio ejercicio siete 
router.get('/siete', (req,res) =>{
    res.render('siete');
});

router.post('/ejercicio7', (req,res) =>{

    var numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8
    var numeros = [];
    var suma = 0;

    numero1 = parseInt(req.body.num1);
    numero2 = parseInt(req.body.num2);
    numero3 = parseInt(req.body.num3);
    numero4 = parseInt(req.body.num4);
    numero5 = parseInt(req.body.num5);
    numero6 = parseInt(req.body.num6);
    numero7 = parseInt(req.body.num7);
    numero8 = parseInt(req.body.num8);

    numeros.push(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8);
    
    for(var i = 0; i <= numeros.length-1; i++){
        suma = suma + numeros[i];
    };

    res.render('siete',{
        suma:suma
    });

});
//fin ejercicio siete 

//inicio ejercicio ocho
router.get('/ocho', (req,res) =>{
    res.render('ocho');
});

router.post('/ejercicio8', (req,res) =>{

    var numeros = [];
    var Pares = 0;
    var Impares = 0;
    var cantPares = 0;
    var cantImpares = 0;

    var tArray = Math.floor(Math.random() * (1+20));

    if(tArray >= 0 && tArray <= 20){
        for(var i = 1; i <= tArray; i++){
            var numero = Math.floor(Math.random() * (1+100));
            numeros.push(numero);
        }
        for(var o = 0; o <= numeros.length-1; o++){
            if(numeros[o] % 2 == 0){
                Pares = Pares + numeros[o];
                cantPares++
            }else{
                Impares = Impares + numeros[o];
                cantImpares++
            }
        }
    }

    res.render('ocho',{
        tArray: tArray,
        numeros:numeros,
        Pares:Pares,
        Impares:Impares,
        cantPares:cantPares,
        cantImpares:cantImpares
    })
    
});
//fin ejercicio 8 



module.exports = router;