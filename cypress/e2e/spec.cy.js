import { FormPage } from "../pageObjects/FormPage";

describe("WEB_AUT FINAL TASK", () => {
  context("Form related tests", () => {
    beforeEach(() => {
      // Open https://demoqa.com/automation-practice-form
      FormPage.visit();
    });

    it("Fill and validate the form", () => {
      //  Input all the necessary information in the text fields
      FormPage.firstName.type("Deniss");
      FormPage.lastName.type("Solovjovs");
      FormPage.email.type("exmaple@mail.com");
      FormPage.selectGender("Male");
      FormPage.phoneNumber.type("3711234567");
      FormPage.currentAddress.type("Ventspils");
      //  Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
      FormPage.dateOfBirthInput.click();
      FormPage.yearOfBirth.select("1930");
      FormPage.monthOfBirth.select("February");
      FormPage.selectDayDate(28);
      cy.get("body").click(0, 0); // to clsoe the menu
      // Set Subjects to Economics.
      FormPage.subjects.type("Economics").type("{enter}");
      // Set Hobbies to Music.
      FormPage.hobbies.find("label").contains("Music").click();
      // Upload an image of your choice.
      FormPage.selectPictureButton.selectFile(
        "cypress/fixtures/files/img_example.jpg"
      );
      // Set State to NCR.
      FormPage.state.type("NCR{enter}", { force: true });
      // Set City to Delhi.
      FormPage.city.type("Delhi{enter}", { force: true });
      FormPage.submitBtn.click();

      //  Validate that each Labeled row contains the correct information.
      FormPage.validateTableRowPair("Student Name", "Deniss Solovjovs");
      FormPage.validateTableRowPair("Student Email", "exmaple@mail.com");
      FormPage.validateTableRowPair("Gender", "Male");
      FormPage.validateTableRowPair("Mobile", "3711234567");
      FormPage.validateTableRowPair("Date of Birth", "28 February,1930");
      FormPage.validateTableRowPair("Subjects", "Economics");
      FormPage.validateTableRowPair("Hobbies", "Music");
      FormPage.validateTableRowPair("Picture", "img_example.jpg");
      FormPage.validateTableRowPair("Address", "Ventspils");
      FormPage.validateTableRowPair("State and City", "NCR Delhi");
    });
  });
});
