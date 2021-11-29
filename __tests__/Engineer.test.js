const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    // Arrange

    const name = "Test";
    const email = "test@test.com";
    const param = { github: "www.test.com" }
    const engineerObj = new Engineer(name, email, param);

    // Name test
    it("should return the name correctly", () => {

        // Act
        const returnedName = engineerObj.getName();

        // Assert
        expect(returnedName).toEqual(name);
    });

    // Id test
    it("should return an Id", () => {

        // Act
        const returnedId = engineerObj.getId();

        // Assert
        expect(returnedId).toBeDefined()
    });

    // Email test
    it("should return the correct Email", () => {

        // Act
        const returnedEmail = engineerObj.getEmail();

        // Assert
        expect(returnedEmail).toEqual(email);
    });

    // Role test
    it("should return 'Engineer'", () => {

        // Act
        const returnedRole = engineerObj.getRole();

        // Assert
        expect(returnedRole).toEqual("Engineer");
    });

    //Proper Label Test
    it("should return 'Github'", () => {

        // Act
        const returnedProperLabel = engineerObj.extraInfoProper;

        // Assert
        expect(returnedProperLabel).toEqual("Github");
    });

    // Github test
    it("should return the Github url", () => {

        // Act
        const returnedGithub = engineerObj.getGithub();

        // Assert
        expect(returnedGithub).toEqual(param.github);
    });

    // Github HTML string test
    it("should return the Github wrapped in an HTML 'a tag'", () => {

        // Act
        const returnedGithub = engineerObj.getExtraInfo();

        // Assert
        expect(returnedGithub).toEqual(`<a href="www.test.com">www.test.com</a>`);
    });

});
