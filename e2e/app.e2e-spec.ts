import { MahjongMayhemPage } from './app.po'

describe('Mahjong Mayhem', () => {
  let page: MahjongMayhemPage

  beforeEach(() => {
    page = new MahjongMayhemPage()
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MAHJONG MAYHEM')
  })

  it('should click on games link', async () => {
      page.navigateTo()
      let clickLink = await page.clickGamesLink()
      expect(clickLink).toContain('games/list')
  })
})
