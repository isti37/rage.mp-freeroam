let menu = mp.browsers.new('package://freeroam/index.html');

// Configs.
let vehicles     = JSON.parse(require('freeroam/configs/vehicles.js'));
let skins        = JSON.parse(require('freeroam/configs/skins.js')).Skins;
let weapon       = JSON.parse(require('freeroam/configs/weapon.js'));
// Initialization functions.
let vehiclesInit = require('freeroam/menu_initialization/vehicles.js');
let skinsinit    = require('freeroam/menu_initialization/skins.js');
let weaponInit   = require('freeroam/menu_initialization/weapon.js');
let playersInit  = require('freeroam/menu_initialization/players.js');
// Init events.
require('freeroam/events.js')(menu);

// Init menus, when browser ready.
mp.events.add('browserDomReady', (browser) => {
    if (browser == menu) {
        vehiclesInit(menu, vehicles);
        skinsinit(menu, skins);
        weaponInit(menu, weapon);
        playersInit(menu);

        menu.execute(`insertMessageToChat('Press F2 for open freeroam menu.', 'true');`);
    }
});
