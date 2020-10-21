function convertTo(value, str) {
    switch (str) {
        case "Meters":
            let meter = 0.305*value;
            return `${meter} m`;
            break;
        case "Feet":
            let feet = 0.305*value;
            return `${feet} feet`;
            break;
    }
}

console.log(convertTo(1,"Feet"));