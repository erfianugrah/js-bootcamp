let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = partySize + this.guestCount    
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }

}

restaurant.seatParty(72)
let status = restaurant.checkAvailability(4)
console.log(status)
restaurant.removeParty(5)
console.log(status)