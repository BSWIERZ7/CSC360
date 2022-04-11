"use strict";

/***
 *
 * Directions:
 * 1. Extract hw1.zip
 * 2. In the hw1 directory you'll find a hw1.js and hw1.test.js file. hw1.js is the only file you need to modify.
 * 3. Open hw1.js in VS Code, or your preferred text editor or IDE.
 * 4. Implement all the TODOs described in commments below and save your work.
 *
 *
 * Validating your changes:
 * 1. Ensure you have Node.js LTS or newer installed: https://nodejs.org/en/download/
 * 2. Open cmd or terminal, change directory (cd) to the location of your hw1 directory.
 * 3. Once inside the hw1 directory, execute the following command: npm install
 * 4. The above command will install the jest dependency which will allow you to execute the unit tests in hw1.test.js
 * 5. Execute the following command to validate your changes in hw1.js are working as expected: npm test
 * 6. You will see output indicating the tests have passed or failed; if you see failures, there is an issue with your implementation
 *
 ***/

const Homework1 = class Homework1 {
  // This is already implemented to indicate what a passing test looks like
  static sum = (a, b) => {
    return a + b;
  };
};

/**
 * *****************
 * ***** TODO ******
 * *****************
 *
 * Implement the Circle class below. It needs to have a radius(Number) property and a color(String) properties. Both properties should be set in a constructor
 * Additionally, the Circle class should have a method called `calcArea` which will return the area (radius*radius*pi) of the circle.
 * Be sure to use the built-in Math object Javascript provides to retrieve the value of PI.
 *
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

//  static sum = (a, b) => {
//     return a + b;
//   };

const Circle = class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  //   Method
  calcArea() {
    return this.radius * this.radius * Math.PI;
  }
};

/**
 * *****************
 * ***** TODO ******
 * *****************
 *
 * Implement the Student class below.
 *
 * The student class should have the following properties set by the constructor:
 * firstName(String), lastName(String), gpa(Number), degreeType(String)
 *
 * The student class should have two additional properties initialized with the following default values:
 * grade(String) = undefined
 * graduated(Boolean) = false
 *
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

const Student = class Student {
  grade = undefined;
  graduated = false;
  constructor(firstName, lastName, gpa, degreeType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gpa = gpa;
    this.degreeType = degreeType;
  }
};

/**
 * *****************
 * ***** TODO ******
 * *****************
 *
 * Implement the Product class below.
 *
 * The product class should have the following properties set by the constructor:
 * name(String), price(Number), availability(String)
 * The constructor should only accept a single String parameter as input, the input format will be as follows: 'Apple,1.00,In Stock'
 * The constructor must parse this input and set the above properties appropriately
 */

