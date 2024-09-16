const rooms = [
    {
        name: '104',
        capacity: 30,
        numWhiteboards: 3,
    },
    {
        name: 'BTU',
        capacity: 30,
        numWhiteboards: 2,
    },
];

rooms.forEach(printRoomInfo);

class Room {
    constructor(roomName, cap, white) {
        this.name = roomName;
        this.capacity = cap;
        this.numWhiteboards = white;
    }

    printRoomInfo(room) {
        console.log(`Hello, I am room "${this.name}"! I can hold people ${this.capacity} and have whiteboards ${this.numWhiteboards}`);
    }
};

const classrooms = [
    new Room('104', 30, 3),
    new Room('BTU', 30, 2)
]

classrooms.forEach(room => room.printRoomInfo());