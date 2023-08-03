describe("Properties", () => {

    class Client {
        readonly id: number
        name: string
        age?: number

        constructor(id: number, name: string) {
            this.id = id
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name} this is ${this.name}`)
        }
    }

    it("should can have properties", () => {

        const client = new Client(1, "Arif")
        client.age = 100

        console.info(`
            ${client.id}
            ${client.name}
            ${client.age}
        `)
    })

    it("should can have methods", () => {
        const client2 = new Client(2, "Dwi")
        client2.sayHello("Budi")
    })
})