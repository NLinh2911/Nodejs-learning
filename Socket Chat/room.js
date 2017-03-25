// ROOM FUNCTION CONSTRUCTOR 

function Room(id, name, creatorID) {
    this.id = id; // room ID -> shortid.generate()
    this.name = name; // client set in front-end -> server receives data from front-end
    this.creator = creatorID; // client's unique ID/token
    this.clients = []; // array of clients ID 
    this.quantity = 0;
    // this.limit = 10;
    // this.status = "available";
    // this.private = false;
};

// addClient when a new client joins the room
Room.prototype.addClient = function (clientID) {
    //   if (this.status === "available") {
    //     this.clients.push(clientID);
    //   }
    this.clients.push(clientID);
    this.quantity ++;
};
// removeClient when a client leaves the room

Room.prototype.removeClient = function (clientID) {
    let clientIndex = -1;
    for (let i = 0; i < this.clients.length; i++) {
        if (this.clients[i].id === clientID) {
            clientIndex = i;
            break;
        }
    }
    this.clients.splice(clientIndex, 1);
    this.quantity --;
};
/*
Room.prototype.isAvailable = function() {
  return this.available === "available";
};

Room.prototype.isPrivate = function() {
  return this.private;
};
*/

// ES6 CLASS
// PUBLIC CHAT ROOM CLASS
class ROOM {
    constructor (id, name, creatorID) {
        this.id = id; // room ID -> node-uuid
        this.name = name; // client set in front-end -> server receives data from front-end
        this.creator = creatorID; // client's unique ID/token
        this.clients = []; // array of clients ID 
        this.quantity = 0;
    }
    //
    addClient (clientID) {
        this.clients.push(clientID);
        this.quantity ++;
    }

    removeClient (clientID) {
        let clientIndex = -1;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i] === clientID) {
                clientIndex = i;
                break;
            }
        }
        this.clients.splice(clientIndex, 1);
        this.quantity --;
    }

    changeName (newRoomName) {
        this.name = newRoomName;
    }
}

module.exports = ROOM; 

// PRIVATE CHAT ROOM CLASS
class PRIVATEROOM {
    constructor (id, name, creatorID) {
        this.id = id; // room ID -> node-uuid
        this.name = name; // client set in front-end -> server receives data from front-end
        this.creator = creatorID; // client's unique ID/token
        this.clients = []; // array of clients ID 
        this.quantity = 0;
    }
    //
    addClient (clientID) {
        this.clients.push(clientID);
        this.quantity ++;
    }

    removeClient (clientID) {
        let clientIndex = -1;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i] === clientID) {
                clientIndex = i;
                break;
            }
        }
        this.clients.splice(clientIndex, 1);
        this.quantity --;
    }

    changeName (newRoomName) {
        this.name = newRoomName;
    }
}

module.exports = ROOM; 