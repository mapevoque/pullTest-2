let functions = require('./function');
class PageObjectYandexHome {

constructor() {
        this.marketTab = element.all(by.css('div.home-arrow__tabs > div > a:nth-child(5)'));
        this.musicTab = element.all(by.css('div.home-arrow__tabs > div > a:nth-child(7)'));
		this.logIn = element(by.css('div.desk-notif-card.desk-notif-card_type_login.desk-notif-card_bg_default.i-bem.desk-notif-card_js_inited > div > a'));
}
  openStartPage() {
	 browser.get('https://yandex.by/');     	 
  };
  clickOnMarketTab() {
	this.marketTab.click().then(()=>{
		functions.sleep(4000);
	}); 
  };
  clickOnMusicTab() {
	this.musicTab.click();  
  };
   clickOnLogIn() {
    this.logIn.click();
  };  

};
module.exports = new PageObjectYandexHome();