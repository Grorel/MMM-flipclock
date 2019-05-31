//MMM-flipclock.js:

Module.register("MMM-flipclock",{
	// Default module config.
	defaults: {
		className: "your-clock"
	},
	
	// Get scripts
	getScripts: function() {
		return [
			this.file('libs/flipclock.min.js'), // this file will be loaded straight from the module folder.
			this.file('libs/jquery-3.4.1.min.js')
		]
	},
	
	// Get styleSheets
	getStyles: function() {
		return [
			this.file('libs/flipclock.css') // this file will be loaded straight from the module folder.
		]
	}
	
	
	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		
		var clock = new FlipClock($('.your-clock'), {
			clockFace: 'TwentyFourHourClock'
		});

		// Schedule update interval.
		/*var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);*/

	},
	
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.classList.add(this.config.className);
		return wrapper;
	},
	
});