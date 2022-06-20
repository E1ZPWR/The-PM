// link btn at the end od bio paragraph
const KReadMore = document.querySelector('#KReadMore');
const PReadMore = document.querySelector('#PReadMore');

// div paragraph for the long story
const kdiv = document.querySelector('#kdiv');
const pdiv = document.querySelector('#pdiv');

//function to show the long story
const readMoreBtnK = () => {
    /**
     * 默认按键字为'Read More'
     * 如果长故事为不显示（默认情况），则显示长故事，并且改变按键字为'Read Less'
     */
    kdiv.style.display === 'none'
        ? (kdiv.style.display = 'block') &&
          (KReadMore.innerHTML = 'Read Less')
        : //此时长故事已经显示，再次点击，则不显示，并且改变按键字为'Read More'
          (kdiv.style.display = 'none') &&
          (KReadMore.innerHTML = 'Read More');
};

const readMoreBtnP = () => {
    pdiv.style.display === 'none'
        ? (pdiv.style.display = 'block') &&
          (PReadMore.innerHTML = 'Read Less')
        : //此时长故事已经显示，再次点击，则不显示，并且改变按键字为'Read More'
          (pdiv.style.display = 'none') &&
          (PReadMore.innerHTML = 'Read More');
};

// Event listener
KReadMore.addEventListener('click', readMoreBtnK);
PReadMore.addEventListener('click', readMoreBtnP);
