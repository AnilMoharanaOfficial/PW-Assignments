// 01.Reverse String.
let input = "Anil";

function reverseString(str) {
  return str.split("").reverse().join("");
}

setTimeout(() => {
  const reversedString = reverseString(input);
  console.log("Output:", reversedString);
}, 2000);

// 02. Random Number Generator with Delay and Progress Indication:
const generateRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 100);
  let time = 3;

  const countTime = setInterval(() => {
    console.log(`${time--}s remaining to generate a number`);

    if (time === 0) {
      clearInterval(countTime);
      console.log("Random Number:", randomNum);
    }
  }, 1000);
};

generateRandomNum();

// 03. Build a feature for Store's Inventory.
const store = {
  items: {
    shirt: 20,
    pants: 30,
    shoes: 50,
    hat: 15,
  },
};

const exchangeRate = 80;

const item = Object.entries(store.items);

const convertedItems = item.map(([item, price]) => {
  return { item: item, priceInRupees: price * exchangeRate };
});

console.log(convertedItems);

// 04. Filtering and Capitalizing: Books Published After 2010 with Author Names.
const books = [
  { title: "Book 1", author: "author 1", year: 2008 },
  { title: "Book 2", author: "author 2", year: 2012 },
  { title: "Book 3", author: "author 3", year: 2005 },
  { title: "Book 4", author: "author 4", year: 2015 },
];

const filteredBooks = books
  .filter((book) => book.year >= 2010)
  .map((book) => ({ ...book, author: book.author.toUpperCase() }));

console.log(filteredBooks);

// 5. URL validation.
const urlRegex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

function isValidUrl(url) {
  return urlRegex.test(url);
}

const url = "https://google.com";

if (isValidUrl(url)) {
  console.log(`${url} is a valid URL.`);
} else {
  console.log(`${url} is not a valid URL.`);
}
