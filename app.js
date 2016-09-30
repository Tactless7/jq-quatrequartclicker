$(document).ready(function(){

	var count = 0;

	$('img').click(function(){
		count++;
		console.log(count);
		$('span').text(count);

		if(count % 60 === 0){
			alert('MAIS DEGAAAAAAGE');
		}
		else if (count % 40 === 0) {
			alert('Sur que tu veux pas faire autre chose ?')
		}
		else if (count %20 === 0) {
			alert('Allez, va faire un truc intéressant.')
		}
	});


});