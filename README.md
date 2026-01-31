# Automated UI Testing of SwiftTranslator Using Playwright

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Playwright](https://img.shields.io/badge/Playwright-Test%20Automation-blue)
![Testing](https://img.shields.io/badge/Type-UI%20%26%20Functional%20Testing-orange)
![Status](https://img.shields.io/badge/Status-Academic%20Project-lightgrey)

---

## Abstract

This project presents an **automated UI and functional testing framework** for the web-based system  
**SwiftTranslator (Singlish → Sinhala)** using **Node.js** and **Playwright**.

The primary objective is to evaluate:
- Functional correctness of Singlish-to-Sinhala conversion
- Stability of the user interface under varied input conditions
- System behavior for both valid and invalid user inputs

Backend APIs, performance testing, and security testing are **not included** in the scope of this study.

---

## Keywords

Playwright, Test Automation, UI Testing, Singlish, Sinhala, Software Quality Assurance

---

## 1. Introduction

Modern web-based language processing systems require reliable validation to ensure usability and correctness.
This project applies **end-to-end browser automation** using Playwright to test the SwiftTranslator user interface
under real user interaction scenarios.

Automated testing improves repeatability, accuracy, and efficiency compared to manual testing.

---

## 2. Tools and Technologies

| Tool | Description |
|-----|-------------|
| Node.js | JavaScript runtime environment |
| Playwright | End-to-end test automation framework |
| JavaScript | Test implementation language |
| Chromium / Firefox / WebKit | Supported test browsers |

---

## 3. Test Scope

### 3.1 In-Scope
- Singlish to Sinhala text conversion
- UI responsiveness and stability
- Positive and negative input handling
- Real-time output updates

### 3.2 Out-of-Scope
- Backend API testing
- Performance and load testing
- Security and penetration testing

---

## 4. Prerequisites

The following software must be installed before running the tests:

- **Node.js** (version 18 or higher)
- **npm** (Node Package Manager)

Verification:
```bash
node -v
npm -v
```
--- 
5. Installation Procedure
Step 1: Clone the repository
```bash
git clone <repository-url>
cd swifttranslator-tests
```
---
Step 2: Install dependencies
```bash
npm install
```
---
Step 3: Install Playwright browsers
```bash
npx playwright install
```
---
7. Test Case Design

The test suite includes:

7.1 Positive Functional Test Cases

  ▪ Daily conversation sentences

  ▪ Questions and commands

  ▪ Past, present, and future tense

  ▪ Mixed English and Singlish input

7.2 Negative Functional Test Cases

  ▪ Typographical errors

  ▪ Slang-heavy input

  ▪ Random symbols and punctuation

  ▪ Long unstructured text

  ▪ Multi-line inputs

7.3 UI Test Case

  ▪ Verification of real-time Sinhala output update

---
8. Project Structure
```bash
swifttranslator-tests/
│
├── tests/
│   └── swifttranslator.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---
9. Results and Observations

  ▪ The system successfully processes standard Singlish inputs.

  ▪ Negative inputs do not crash the application.

  ▪ Output is generated in all tested scenarios.

  ▪ UI remains responsive under different input formats.

---
10. Conclusion

This project demonstrates the effectiveness of Playwright-based UI automation
for validating web-based language translation systems.
The test framework ensures consistent quality validation and can be extended
for future enhancements.
---

Author

Evan Munasinghe-IT23424982
3rd Year Undergraduate – Information Technology
Sri Lanka Institute of Information Technology (SLIIT)

---
Declaration

This project is submitted solely for academic purposes and does not claim ownership
of the tested web application.
