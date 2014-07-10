function init(){
	$('.menu-bar').on('click', '.coding', function(event){
		event.preventDefault();
		$('.ajax-swap').load('coding.html');
		$('.products').closest('li').removeClass('active');
		$('.services').closest('li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	$('.menu-bar').on('click', '.products', function(event){
		event.preventDefault();
		$('.ajax-swap').load('products.html');
		$('.services').closest('li').removeClass('active');
		$('.coding').closest('li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	$('.menu-bar').on('click', '.services', function(event){
		event.preventDefault();
		$('.ajax-swap').load('services.html');
		$('.coding').closest('li').removeClass('active');
		$('.products').closest('li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
}

$(document).on('ready', function() {
	init();
});