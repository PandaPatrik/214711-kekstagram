'use strict';
var twentyFive = 25;

var COMMENTS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]; // //массив с комментами


var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
} //рандомизатор

var creationArray = function () {
var myArray = [];

for (var i = 0; i < twentyFive; i++) {
    var obj = {};

    obj.url = 'photos/' + i + '.jpg';
    obj.likes = randomInteger(15, 200);
    obj.comments = COMMENTS_ARRAY[randomInteger(0, COMMENTS_ARRAY.length)];

    myArray.push(obj);
  }
  return myArray;
} ;

var requestToObject = document.querySelector('.picture-template');
var requestToObjectContent = document.querySelector('#picture-template').content;

var picturesData = creationArray(myArray);

for (var i = 0; i < picturesData.length; i++) { //создаёт 25 фотографий.
  var picturesElement = requestToObjectContent.cloneNode(true);
  picturesElement.querySelector('img').src = picturesData[i].url;
  picturesElement.querySelector('.picture-comments').content = picturesData[i].comments;
  picturesElement.querySelector('.picture-likes').content = picturesData[i].likes;
  requestToObject.appendChild();
}

var fragment = document.createDocumentFragment(); //или нам тут нужно найти через querySelector #pictures и записать это в контент его?
for (var i = 0; i < myArray.length; i++) {
  fragment.appendChild(picturesElement(myArray[i]));
}
requestToObject.appendChild(fragment);




//----------------------------------------------------------------------------------------------------------------------------------
document.querySelector('.upload-overlay').classList.add('hidden'); //но у него уже есть hidden!!
//4----------------------------------------------------------------------------------------------------------------------------------
document.querySelector('.gallery-overlay').classList.remove('hidden');
document.querySelector('.gallery-overlay').content;


//'gallery-overlay-image'
//'gallery-overlay-controls-like'
//'gallery-overlay-controls-comments'

//5---------------------------------------------------------------------------------------------------------------------------------

Кароче я запутался нахрен. :(
