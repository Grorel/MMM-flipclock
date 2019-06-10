//MMM-flipclock.js:

Module.register("MMM-flipclock",{
	// Default module config.
	defaults: {
		className: "your-clock"
	},
	
	// Get scripts
	getScripts: function() {
		return [
			this.file('libs/jquery-3.4.1.min.js'),
			this.file('libs/flipclock.min.js') // this file will be loaded straight from the module folder.	
		]
	},
	
	// Get styleSheets
	getStyles: function() {
		return [
			this.file('libs/flipclock.css'), // this file will be loaded straight from the module folder.
			this.file('MMM-flipclock.css') // this file will be loaded straight from the module folder.
		]
	},
	
	
	// If container object exists in DOM
	_checkDomCreated: function() {
		
		if ($('.' + this.config.className)[0]){
			// Do something if class exists
			Log.info("Class found");
			return true;
		} else {
			// Do something if class does not exist
			Log.info("Class not found : must create");
			return false;
		}
	},
	
	clockInstance: null,
	wrapper: null,
	
	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		
		

		// Schedule update interval.
		/*var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);*/

	},
	
	// Override dom generator.
	getDom: function() {
		
		if (!this._checkDomCreated()) {
			this.wrapper = document.createElement("div");
			this.wrapper.classList.add(this.config.className);
			return this.wrapper;
			
		} else {
			Log.info(this.name + " - getDom : Nothing to do");
		}
		
		//var wrapper = document.createElement("div");
		//wrapper.classList.add(this.config.className);
		//return wrapper;
	},
	
	notificationReceived: function(notification, payload, sender) {
		if (sender) {
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
		} else {
			Log.log(this.name + " received a system notification: " + notification);
		}
		
		
		if (notification === "MODULE_DOM_CREATED") {
			Log.info(this.name + " detects MODULE_DOM_CREATED event" );
			
			// Init FlipClock instance
			this.clockInstance = new FlipClock($('.' + this.config.className), {
				clockFace: 'TwentyFourHourClock'
			});
			
			
		}
		
	}
	
	
	
});