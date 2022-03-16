



function handleJSRouting(event) {
    window.location.href = "https://www.facebook.com/lashesbyserenagene/";
    console.log("Button clicked");
}



function readyDOM() {
    let el = document.querySelector("#bookBtnJS");
    el.addEventListener('click', handleJSRouting);
    console.log(el);
}

readyDOM();



// let activateBtn = document.querySelector('#activate-btn')
//   activateBtn.addEventListener('click', activateNodes);