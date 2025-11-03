let array = [1, 2, 3, 4, 5];

Array.prototype.media = function () {
  let tot;

  array.reduce(function (total, num) {
    tot = total + num;
    return tot;
    //OJO SI NO HAGO RETURN ME DA NAN!!!
  }, 0);

  let tamaño = array.length;
  return tot / tamaño;
};

console.log(array.media());
