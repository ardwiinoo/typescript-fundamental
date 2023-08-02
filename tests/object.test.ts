describe("Object", () => {
    it("should support in typescript", () => {

        const person: {id: string, name: string } = {
            id: "1",
            name: "budiii"
        }

        console.info(person)

        person.name = "Kuncoro"
        console.info(person)
    })
})