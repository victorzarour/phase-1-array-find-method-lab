function superbowlWin(array){
  let item = array.find(element => element.result === "W")
  if (item){
    return item.year
  } else
    return undefined
}