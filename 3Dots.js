const ages1 = [12,22,33,44,55];
const ages2 = [ 13,18,24,25,66];
// const allAges = ages1.concat(ages2).concat(5);
const allAges = [...ages1,...ages2,5]
console.log(allAges);

const Maximum = Math.max(...ages1,...ages2);
console.log(Maximum);