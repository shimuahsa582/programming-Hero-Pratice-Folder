function maxValue(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
const maxNumberIs = maxValue(29, 65, 90);
console.log(maxNumberIs);

//Use add and multiplication to calculate wood requirements

function clothPrice(shirtQuintity, pantQuintity, shoesQuintity) {
    const shirtPrice = 500;
    const pantPirce = 300;
    const shoesPrice = 900;

    const shirtTotalPrice = shirtQuintity * shirtPrice;
    const pantTotalPrice = pantQuintity * pantPirce;
    const shoesTotalPrice = shoesQuintity * shoesPrice;

    const totalClothPrice = shirtTotalPrice + pantTotalPrice + shoesTotalPrice;
    return totalClothPrice;
}

const total = clothPrice(2, 5, 1);
console.log("total cloth price :", total);

// Find the cheapest phone from an array of phone objects
const prices = [20000, 45800, 3000, 905670, 3000000, 1289000];
function getPrice(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const cheap = getPrice(prices);
console.log("the cheapest price is: ", cheap);

// cheapest mobile price
const mobiles = [
    { name: 'infinix', price: 15000, camera: '12px', color: 'white' },
    { name: 'sumsang', price: 12000, camera: '15px', color: 'black' },
    { name: 'oppp', price: 40000, camera: '18px', color: 'green' },
    { name: 'iphone', price: 35000, camera: '13px', color: 'master yellow' },
    { name: 'nokia', price: 21000, camera: '20px', color: 'red' },
]
function cheapestMobiles(mobiles) {
    let cheapMbile = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < cheapMbile.price) {
            cheapMbile = mobile;
        }
    }
    return cheapMbile;
}

const totalMobile = cheapestMobiles(mobiles);
console.log("the mobile is :", totalMobile);

// largest mobile price
function largestMobile(mobiles) {
    let large = mobiles[0];
    for (const largest of mobiles) {
        if (largest.price > large.price) {
            large = largest;
        }
    }
    return large;
}
const totalLargeMobile = largestMobile(mobiles);
console.log("the largest mobile is :", totalLargeMobile);

//  Calculate the total cost of the products in a shopping cart

const products = [
    { name: "sampu", price: 500 },
    { name: "churuni", price: 300 },
    { name: "shirt", price: 700 },
    { name: "pant", price: 900 },
]

function allProducts(products) {
    const prod = 0;
    for (const product of products) {
        // console.log(product);
        const total = prod + product.price;
    }
    return total;
}
const getTotalProduct = allProducts(products);
console.log("this product is :", getTotalProduct);

//  Calculate the total cost of the products in a shopping cart
const productsCount = [
    { name: "sampu", price: 500, quentity: 2 },
    { name: "churuni", price: 300, quentity: 4 },
    { name: "shirt", price: 700, quentity: 1 },
    { name: "pant", price: 900, quentity: 5 },
]

function getProductCount(counts) {
    let countProdct = 0;
    for (const count of counts) {
        const totalProd = count.price * count.quentity;
        countProdct = countProdct + totalProd;
    }
    return countProdct;
}
const totalProductCount = getProductCount(productsCount);
console.log("total product quintity is : ", totalProductCount);

// (advanced) Multi-layer discount price calculation
function discountedPrice(quaintity) {
    if (quaintity <= 100) {
        const total = quaintity * 100;
        return total;
    }
    else if (quaintity <= 200) {
        const total = quaintity * 200;
        return total;
    }
    else {
        const total = quaintity * 90;
        return total;
    }
}
const discountTotalPrices = discountedPrice(29);
console.log("the discount price is : ", discountTotalPrices);

// (advanced) Multi-layer discount price calculation
function discountedLayerPrice(quantity) {
    const frist100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if (quantity <= 100) {
        const total = quantity * frist100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * frist100Price;
        const remaningQuantity = quantity - 100;
        const remainingTotal = remaningQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * frist100Price;
        const second100Total = 100 * second100Price;
        const remaningQuantity = quantity - 200;
        const remainingTotal = remaningQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

// 
function add(num1, num2) {
    return num1 + num2;
}
function subtrct(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divided(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, opration) {
    if (opration === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (opration === 'subtrct') {
        const result = subtrct(a, b);
        return result;
    }
    else if (opration === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (opration === 'divided') {
        const result = divided(a, b);
        return result;
    }
    else {
        return "only 'add' , 'subtrct', 'multiply', 'divided' operation is allowed";
    }
}

const calculatorResult = calculator(7, 9, 'add');
console.log(calculatorResult);

// Task - 1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (const num of numbers) {
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}
const identifyLowestNumber = lowestNumber(heights2);
console.log("lowest number is: ", identifyLowestNumber);

// largest number 
const highest3 = [167, 190, 120, 165, 137];
function heighstNumber(numbers) {
    let highest = numbers[0];
    for (const num of numbers) {
        if (num > highest) {
            highest = num;
        }
    }
    return highest;
}
const identifyHighestNumber = heighstNumber(highest3);
console.log("highest number is: ", identifyHighestNumber);

// total sum in array 
const sumNmb = [167, 190, 120, 165, 137];
function sumNumber(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = num + sum;
    }
    return sum;
}
const identifySumNumber = sumNumber(sumNmb);
console.log("sum number is: ", identifySumNumber);

// ask - 2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findSmallestName(names) {
    let smallestName = names[0];
    for (const name of names) {
        if (name.length < smallestName.length) {
            smallestName = name;
        }
    }
    return smallestName;
}
const smallestNameLength = findSmallestName(friends);
console.log("the lowest name length is : ", smallestNameLength);

// 
const friends1 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findsLargestName(names) {
    let largestName = names[0];
    for (const name of names) {
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    return largestName;
}
const largestNameLength = findsLargestName(friends1);
console.log("the latgest name length is : ", largestNameLength);


// Task - 3:
// Your task is to calculate the total budget required to buy electronics:
// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000;
function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopQuantity = laptopPrice * laptop;
    const tabletQuantity = tabletPrice * tablet;
    const mobileQuantity = mobilePrice * mobile;

    const totalMoney = laptopQuantity + tabletQuantity + mobileQuantity;
    return totalMoney;
}
console.log(calculateElectronicsBudget(2, 5, 1));


// Task - 4:
// You are given an array of phone objects, each containing information about the model, brand, and price.Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
//     Input
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
    let totalPrice = 0;
    for (const phone of phones) {
        totalPrice = phone.price + totalPrice;
    }
    const averagePrice = totalPrice / phones.length;
    return averagePrice;

}
const averagePhonePrice = findAveragePhonePrice(phones);
console.log("Average price:", averagePhonePrice);

// Task - 5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary.Now calculate is the total salary has to be provided by the company in a month.

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalMonthlySalary(employees) {
    let total = 0;

    for (const emp of employees) {
        const currentSalary =
            emp.starting + (emp.experience * emp.increment);

        total += currentSalary;
    }

    return total;
}

const companyTotal = totalMonthlySalary(employees);
console.log("Total monthly salary:", companyTotal); 