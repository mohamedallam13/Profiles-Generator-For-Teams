class Card {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    rednerCard() {
        return this.name;
    }
}

module.exports = Card;