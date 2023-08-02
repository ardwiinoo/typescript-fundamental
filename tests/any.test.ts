describe("Any", () => {
    it("should support in typescript", () => {

        const person: any = {
            id:1,
            name:"Arif",
            age:100
        }

        console.info(person)

        // tidak ada pengecekan pada type data any
        person.age = 31
        person.address = "Indonesia"

        console.info(person)
    })
})  