describe('Sanity', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have todo header', async () => {
    await expect(element(by.text('Todos'))).toBeVisible();
  });

  it('should display side navigation', async () => {
    await element(by.id('Menu')).tap();
    await expect(element(by.text('Todos'))).toBeVisible();
    await expect(element(by.text('Add Todo'))).toBeVisible();
    await expect(element(by.text('Settings'))).toBeVisible();
  });

  it.todo('should be able to add a todo item')

  it.todo('should be able to toggle dark mode')
});