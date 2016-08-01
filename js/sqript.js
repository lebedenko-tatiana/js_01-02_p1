var v = '';
var y = '';
var x_y = 0;

function pow(x, n) {
  var result = x;

  if (n > 0) {
    for (var i = 1; i < n; i++) {
      result *= x;
    }
  }

  if (n < 0 && x != 0) {
    for (var i = -1; i > n; i--) {
      result *= x;
    }
    result = 1 / result;
  }

  if (n == 0) {
    result = 1;
  }

  if (n < 0 && x == 0) {
    result = 'incurrect values!';
  }
    
  return result;
}

  do {
    v = prompt('Enter x: ', '');
  }
  while (v === '' || v === null);

  do {
    y = prompt('Enter y: ', '');
  }
  while (y === '' || y === null);

  x_y = pow(v, y);

  console.log('number ', v, ' in degrees ', y, ' = ', x_y);

  

