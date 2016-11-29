// Created by Hieu Nguyen
// Try It!
// Try writing a simple progress bar function in the callback style. Your function should take three callbacks, onStart, onProgress, and onEnd as arguments. When you call the function it should call the onStart callback, then loop from 1 to 100, using console.log to print each value. Every 10 items it counts it should call the onProgress callback, providing how far along it is as an argument. Finally it should call the onEnd callback.
//Define function and objects for beginning, middle start and ending progress.
function progressBarTracker(onStart, onProgress, onEnd) {
	this._onStart = onStart
	this._onProgress = onProgress
	this._onEnd = onEnd

	this.start = function() {
		this._onStart()
		for (var i = 0; i < 110; i++) {
			if (i % 10 === 0) {
				this._onProgress(i)
			}
		}
		this._onEnd()
	}
}
