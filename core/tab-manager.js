var EE = require('events').EventEmitter

/*
	tab manager
	simple view manager

	todo:
	- closing tab
*/

tabManager = {}

tabManager.init = function(tabs, menu, ziggy) {

	this.ee = Object.create(EE.prototype)

	this.ziggy = ziggy || {}
	this.tabs = {}
	this.openTabs = []
	this.menu = menu || {}

	this.updateMenu()

	for(var i=0; i<tabs.length; i++) {
		this.register(tabs[i])
	}
}

tabManager.updateMenu = function() {
	this.menu.call(this)
}

tabManager.register = function(tab) {
	this.tabs[tab.name] = tab.src
}

/*
	creates tab instance
*/
tabManager.open = function(name) {

	// if tab doesn't exist
	if(!this.tabs[name]) return

	// assemble tab
	var tab = {
		src: this.tabs[name].call(this),
		focus: false,
		id: Math.random()
	}

	this.openTabs.push(tab)
	this.setFocus(tab.id)

	return tab
}

/*
	get openTab by @id
*/
tabManager.getById = function(id) {

	for(var i=0; i<this.openTabs.length; i++) {
		if(this.openTabs[i].id == id) return this.openTabs[i]
	}
}

/*
	set @tab focus to true
	set all other tabs to false
	emit focus/blur events
*/
tabManager.setFocus = function(id) {

	for(var i=0; i<this.openTabs.length; i++) {
		if(this.openTabs[i].id == id) {

			this.openTabs[i].focus = true
			this.ee.emit('focus', this.openTabs[i].id)
			this.ee.emit('focus#'+this.openTabs.id)
		}
		else {

			this.openTabs[i].focus = false
			this.ee.emit('blur', this.openTabs[i].id)
			this.ee.emit('blur#'+this.openTabs.id)
		}
	}

	this.updateMenu()
}

module.exports = tabManager