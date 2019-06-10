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
			this.file('libs/flipclock.css') // this file will be loaded straight from the module folder.
		]
	},
	
	
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
		
		if (!_checkDomCreated()) {
			var wrapper = document.createElement("div");
			wrapper.classList.add(this.config.className);
			
			var clock = new FlipClock($('.your-clock'), {
				clockFace: 'TwentyFourHourClock'
			});
		
			return wrapper;
		} else {
			Log.error("Nothing to do FlipClock");
		}
		
		//var wrapper = document.createElement("div");
		//wrapper.classList.add(this.config.className);
		//return wrapper;
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
	}
	
});