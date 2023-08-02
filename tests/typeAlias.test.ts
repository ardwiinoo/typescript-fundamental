import { Category, Product } from "../src/typeAlias"

describe("typeAlias", () => {
    it("should support in typescript", () => {

        const category: Category = {
            id:"1",
            name:"Laptop"
        }

        const product: Product = {
            id:1,
            name:"Asus",
            price:5000000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
})