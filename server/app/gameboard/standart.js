const top = [
  {orientation: 'main-block', text: 'START', id: 0},
  {orientation: 'gorizontal', text: 'museum', id: 1},
  {orientation: 'gorizontal', text: 'mueseum2', id: 2},
  {orientation: 'gorizontal', text: 'shop', id: 3},
  {orientation: 'gorizontal', text: 'supermarket', id: 4},
  {orientation: 'gorizontal', text: 'mall', id: 5},
  {orientation: 'gorizontal', text: 'police', id: 6},
  {orientation: 'gorizontal', text: 'cops', id: 7},
  {orientation: 'gorizontal', text: 'bar', id: 8},
  {orientation: 'gorizontal', text: 'restaurant', id: 9},
  {orientation: 'gorizontal', text: 'cafeteria', id: 10},
  {orientation: 'gorizontal', text: 'cafeteria2', id: 11, options: {type: 'bonus', gold: 2500}},
  {orientation: 'gorizontal', text: 'cafeteria3', id: 12, options: {type: 'bonus', gold: -3500}},
  {orientation: 'gorizontal', text: 'cafeteria4', id: 13, options: {type: 'bonus', gold: -3500}},
  {orientation: 'main-block', text: 'BONUS', id: 14, options: {type: 'bonus', gold: 2500}}
]
const right = [
  {orientation: 'vertical', text: 'museum', id: 15},
  {orientation: 'vertical', text: 'mueseum2', id: 16},
  {orientation: 'vertical', text: 'shop', id: 17},
  {orientation: 'vertical', text: 'supermarket', id: 18},
  {orientation: 'vertical', text: 'mall', id: 19},
  {orientation: 'vertical', text: 'police', id: 20},
  {orientation: 'vertical', text: 'cafeteria4', id: 21}
]
const bottom = [
  {orientation: 'main-block', text: 'START', id: 22},
  {orientation: 'gorizontal', text: 'museum', id: 23},
  {orientation: 'gorizontal', text: 'mueseum2', id: 24},
  {orientation: 'gorizontal', text: 'shop', id: 25},
  {orientation: 'gorizontal', text: 'supermarket', id: 26},
  {orientation: 'gorizontal', text: 'mall', id: 27},
  {orientation: 'gorizontal', text: 'police', id: 28},
  {orientation: 'gorizontal', text: 'cops', id: 29},
  {orientation: 'gorizontal', text: 'bar', id: 30},
  {orientation: 'gorizontal', text: 'restaurant', id: 31},
  {orientation: 'gorizontal', text: 'cafeteria', id: 32},
  {orientation: 'gorizontal', text: 'cafeteria2', id: 33},
  {orientation: 'gorizontal', text: 'cafeteria3', id: 34},
  {orientation: 'gorizontal', text: 'cafeteria4', id: 35},
  {orientation: 'main-block', text: 'CHECK', id: 36}
]
const left = [
  {orientation: 'vertical', text: 'museum', id: 37},
  {orientation: 'vertical', text: 'mueseum2', id: 38},
  {orientation: 'vertical', text: 'shop', id: 39},
  {orientation: 'vertical', text: 'supermarket', id: 40},
  {orientation: 'vertical', text: 'mall', id: 41},
  {orientation: 'vertical', text: 'police', id: 42},
  {orientation: 'vertical', text: 'cafeteria4', id: 43}
]
module.exports = {top, left, right, bottom}
