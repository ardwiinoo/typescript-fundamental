describe("Inheritance", () => {

    class Employee {
        name: string

        constructor(name: string) {
            this.name = name
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it("should support in typescript", () => {

        const employee = new Employee("Arif")
        console.info(employee.name)

        const manager = new Manager("Dwi")
        console.info(manager.name)

        const director = new Director("Nugroho")
        console.info(director.name)
    })
})