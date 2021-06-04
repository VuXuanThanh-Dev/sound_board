
const sounds = ['TaLaCuaNhau', 'MotNha', 'CuoiNhauDi', 'LamVoAnhNhe'];

sounds.forEach( sound => {
    let btn = document.createElement('button');
    btn.innerHTML = sound;
    btn.classList.add('btn');
    let currentSound = document.getElementById(sound);
    btn.addEventListener('click', () => {
        onPause();
        currentSound.play();
    });

    btn.addEventListener('dblclick', () => {
        currentSound.pause();
    })

    document.querySelector('#button').append(btn);
})

function onPause() {
    sounds.forEach(sound => {
        let soun = document.getElementById(sound);
        soun.pause();
        soun.currentTime = 0;
    });
}

