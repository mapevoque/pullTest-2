let functions = require('./function');
class PageObjectMarket {

constructor() {
        this.ElectronicFromTopMenu = element(by.css('div.topmenu.i-bem.topmenu_margin-bottom_no.topmenu_js_inited > noindex > ul > li:nth-child(1)'));
		this.TechFromTopMenu =  element(by.css('div.topmenu.i-bem.topmenu_margin-bottom_no.topmenu_js_inited > noindex > ul > li:nth-child(3)'));
		this.photo = element.all(by.css('li:nth-child(1) > div > div > a:nth-child(4)'));
		this.searchField = element(by.id('header-search'));
		this.fridge = element(by.css('div:nth-child(1) > div._3VMnEHDoVX > div > a:nth-child(1)'));
        this.widthField = element(by.name('Ширина до'));
		this.inputWidthField = element(by.css('div._2Hue1bCg-N:nth-of-type(10) li._1W_iTekL7P:nth-of-type(2) input'));
		this.actionСamera = element(by.css('div:nth-child(4) > div._3VMnEHDoVX > div > a:nth-child(3)'));
		this.sortIcon = element(by.css('div.n-filter-block_pos_left div.n-filter-sorter_js_inited:nth-of-type(3)'));
		this.firstElementAfterSort = element(by.css('.b-spy-events.i-bem.metrika_js_inited.snippet-list_js_inited.b-spy-init_js_inited.b-zone_js_inited > div:nth-child(1)'));
		this.price = element.all(by.className('price'));
		this.searchButton = element(by.css('span.search2__button > button'));
		this.mobileFromList = element(by.css('.b-spy-init_js_inited.b-zone_js_inited > div:nth-child(1)'));
		this.firstCompare = element(by.css('.b-spy-init_js_inited.b-zone_js_inited > div:nth-child(1) > div.n-snippet-cell2__hover > div > div > div'));
		this.secondCompare = element(by.css('.b-spy-init_js_inited.b-zone_js_inited > div:nth-child(2) > div.n-snippet-cell2__hover > div > div > div'));
		this.popButton = element(by.css('div.popup-informer__controls'));
		this.deleteButton = element(by.css('div.n-compare-toolbar__action'));
		this.noProducts = element(by.css('div.title.title_size_18'));
		this.mobileOnComparePage = element.all(by.css('.n-compare-cell-draggable.i-bem.n-compare-cell_js_inited')); 
		
		
}
  clickOnTech(){	  
     browser.executeScript("arguments[0].scrollIntoView();", this.TechFromTopMenu.getWebElement()).then(() =>{
      this.TechFromTopMenu.click().then(()=>{
		functions.sleep(3000);
	}); 
	});   	 
  };
  clickOnFridge(){
	browser.executeScript("arguments[0].scrollIntoView();", this.fridge.getWebElement()).then(() =>{
      this.fridge.click().then(()=>{
		functions.sleep(5000);
	});
	});   
  };
    selectTag(){
	  browser.executeScript("arguments[0].scrollIntoView();", this.widthField.getWebElement()).then(() =>{
      this.inputWidthField.sendKeys('50').then(()=>{
		  functions.sleep(4000);
	  });
	}); 
  }
    checkSort(){
		expect(browser.getCurrentUrl()).toContain('3A~50'); 	   
  }
    clickOnElectro(){	  
     browser.executeScript("arguments[0].scrollIntoView();", this.ElectronicFromTopMenu.getWebElement()).then(() =>{
      this.ElectronicFromTopMenu.click().then(()=>{
		functions.sleep(3000);
	}); 
	});   	 
  };
   ClickOnActionСamera(){
	  browser.executeScript("arguments[0].scrollIntoView();", this.actionСamera.getWebElement()).then(() =>{
      this.actionСamera.click().then(()=>{
	  functions.sleep(5000);
	});
	}); 
   };
  checkSortByPrice(){
	this.sortIcon.click();
	this.sortIcon.click().then(()=>{
	  functions.sleep(3000);
	}).then(()=>{
		browser.executeScript("arguments[0].scrollIntoView();", this.firstElementAfterSort.getWebElement());
	}).then(()=>{
		this.price.getText().then((res) => {
			expect(res).toEqual(res.sort());
		});
		
	});  
  };
  enterMobile(){
	this.searchField.sendKeys('Note 8').then(() => {
		this.searchButton.click();
	}).then(()=>{
		functions.sleep(3000);
	});  
  }
  addToCompare(){
	  browser.executeScript("arguments[0].scrollIntoView();", this.mobileFromList.getWebElement()).then(() => {
		this.secondCompare.click();
		this.firstCompare.click().then(()=>{
		functions.sleep(3000);
	}).then(()=>{
		this.popButton.click();
	});            	
	  });
  };
  CheckDeleteList(){
	this.deleteButton.click().then(()=>{
		functions.sleep(4000);
	}).then(()=>{
		expect(this.noProducts.getText()).toContain('Товаров нет');
	});  
  };
 checkCompare(){
	 this.mobileOnComparePage.isDisplayed().then((Res)=>{
		 console.log(Res);
	 });
 };  
};
module.exports = new PageObjectMarket();