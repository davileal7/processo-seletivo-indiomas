//Português
$(function() {
    $('.br').click(function() {
        $('.language-selected').text('pt-BR');
        $('.language-selected').removeClass('change-EN')
        $('.language-selected').removeClass('change-ES')
        $('.language-selected').addClass('change-BR')
        //secão
        $('#title').text('Esta página é uma Prova para trabalhar na LigaMagic')
        $('#parágrafo').text('Desde já agradeço a oportunidade de participar deste processo seletivo e espero entrar na equipe para me desenvolver e aprender cada vez mais. Obrigado!')
        

    });
    
});

//Inglês
$(function() {
    $('.en').click(function() {
        
        $('.language-selected').text('en-US');
        $('.language-selected').removeClass('change-BR')
        $('.language-selected').removeClass('change-ES')
        $('.language-selected').addClass('change-EN')
        //secão
        $('#title').text('This page is a Proof to work in LigaMagic')
        $('#parágrafo').text('Thank you in advance for the opportunity to participate in this selection process and I hope to join the team to develop and learn more and more. Thanks!')
        
        
    });
    
});

//Espanhol
$(function() {
    $('.es').click(function() {
        $('.language-selected').text('es-ES');
        $('.language-selected').addClass('change-ES')
        //secão
        $('#title').text('Esta página es una prueba para trabajar en LigaMagic')
        $('#parágrafo').text('Gracias de antemano por la oportunidad de participar en este proceso de selección y espero unirme al equipo para desarrollarme y aprender más y más. Gracias!')
    
        
    });
    
});