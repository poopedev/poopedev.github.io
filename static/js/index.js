const bgMusic = document.getElementById('bg-music');
const fart = document.getElementById('fart');
const connFart = document.getElementById('connFart');
const disconFart = document.getElementById('disconFart');
const logo = document.getElementById('logo');
const crazyElements = document.querySelectorAll('.crazy');
const speechBubble = document.getElementById('bubble');
const connectWallet = document.getElementById('connect-wallet');
const cookiePopup = document.getElementById('cookie-popup')
const acceptCookies = document.getElementById('accept-cookies')
const vibratables = document.querySelectorAll('.vibratable');

const helloCockSucker = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡶⠟⠛⠉⠙⠻⢿⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⣀⣤⣶⠿⠯⠤⠄⠀⠀⠀⠀⠀⠙⢿⣄⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣛⣻⢯⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠞⠋⠉⠀⠉⠛⠿⡦⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠭⣍⣉⠛⢾⣝⡂⠀⠀⠀⠀⣠⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡆⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣇⠀⣰⣿⣿⣿⣿⡙⢂⣠⠴⠿⠥⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣏⠳⢿⣿⣿⣿⢛⡇⠋⠡⢒⣒⣒⣒⣛⡛⠦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠘⡷⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⣿⠁⠘⠈⠀⠀⣈⡙⠳⠞⣠⡴⠊⠉⢉⣽⣦⣌⠉⠓⠦⣍⠳⡄⠀⠀⠀⠀⠀⠀⢹⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⡇⠀⠀⠀⠀⡤⠞⠛⠓⠀⢧⣙⠲⢤⣾⣿⣽⣿⣿⡷⢤⡈⢧⠹⡄⠀⠀⠀⠀⠀⠀⡇
⠀⠀⠀⠀⠀⣀⣴⠾⠻⢶⣄⠀⠀⠀⠀⢰⣿⣇⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠓⢦⣌⠙⠛⠛⠛⠓⠒⠛⠒⠷⠇⠀⠀⠀⠀⠀⠀⣿
⠀⡶⠶⠒⠛⣫⣥⡴⠒⠂⢻⣧⠀⠀⠀⣸⣇⠈⢷⡈⠓⠦⣄⡀⠀⠀⠀⠀⠀⠈⣧⠀⠈⠉⠓⠒⠒⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⠀⠀⢀⣇⠠⠤⣾⠻⠿⠶⠶⣿⠛⢦⡀⠉⠳⣄⡀⠉⠙⠲⠤⣄⣀⡀⠈⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⡿⠛⠶⠶⠒⠚⠛⠙⢦⣼⠃⠀⠀⠀⠀⢿⠀⠈⠙⠦⣄⠀⠙⠓⢦⣄⣀⠀⠈⠉⠓⠲⠦⠤⠤⣤⣀⣠⣄⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇
⣿⣄⢀⣀⣠⡤⠤⠤⢾⡏⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠈⠙⠲⠦⣤⣀⣈⠉⠛⠒⠶⠦⠤⠤⠤⣤⠄⠉⣻⠆⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀
⣽⡿⠉⠁⠀⠀⠀⢀⣼⠁⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠓⠒⠒⠒⠒⠒⠒⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀
⠙⣷⣀⣀⣤⠴⠒⠋⢹⣧⣄⣀⣀⣀⣀⣀⣹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡏⠀
⠀⠸⣿⡁⠀⠀⣀⣴⠟⠉⠉⠉⠉⠉⠉⠛⢻⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠃⠀
⠀⠀⠙⠛⠛⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣸⣧⡀⣀⣀⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⠒⠉⠉⠉⠁⠀⠀⠉⠉⠉⠉⠉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


💻 Ah shit, you opened the console...  

What now?  
Gonna SQL inject a div tag?  
Reverse-engineer our fart engine?

