describe("array", () => {
    it("should same with javascript", () => {

        const names: String[] = ["Arif", "Dwi", "Nugroho"]
        const values: Array<Number> = [1,2,3]

        console.info(names)
        console.info(values)
    })

    it("should support readonly array", () => {

        const hobbies: ReadonlyArray<String> = ["Membaca", "Menulis"]
        console.info(hobbies)

        // hobbies[0] = "Ayo" // error
    })

    it("should support tuple", () => {

        const person: readonly [string, string, number] = ["Arif", "Klaten", 100]
        console.info(person)

        console.info(person[1])
    })
})