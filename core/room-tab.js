var handlebars = require('handlebars')

module.exports = function(ziggy, dom) {

	// on('focus')
	// on('blur')

	console.log('awdawddwawd')

	ziggy.joinChannel('irc.freenode.net', '#testingbot', 'ziggy-client')

	.on('message', function(user, channel, text) {
		console.log('message')
	})

	.on('pm', function(user, text) {
		console.log('pm')
	})

	.on('nick', function(oldNick, user, channels) {
		console.log('nick')
	})

	.on('join', function(channel, user) {
		console.log('join')
	})

	.on('part', function(user, channel, reason) {
		console.log('part')
	})

	.on('quit', function(user, reason) {
		console.log('quit')
	})

	.on('kick', function(kicked, kickedBy, channel, reason) {
		console.log('kick')
	})

	.on('topic', function(channel, topic, nick) {
		console.log('topic')
	})

}