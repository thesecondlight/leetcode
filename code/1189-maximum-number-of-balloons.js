var maxNumberOfBalloons = function (text) {
  const arr = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  }
  let min = Number.MAX_SAFE_INTEGER
  for (const i of text) {
    if (i === 'b' || i === 'a' || i === 'l' || i === 'o' || i === 'n') {
      arr[i]++
    }
  }
  // console.log(arr['l'])
  arr['l'] = parseInt(arr['l'] / 2)
  arr['o'] = parseInt(arr['o'] / 2)
  for (const i in arr) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}
console.log(maxNumberOfBalloons('nlaebolkoballoon'))
console.log(maxNumberOfBalloons('baoollnnololgbaxballooon'))
console.log(maxNumberOfBalloons('krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw'))
console.log(maxNumberOfBalloons('lloo'))
