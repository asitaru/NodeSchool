const picture = require('cat-picture');
const image = require('lightning-image-poly');
const remote = require('electron').remote;
const fs = require('fs');

picture.remove();
const src = picture.src;


const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

function save () {
    remote.getCurrentWindow().webContents.printToPDF({
        portrait: true
    }, (err,data) => {
        fs.writeFile('annotation.pdf', data, (err) => {
            if(err) alert('error generating pdf!' + err.message);
            else alert('pdf saved!');
        })
    })
};

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 80) save()
});
