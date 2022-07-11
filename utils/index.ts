function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function padThreeZeros(value) {
    return ('000' + value).slice(-3);
}

function typeToColor(type) {
    switch (type) {
        case 'poison': return 'violet';
        case 'fire': return 'orange';
        case 'grass': return 'green';
        case 'water': return 'blue';
        case 'bug': return 'lime';
    }
    return 'red'
}

export { capitalize, padThreeZeros, typeToColor }