let clickCount = 0;

document.querySelector('h4').onclick = function() {
    clickCount++;
    let websites = [
        'https://ubg365.github.io/',
        'https://sites.google.com/view/77-unblocked-games',
        'https://C4355.com'
    ];

    let randomIndex = Math.floor(Math.random() * websites.length);
    let randomWebsite = websites[randomIndex];

    if (clickCount <= websites.length) {
        window.open(randomWebsite, '_blank');
    } else {
        alert('No more websites to open!');
    }
};