Looking for admin panel?  
We gotchu, king: https://poope.org/admin.html
`

console.log(helloCockSucker)

let crazyMode = false;
let alreadyFarted = false;
let alreadyFartedWeak = false
let clickLocked = false;
const speechQueue = [];

if (localStorage.getItem('cookieAccepted')) {
    cookiePopup.classList.add('hidden');
}

acceptCookies.addEventListener('click', (event) => {
    cookiePopup.classList.add('hidden');
    localStorage.setItem('cookieAccepted', 'true');
});

// Don't you dare to run this on your gf, sick bastard
const vibrate = () => {
    vibratables.forEach((item) => {
        item.classList.toggle('vibrate')
    })
}


connectWallet.addEventListener('click', (event) => {
    if (alreadyFartedWeak) {
        speechBubble.innerHTML = 'wallet disconnected<br>or whatever...'
        connectWallet.innerHTML = '<i class="fas fa-wallet"></i> Connect'
        logo.src = '/static/images/poope.png'
        alreadyFartedWeak = false
        disconFart.muted = false;
        disconFart.volume = 1.0;
        disconFart.play()
    } else {
        connFart.muted = false;
        connFart.volume = 1.0;
        connFart.play()
        speechBubble.innerHTML = 'lmao...wallet connected<br>i guess'
        connectWallet.innerHTML = 'Disconnect'
        logo.src = '/static/images/poope-sun.png'
        alreadyFartedWeak = true
    }
})

const scheduleSpeech = (text, delay, callback) => {
    speechQueue.push({text, delay, callback});
};

speechBubble.addEventListener('mouseenter', (event) => {
    const originalHtml = event.target.innerHTML
    if (event.target.textContent.includes('click')) {
        speechBubble.addEventListener('mouseleave', (event) => {
            event.target.innerHTML = originalHtml
        })
        event.target.innerHTML = 'bruh...';
    }
})

const runSpeechQueue = () => {
    let totalDelay = 0;
    for (const {text, delay, callback} of speechQueue) {
        totalDelay += delay;
        setTimeout(() => {
            speechBubble.innerHTML = text;
            if (callback) callback();
        }, totalDelay);
    }
    speechQueue.length = 0;
};

const toggleCrazyEffects = (state) => {
    crazyElements.forEach(el => el.classList.toggle('rainbow', state));

    if (state) {
        logo.classList.add('animate-spin-slow', 'go-crazy');
        bgMusic.muted = false;
        bgMusic.volume = 1.0;
        bgMusic.play();
        fart.pause();
        vibrate()
    } else {
        logo.classList.remove('animate-spin-slow', 'go-crazy');
        bgMusic.muted = true;
        bgMusic.pause();
        fart.pause();
        vibrate()
    }
};

const handleFart = () => {
    if (!alreadyFarted) {
        clickLocked = true
        speechBubble.textContent = "3...";

        setTimeout(() => {
            speechBubble.textContent = "2...";
            setTimeout(() => {
                speechBubble.textContent = "1...";
            }, 3150)
        }, 3000)

        fart.muted = false;
        fart.play();
        bgMusic.pause();
        alreadyFarted = true;

        setTimeout(() => {
            speechBubble.innerHTML = "ritual complete. <br>now click 4 real majik.";
            clickLocked = false
        }, 8500);

        return true;
    }
    return false;
};

const memeImages = [
    'static/images/soyboy.gif',
    'static/images/angry-wojak.gif',
    'static/images/doge.gif'
];

const memeClasses = {
    'static/images/angry-wojak.gif': 'doge mx-auto max-w-[50px] inline-block',
    'static/images/soyboy.gif': 'doge mx-auto max-w-[65px] inline-block',
    'static/images/doge.gif': 'doge mx-auto max-w-[35px] inline-block'
};

const flippy = () => ['scale-x-[-1]', ''][Math.random() < 0.5 ? 0 : 1];

function spawnMemes(count = 50, durationMs = 30000) {
    const interval = durationMs / count;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const src = memeImages[Math.floor(Math.random() * memeImages.length)];
            const img = document.createElement('img');
            img.src = src;

            const customClass = memeClasses[src];
            img.className = `${customClass} fixed z-50 pointer-events-none ` + flippy();

            const size = Math.floor(Math.random() * 30) + 30;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            img.style.width = `${size}px`;
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.position = 'fixed';
            img.style.transform += ' translate(-50%, -50%)';
            img.style.transition = 'opacity 2s ease-out';
            img.style.opacity = '1';

            document.body.appendChild(img);

            setTimeout(() => {
                img.style.opacity = '0';
                setTimeout(() => img.remove(), 2000);
            }, 30000 + Math.random() * 2000);
        }, i * interval);
    }
}

const startCrazyShit = () => {
    scheduleSpeech("wait…", 0);
    scheduleSpeech("wait wait... <br>almost there.", 7000);
    scheduleSpeech("vibe shit, innit?", 8000, () => spawnMemes(45, 30000));

    runSpeechQueue();
};

logo.addEventListener('click', () => {
    if (clickLocked) return;

    if (handleFart()) return;

    crazyMode = !crazyMode;
    toggleCrazyEffects(crazyMode);

    if (crazyMode) {
        startCrazyShit();
    }
});
