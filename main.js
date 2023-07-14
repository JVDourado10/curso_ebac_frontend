competicoesInternacionaisEuropa = ['Champions League', 'Europa League', 'Conference League'];
competicoesInternacionaisAmericaDoSul = ['Copa Libertadores', 'Copa Sul Americana'];
competicoesInternacionais = competicoesInternacionaisAmericaDoSul + competicoesInternacionaisEuropa

function Time(nome, regiao, competicaoInternacional) {
  this.nome = nome;
  this.regiao = regiao;
  
  let _competicaoInternacional = competicaoInternacional;

  this.getCompeticaoInternacional = function() {
    return _competicaoInternacional;
  }

  this.setCompeticaoInternacional = function(competicao) {
    if(competicoesInternacionais.includes(competicao)){     
      return _competicaoInternacional = competicao;
    }
    else {
      return _competicaoInternacional = 'Não se classificou'
    }
  }
}

function Europeu(nome, competicaoInternacional) {
  Time.call(this, nome, 'Europa', competicaoInternacional);

  this.classificou = function(competicao) {
    if(competicoesInternacionaisEuropa.includes(competicao)) {
      this.setCompeticaoInternacional(competicao);
    }
    else {
      this.setCompeticaoInternacional('Não se classificou');
    }
  }
}

function AmericaDoSul(nome, competicaoInternacional) {
  Time.call(this, nome, 'America do Sul', competicaoInternacional);

  this.classificou = function(competicao) {
    if(competicoesInternacionaisAmericaDoSul.includes(competicao)) {
      this.setCompeticaoInternacional(competicao);
    }
    else {
      this.setCompeticaoInternacional('Não se classificou');
    }
  }
}

const liverpool = new Europeu('Liverpool', 'Champions League');
const vitoria = new AmericaDoSul('Vitoria', '');

console.log(liverpool)
liverpool.classificou('Europa League');
console.log(liverpool.getCompeticaoInternacional())

console.log(vitoria)
vitoria.classificou('');
console.log(vitoria.getCompeticaoInternacional())