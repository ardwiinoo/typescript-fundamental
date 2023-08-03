describe("Getter and Setter", () => {

    class Supercar {
        _name?: string

        get name(): string {
            if(this._name) {
                return this._name
            }else{
                return "empty"
            }
        }

        set name(value: string) {
            if(value != "") {
                this._name = value
            }
        }
    }

    it("should support in class", () => {

        const supercar = new Supercar()
        console.info(supercar.name)
    })
})