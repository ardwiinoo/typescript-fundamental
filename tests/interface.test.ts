import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/interface"
import { Person } from "../src/person";
import { sayHello } from './../src/sayHello';

describe("Interface", () => {
    it("should support in typescript", () => {

        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123111414" 
        }

        seller.name = "Toko ABC 2"
        // seller.nib = "123" // ERROR

        console.info(seller)
    })

    it("should support function interface", () => {

        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(2,2)).toBe(4)
    })

    it("should support indexable interface", () => {

        interface StringArray {
            [index: number]: string
        }

        const name: StringArray = ["Arif", "Dwi", "Nugroho"]
        console.info(name)
    })

    it("should support indexable interface for non number index", () => {

        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Arif",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("Arif")
        expect(dictionary["address"]).toBe("Indonesia")
    })

    it("should support extends interface", () => {

        const employee: Employee = {
            id: "1",
            name: "Dwi",
            division: "IT"
        }

        console.info(employee)

        const manager: Manager = {
            id: "1",
            name: "Nugroho",
            division: "IT",
            numberOfEmployee: 13
        }

        console.info(manager)
    })

    it("should support function in interfaces", () => {
        const person: Person = {
            name: "Bahar",
            sayHola(name: string): string {
                return `Hola ${name}`
            }
        }

        console.info(person.sayHola("Alex"))
    })

    it("should support intersection types", () => {

        interface HasName {
            name: string
        }

        interface HasId {
            id: number
        }

        type Domain = HasId & HasName

        const domain: Domain = {
            id: 1,
            name: "namanya"
        }

        console.info(domain)
    })

    it("should support type assertions", () => {

        const person: any = {
            name: "Rudi",
            age: 30
        }

        // bisa jadi error, karena isi tidak sama
        const person2: Person = person as Person
        // person2.sayHola

        console.info(person2)
        
    })
})