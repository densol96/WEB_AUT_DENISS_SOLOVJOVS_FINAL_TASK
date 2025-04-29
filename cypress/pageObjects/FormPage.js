import { BasePage } from "./BasePage";

export class FormPage extends BasePage {
  static get url() {
    return "automation-practice-form";
  }

  static get firstName() {
    return cy.get("#firstName");
  }

  static get lastName() {
    return cy.get("#lastName");
  }

  static get email() {
    return cy.get("#userEmail");
  }

  static get genderOptions() {
    return cy.get("#genterWrapper");
  }

  static selectGender(gender) {
    const defaultGender = "Male";
    const inputIsRight =
      gender === "Male" || gender === "Female" || gender === "Other";
    const finalGender = inputIsRight ? gender : defaultGender;
    this.genderOptions
      .find(`input[value='${finalGender}']`)
      .check({ force: true });
  }

  static get phoneNumber() {
    return cy.get("#userNumber");
  }

  static get dateOfBirthInput() {
    return cy.get("#dateOfBirthInput");
  }

  static get yearOfBirth() {
    return cy.get(".react-datepicker__year-select");
  }

  static get monthOfBirth() {
    return cy.get(".react-datepicker__month-select");
  }

  static get daysPerMonth() {
    return cy.get(".react-datepicker__month");
  }

  static selectDayDate(day) {
    this.daysPerMonth
      .find(".react-datepicker__day:not(.react-datepicker__day--outside-month)")
      .contains(`${day}`)
      .click();
  }

  static get subjects() {
    return cy.get("#subjectsInput");
  }

  static get hobbies() {
    return cy.get("#hobbiesWrapper");
  }

  static get selectPictureButton() {
    return cy.get("#uploadPicture");
  }

  static get currentAddress() {
    return cy.get("#currentAddress");
  }

  static get state() {
    return cy.get("#react-select-3-input");
  }

  static get city() {
    return cy.get("#react-select-4-input");
  }

  static get submitBtn() {
    return cy.get("#submit");
  }

  static validateTableRowPair(label, value) {
    return cy
      .get("table")
      .contains(label)
      .parent("tr")
      .find("td:last-of-type")
      .should("have.text", value);
  }
}
