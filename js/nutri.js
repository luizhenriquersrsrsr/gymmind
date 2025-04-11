function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultadoDiv = document.getElementById('resultado');

  if (!peso || !altura || altura <= 0) {
    resultadoDiv.innerHTML = "Por favor, preencha os campos corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(2);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Magreza";
  } else if (imc < 24.9) {
    classificacao = "Normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade Grau 1";
  } else if (imc < 39.9) {
    classificacao = "Obesidade Grau 2";
  } else {
    classificacao = "Obesidade Grau 3";
  }

  resultadoDiv.innerHTML = `
    <strong>Seu IMC:</strong> ${imcFormatado}<br>
    <strong>Classificação:</strong> ${classificacao}
  `;
}

function mostrarFormulario(tipo) {
  document.getElementById("form-adulto").classList.remove("ativo");
  document.getElementById("form-crianca").classList.remove("ativo");

  if (tipo === "adulto") {
    document.getElementById("form-adulto").classList.add("ativo");
  } else {
    document.getElementById("form-crianca").classList.add("ativo");
  }
}

function calcularTMBAdulto() {
  const idade = parseInt(document.getElementById("idadeAdulto").value);
  const sexo = document.getElementById("sexoAdulto").value;
  const peso = parseFloat(document.getElementById("pesoAdulto").value);
  const altura = parseFloat(document.getElementById("alturaAdulto").value);
  const resultado = document.getElementById("resultadoAdulto");

  if (!idade || !peso || !altura || !sexo) {
    resultado.innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  let tmb = 0;

  if (sexo === "masculino") {
    tmb = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade);
  } else {
    tmb = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade);
  }

  resultado.innerHTML = `TMB estimada: <strong>${tmb.toFixed(2)} kcal/dia</strong>`;
}

function calcularTMBCrianca() {
  const idade = parseInt(document.getElementById("idadeCrianca").value);
  const sexo = document.getElementById("sexoCrianca").value;
  const peso = parseFloat(document.getElementById("pesoCrianca").value);
  const altura = parseFloat(document.getElementById("alturaCrianca").value);
  const resultado = document.getElementById("resultadoCrianca");

  if (!idade || !peso || !altura || !sexo) {
    resultado.innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  let tmb = 0;

  if (sexo === "masculino") {
    tmb = 88.5 + (26.7 * peso) + (903 * altura) - (107 * idade);
  } else {
    tmb = 135.3 + (10.0 * peso) + (934 * altura) - (120 * idade);
  }

  resultado.innerHTML = `TMB estimada: <strong>${tmb.toFixed(2)} kcal/dia</strong>`;
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultadoIMC');

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.textContent = "Por favor, preencha os campos corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 24.9) classificacao = "Peso normal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  resultado.innerHTML = `<strong>Seu IMC é:</strong> ${imc.toFixed(2)}<br><strong>Classificação:</strong> ${classificacao}`;
}
