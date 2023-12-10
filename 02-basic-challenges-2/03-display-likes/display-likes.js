/* 
If no one likes it, it should return 'no one likes this'
If one person likes it, it should return '{name} likes this'
If two people like it, it should return '{name1} and {name2} like this'
If three people like it, it should return '{name1}, {name2} and {name3} like this'
If more than three people like it, it should return '{name1}, {name2} and {x} others like this' */

function displayLikes(list) {
  if (list.length === 1) return `${list[0]} likes this`;
  if (list.length === 2) return `${list[0]} and ${list[1]} like this`;
  if (list.length === 3)
    return `${list[0]}, ${list[1]} and ${list[2]} like this`;
  if (list.length > 3)
    return `${list[0]}, ${list[1]} and ${list.length - 2} others like this`;
  return "no one likes this";
}

module.exports = displayLikes;
