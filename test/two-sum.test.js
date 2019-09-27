const expect = require('chai').expect
const twoSum = require('../code/two-sum.js')
describe('test...two-sum.js', function () {
  describe('#indexOf()', function () {
    it('should return 1,2', function () {
      expect(twoSum([1, 3, 3], 6)).to.deep.equal(['1', '2'])
    })
  })
})
