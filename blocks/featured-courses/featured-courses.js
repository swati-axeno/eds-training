export default function decorate(block){

 const cards =  block.querySelectorAll(`:scope > div`)   ;

 cards.forEach(card => {
    card.classList.add('course-card');
    const items = card.children;
    items[0].classList.add('course-image');
    items[1].classList.add('course-title');
    items[2].classList.add('course-description');
    items[3].classList.add('course-duration');
    items[4].classList.add('course-button');
    console.log(card);
 });
}