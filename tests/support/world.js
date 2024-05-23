import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

class CustomWorld {
  async openBrowser() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
