// ========== EDITABLE RESPONSES FOR "NO" BUTTON ==========

// Edit these responses below - they show when user clicks "Hindi"

const noResponses = [

    {

        gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjgyODdhbHI3aDhtMXJpZ3V4dnUweDQ1YW1ldmc2MmkycDFpZjFmZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/96DeW8wUdpN96/giphy.gif',

        title: 'Duda boi',

        text: "Oo kaya."

    },

    {

        gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjl5dW96YnR3cjAxYzhsdnU2azdmdTIzMmgyampheGdmdDVlbmZ6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u7A8q8nbNuJqcGCeU6/giphy.gif',

        title: 'Wehhh, Hindi ba',

        text: "Oo kaya."

    },

    {

        gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJiN2hnNnVjcWpka3p0b2RxMGtyeGJzamY4dnF4cWQwdHViMWpwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BXHtzkBTqd9dAemgCL/giphy.gif',

        title: 'Oo na, boi.',

        text: "Oo na kasi"

    },

    {

        gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWswenpid3FkOXA3MTNjZ3BjZW81cXE0aW90M3JvbnN1dHJvZDkwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QGzPdYCcBbbZm/giphy.gif',

        title: 'Sabi nang oo eh',

        text: "Oo na nga kasiiii"

    },

    {

        gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGIyNG92a2RmemJma2ZndWhreGc5a2RwcThpbm1qZ29sMDQ5bXVzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vPzbDN4rBxuvtpSpzF/giphy.gif',

        title: 'Oo na di ko sasabihin sa iba',

        text: "Oo na, Oo na, Oo na."

    },

    {

        gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3A4cWcyOWZ6ZXo2eHpnMGU0NndzOG1hYWRlYmIxOGk3YXRoZmZzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/In0Lpu4FVivjISX9HT/giphy.gif',

        title: 'Yes na boi',

        text: "Kung ayaw mo sapakan na lang"

    }

];

// =========================================================



const yesBtn = document.getElementById('yes-btn');

const noBtn = document.getElementById('no-btn');

const initialScreen = document.getElementById('initial-screen');

const successScreen = document.getElementById('success-screen');



// Elements we'll update when user says "No"

const initialGif = initialScreen.querySelector('.gif');

const initialTitle = initialScreen.querySelector('h1');

const initialText = initialScreen.querySelector('p');



let noIndex = 0;



// Logic for the "No" button running away (kept inside the button container)

noBtn.addEventListener('click', handleNoAction);



function handleNoAction() {

    moveButtonWithinContainer();

    showNextNoResponse();

}



function moveButtonWithinContainer() {

    const container = document.querySelector('.btn-container');

    const containerRect = container.getBoundingClientRect();

    const btnRect = noBtn.getBoundingClientRect();



    // compute max left/top so button stays fully inside container

    const maxLeft = containerRect.width - btnRect.width;

    const maxTop = containerRect.height - btnRect.height;



    // fallback: if container is very small, don't move

    if (maxLeft <= 0 || maxTop <= 0) return;



    const left = Math.random() * maxLeft;

    const top = Math.random() * maxTop;



    noBtn.style.position = 'absolute';

    noBtn.style.left = `${left}px`;

    noBtn.style.top = `${top}px`;

}



function showNextNoResponse() {

    const resp = noResponses[noIndex % noResponses.length];

    initialGif.src = resp.gif;

    initialTitle.textContent = resp.title;

    initialText.textContent = resp.text;

    noIndex += 1;

}



// Logic for the "Yes" button

yesBtn.addEventListener('click', () => {

    // Hide initial screen, show success screen

    initialScreen.classList.add('hidden');

    successScreen.classList.remove('hidden');



    // Trigger Confetti

    fireConfetti();

});



function fireConfetti() {

    const duration = 3 * 1000;

    const animationEnd = Date.now() + duration;

    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };



    function randomInRange(min, max) {

        return Math.random() * (max - min) + min;

    }



    const interval = setInterval(function() {

        const timeLeft = animationEnd - Date.now();



        if (timeLeft <= 0) {

            return clearInterval(interval);

        }



        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random

        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));

        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));

    }, 250);

}