let nome = "Homem-Aranha"; //Variável que armazena o nível do herói
let experiencia = 7500; //Variável que armazena a experiência

let nivel; //Variável que vai armazenar o nível do herói de acordo com o que nosso classificador indicará com base na experiência

if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);