const Employee = require('../lib/Employee');

describe('Employee Class', () => {

    // Arrange
    const name = "Test";
    const email = "test@test.com";
    const employeeObj = new Employee(name, email);

    // Name test
    it("should return the name correctly", () => {

        // Act
        const returnedName = employeeObj.getName();

        // Assert
        expect(returnedName).toEqual(name);
    });

    // Id test
    it("should return an Id", () => {

        // Act
        const returnedId = employeeObj.getId();

        // Assert
        expect(returnedId).toBeDefined()
    });

    // Email test
    it("should return the correct Email", () => {

        // Act
        const returnedEmail = employeeObj.getEmail();

        // Assert
        expect(returnedEmail).toEqual(email);
    });

    // Role test
    it("should return 'Employee'", () => {

        // Act
        const returnedRole = employeeObj.getRole();

        // Assert
        expect(returnedRole).toEqual("Employee");
    });

});
