class Card {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    rednerCard() {
        const cardHTMLString = ` <div class="card">
        <div class="card-header bg-primary text-white">
            <h3>
                Jared
            </h3>
            <h4>
                <i class="bi-globe"></i>Manager
            </h4>
        </div>
        <div class="card-body bg-light text-dark">
            <div class="container card-body bg-light text-dark">
                <div class="row bg-white text-dark">
                    <div class="col-12  border border-light">
                        <p class="cell">ID: 333</p>
                    </div>
                </div>
                <div class="row bg-white text-dark">
                    <div class="col-12  border border-light">
                        <p class="cell">Email: Email</p>
                    </div>
                </div>
                <div class="row bg-white text-dark">
                    <div class="col-12  border border-light">
                        <p class="cell"> Github: Github</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
}

module.exports = Card;