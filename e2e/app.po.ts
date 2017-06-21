import { browser, element, by } from 'protractor'

export class MahjongMayhemPage {
  navigateTo() {
    return browser.get('/')
  }

  getParagraphText() {
    return element(by.css('app-navigation nav div a')).getText()
  }

  async clickGamesLink() {
    await browser.actions().click(element(by.linkText('Spellen'))).perform()
    return browser.getCurrentUrl()
  }

  getCurrentUrl() {
      browser.getCurrentUrl()
  }

}
