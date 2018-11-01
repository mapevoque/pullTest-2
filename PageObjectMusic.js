let functions = require('./function');

class PageObjectMusic {

constructor() {
        this.searchField = element.all(by.css('div.d-input.deco-input-wrapper.d-input_size-M.d-input_suggest.deco-input-wrapper_suggest.d-suggest__input.deco-input__suggest > input'));
		this.elementFromList = element(by.css('div.d-suggest__item.d-suggest__item-artist:nth-of-type(2) a'));
        this.songer = element(by.css('h1.page-artist__title.typo-h1_big'));
		this.popularAlbum = element.all(by.css('.album__artist.deco-typo-secondary.typo-add'));
		this.albumBlocks = element(by.css('div.page-artist__albums > div:nth-child(1)'));
		this.track = element(by.css('button.button2_rounded.button-play.button-play__type_artist.local-icon-theme-white.page-artist__play'));
		this.icon = element(by.css('div.player-controls.deco-player-controls > div.player-controls__btn.deco-player-controls__button.player-controls__btn_play'));
        

		
    }
  clickOnTab(){
   this.marketTab.click().then(() =>{
	});  
  };
  inputSongName(value){
  this.searchField.sendKeys(value).then(() => {
	  functions.sleep(4000);
  });			 
  };
  selectElementFromList(){ 
    this.elementFromList.click().then(() => {
	  functions.sleep(4000);
  });			 
	
  };
  checkSonger(){	  
   browser.executeScript("arguments[0].scrollIntoView();", this.songer.getWebElement()).then(() =>{
   expect(this.songer.getText()).toEqual('Metallica');
	}); 
 };
  checkAlbum(){
   browser.executeScript("arguments[0].scrollIntoView();", this.albumBlocks.getWebElement()).then(() =>{
   expect(this.popularAlbum.getText()).toContain('Metallica');
	}); 
  }; 
  clickOnTrack(){
   browser.executeScript("arguments[0].scrollIntoView();", this.track.getWebElement()).then(() =>{
   this.track.click().then(()=>{
	   functions.sleep(4000);
   });
	}); 	  
  };
  checkPlayMusic(){
	  expect(this.track.getAttribute("class")).toContain('button-play_playing');	  
  };
  checkPauseMusic(){
	  this.track.click().then(() =>{
	  expect(this.icon.getAttribute("title")).toContain('Играть');  
	  });	  	  
  };
};
module.exports = new PageObjectMusic();