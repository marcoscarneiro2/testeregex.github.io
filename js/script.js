const tokens = {
  IDENT: /^[a-z]\w*$/,
  NUM_INT: /^\d+$/,
  NUM_REAL: /^[0-9]+.[0-9]+.?[0-9]*/,
  OPER_ATRI: /^[=,<=]\w*$/,
  OPER_REL: /^[+*/-]\w*$/,
  STR: /^"[a-z]\w*"$/,
};

function validar() {

  document.getElementById("codigo_fonte2").innerHTML = null;

  var entrada = document.getElementById("codigo_fonte").value;

  console.log(entrada);

  const chars = entrada.split(" ");

  for (var pos = 0; pos < chars.length; pos++) {
    var char = chars[pos];

    console.log(char);
    validaIdentificador(char);
    validaNumeroInteiro(char);
    validaNumeroReal(char);
    validaAtribuicao(char);
    validaRelacional(char);
    validaString(char);
  }
}

function validaIdentificador(char) {
  var identificador = tokens.IDENT.exec(char);

  if (!identificador) {
    console.log(char + " Não é identificador");
    //document.getElementById("codigo_fonte2").innerHTML += " Não é IDENT";
  } else {
    console.log(char + " É identificador");
    document.getElementById("codigo_fonte2").innerHTML +=
      "\n" + char + " IDENT";
  }
}

function validaNumeroInteiro(char) {
  var NumeroInteiro = tokens.NUM_INT.exec(char);

  if (!NumeroInteiro) {
    console.log(char + " Não é um numero inteiro");
    //document.getElementById("codigo_fonte2").innerHTML +=
    //  "\n" + char + " Não é um numero inteiro";
  } else {
    document.getElementById("codigo_fonte2").innerHTML +=
      "\n" + char + " NUM_INT";
    console.log(char + " É numero inteiro");
  }
}

function validaNumeroReal(char) {
  var NumeroReal = tokens.NUM_REAL.exec(char);

  if (!NumeroReal) {
    console.log(char + " Não é um numero real");
    //document.getElementById("codigo_fonte2").innerHTML +=
    //  "\n" + char + " Não é um numero inteiro";
  } else {
    document.getElementById("codigo_fonte2").innerHTML +=
      "\n" + char + " NUM_REAL";
    console.log(char + "É numero real");
  }
}

function validaAtribuicao(char) {
  var Atribuicao = tokens.OPER_ATRI.exec(char);

  if (!Atribuicao) {
    console.log(char + " Não é atribuicao");
    //document.getElementById("codigo_fonte2").innerHTML +=
    //  "\n" + char + " Não é um numero inteiro";
  } else {
    console.log(char + " É atribuição");
    document.getElementById("codigo_fonte2").innerHTML +=
      "\n" + char + " OPER_ATRI";
  }
}

function validaRelacional(char) {
  var Relacional = tokens.OPER_REL.exec(char);

  if (!Relacional) {
    console.log(char + " Não é relacional");
    //document.getElementById("codigo_fonte2").innerHTML +=
    //  "\n" + char + " Não é um numero inteiro";
  } else {
    console.log(char + " É relacional");
    document.getElementById("codigo_fonte2").innerHTML +=
      "\n" + char + " OPER_REL";
  }
}

function validaString(char) {
  var string = tokens.STR.exec(char);

  if (!string) {
    console.log(char + " Não é string");
    //document.getElementById("codigo_fonte2").innerHTML +=
    //  "\n" + char + " Não é um numero inteiro";
  } else {
    console.log(char + " É string");
    document.getElementById("codigo_fonte2").innerHTML += "\n" + char + " STR";
  }
}
