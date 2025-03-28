const bgMusic = document.getElementById('bg-music');
const fart = document.getElementById('fart');
const connFart = document.getElementById('connFart');
const disconFart = document.getElementById('disconFart');
const logo = document.getElementById('logo');
const crazyElements = document.querySelectorAll('.crazy');
const vibrates = document.querySelectorAll('.vibrate');
const speechBubble = document.getElementById('bubble');
const connectWallet = document.getElementById('connect-wallet');

let crazyMode = false;
let alreadyFarted = false;
let alreadyFartedWeak = false
let clickLocked = false;
const speechQueue = [];


connectWallet.addEventListener('click', (event) => {
    if (alreadyFartedWeak) {
        speechBubble.textContent = 'wallet disconnected'
        connectWallet.textContent = 'Connect Wallet'
        alreadyFartedWeak = false
        disconFart.muted = false;
        disconFart.volume = 1.0;
        disconFart.play()
    } else {
        connFart.muted = false;
        connFart.volume = 1.0;
        connFart.play()
        speechBubble.textContent = 'lmao...wallet connected'
        connectWallet.textContent = 'Disconnect Wallet'
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
        event.target.innerHTML = 'bruh... <br>click on my image';
    }
})

const runSpeechQueue = () => {
    let totalDelay = 0;
    for (const {text, delay, callback} of speechQueue) {
        totalDelay += delay;
        setTimeout(() => {
            speechBubble.textContent = text;
            console.log(callback)
            if (callback) callback();
        }, totalDelay);
    }
    speechQueue.length = 0;
};

const toggleCrazyEffects = (state) => {
    crazyElements.forEach(el => el.classList.toggle('rainbow', state));
    vibrates.forEach(v => v.classList.toggle('vibrate-crazy', state));

    if (state) {
        logo.classList.add('animate-spin-slow', 'crazy-scale');
        bgMusic.muted = false;
        bgMusic.volume = 1.0;
        bgMusic.play();
        fart.pause();
    } else {
        logo.classList.remove('animate-spin-slow', 'crazy-scale');
        bgMusic.muted = true;
        bgMusic.pause();
        fart.pause();
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
    'static/images/soyboy.gif': 'doge mx-auto max-w-[55px] scale-x-[-1] inline-block',
    'static/images/doge.gif': 'doge mx-auto max-w-[35px] crazy inline-block scale-x-[-1]'
};

function spawnMemes(count = 50, durationMs = 30000) {
    const interval = durationMs / count;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const src = memeImages[Math.floor(Math.random() * memeImages.length)];
            const img = document.createElement('img');
            img.src = src;

            const customClass = memeClasses[src];
            img.className = `${customClass} fixed z-50 pointer-events-none`;

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
    scheduleSpeech("wait… coolest part drops soon.", 0);
    scheduleSpeech("wait wait... almost there.", 7000);
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
