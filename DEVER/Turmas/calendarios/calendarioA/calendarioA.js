    const meses = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro', 'dezembro'];
    tableDay = document.getElementById('dias')
    let date = new Date();
    var mesatual = date.getMonth();
    var ano = 2024;

    function pegarmes (mesatual, meses){
        const mesescrito = meses[mesatual];
        console.log (mesescrito)
        mesdisplay = document.querySelector('.mesatual')
        mesdisplay.innerHTML = mesescrito
    }

    function modais(dias) {
        dias.addEventListener("click", function() {
            var modal = document.createElement('div');
            modal.classList.add('modal');
            var countedo = document.querySelector('.conteudo');
            countedo.appendChild(modal);
        
            var adicionarumatarefa = document.createElement('h3');
            adicionarumatarefa.innerHTML = 'Não há nenhum agendamento';
            adicionarumatarefa.classList.add('texto');
            modal.appendChild(adicionarumatarefa);
        
            var botaocreate = document.createElement('button');
            botaocreate.innerText = 'Criar';
            botaocreate.classList.add('botaocriar');
            modal.appendChild(botaocreate);
        
            var botaofechar = document.createElement('button');
            botaofechar.innerText = 'Fechar';
            botaofechar.classList.add('botaofechar');
            modal.appendChild(botaofechar);
        
            botaocreate.addEventListener('click', function(){
                var modal2 = document.createElement('div');
                modal2.classList.add('modal2');
                var conteudo = document.querySelector('.conteudo');
                conteudo.appendChild(modal2);
        
                var title2 = document.createElement('h3');
                title2.innerHTML = 'Adicione um dever';
                title2.classList.add('texto2');
                modal2.appendChild(title2);
        
                var input = document.createElement('textarea');
                input.classList.add('input');
                modal2.appendChild(input);
        
                var botaocreate2 = document.createElement('button');
                botaocreate2.innerText = 'Criar';
                botaocreate2.classList.add('botaocriar2');
                modal2.appendChild(botaocreate2);
        
                var botaofechar2 = document.createElement('button');
                botaofechar2.innerText = 'Fechar';
                botaofechar2.classList.add('botaocriar3');
                modal2.appendChild(botaofechar2);
        
                modal.style.visibility = 'hidden';
                

                botaofechar.addEventListener('click', function() {
                    modal.remove(); 
                });
        
                botaofechar2.addEventListener('click', function() {
                    modal2.remove();
                });

                botaocreate2.addEventListener('click', function() {
                    let evento = input.value
                });
            });
        });
    }

    function pegardiasmes(ano, mes) {
        var primeirodiasemana = new Date(ano, mes, 1).getDay()-1; 
        var ultimodiames = new Date(ano, mes + 1, 0).getDate(); 

        for (var i = -primeirodiasemana,index = 0; i < (42 - primeirodiasemana); i++, index++) {
            var dt = new Date(ano, mes, i);
            var dayTable = tableDay.getElementsByTagName('td')[i];
            dayTable.innerHTML = dt.getDate();

            if (i < 1) {
                dayTable.classList.add('mes-anterior')
            }
            if (i > ultimodiames) {
                dayTable.classList.add('mes-posterior')
            }
            modais(dayTable);

        
            function criarEvento(dia) {
                console.log('Evento criado para o dia:', dia);
            }

            dayTable.addEventListener('click', function () {
                var diaSelecionado = parseInt(this.innerHTML); 
                criarEvento(diaSelecionado); 
                console.log(diaSelecionado);
            });
        }

    }

    pegardiasmes(ano, mesatual);
    pegarmes()
