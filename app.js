let money = 0;
let store = [
  {
    name: "House",
    cost: 100
  },
  {
    name: "Barn",
    cost: 1000
  },
  {

  }
]
let animals = [
  {
    name: "Chicken",
    feed: 0,
    food: "seeds",
    value: 10,
    // image: "https://m.worldanimalfoundation.net/i/chicken3.jpg"
  },
  {
    name: "Cow",
    feed: 0,
    food: "grass",
    value: 20,
    // image: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwNy80MjEvb3JpZ2luYWwvMDUwNzExX2dlbmVyaWNfY293XzAyLmpwZw=="
  },
  {
    name: "Goat",
    feed: 0,
    food: "grass",
    value: 30,
    // image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"
  },
  {
    name: "Pig",
    feed: 0,
    food: "leftovers",
    value: 40,
    // image: "https://cdni.rt.com/files/2018.04/article/5ae1a7b6fc7e93bb6e8b457f.jpg"
  }
]

function drawFarm() {
  let animalsRow = document.querySelector("#animal-control")

  let moneyGet = document.querySelector("#money-count")
  let farmTemplate = "";
  for (let index = 0; index < animals.length; index++) {
    let animal = animals[index];
    farmTemplate += `
    <div class="col">
      <h2>${animal.name}</h2>
      <p>Feed: ${animal.feed} ${animal.food}</p>
      <p>Harvest: $ ${animal.value} </p>
      <button class="btn btn-warning" onclick="feed(${index})">Feed</button>
      <button class="btn btn-success" onclick="harvest(${index})">Harvest</button>
    </div>
    `
  }
  let storeRow = document.querySelector("#store-front")
  let storeTemplate = "";
  for (let stIndex = 0; stIndex < store.length; stIndex++) {
    let storeItem = store[stIndex];
    storeTemplate += `
      <div class="col">
        <button class="btn btn-primary" onclick="purchase(${stIndex})">Purchase ${storeItem.name}</button>
      </div>
    `

  }
  storeRow.innerHTML = storeTemplate;
  animalsRow.innerHTML = farmTemplate;
  moneyGet.textContent = money.toString()
}

function feed(i) {
  let animal = animals[i];
  animal.feed++;
  drawFarm();
}

function harvest(i) {
  let animal = animals[i];
  money += animal.value * animal.feed
  animal.feed = 0;
  // animal.value += animal.value * animal.feed
  drawFarm()

}

function purchase(s) {
  let storeItem = store[s];
  money -= storeItem.cost
  drawFarm()
}

drawFarm()