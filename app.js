class Przedmiot {
  constructor(name,weight){
     this.name = name
     this.weight = weight
  }
  showInfo() {
    console.log('name: ' + this.name, ' weight: ' + this.weight)
  }
}

function createItem(n,w){
      if ((n.length<1) || (w < 1)){
        if((n.length<1) && (w<1)){
            console.log("name to shor and weigt is no correct")
         } else if (n.length<1){
           console.log('name to short')
         } else {
           console.log('wrong weight')
         }
      }else {

        return new Przedmiot(String(n),w);
      }
}
function createItems(number,minw, maxw){
  const itemTab =[];
  if ((number < 1) || ( minw < 1) || (minw > maxw)){
    return
  }
  // generate random words;
  function generateRandom(no){

    no = no>0? no:10;
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

   for (var i = 0; i < no; i++)
            text += possible.charAt(Math.floor(Math.random()* possible.length));
            return text;
    }

  for ( let i = 0; i < number; i++){
    let name = generateRandom(Math.floor(Math.random()*(10 - 5)+5));
    let weight = Math.floor(Math.random()*(maxw - minw)+minw);
    itemTab.push(new Przedmiot(name,weight))
  }
  return itemTab;
}
console.log(createItems(3,12,14))




/////////////// plecak////////////////


class Plecak {
  constructor(name,weight,compression,items,size){
    this.name = name;
    this.weight = weight;
    this.compression = compression;
    this.items= items;
    this.currentSize = this.items.length;
    this.size = size;
  }

  add(items){
      if ((items.length>0) && (this.currentSize < this.size)){
        let emptySpace = this.size - this.currentSize;
        for (let i = 0; i < items.length; i++){

          if (emptySpace > 0){
             this.currentSize += 1;
             this.items.push(items[i]);
              emptySpace -= 1;
            }
        }
        let tempWeight = 0
        for (let i = 0; i < this.items.length; i++){

          for ( let key in this.items[i]){

              if (key == 'weight'){
                  tempWeight += this.items[i][key];
              }

          }

        }
        this.weight = tempWeight * this.compression / 100;
      }
      }


  makeEmpty(){
      this.items = [];
      this.weight = 0;
      this.currentSize = 0;
  };

  remove(index){
    if (this.items[index]){
        this.weight -= this.items[index].weight * this.compression/100;
        this.currentSize -= 1;
        this.items.splice(index,1)
    }
  }

  showInfo(){
    console.log(
        "Name: " + this.name ,
        ' Current size:' + this.currentSize,
        ' Size: ' + this.size,
        ' Weight:' + this.weight,
        ' Compression ' + this.compression  );
  }

  showDetails(){
      console.log('Nazwa plecaka ' + this.name);

      for( let i = 0; i<this.items.length; i++){
        console.log('item: ' + this.items.indexOf(this.items[i]))
        for ( let key in this.items[i]){

            if (key == 'name'){
                console.log(key + " " + this.items[i][key])
            } else if ( key == 'weight'){
                console.log(key + " " + this.items[i][key])
            }

        }

      }
  }
}

function createBackpack (name, size, compression, items) {
  let weight;
  let itemsTemp = items ? items.slice(0,size): [];

  // wyliczam wage przedmiotu
  let allWeight = 0;
  if (items) {

      for (let i = 0; i < itemsTemp.length; i++){

          for ( let key in itemsTemp[i]){

              if (key == 'weight'){
                  allWeight += itemsTemp[i][key];

              }

          }

      }

  }
  allWeight = allWeight * compression / 100;
  return new Plecak(name,allWeight,compression,itemsTemp,size)
}

let x =  createBackpack('adidas', 3, 100,[{name:'acb',weight:200},{name:'acb',weight:200}])
let y = createBackpack('nike',20,100, createItems(10,1,34));
