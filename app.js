$(document).ready(function(){

	var count = 0;
	var message = {
		msg1 : 'Sur que tu veux pas faire autre chose ?',
		msg2 : 'Allez, va faire un truc intéressant.',
		msg3 : 'Mais allez, file.',
		msg4 : 'Tu sais que le désespoir est en moi là ?'
	};

	function randomMsg(){
		var rdm = Math.floor(Math.random() * 4) + 1;
		console.log(rdm);
		return 'msg'+rdm ;
	}

	$('img').click(function(){
		count++;
		console.log(count);
		$('span').text(count);

		if (count % 20 === 0){
		var rdmMsg = message[randomMsg()];
		alert(rdmMsg);
		}
	});
});