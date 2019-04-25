function createFlat(flat, entrance, floor) {
  this.flat = flat;
  this.entrance = entrance;
  this.floor = floor;
}
function createBuilding(allFlat, allEntrance, allFloor) {
  let entranceArr = [];
  let floorArr = [];
  let flatArr = [];
  let buildingArr = [];
  for (let i = 1; i <= allEntrance; i++) {
    entranceArr[i] = floorArr;
    for (let j = 1; j <= allFloor; j++) {
        floorArr[i][j] = flatArr[j]
      for (let k = 1; k <= allFlat; k++) {
        buildingArr.push(new createFlat(flatArr[i][j][k], floorArr[i][j], entranceArr[i]));
      }
    }
  }
  return buildingArr;
}
console.log(createBuilding(120, 4, 6))
