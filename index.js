function produceDrivingRange(distance) {
    return function (start, finish) {
        let a = parseInt(start);
        let b = parseInt(finish);
        let range = b - a;

        if (distance > range) {
            return `within range by ${distance - range}`;
        } else if (distance <= range) {
            return `${range - distance} blocks out of range`;
        }
    }
}

function produceTipCalculator(percentage) {
    return function(amount) {
        return amount * percentage;
    }
}

function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}