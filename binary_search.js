var dict = [1,2,3,4,5,6,7]

function binSearch(dict, hunt) {
  var len = dict.length
  var half = Math.floor(len/2)

  if (len == 1) {
    if (dict[0] == hunt)    {
      console.log("Found it!")
    } else {
      console.log("Nope");
      }
  } else {
    if (dict[half] === hunt) {
      console.log("Found it")
    } else if (dict[half] < hunt) {
      console.log("Not yet")
      binSearch(dict.slice(half,len), hunt)
    } else {
      console.log("Not yet")
      binSearch(dict.slice(0,half), hunt)
    }
  }
}
