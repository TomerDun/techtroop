function capitalizeFirst(str) {
    return str[0].toUpperCase() + str[1].toLowerCase() + str.slice(2);
}

function toSkewerCase(str) {
    return str.replaceAll(' ', '-');
}

module.exports = {capitalizeFirst, toSkewerCase};