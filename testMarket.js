let PageObjectMarket = require('./PageObjectMarket');
let PageObjectYandexHome = require('./PageObjectYandexHome');
describe('actions, expected conditions', () => {

    it('- Яндекс маркет - сортировка по тегу:', () => {
    PageObjectYandexHome.openStartPage();
	PageObjectYandexHome.clickOnMarketTab();
    PageObjectMarket.clickOnTech();
	PageObjectMarket.clickOnFridge();
	PageObjectMarket.selectTag();
	PageObjectMarket.checkSort();
  });
  
    it('- Яндекс маркет - сортировка по цене:', () => {
    PageObjectYandexHome.openStartPage();
	PageObjectYandexHome.clickOnMarketTab();
	PageObjectMarket.clickOnElectro();
	PageObjectMarket.ClickOnActionСamera();
	PageObjectMarket.checkSortByPrice();
  });
  
    it('- Удаление добавленных товаров :', () => {
    PageObjectYandexHome.openStartPage();
	PageObjectYandexHome.clickOnMarketTab();
	PageObjectMarket.enterMobile();
	PageObjectMarket.addToCompare();
	PageObjectMarket.CheckDeleteList();
	
  });
    it('- Яндекс маркет - добавление в сравнение :', () => {
    PageObjectYandexHome.openStartPage();
	PageObjectYandexHome.clickOnMarketTab();
	PageObjectMarket.enterMobile();
	PageObjectMarket.addToCompare();
	PageObjectMarket.checkCompare();
	
  });  

});