const Product = class Product {
  constructor(singleString) {
    let productArray = singleString.split(","); //splits Str into name, price, availability
    this.name = productArray[0];
    this.price = Number(productArray[1]); //change '1.00' to 1
    this.availability = productArray[2];
    // console.log("*Name = ", this.name);
    // console.log("*Price = ", this.price);
    // console.log("*Availability = ", this.availability);
  }

  /**
   * *****************
   * ***** TODO ******
   * *****************
   *
   * Implement the static method inStock below
   *
   * This method will accept an array of Products and return an array only containing products which are in stock
   * This can be implmeneted in one line.
   * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   */
  static inStock = (products) => {
    // let availableProducts; //our array to hold 'In Stock items'

    //holds our element for each item
    // let product_apple = products[0]; == element.availability => holds element for apple/information
    // let product_carrot = products[1];
    // let product_bread = products[2];
    // let product_beef = products[3];

    const availableProducts = products.filter(
      (element) => element.availability === "In Stock"
    );
    return availableProducts;
  };

  /**
   * *****************
   * ***** TODO ******
   * *****************
   *
   * Implement the static method halfOff below
   *
   * This method will accept an array of Products and return an array of the same products with every price reduced by 50%
   * This method can also be written in one line; if doing so, consider using String interpolation when calling the product constructor
   * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   */
  static halfOff = (products) => {
    const half_price = products.forEach((element) => {
      element.name, element.price * 0.5, element.availability;
    });

    return half_price;
  };
  // return half_price;
  // return half_price;

  // console.log("products", products);

  // console.log("products[0]: ", products[0]);
  // console.log("products[0].price: ", products[0].price);

  // products[0] = {
  //   products[0].name;
  //   products[0].price*0.50;
  //   products[0].availability;
  // };

  // products[0] = products[0].price * 0.5;
  // products[1].price * 0.5;
  // products[2].price * 0.5;
  // products[3].price * 0.5;

  // console.log("AFTER: products[0].price: ", products[0].price);
  // //const discountCheck = products.forEach((element) => {
  // return products.forEach((element) => {
  //let name =
  // console.log("products = ", element.name);
  // console.log("products = ", element.price * 0.5);
  // console.log("products = ", element.availability);

  // let product_name = element.name;
  // let product_price = element.price * 0.5;
  // let product_availability = element.availability;
  // element.name;
  // element.price * 0.5;
  // element.availability;

  // this.name = element.name;
  // this.price = element.price * 0.5;
  // this.availability = element.availability;

  //element = { product_name, product_price, product_availability };
  // element.price = element.price * 0.5;
  // this.price = half * 0.5;
  //   this.availability = element.availability;
  //   // this.name = Product.name;
  //   // this.price = Number(productArray[1])*0.50; //change '1.00' to 1
  //   // this.availability = productArray[2];
  //   //this.price = element.price*0.50;
  //   console.log("inside forEach: ", element.price(element * 0.5));
  // });
  // return element;

  // });

  // return discountCheck;
  // return (element = { product_name, product_price, product_availability });
  // };
  // const productsObject = JSON.parse(products);
  // console.log("productsObject: ", productsObject);

  // const discountCheck = products.forEach((product) => {
  //   this.name = product.name;
  //   this.price = product.price * 0.5;
  //   this.availability = product.availability;

  //   console.log("product_name: ", this.name);
  //   console.log("product_price: ", this.price);
  //   console.log("product_availability: ", this.availability);

  // let product_name = product.name;
  // // let price = product.price * 0.5;
  // let product_price = product.price * 0.5;
  // let product_availability = product.availability;

  // console.log("product_name: ", this.product_name);
  // console.log("product_price: ", this.product_price);
  // console.log("product_availability: ", this.product_availability);

  // return products[0].price*0.50, products[0].price*0.50, products[0].price*0.50, products[0].price*0.50;

  // products[0].price*0.50
  // products[1].price*0.50
  // products[2].price*0.50
  // products[3].price*0.50

  // products[0].price*0.50;
  // products[1].price*0.50;
  // products[2].price*0.50;
  // products[3].price*0.50;

  // let product_apple_discount = products[0].price*0.50;
  // let product_carrot_discount = products[1].price*0.50;
  // let product_bread_discount = products[2].price*0.50;
  // let product_beef_discount = products[3].price*0.50;

  // console.log("product_apple_discount: ", product_apple_discount);
  // console.log("product_carrot_discount: ", product_carrot_discount);
  // console.log("product_bread_discount: ", product_bread_discount);
  // console.log("product_beef_discount: ", product_beef_discount);

  // const discountCheck = products.forEach((element) => {
  //   element.price * 0.5;
  //   let name = element.name;
  //   let half = element.price * 0.5; //change '1.00' to 1
  //   // this.price = half * 0.5;
  //   this.availability = element.availability;
  //   // this.name = Product.name;
  //   // this.price = Number(productArray[1])*0.50; //change '1.00' to 1
  //   // this.availability = productArray[2];
  //   //this.price = element.price*0.50;
  //   console.log("inside forEach: ", element.price(element * 0.5));
  // });

  // return discountCheck;

  // const discount = [product_apple_discount, product_carrot_discount, product_bread_discount];
  // // const discountCheck = Product.forEach(element => element.price(element * 0.50));
  // const discountCheck = Product.forEach(element => element.price(element * 0.50));

  //  const discount = products.forEach(element => (element.price)*0.50)
  //  const discount = products.forEach(element => (element.price)%2)

  //  const discount = products.forEach(element => Number(element.price)*0.50)
  // const discount = products.forEach(element => Number(element.price)*0.50)
  //{
  //carrot comes out 0 because original was .50 so = 0
  /*
        let product_apple_original = products[0]; 
        let product_carrot_original = products[1]; 
        let product_bread_original = products[2];
        let product_beef_original = products[3];

        console.log("product_apple_original: ", products[0]);
        console.log("product_carrot_original: ", products[1]);
        console.log("product_bread_original: ", products[2]);
        console.log("product_beef_original: ", products[3]);


        console.log("test", hw1.inStock(products));
        //element.price * 0.50;
        let product_apple = products[0].price*0.50; 
        let product_carrot = (products[1].price*0.50); 
        let product_bread = products[2].price*0.50;
        let product_beef = products[3].price*0.50;

        console.log("products[0].price*0.50", products[0].price*0.50);
        console.log("products[1].price*0.50", products[1].price*0.50);
        console.log("products[2].price*0.50", products[2].price*0.50);
        console.log("products[3].price*0.50", products[3].price*0.50);
*/

  // element.price = parseFloat(element.price % 2);
  // if(element.price == '1') element.price = 0.50;
  // else
  // element.price = (element.price * 0.50).toFixed(2);
  // //console.log("discountFloat: ", discountFloat);
  // console.log("productItem: ", element.price);
  // console.log("element: ", element);

  // console.log("element.price: ", element.price);
  //}
  // return discount;

  //)
  // const discount = products.filter(element => element.price * 0.50;
  //    console.log("element.price: ", element.price); )
  // return discount;
  // return discount;
  //return discount;
  //};
  //array1.forEach(element => console.log(element.price));

  /*
  static inStock = (products) => {
    const availableProducts = products.filter(element => element.availability == 'In Stock')
    return availableProducts;
  */

  /**
   * *****************
   * ***** TODO ******
   * *****************
   *
   * Implement the static method printProducts below
   *
   * This method will accept an array of Products and will console.log all the products in the following format:
   * Product: Apple, Cost: $1.00, Available: Yes
   * Take note, for 'Available' we are not returning 'In Stock' or 'Out of Stock' but 'Yes' or 'No'
   * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (currency formatting)
   */
  static printProducts = (products) => {
    //Reference from dev.mozilla => array section
    //  var number = 3500;
    // console.log(new Intl.NumberFormat().format(number));
    // // → '3,500' if in US English locale

    const formatProducts = products.forEach((element) => {
      const productName = "Product: " + element.name; //stays the same

      //let productPrice = element.price;
      let productPrice =
        "Cost: " +
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(element.price);

      // console.log((new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number))); // = $1.00, $0.50

      if (element.availability == "In Stock") {
        const availability = "Availability: Yes";
        let description =
          productName + ", " + productPrice + ", " + availability;

        console.log(description);
      } else {
        //not available => 'Availability: No'
        const availability = "Availability: No";
        let description =
          productName + ", " + productPrice + ", " + availability;

        console.log(description);
      }
    });
    //TESTING REPO AGAIN

    //console.log("apple_name_format: ", apple_name_format);
    //  console.log("products: ", products[0].name);
    // console.log("products: ", products.price);
    // console.log("products: ", products.availability);
    //  console.log("products: ", products.name);
    // console.log(products[0].name, products[0].price);
  };
};

// ----------------------------------
// DO NOT MODIFY CODE BELOW THIS LINE
// ----------------------------------

module.exports = {
  Homework1: Homework1,
  Circle: Circle,
  Student: Student,
  Product: Product,
};
