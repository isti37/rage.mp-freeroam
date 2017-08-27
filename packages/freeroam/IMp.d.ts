type EntityType = "player" | "vehicle" | "object" | "pickup" | "blip";

interface Mp {
    players: PlayerMpPool;
    vehicles: VehicleMpPool;
    _vehicles: VehicleMpPool;
    objects: ObjectMpPool;
    pickups: PickupMpPool;
    blips: BlipMpPool;
    events: EventMpPool;
    environment: EnvironmentMp;
    markers: MarkerMpPool;
    colshapes: ColshapeMpPool;

    Vector3: Vector3;
 
    joaat(str: string): number;
    joaat(strs: string[]): number[];
}
 
interface EntityMp {
    id: string;
    dimension: number;
    type: EntityType;
    model: number;
    position: Vector3; // | [number, number, number];
}
 
interface PlayerMp extends EntityMp {
    name: string;
    heading: number;
    health: number;
    armour: number;
    eyeColour: number;
    readonly action: string;
    readonly isJumping: boolean;
    readonly isInCover: boolean;
    readonly isClimbing: boolean;
    readonly isEnteringVehicle: boolean;
    readonly isLeavingVehicle: boolean;
    readonly vehicle: VehicleMp;
    readonly seat: VehicleSeatMp;
    readonly isAiming: boolean;
    readonly aimTarget: PlayerMp;
    readonly ping: number;
    readonly ip: string;
 
    kick(reason: string): void;
    ban(reason: string): void;
    spawn(position: Vector3): void;
    giveWeapon(weaponHash: number, ammo: number): void;
    giveWeapon(weaponHashes: number[], ammo: number): void;
    outputChatBox(message: string): void;
    getClothes(component: ClothesComponentMp): {
        readonly drawable: number,
        readonly texture: number,
        readonly palette: number };
    setClothes(component: ClothesComponentMp, drawable: number, texture: number, palette: number): void;
    setHairColour(firstColor: number, secondColor: number): void;
    setFaceFeature(index: number, value: number): void;
    setHeadBlend(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number,
        skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number): void;
    getProp(prop: PlayerPropMp): { readonly drawable: number, readonly texture: number };
    setProp(prop: PlayerPropMp, drawable: number, texture: number): void;
    putIntoVehicle(vehicle: VehicleMp, seat: VehicleSeatMp): void;
    removeFromVehicle(): void;
    invoke(...args: any[]): void;
    call(eventName: string, ...args: any[]): void;
    notify(message: string): void;
}
 
interface VehicleMp extends EntityMp {
    rotation: Vector3;
    readonly velocity: Vector3;
    readonly siren: boolean;
    readonly horn: boolean;
    engine: boolean;
    readonly highbeams: boolean;
    engineHealth: number;
    bodyHealth: number;
    locked: boolean;
    readonly steerAngle: number;
    readonly rocketBoost: boolean;
    readonly brake: boolean;
    numberPlate: string;
 
    repair(): void;
    destroy(): void;

    getColourRGB(): number[];
    setColourRGB(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number): void;
}
 
interface EventMp extends EntityMpPool<null> {
   
}
 
interface ObjectMp extends EntityMp {
    rotation: Vector3;

    destroy(): void;
}
 
interface PickupMp extends EntityMp {
 
}
 
interface BlipMp extends EntityMp {
    radius: number;
}
 
interface CheckpointMp extends EntityMp {
    destroy(): void;
}

interface MarkerMp extends EntityMp {
    destroy(): void;
}

interface ColshapeMp extends EntityMp {
    destroy(): void;
}
 
interface EntityMpPool<TEntity> {
    readonly length: number;
    readonly size: number;
 
    at(id: number): TEntity;
    forEach(entity: (entity: TEntity) => void): void;
    toArray(): TEntity[];
}
 
interface PlayerMpPool extends EntityMpPool<PlayerMp> {
    broadcast(text: string): void;
    broadcastInRange(position: Vector3, text: string): void;
    broadcastInRange(position: Vector3, dimension: number, text: string): void;

    call(eventName: string, ...args: any[]): void;
}
 
interface VehicleMpPool extends EntityMpPool<VehicleMp> {
    "new"(vehicleHash: number, position: Vector3): VehicleMp;
}
 
interface ObjectMpPool extends EntityMpPool<ObjectMp> {
    "new"(objectHash: number, position: Vector3, rotation: Vector3): ObjectMp;
}
 
interface PickupMpPool extends EntityMpPool<PickupMp> {
   
}

interface MarkerMpPool extends EntityMpPool<MarkerMp> {
    "new"(type: number, position: Vector3, rotation: Vector3, direction: Vector3, radius: number,
          red: number, green: number, blue: number, alpha: number, visible?: boolean, dimension?: number): MarkerMp;
}

interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
    newSphere(x: number, y: number, z: number, range: number): ColshapeMp;
}
 
interface BlipMpPool extends EntityMpPool<BlipMp> {
    "new"(position: Vector3): BlipMp;
    "new"(position: Vector3, radius: number): BlipMp;
    "new"(entityToAttachTo: EntityMp): BlipMp;
}
 
interface EventMpPool extends EntityMpPool<EventMp> {
    add(eventName: string, callback: Function): EventMp;
    add(eventArray: any): EventMp;
    call(eventName: string, ...args: any[]): EventMp;

    addCommand(cmd: string, callback: Function): void;
}
 
interface EnvironmentMp {
    weather: string;
    time: TimeMp;
}
 
interface Vector3 {
    new(x: number, y: number, z: number): Vector3;
 
    x: number;
    y: number;
    z: number;
}
 
interface TimeMp {
    hour: number;
    minute: number;
    second: number;
}
 
declare enum ClothesComponentMp {
    Head = 0,
    Beard = 1,
    Hair = 2,
    Torso = 3,
    Legs = 4,
    Hands = 5,
    Foot = 6,
    None = 7,
    Accessories1 = 8,
    Accessories2 = 9,
    Mask = 10,
    Decals = 11,
    Auxiliary = 12
}
 
declare enum PlayerPropMp {
    Helmet = 0,
    Glasses = 1,
    EarAccessory = 2
}
 
declare enum VehicleSeatMp {
    Driver = 0,
    Passenger1 = 1,
    Passenger2 = 2,
    Passenger3 = 3
}
 
//noinspection ES6ConvertVarToLetConst
declare var mp: Mp;