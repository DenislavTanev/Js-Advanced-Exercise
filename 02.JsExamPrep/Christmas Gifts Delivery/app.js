function solution() {
    const cards = document.querySelectorAll('.card');
    const giftInput = cards[0].children[1].children[0];
    const listOfGifts = cards[1].children[1];
    const sentGifts = cards[2].children[1];
    const discardedGifts = cards[3].children[1];
 
    function domGenerator(type, [...content], [...props]) {
        const element = document.createElement(type);
        if (content.length !== 0) {
            if (content[0] === 'text') {
                element.textContent = content[1];
                if (content[2]) {
                    [...content[2]].map((current) => element.appendChild(current))
                }
            } else {
                content.map((current) => element.appendChild(current))
            }
        }
        if (props[0] === '.') {
            element.className = props[1];
        } else if (props[0] === '#') {
            element.id = props[1];
        }
        return element;
    }
 
    function add(e) {
        e.preventDefault();
        const gift = giftInput.value;
        if (!gift) { return }
 
        const discardBtn = domGenerator('button', ['text', 'Discard'], ['#', 'discardButton']);
        const sendBtn = domGenerator('button', ['text', 'Send'], ['#', 'sendButton']);
        const li = domGenerator('li', ['text', gift, [sendBtn, discardBtn]], ['.', 'gift']);
 
        listOfGifts.appendChild(li);
 
        [...listOfGifts.querySelectorAll('li')]
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listOfGifts.appendChild(li));
 
        giftInput.value = '';
    }
 
    function send(e) {
        const gift = e.target.parentNode;
        const sendBtn = e.target.parentNode.children[0];
        const discardBtn = e.target.parentNode.children[1];
        gift.removeChild(sendBtn);
        gift.removeChild(discardBtn);
        sentGifts.appendChild(gift);
    }
 
    function discard(e) {
        const gift = e.target.parentNode;
        const sendBtn = e.target.parentNode.children[0];
        const discardBtn = e.target.parentNode.children[1];
        gift.removeChild(sendBtn);
        gift.removeChild(discardBtn);
        discardedGifts.appendChild(gift);
    }
 
    document.getElementsByClassName('container')[0].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.id === 'discardButton') {
                discard(e);
            } else if (e.target.id === 'sendButton') {
                send(e);
            } else {
                add(e);
            }
        }
    })
}