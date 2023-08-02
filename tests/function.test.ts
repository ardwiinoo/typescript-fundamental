describe("Function", () => {
    it("should support in typescript", () => {

        function greet(name: string): string {
            return `Hello ${name}`
        }

        expect(greet("Joko")).toBe("Hello Joko")

        function printHello(name: string): void {
            console.info(`Hello ${name}`)
        }

        printHello("Haiii")
        
    })  

    it("should support default value", () => {

        function halo(name: string = "Default"): string {
            return `Halo ${name}`
        }

        expect(halo()).toBe("Halo Default")
    })

    it("should support rest parameter", () => {

        function sum(...values: Array<number>): number {
            let total = 0
            for(const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1,2,3,4,5)).toBe(15)
    })

    it("should support optional parameter", () => {

        function greeting(firstName: string, lastName?: string): string {
            if(lastName) {
                return `Hello ${firstName} ${lastName}`
            } 
            else {
                return `Hello ${firstName}`
            }
        }

        expect(greeting("Arif")).toBe("Arif")
        expect(greeting("Arif", "Dwi")).toBe("Arif Dwi")
    })

    it("should support function overloading", () => {

        function callMe(value: number): number
        function callMe(value: string): string
        function callMe(value: any): any {
            if(typeof value === "string") {
                return value.toUpperCase()
            }
            else if(typeof value === "number") {
                return value * 10
            }
        }

        expect(callMe(10)).toBe(100)
        expect(callMe("Arif")).toBe("arif")
    })

    it("should function as parameter", () => {

        function myFunc(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase()
        }

        expect(myFunc("arif", toUpper)).toBe("Hello ARIF")
    })
})