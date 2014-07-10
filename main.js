function init(){
	$('.menu-bar').on('click', '.coding', function(event){
		event.preventDefault();
		$('.ajax-swap').load('coding.html');
	});
	$('.menu-bar').on('click', '.products', function(event){
		event.preventDefault();
		$('.ajax-swap').load('products.html');
	});
	$('.menu-bar').on('click', '.services', function(event){
		event.preventDefault();
		$('.ajax-swap').load('services.html');
	});
}

$(document).on('ready', function() {
	init();
});