var a = document.querySelector("#a")
var b = document.querySelector("#b")
var c = document.querySelector("#c")
var d = document.querySelector("#d")

// console.log(a)

const a1 = document.querySelector("#a1")
var b1 = document.querySelector("#b1")
var c1 = document.querySelector("#c1")
var d1 = document.querySelector("#d1")

const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
  e.preventDefault()

  var a11 = parseFloat(a.value * 0.980665)

  var b11 = parseFloat(parseFloat(b.value) + 273)

  var c11 = parseFloat(c.value * 0.252)
  var d11 = parseFloat(d.value * 4.184)

  a1.value = a11
  b1.value = b11
  c1.value = c11
  d1.value = d11

  a.value = ""
  b.value = ""
  c.value = ""
  d.value = ""
})
