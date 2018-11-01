module.exports = {
sleep : (delay) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);},	
	angularwait : browser.waitForAngularEnabled(false)
};