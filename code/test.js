var defangIPaddr = function (address) {
  address = address.split('')
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      address[i] = '[.]'
    }
  }
  return address.join('')
}
console.log(defangIPaddr('1.1.1.1'))
