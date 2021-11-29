const Intern = require('../lib/Intern');

describe('Intern Class', () => {
    // Arrange

    const name = "Test";
    const email = "test@test.com";
    const param = { school: "Test School" }
    const internObj = new Intern(name, email, param);

    // Name test
    it("should return the name correctly", () => {

        // Act
        const returnedName = internObj.getName();

        // Assert
        expect(returnedName).toEqual(name);
    });

    // Id test
    it("should return an Id", () => {

        // Act
        const returnedId = internObj.getId();

        // Assert
        expect(returnedId).toBeDefined()
    });

    // Email test
    it("should return the correct Email", () => {

        // Act
        const returnedEmail = internObj.getEmail();

        // Assert
        expect(returnedEmail).toEqual(email);
    });

    // Role test
    it("should return 'Intern'", () => {

        // Act
        const returnedRole = internObj.getRole();

        // Assert
        expect(returnedRole).toEqual("Intern");
    });

    //Proper Label Test
    it("should return 'School'", () => {

        // Act
        const returnedProperLabel = internObj.extraInfoProper;

        // Assert
        expect(returnedProperLabel).toEqual("School");
    });

    // School test
    it("should return the school name", () => {

        // Act
        const returnedSchool = internObj.getSchool();

        // Assert
        expect(returnedSchool).toEqual(param.school);
    });

    // School HTML string test
    it("should return school name", () => {

        // Act
        const returnedSchool = internObj.getExtraInfo();

        // Assert
        expect(returnedSchool).toEqual(param.school);
    });

});
