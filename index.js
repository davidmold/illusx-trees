const totalTreesAtTimeKnown = 1941028.0
const treesPerHour = 18.7733

module.exports = {
  countTrees: function () {
    let timenow = new Date().getTime();
    let timeknown = new Date(2024, 3, 8).getTime()
    
    let treesPerTick = treesPerHour / 60.0 / 60.0 / 1000.0
    let diff = timenow - timeknown
    let count = totalTreesAtTimeKnown + (treesPerTick * diff)
    return Math.round(count)
  }
}