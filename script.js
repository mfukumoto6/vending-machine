// target
const target = document.getElementById('target');

class Animal {
  constructor(name, price, url) {
    this.name = name;
    this.price = price;
    this.url = url;
  }

  // 名前を書き換えるメソッド
  nameChange() {
    document.getElementById('name').innerHTML = 'Name : ' + this.name;
  }

  // 値段を書き換えるメソッド
  priceChange() {
    document.getElementById('price').innerHTML = 'Price : $' + this.price;
  }
}

class helperFunction {
  // htmlを設定するメソッド
  static htmlString() {
    let string = `
      <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="bg-primary d-flex flex-column flex-md-row col-12 col-md-11 col-lg-8 px-3 py-2">

          <div id="slider-show" class="d-flex justify-content-center align-items-center col-md-7 flex-nowrap overflow-hidden">

          </div>

          <div class="col-md-5">
            <p id="name" class="mx-2 mb-2"></p>
            <p id="price" class="mx-2 mb-2"></p>

            <div id="btn" class="d-flex flex-wrap col-12">

            </div>
          </div>
        </div>
      </div>
    `;
    target.innerHTML = string;
  }

  // ボタンを作成して配置するメソッド
  static setButton() {
    for (let i = 0; i < animals.length; i++) {
      let buttonDiv = document.createElement('div');
      buttonDiv.classList.add('col-3', 'p-2');

      let button = document.createElement('button');
      button.type = 'button';
      button.classList.add('btn', 'btn-light', 'col-12');
      button.innerHTML = String(i + 1);

      buttonDiv.append(button);
      document.getElementById('btn').append(buttonDiv);
    }
  }
}

const animals = [
  new Animal('Tiger', '100', 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
  new Animal('Elephant', '200', 'https://images.unsplash.com/photo-1526226128118-9ef71fc2f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'),
  new Animal('Parrot', '30', 'https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
  new Animal('Lemurs', '15', 'https://cdn.pixabay.com/photo/2018/06/26/22/35/monkey-3500426_960_720.jpg'),
  new Animal('Ibis', '75', 'https://images.unsplash.com/photo-1525949983-3efa5371d5ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'),
  new Animal('Panda', '90', 'https://cdn.pixabay.com/photo/2018/12/14/15/46/panda-3875289_960_720.jpg'),
  new Animal('Zebra', '120', 'https://cdn.pixabay.com/photo/2018/10/19/10/25/zebra-3758310_960_720.jpg'),
  new Animal('Rabbit', '25', 'https://cdn.pixabay.com/photo/2016/11/22/19/27/adorable-1850192_960_720.jpg'),
  new Animal('Giraffe', '150', 'https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_960_720.jpg'),
  new Animal('Raccoon', '45', 'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_960_720.jpg'),
  new Animal('Frog', '5', 'https://cdn.pixabay.com/photo/2018/05/31/15/06/see-no-evil-3444212_960_720.jpg'),
  new Animal('Iguana', '40', 'https://cdn.pixabay.com/photo/2016/09/08/12/46/iguana-1654234_960_720.jpg'),
  new Animal('Adler', '55', 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg'),
  new Animal('Wolf', '60', 'https://cdn.pixabay.com/photo/2017/01/19/16/15/wolf-1992716_960_720.jpg'),
  new Animal('Crocodile', '250', 'https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013_960_720.jpg'),
  new Animal('Ape', '20', 'https://cdn.pixabay.com/photo/2020/07/21/01/33/cute-5424776_960_720.jpg'),
  new Animal('Ostrich', '140', 'https://cdn.pixabay.com/photo/2018/09/10/21/02/greater-rhea-3668046_960_720.jpg'),
  new Animal('Rhinoceros', '170', 'https://cdn.pixabay.com/photo/2017/06/25/07/30/rhino-2439819_960_720.jpg'),
  new Animal('Icebear', '210', 'https://images.unsplash.com/photo-1625179147049-67d92a6ccf4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'),
  new Animal('Cheetah', '190', 'https://cdn.pixabay.com/photo/2018/05/26/07/54/cheetah-3430852_960_720.jpg'),
  new Animal('Koala', '30', 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117_960_720.jpg'),
  new Animal('Penguin', '25', 'https://cdn.pixabay.com/photo/2014/08/27/12/58/emperor-penguins-429128_960_720.jpg'),
];

// スライドする関数
function slider(nextIndex) {
  // 現在のmainのindexを取得
  let currentIndex = parseInt(main.getAttribute('data-index'));

  // imgを生成
  let mainImg = document.createElement('img');
  let extraImg = document.createElement('img');
  mainImg.classList.add('col-8', 'cover');
  extraImg.classList.add('col-8', 'cover');
  mainImg.setAttribute('alt', '');
  extraImg.setAttribute('alt', '');
  mainImg.src = animals[nextIndex].url;
  extraImg.src = animals[currentIndex].url;

  let currentElement = extraImg;
  let nextElement = mainImg;

  // mainのindexを更新
  main.setAttribute('data-index', nextIndex.toString());

  animalChange(currentElement, nextElement, rightOrLeft(currentIndex, nextIndex));
}

// 左右を判定する関数
function rightOrLeft(currentIndex, nextIndex) {
  if (nextIndex >= currentIndex) {
    if (Math.abs(nextIndex - currentIndex) >= Math.abs(currentIndex + animals.length - 1 - nextIndex)) return 'left';
    else return 'right';
  } else {
    if (Math.abs(nextIndex - currentIndex) >= Math.abs(nextIndex + animals.length - 1 - currentIndex)) return 'right';
    else return 'left';
  }
}

function animalChange(currentElement, nextElement, animationType) {
  main.innerHTML = '';
  extra.innerHTML = '';

  extra.append(currentElement);
  main.append(nextElement);

  // mainとextraにアニメーションを追加
  main.classList.add('expand-animation');
  extra.classList.add('deplete-animation');

  if (animationType === 'left') {
    sliderShow.innerHTML = '';
    sliderShow.append(main);
    sliderShow.append(extra);
  } else if (animationType === 'right') {
    sliderShow.innerHTML = '';
    sliderShow.append(extra);
    sliderShow.append(main);
  }
}

// htmlを設定
helperFunction.htmlString();

// ボタンを配置
helperFunction.setButton();

// sliderShow
const sliderShow = document.getElementById('slider-show');

// mainDiv, extraDiv
let main = document.createElement('div');
let extra = document.createElement('div');

// 幅を親要素いっぱいにとる
main.classList.add('main', 'full-width', 'd-flex', 'justify-content-center');
extra.classList.add('extra', 'full-width', 'd-flex', 'justify-content-center');

main.setAttribute('data-index', '0');

// ボタンがクリックされたら、動物の名前と値段、画像を表示する
const buttons = document.querySelectorAll('.btn');
for (let i = 0; i < animals.length; i++) {
  buttons[i].addEventListener('click', function () {
    animals[i].nameChange();
    animals[i].priceChange();
    slider(i);
  });
}
