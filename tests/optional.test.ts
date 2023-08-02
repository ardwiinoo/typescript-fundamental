describe("Optional parameter", () => {
    it("should support null and undefined", () => {

        function helloDek(name?: string | null) {
            if(name) {
                console.info(`Hello ${name}`)
            }
            else {
                console.log(`No Hello dek!`)
            }
        }

        helloDek("Sri")
        const nama: string | undefined = undefined
        helloDek(nama)
        helloDek(null)
    })
})