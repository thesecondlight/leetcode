let user = {
    name: 'li',
    username: 'ly',
    set fullname(value) {
        [this.name, this.username] = value.split("-")
    },
    get fullname() {
        return `${this.name}-${this.username}`
    }

}
let admin = {
    __proto__: user,
    isAdmin: true
}

console.log(admin.fullname);

let str = "this-is-string"
let arr = str.split("-")
console.log(arr.join("-"));