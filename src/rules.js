module.exports = [{
    id: 1,
    body: function (obj) {
        return !!obj;
    },
    true_id: 2,
    false_id: 3

}, {
    id: 2,
    body: function (obj) {
        return typeof obj === 'object'
    },
    true_id: 4,
    false_id: 5

}, {
    id: 3,
    body: function (obj) {
        return typeof obj === 'boolean'
    },
    true_id: 6,
    false_id: null
}, {
    id: 4,
    body: function (obj) {
        var string = JSON.stringify(obj);
        return string && string.length > 100
    },
    true_id: null,
    false_id: null
}, {
    id: 5,
    body: function (obj) {
        return typeof obj === 'function'
    },
    true_id: null,
    false_id: null
}, {
    id: 6,
    body: function (obj) {
        return obj && false;
    },
    true_id: null,
    false: null
}]