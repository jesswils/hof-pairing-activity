const hof = {};

hof.identity = function (arg) {
    return arg
};


hof.identityf = function (arg) {
    function identityg() {
        return arg
    }
    return identityg
}

hof.add = function (x, y) {
    return x + y
};

hof.sub = function (x, y) {
    return x - y
};

hof.mul = function (x, y) {
    return x * y
};

hof.inc = function (x) {
    return ++x
};

hof.addf = function (total) {
    function plus(num) {
        return total + num
    } 
    return plus
};

hof.curry = function (func, calls) {
    function lilFunc(value) {
        return func(calls,value)
    }
    return lilFunc
};

hof.liftf = function () { };

hof.twice = function () { };

hof.composeu = function () { };

hof.composeb = function () { };

hof.limit = function () { };

hof.from = function () { };

hof.to = function () { };

hof.fromTo = function () { };

hof.element = function () { };

hof.collect = function () { };

hof.filter = function () { };

hof.concat = function () { };

hof.fibonaccif = function () { };

hof.gensymf = function () { };

hof.gensymff = function () { };

hof.counter = function () { };

hof.revokable = function () { };

module.exports = hof;
