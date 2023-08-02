import { sayHello } from "../src/sayHello"

describe("sayHello", () => {
    it("should return hello arif", () => {
        expect(sayHello("arif")).toBe("Hello arif")
    })
})