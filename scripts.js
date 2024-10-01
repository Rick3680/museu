function lu() {
    alert("A Legião Urbana foi uma das principais bandas do rock brasileiro. O grupo se formou em 1982, na cidade de Brasília. Após algumas apresentações com outras formações a banda chegou a seu trio original com Renato Russo (vocal e baixo), Dado Villa Lobos (guitarra) e Marcelo Bonfá (bateria).");
}

function cbjr() {
    alert("CBJR foi uma banda brasileira de rock formada em 1992 na cidade de Santos, por Chorão (vocal), Champignon (baixo), Marcão Britto (guitarra), Thiago Castanho (guitarra) e Renato Pelado (bateria).")
}

function Sepultura() {
    alert("Sepultura é uma banda brasileira de heavy metal criada em 1983 pelos irmãos Max e Igor Cavalera em Belo Horizonte, Minas Gerais.")
}

function Mamonas() {
    alert("O conhecido “Mamonas Assassinas” começou a carreira como banda “Utopia”, em 1989, formada originalmente pelos irmãos Sérgio e Samuel Reoli e o amigo Bento Hinoto. Na época, eles gostavam de misturar o rock, o pop e os mais diversos gêneros populares brasileiros, como o sertanejo e o forró, por exemplo.")
}

function Engenheiros() {
    alert("Engenheiros do Hawaii foi uma banda brasileira de rock formada no início de 1985 na cidade de Porto Alegre. Com a exceção de um pequeno hiato no final de 1996 e início de 1997, o grupo esteve na ativa até abril de 2008, quando foi anunciada uma 'pausa por tempo indeterminado'.")
}

function q1() {
    var nome = prompt("em que ano Legião Urbana começou?");
    if (nome!=null && nome!="") {

        if (nome == 1982) {
            alert("Isso, a banda começou em 1982");
        } 
        else {
            alert("Errado, a banda começou em 1982");
        }
    }
    else {
        alert("Você não respondeu")
    }
}

function q2() {
    var nome = prompt("Em que cidade foi formada a banda?");
    if (nome!=null && nome!="") {

        if (nome == "Santos") {
            alert("Exato, a banda foi criada na cidade de Santos");
        } 
        else {
            alert("Errado, a banda foi criada na cidade de Santos");
        }
    }
    else {
        alert("Você não respondeu.")
    }
}

function q3() {
    var nome = prompt("Qual o estilo dessa banda?");
    if (nome!=null && nome!="") {

        if (nome == "heavy metal") {
            alert("Você acertou Sepultura é uma banda de heavy metal");
        } 
        else {
            alert("Não, Sepultura é uma banda de heavy metal");
        }
    }
    else {
        alert("Você não respondeu.")
    }
}

function q4() {
    var nome = prompt("Qual foi o primeiro nome da banda?");
    if (nome!=null && nome!="") {

        if (nome == "Utopia") {
            alert("Isso, o primeiro nome foi Utopia");
        } 
        else {
            alert("Quase, o primeiro nome foi Utopia");
        }
    }
    else {
        alert("Você não respondeu.")
    }
}

function q5() {
    var nome = prompt("Quando a banda deu uma pausa?");
    if (nome!=null && nome!="") {

        if (nome == "2008") {
            alert("Sim, a banda deu uma pausa indeterminada em 2008");
        } 
        else {
            alert("Não, a banda deu uma pausa indeterminada em 2008");
        }
    }
    else {
        alert("Você não respondeu.")
    }
}

function sair (){
    alert("Obrigado por visitar o site!")
}
