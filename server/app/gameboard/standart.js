const top = [
  {orientation: 'main-block', text: 'START', id: 0},
  {orientation: 'gorizontal', text: 'Kyiv avenue', id: 1, options: {type: 'buy', owner: null, gold: 2500}},
  {orientation: 'gorizontal', text: 'Community chest', id: 2, options: {type: 'chest', gold: -3500}},
  {orientation: 'gorizontal', text: 'My avenue', id: 3, options: {type: 'buy', owner: null, gold: 2500}},
  {orientation: 'gorizontal', text: 'Art  Museum', id: 4},
  {orientation: 'gorizontal', text: 'Khotyn Fortress', id: 5},
  {orientation: 'gorizontal', text: 'Circus', id: 6},
  {orientation: 'gorizontal', text: 'Boryspil Airport', id: 7},
  {orientation: 'gorizontal', text: 'Brewery', id: 8},
  {orientation: 'gorizontal', text: 'Hilton Hotel', id: 9},
  {orientation: 'gorizontal', text: 'Starbucks Corporation', id: 10},
  {orientation: 'gorizontal', text: 'Khreshchatyk street', id: 11, options: {type: 'bonus', gold: 2500}},
  {orientation: 'gorizontal', text: 'Jewelry factory', id: 12, options: {type: 'bonus', gold: -3500}},
  {orientation: 'gorizontal', text: 'Pryvoz Market', id: 13, options: {type: 'bonus', gold: -3500}},
  {orientation: 'main-block', text: 'BONUS', id: 14, options: {type: 'bonus', gold: 2500}}
]
const right = [
  {orientation: 'vertical', text: 'Space Museum', id: 15},
  {orientation: 'vertical', text: 'Lviv Theatre of Opera and Ballet', id: 16},
  {orientation: 'vertical', text: 'Potemkin Stairs', id: 17},
  {orientation: 'vertical', text: 'Palace of Sports', id: 18},
  {orientation: 'vertical', text: 'Ukrainian Railways', id: 19},
  {orientation: 'vertical', text: 'Philharmonic', id: 20},
  {orientation: 'vertical', text: 'Deribasivska Street', id: 21}
]
const bottom = [
  {orientation: 'main-block', text: 'START', id: 22},
  {orientation: 'gorizontal', text: 'Planetarium', id: 23},
  {orientation: 'gorizontal', text: 'Kiev funicular', id: 24},
  {orientation: 'gorizontal', text: 'Chernivtsi National University', id: 25},
  {orientation: 'gorizontal', text: 'Ocean Plaza', id: 26},
  {orientation: 'gorizontal', text: 'House with Chimaeras', id: 27},
  {orientation: 'gorizontal', text: 'Dendropark', id: 28},
  {orientation: 'gorizontal', text: 'NSC Olimpiyskiy', id: 29},
  {orientation: 'gorizontal', text: 'Four Seasons Hotel', id: 30},
  {orientation: 'gorizontal', text: 'Donbass Arena', id: 31},
  {orientation: 'gorizontal', text: 'ZAZ factory', id: 32},
  {orientation: 'gorizontal', text: 'Besarabsky Market', id: 33},
  {orientation: 'gorizontal', text: 'Gulliver Shopping Mall', id: 34},
  {orientation: 'gorizontal', text: 'Bankova Street', id: 35},
  {orientation: 'main-block', text: 'CHECK', id: 36}
]
const left = [
  {orientation: 'vertical', text: 'Pinchuk Art Centre', id: 37},
  {orientation: 'vertical', text: 'Kiev Roshen Factory', id: 38},
  {orientation: 'vertical', text: 'Science museum', id: 39},
  {orientation: 'vertical', text: 'Supermarket Auchan', id: 40},
  {orientation: 'vertical', text: 'Theatre of Operetta', id: 41},
  {orientation: 'vertical', text: 'National Police of Ukraine', id: 42},
  {orientation: 'vertical', text: 'Lviv Handmade Chocolate', id: 43}
]
module.exports = {top, left, right, bottom}
