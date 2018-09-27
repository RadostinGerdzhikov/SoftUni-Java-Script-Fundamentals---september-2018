'use strict';
function infoAboutMusic(data) {
    console.log(`Now Playing: ${data[1]} - ${data[0]} [${data[2]}]`);

}

infoAboutMusic(['Number One', 'Nelly', '4:09']);
