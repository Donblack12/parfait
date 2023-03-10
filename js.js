var a = [10, 20 , 30, -40, -50, 10, 20];
function somme(a) {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return sum;
  }
  //EXO 2
  console.log(somme(a));
  function maxi(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }
    return max;
  }
  console.log(maxi(a));
  //EXO 3
  function transf(a) {
    let tr = [];
    for (let i = 0; i < a.length; i++) {
      tr.push(a[i] + 1);
    }
    return tr;
  }
  console.log(transf(a));
  // EXO 4
  function filtre(a) {
    let fl = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] > 15) {
        fl.push(a[i]);
      }
    }
    return fl;
  }
  console.log(filtre(a));
