const totalTreesAtTimeKnown = 1044932.0
const treesPerHour = 18.7733

module.exports = {
  countTrees: function () {
    let timenow = new Date().getTime();
    let timeknown = new Date(2018, 6, 9).getTime()
    
    let treesPerTick = treesPerHour / 60.0 / 60.0 / 1000.0
    let diff = timenow - timeknown
    let count = totalTreesAtTimeKnown + (treesPerTick * diff)
    return Math.round(count)
  }
}