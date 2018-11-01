let PageObjectYandexHome = require('./PageObjectYandexHome');
let PageObjectMusic = require('./PageObjectMusic');
let PageObjectMail = require('./PageObjectMail');

describe('МУЗЫКА', () => {
    beforeAll(function () {
	PageObjectYandexHome.openStartPage();
    PageObjectYandexHome.clickOnLogIn();
    PageObjectMail.inputLogin('AutotestUser')
    PageObjectMail.inputPassword('AutotestUser123')
    PageObjectMail.clickOnLoginButton();
    });		
  it('- Яндекс музыка:', () => {
    PageObjectYandexHome.openStartPage();	
    PageObjectYandexHome.clickOnMusicTab();
	PageObjectMusic.inputSongName('Metal');
	PageObjectMusic.selectElementFromList();
	PageObjectMusic.checkSonger();
	PageObjectMusic.checkAlbum();
  });
  it('- Яндекс - музыка - вопроизведение:', () => {  
    PageObjectYandexHome.openStartPage();	
    PageObjectYandexHome.clickOnMusicTab();
    PageObjectMusic.inputSongName('beyo');
    PageObjectMusic.selectElementFromList();
    PageObjectMusic.clickOnTrack();
    PageObjectMusic.checkPlayMusic();
    PageObjectMusic.checkPauseMusic();	
  });
});