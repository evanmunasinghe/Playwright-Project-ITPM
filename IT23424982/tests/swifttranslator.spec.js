//MUNASINGHE MAES - IT23424882 -ITPM
//npx playwright test --project=chromium --workers=3 --retries=1
import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://www.swifttranslator.com/';

//HELPER FUNCTION 
async function translate(page, text) {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');
  const sinhalaOutput = page.locator('.card:has(.panel-title:text("Sinhala")) .whitespace-pre-wrap');

  await singlishInput.fill('');
  await singlishInput.type(text, { delay: 30 });
  await singlishInput.press('Enter');

  // Wait until non-empty text appears
  await sinhalaOutput.waitFor({ state: 'visible', timeout: 30000 });
  await expect(sinhalaOutput).not.toHaveText('', { timeout: 30000 });

  return (await sinhalaOutput.innerText()).trim();
}

// TEST SUITE 

test.describe('Singlish → Sinhala Transliteration Tests', () => {

  // Positive Functional 

  test('Pos_Fun_0001: Convert simple daily sentence', async ({ page }) => {
    const output = await translate(page, 'mama gedhara yanavaa.');
    expect(output).toBe('මම ගෙදර යනවා.');
  });

   test('Pos_Fun_0002: Convert simple request sentence', async ({ page }) => {
    const output = await translate(page, 'mata udhavvak karanna puluvandha?');
    expect(output).toBe('මට උදව්වක් කරන්න පුලුවන්ද?');
  });

  test('Pos_Fun_0003: Convert greeting input', async ({ page }) => {
    const output = await translate(page, 'aayuboovan!');
    expect(output).toBe('ආයුබෝවන්!');
  });

  test('Pos_Fun_0004: Convert interrogative sentence', async ({ page }) => {
    const output = await translate(page, 'oyaa kavadhdha enne?');
    expect(output).toBe('ඔයා කවද්ද එන්නෙ?');
  });

  test('Pos_Fun_0005: Convert imperative command', async ({ page }) => {
    const output = await translate(page, 'vahaama enna.');
    expect(output).toBe('වහාම එන්න.');
  });

  test('Pos_Fun_0006: Convert positive future sentence', async ({ page }) => {
    const output = await translate(page, 'api heta yamu.');
    expect(output).toBe('අපි හෙට යමු.');
  });

  test('Pos_Fun_0007: Convert negative sentence', async ({ page }) => {
    const output = await translate(page, 'mama ehema karanne naehae.');
    expect(output).toBe('මම එහෙම කරන්නේ නැහැ.');
  });

  test('Pos_Fun_0008: Convert compound sentence', async ({ page }) => {
    const output = await translate(page, 'mama vaeda karanavaa, passe api kathaa karamu.');
    expect(output).toBe('මම වැඩ කරනවා, පස්සෙ අපි කතා කරමු.');
  });

  test('Pos_Fun_0009: Convert complex sentence', async ({ page }) => {
    const output = await translate(page, 'vaessa vunath api yanna epaeyi kiyalaa mama hithanavaa.');
    expect(output).toBe('වැස්ස වුනත් අපි යන්න එපැයි කියලා මම හිතනවා.');
  });

  test('Pos_Fun_0010: Convert past tense sentence', async ({ page }) => {
    const output = await translate(page, 'mama iiyee office giyaa.');
    expect(output).toContain('මම ඊයේ office ගියා.');
  });

  test('Pos_Fun_0011: Convert present tense sentence', async ({ page }) => {
    const output = await translate(page, 'api dhaen kaeema kanavaa.');
    expect(output).toContain('අපි දැන් කෑම කනවා.');
  });

  test('Pos_Fun_0012: Convert future tense sentence', async ({ page }) => {
    const output = await translate(page, 'mama heta enavaa.');
    expect(output).toContain('මම හෙට එනවා.');
  });

  test('Pos_Fun_0013: Pronoun variation sentence', async ({ page }) => {
    const output = await translate(page, 'oyaayi maai eyaava hamuvenna yamu.');
    expect(output).toContain('ඔයායි මාඉ එයාව හමුවෙන්න යමු.');
  });

  test('Pos_Fun_0014: Convert plural noun sentence', async ({ page }) => {
    const output = await translate(page, 'lamayi paasal yanavaa.');
    expect(output).toContain('ලමයි පාසල් යනවා.');
  });

  test('Pos_Fun_0015: Polite request sentence', async ({ page }) => {
    const output = await translate(page, 'karunakaralaa mata podi help ekak karanna puluvandha?');
    expect(output).toContain('කරුනකරලා මට පොඩි help එකක් කරන්න පුලුවන්ද?');
  });

  test('Pos_Fun_0016: Informal phrasing sentence', async ({ page }) => {
    const output = await translate(page, 'ehema karapan.');
    expect(output).toBe('එහෙම කරපන්.');
  });

  test('Pos_Fun_0017: Multi-word expression', async ({ page }) => {
    const output = await translate(page, 'mata poddak inna oonee.');
    expect(output).toContain('මට පොඩ්ඩක් ඉන්න ඕනේ.');
  });

  test('Pos_Fun_0018: Joined word input handling', async ({ page }) => {
    const output = await translate(page, 'matapodakinnahoonee');
    expect(output).toBe('මටපොඩකින්නහෝනේ');
  });

  test('Pos_Fun_0019: Repeated word emphasis', async ({ page }) => {
    const output = await translate(page, 'hari hari lassanayi.');
    expect(output).toBe('හරි හරි ලස්සනයි.');
  });

  test('Pos_Fun_0020: Mixed Singlish and English', async ({ page }) => {
    const output = await translate(page, 'mama heta Zoom meeting ekakata join venavaa.');
    expect(output).toContain('මම හෙට Zoom meeting එකකට join වෙනවා.');
  });

test('Pos_Fun_0021: Places and English words', async ({ page }) => {
    const output = await translate(page, 'api Kandy yanna hadhannee car eken.');
    expect(output).toContain('අපි Kandy යන්න හදන්නේ car එකෙන්.');
  });

  test('Pos_Fun_0022: Abbreviations handling', async ({ page }) => {
    const output = await translate(page, 'mata OTP eka SMS eken enavaa.');
    expect(output).toContain('මට OTP එක SMS එකෙන් එනවා.');
  });

  test('Pos_Fun_0023: Currency and time formats', async ({ page }) => {
    const output = await translate(page, 'mata Rs. 2500 7.30 AM venakam labenna oonee.');
    expect(output).toContain('මට Rs. 2500 7.30 AM වෙනකම් ලබෙන්න ඕනේ.');
  });

test('Pos_Fun_0024: Long paragraph input', async ({ page }) => {
    const output = await translate(page, 'mama adha gedhara inna kiyala hithuve adha vassa hinda traffic ekath vaediyi e hinda adha vena vaedak karagena gedharata velaa innavaa');
    expect(output).toContain('මම අද ගෙදර ඉන්න කියල හිතුවෙ අද වස්ස හින්ඩ traffic එකත් වැඩියි එ හින්ඩ අද වෙන වැඩක් කරගෙන ගෙදරට වෙලා ඉන්නවා');
  });

  //Negative Functional 

  test('Neg_Fun_0001: Heavy typographical errors', async ({ page }) => {
    const output = await translate(page, 'mmaa geddhara yannavvaa');
    expect(output).not.toBe('ම්මා ගෙඩ්දර යන්නව්වා');
  });

  test('Neg_Fun_0002: Random symbols mixed with Singlish', async ({ page }) => {
    const output = await translate(page, 'mama gedhara @@## yanavaa!!');
    expect(output).not.toBe('මම ගෙදර @@## යනවා!!');
  });

  test('Neg_Fun_0003: Excessively joined words', async ({ page }) => {
    const output = await translate(page, 'mamagedharayanavaapassekaemakanavaa');
    expect(output).toMatch(/[^\u0D80-\u0DFF]/);
  });

  test('Neg_Fun_0004: English-dominant sentence', async ({ page }) => {
    const output = await translate(page, 'Today I will go home after finishing my office work.');
    expect(output).toContain('?????');
  });

  test('Neg_Fun_0005: Incorrect Singlish spelling', async ({ page }) => {
    const output = await translate(page, 'oyata kohomda?');
    expect(output).toContain('123');
  });

  test('Neg_Fun_0006: Contradictory sentence structure', async ({ page }) => {
    const output = await translate(page, 'mata eeka karanna puluvan baehae kiyala karanna puluvandha?');
    expect(output).toContain('678');
  });

  test('Neg_Fun_0007: Slang-heavy informal input', async ({ page }) => {
    const output = await translate(page, 'adoo machan heta vaedak karala gedhara yamu bnn');
    expect(output).toContain('###');
  });

  test('Neg_Fun_0008: Excessive punctuation usage', async ({ page }) => {
    const output = await translate(page, 'mama!!! gedhara??? yanavaa.....?');
    expect(output).toContain('234');
  });

  test('Neg_Fun_0009: Long unstructured paragraph', async ({ page }) => {
    const output = await translate(page, 'mama adha gedhara yanavaa namuth office ekee vaeda godak thiyenavaa ethakota mama hari amaruyi kiyalaa hithenavaa namuth yanna oneda naedhdha kiyalaa');
    expect(output).toContain('???');
  });

  test('Neg_Fun_0010: Sinhala output updates automatically in real time', async ({ page }) => {
    const longText = 'ammaa '.repeat(100);
    const output = await translate(page, longText);
    expect(output.length).toBeGreaterThan(100);
  });

  //UI Test 

  test('Pos_UI_0001: Real-time update', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    const inputBox = page.locator('#singlishInput');
    const outputBox = page.locator('#sinhalaOutput');

    await inputBox.waitFor({ state: 'visible', timeout: 60000 });

    await inputBox.type('mama gedhara yanvaa', { delay: 100 });

    await expect(outputBox).not.toHaveText('', { timeout: 60000 });

    const output = await outputBox.textContent();

    expect(output?.trim()).toBe('මම ගෙදර යනවා');
  });

});