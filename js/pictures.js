'use strict';
var twentyFive = 25;

var COMMENTS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
};

var generateCommets = function () {
  var commentsArray = [];
  for (i = 0; i < randomInteger(1, 2); i++) {
    commentsArray.push(COMMENTS_ARRAY[randomInteger(0, COMMENTS_ARRAY.length)]);
  }
  return commentsArray;
};

var generatePictures = function () {
  var myArray = [];

  for (var i = 1; i <= twentyFive; i++) {
    var obj = {};
    obj.url = 'photos/' + i + '.jpg';
    obj.likes = randomInteger(15, 200);
    obj.comments = generateCommets();
    myArray.push(obj);
  }
  return myArray;
};

var picturesPlace = document.querySelector('.pictures');
var templateElement = document.querySelector('#picture-template').content;
var picturesData = generatePictures();
var fragment = document.createDocumentFragment();

for (var i = 0; i < picturesData.length; i++) {
  var picturesElement = templateElement.cloneNode(true);
  picturesElement.querySelector('img').src = picturesData[i].url;
  picturesElement.querySelector('.picture-comments').content = picturesData[i].comments;
  picturesElement.querySelector('.picture-likes').content = picturesData[i].likes;
  fragment.appendChild(picturesElement);
}

picturesPlace.appendChild(fragment);
// document.querySelector('.upload-overlay').classList.add('hidden');
// document.querySelector('.gallery-overlay').classList.remove('hidden');
document.querySelector('.gallery-overlay-image').src = picturesData[1].url;
document.querySelector('.likes-count').textContent = picturesData[1].likes;
document.querySelector('.comments-count').textContent = picturesData[1].comments.length;

var picturesBox = document.querySelector('.pictures');
var pictureElement = picturesBox.querySelector('.picture');
var galleryElement = document.querySelector('.gallery-overlay');
var galleryClose = document.querySelector('.gallery-overlay-close');

pictureElement.addEventListener('click', function() {
  // galleryElement.classList.remove('hidden');
  console.log(25);
});

galleryClose.addEventListener('click', function() {
  // galleryElement.classList.add('hidden');
  console.log(56);
});

console.log(picturesBox);
console.log(pictureElement);
console.log(galleryElement);
console.log(galleryClose);
