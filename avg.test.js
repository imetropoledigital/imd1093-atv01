const avg = require('./avg');

test('One product', () => {
  const input = [{'sku': 'abc', 'price': 10}]
  expect(avg(input)).toBe(10);
});

test('Some products', () => {
    const input = [
        {"sku": "8fjf8", "price": 56.7},
        {"sku": "si48h", "price": 6.7},
        {"sku": "p9rh", "price": 8.27},
        {"sku": "5d5g1", "price": 34.5},
        {"sku": "kfd42", "price": 78.2},
        {"sku": "j39h2", "price": 12.9},
        {"sku": "0jg47", "price": 45.0},
        {"sku": "1fg12", "price": 23.8},
        {"sku": "fhd73", "price": 65.4},
        {"sku": "4kf23", "price": 7.5},
        {"sku": "6hj32", "price": 10.0},
        {"sku": "9dk12", "price": 19.6},
        {"sku": "2hj13", "price": 5.0},
        {"sku": "m41j7", "price": 44.2},
        {"sku": "8k2d1", "price": 3.4},
        {"sku": "l6h43", "price": 6.8},
        {"sku": "p9g57", "price": 2.3},
        {"sku": "3gk21", "price": 99.9},
        {"sku": "7jg43", "price": 11.1},
        {"sku": "tj64h", "price": 50.0},
        {"sku": "d93j1", "price": 29.8},
        {"sku": "0fj93", "price": 17.2},
        {"sku": "b93f7", "price": 33.3},
        {"sku": "j1f2h", "price": 22.0},
        {"sku": "c92h3", "price": 8.9},
        {"sku": "1g3h7", "price": 13.5},
        {"sku": "m7h13", "price": 75.0},
        {"sku": "6h2k8", "price": 18.6},
        {"sku": "9jk12", "price": 4.5},
        {"sku": "4hj90", "price": 67.8},
        {"sku": "8jk13", "price": 1.99},
        {"sku": "l6j54", "price": 21.3},
        {"sku": "3kf12", "price": 12.7},
        {"sku": "1hj35", "price": 7.8},
        {"sku": "f7h64", "price": 40.5},
        {"sku": "2hj49", "price": 15.4},
        {"sku": "8j1k4", "price": 29.7},
        {"sku": "h7k83", "price": 5.5},
        {"sku": "m4h78", "price": 27.9},
        {"sku": "6hj54", "price": 60.0},
        {"sku": "k9j21", "price": 9.2}
    ]
    expect(avg(input)).toBe(34.27);
  });

  test('3 products', () => {

    const input = [
        {
          "sku": "6ds5d",
          "price": 29.99
        },
        {
          "sku": "4fgk9",
          "price": 12.49
        },
        {
          "sku": "pok98",
          "price": 99.99
        }
    ]
    
    expect(avg(input)).toBe(47.49);

  })

  