describe("Loop", () => {
    it("should support for loop", () => {

        const names: Array<string> = ["Arif", "Dwi", "Nugroho"]

        for(let i = 0; i < names.length; i++) {
            console.info(names[i])
        }

        for(const name of names) {
            console.info(name)
        }

        for(const name in names) {
            console.info(name)
        }
    })

    it("should support while loop", () => {
        
        let counter = 0
        while(counter < 9) {
            console.info(counter)
            counter++
        }
    })

    it("should support do while loop", () => {

        let counter = 0
        do {
            console.info(counter)
            counter++
        }while(counter < 9)
    })
})