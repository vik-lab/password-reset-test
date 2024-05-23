export default class PasswordResetPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto('/password-reset');
    }
  
    async enterEmail(email) {
      await this.page.fill('input[name="email"]', email);
    }
  
    async submitForm() {
      await this.page.click('button[type="submit"]');
    }
  
    async isSuccessMessageVisible() {
      return await this.page.isVisible('.success-message');
    }
  
    async isErrorMessageVisible() {
      return await this.page.isVisible('.error-message');
    }
  }  