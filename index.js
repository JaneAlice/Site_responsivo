
var menu_aberto_aberto = 0;

$('#botao-menu-mobile').on('click', function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$('#menu-reponsivo').show(500);
	$('#botao-menu-mobile').addClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#menu-reponsivo').hide(500);
	$('#botao-menu-mobile').removeClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 0;
}