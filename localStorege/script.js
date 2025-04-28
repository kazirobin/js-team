localStorage.setItem("name","robin")
localStorage.setItem("name1","robin1")
localStorage.setItem("name2","robin2")
localStorage.setItem("name3","robin3")
console.log(localStorage.key(0))
console.log(localStorage.getItem("name"))
console.log(localStorage.length)
localStorage.removeItem("name2")

const obj = {
    name :"noman"
}
localStorage.setItem("obj2",JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem("obj2")))
// localStorage.clear()
