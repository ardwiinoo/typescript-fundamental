describe("Class", () => {

    class Customer {
        constructor() {
            console.info("Create new customer")
        }
    }

    it("should create class", () => {
        const customer: Customer = new Customer()
    })
})