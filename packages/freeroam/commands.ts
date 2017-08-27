import {isVehicleModelValid} from "./Helpers/VehicleModels";

function vehCommandHandler(player: PlayerMp, cmd: string, modelName: string) {
    modelName = modelName.trim();
    if (modelName.length === 0) {
        player.outputChatBox(`Command syntax: /` + cmd + ` [vehicle_name]`);
        return;
    }

    if (!isVehicleModelValid(modelName)) {
        player.outputChatBox(`Command syntax: Invalid vehicle model`);
        return;
    }

    let pos = player.position;
    pos.x += 2;

    if (!(player as any).customData.vehicle) {
        (player as any).customData.vehicle = mp.vehicles.new(mp.joaat(modelName), pos);
        (player as any).customData.vehicle.dimension = player.dimension;
        player.putIntoVehicle((player as any).customData.vehicle, 0);
        return;
    }

    // If player has vehicle - change vehicleModel.
    (player as any).customData.vehicle.position = pos;
    (player as any).customData.vehicle.model = mp.joaat(modelName);
    (player as any).customData.vehicle.dimension = player.dimension;
}
mp.events.addCommand('veh', vehCommandHandler);
mp.events.addCommand('vehicle', vehCommandHandler);
mp.events.addCommand('car', vehCommandHandler);

function skinCommandHandler(player: PlayerMp, cmd: string, skinName: string) {
    skinName = skinName.trim();
    if (skinName.length === 0) {
        player.outputChatBox(`Command syntax: /skin [skin_name]`);
        return;
    }

    player.model = mp.joaat(skinName);
}
mp.events.addCommand('skin', skinCommandHandler);

function fixCommandHandler(player: PlayerMp) {
    if (!player.vehicle) {
        player.outputChatBox(`Error: you are not in the vehicle!`);
        return;
    }

    player.vehicle.repair();
}
mp.events.addCommand('fix', fixCommandHandler);
mp.events.addCommand('fixcar', fixCommandHandler);
mp.events.addCommand('fixveh', fixCommandHandler);

function flipCommandHandler(player: PlayerMp) {
    if (!player.vehicle) {
        player.outputChatBox(`Error: you are not in the vehicle!`);
        return;
    }

    let rotation = player.vehicle.rotation;
    rotation.y = 0;
    player.vehicle.rotation = rotation;
}
mp.events.addCommand('flip', flipCommandHandler);

function weaponCommandHandler(player: PlayerMp, cmd: string, weaponName: string) {
    weaponName = weaponName.trim();
    if (weaponName.length === 0) {
        player.outputChatBox(`Command syntax: /weapon [weapon_name]`);
        return;
    }

    player.giveWeapon(mp.joaat(`weapon_${weaponName}`), 100);
}
mp.events.addCommand('weapon', weaponCommandHandler);

function warpCommandHandler(player: PlayerMp, cmd: string, playerIdRaw: string) {
    playerIdRaw = playerIdRaw.trim();
    if (playerIdRaw.length === 0) {
        player.outputChatBox(`Command syntax: /warp [player_id]`);
        return;
    }

    let playerId = parseInt(playerIdRaw);
    if (isNaN(playerId)) {
        player.outputChatBox(`Warp: player id need to be number!`);
        return;
    }

    let target = mp.players.at(playerId);
    if (!target) {
        player.outputChatBox(`Warp: player with such id not found!`);
        return;
    }

    let targetPosition = target.position;
    targetPosition.x += 1;
    player.position = targetPosition;
    // TODO: Chat messages
}
mp.events.addCommand('warp', warpCommandHandler);
mp.events.addCommand('goto', warpCommandHandler);

function tpCommandHandler(player: PlayerMp, cmd: string, xRaw: string, yRaw: string, zRaw: string) {
    let x = parseFloat(xRaw);
    let y = parseFloat(yRaw);
    let z = parseFloat(zRaw);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        player.outputChatBox(`Command syntax: /tp [x] [y] [z]`);
        return;
    }

    player.position = new mp.Vector3(x, y, z);
}
mp.events.addCommand('tp', tpCommandHandler);


mp.events.addCommand('kill', (player: PlayerMp) => {
    player.health = 0;
});

mp.events.addCommand('hp', (player: PlayerMp) => {
    player.health = 100;
});

mp.events.addCommand('armour', (player: PlayerMp) => {
    player.armour = 100;
});

mp.events.addCommand('pos', (player: PlayerMp) => {
    let pos = player.position;
    console.log(pos.x + ", " + pos.y + ", " + pos.z + "");
});