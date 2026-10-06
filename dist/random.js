"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
exports.sample = sample;
function random(max, min = 0) {
    const range = max - min;
    const rand = Math.random();
    return Math.floor(min + (range * rand));
}
function sample(data) {
    const size = data.length;
    const index = random(size);
    return data[index];
}
