;(function() {
	"use strict";
	
	var login;
	var password;

	if ( login = prompt('Кто пришел?') ) {
		if ( login == 'Админ') {
			if ( password = prompt('Пароль?') ){
				if ( password == 'Черный Властелин'){
					console.log('Добро пожаловать!');
				} else {
					console.log('Пароль не верен');
				}
			} else {
				console.log('Вход отменён');
			}
		} else {
			console.log('Я Вас не знаю');
		}
	} else {
		console.log('Вход отменён');
	}
})();