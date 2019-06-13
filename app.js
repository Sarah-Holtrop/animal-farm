let money = 0;
let foodBank = 10;

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
    name: "Animal Feed",
    cost: 10
  }
]
let animals = [
  {
    name: "Chicken",
    feed: 0,
    food: "seeds",
    value: 10,
    image: "/images/chicken.jpg"
  },
  {
    name: "Cow",
    feed: 0,
    food: "grass",
    value: 20,
    image: "/images/cow2.jpg"
  },
  {
    name: "Goat",
    feed: 0,
    food: "grass",
    value: 30,
    image: "/images/goat.jpg"
  },
  {
    name: "Pig",
    feed: 0,
    food: "leftovers",
    value: 40,
    image: "/images/pig3.jpg"
  }
]

function drawFarm() {
  let animalsRow = document.querySelector("#animal-control")
  let feedGet = document.querySelector("#feed-count")
  let moneyGet = document.querySelector("#money-count")
  let farmTemplate = "";
  for (let index = 0; index < animals.length; index++) {
    let animal = animals[index];
    farmTemplate += `
    <div class="col pt-5">
      <h2>${animal.name}</h2>
      <img src="${animal.image}" alt="some text" class="rounded">
      <p>Feed: ${animal.feed} ${animal.food}</p>
      <p>Harvest: $ ${animal.value} </p>
      <button type = "button" class="btn btn-warning" onclick="feed(${index})">Feed</button>
      <button type = "button" class="btn btn-success" onclick="harvest(${index})">Harvest</button>
    </div>
    `
  }
  let storeRow = document.querySelector("#store-front")
  let storeTemplate = "";
  for (let stIndex = 0; stIndex < store.length; stIndex++) {
    let storeItem = store[stIndex];
    storeTemplate += `
      <div class="col">
        <button type= "button" class="btn btn-primary" onclick="purchase(${stIndex})">Purchase ${storeItem.name}</button>
      </div>
    `

  }
  storeRow.innerHTML = storeTemplate;
  animalsRow.innerHTML = farmTemplate;
  moneyGet.textContent = money.toString();
  feedGet.textContent = foodBank.toString();
}

function feed(i) {
  let animal = animals[i];
  animal.feed++;
  foodBank--;
  drawFarm();
}

function harvest(i) {
  let animal = animals[i];
  money += animal.value * animal.feed
  animal.feed = 0;
  drawFarm()

}

function purchase(s) {
  let storeItem = store[s];
  money -= storeItem.cost;
  if (storeItem = store[2]) {
    foodBank += 5;
  }
  drawFarm()
}

drawFarm()