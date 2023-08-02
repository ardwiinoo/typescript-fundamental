describe("Union type", () => {
    it("should support in typescript", () => {

        // union
        let sample: string | number | boolean = "Arif"
        console.info(sample)

        sample = 100
        console.info(sample)

        sample = true
        console.info(sample)
    })

    it("should support typeof operator", () => {
        
        function process(value: number | string | boolean) {
            if(typeof value == "string") {
                return value.toUpperCase()
            }
            else if(typeof value == "number") {
                return value + 2
            }
            else{
                return !value
            }
        }

        expect(process("Arif")).toBe("ARIF")
        expect(process(10)).toBe(12)
        expect(process(true)).toBe(false)
    })
})