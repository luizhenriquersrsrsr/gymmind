// IMC //







// TMB //
function mostrarFormulario(tipo) {
    document.getElementById("form-adulto").classList.remove("ativo");
    document.getElementById("form-crianca").classList.remove("ativo");
  
    if (tipo === "adulto") {
      document.getElementById("form-adulto").classList.add("ativo");
    } else {
      document.getElementById("form-crianca").classList.add("ativo");
    }
  }
  
  function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso-adulto').value);
    const altura = parseFloat(document.getElementById('altura-adulto').value);
    const resultado = document.getElementById('resultadoIMC');
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      resultado.innerText = "Por favor, preencha o peso e a altura corretamente.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }
  
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> - ${classificacao}`;
  }
  
  
  function calcularIMC2() {
    const nome = document.getElementById('nome-infantil').value.trim();
    const idade = parseInt(document.getElementById('idade-infantil').value);
    const sexo = document.getElementById('sexo-infantil').value;
    const peso = parseFloat(document.getElementById('peso-infantil').value);
    const altura = parseFloat(document.getElementById('altura-infantil').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (!nome || isNaN(idade) || !sexo || isNaN(peso) || isNaN(altura) || altura <= 0) {
      resultadoDiv.innerHTML = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
  
    let classificacao = "";
    if (imc < 14) {
      classificacao = "Abaixo do peso (Percentil < 3)";
    } else if (imc >= 14 && imc <= 17) {
      classificacao = "Peso normal (Percentil 3-85)";
    } else if (imc > 17 && imc <= 19) {
      classificacao = "Sobrepeso (Percentil 85-97)";
    } else {
      classificacao = "Obesidade (Percentil > 97)";
    }
  
    resultadoDiv.innerHTML = `
      <strong>Nome:</strong> ${nome}<br>
      <strong>Idade:</strong> ${idade} anos<br>
      <strong>Sexo:</strong> ${sexo}<br><br>
      <strong>IMC:</strong> ${imcFormatado}<br>
      <strong>Classificação:</strong> ${classificacao}
    `;
  }
  


 