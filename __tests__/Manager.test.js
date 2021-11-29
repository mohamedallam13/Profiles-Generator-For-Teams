const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    // Arrange

    const name = "Test";
    const email = "test@test.com";
    const param = { officeNumber: "1" }
    const managerObj = new Manager(name, email, param);

    // Name test
    it("should return the name correctly", () => {

        // Act
        const returnedName = managerObj.getName();

        // Assert
        expect(returnedName).toEqual(name);
    });

    // Id test
    it("should return an Id", () => {

        // Act
        const returnedId = managerObj.getId();

        // Assert
        expect(returnedId).toBeDefined()
    });

    // Email test
    it("should return the correct Email", () => {

        // Act
        const returnedEmail = managerObj.getEmail();

        // Assert
        expect(returnedEmail).toEqual(email);
    });

    // Role test
    it("should return 'Manager'", () => {

        // Act
        const returnedRole = managerObj.getRole();

        // Assert
        expect(returnedRole).toEqual("Manager");
    });

    //Proper Label Test
    it("should return 'Office Number'", () => {

        // Act
        const returnedProperLabel = managerObj.extraInfoProper;

        // Assert
        expect(returnedProperLabel).toEqual("Office Number");
    });

    // School test
    it("should return the office number", () => {

        // Act
        const returnedOfficeNumber = managerObj.getOfficeNumber();

        // Assert
        expect(returnedOfficeNumber).toEqual(param.officeNumber);
    });

    // School HTML string test
    it("should return the office number", () => {

        // Act
        const returnedOfficeNumber = managerObj.getExtraInfo();

        // Assert
        expect(returnedOfficeNumber).toEqual(param.officeNumber);
    });

});
