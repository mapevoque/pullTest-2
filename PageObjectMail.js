class PageObjectMail {

constructor() {
        this.searchField = $('.d-input__field.deco-input.deco-input_suggest');
        this.Login = element(by.css('div:nth-child(10) > label > input'));
		this.Password = element(by.css('div:nth-child(11) > label > input'));
		this.buttonLogIn = element(by.css('div:nth-child(13) > button:nth-child(1)'));
}
  inputLogin(value) {
     this.Login.sendKeys(value);
  };
  inputPassword(value2) {
	 this.Password.sendKeys(value2); 
  };
  clickOnLoginButton() {
	 this.buttonLogIn.click();
  }; 

};
module.exports = new PageObjectMail();