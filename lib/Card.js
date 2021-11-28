class Card {
    constructor(employeeObj) {
        Object.assign(this, employeeObj);
        this.getExtraInfo = employeeObj.getExtraInfo();
    }
    render() {
        const cardHTMLString = `<!------   Card -------->
        <div class="card">
        <div class="card-header bg-primary text-white">
            <h3>
                ${this.name}
            </h3>
            <h4>
                <i class="bi-globe"></i>${this.role}
            </h4>
        </div>
        <div class="card-body bg-light text-dark">
            <div class="container card-body bg-light text-dark">
                <div class="row bg-white text-dark">
                    <div class="col-12  border border-light">
                        <p class="cell">ID: ${this.id}</p>
                    </div>
                </div>
                <div class="row bg-white text-dark">
                    <div class="col-12  border border-light">
                        <p class="cell">Email: <a href="mailto:${this.email}">${this.email}</a></p>
                    </div>
                </div>
                <div class="row bg-white text-dark">
                    <div class="col-12  border border-light">
                        <p class="cell"> ${this.extraInfoProper}: ${this.getExtraInfo}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--APPEND HERE-->`
        return cardHTMLString;
    }
}

module.exports = Card;