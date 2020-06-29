"use strict";

var {Machine} = require("xstate");


const paymentMachine = Machine({
    id: 'payment',
    initial: 'method',
    states: {
        method: {
            initial: 'cash',
            states: {
                cash: { on: { SWITCH_CHECK: 'check' } },
                check: { on: { SWITCH_CASH: 'cash' } },
                // history the last visited child of a parent state
                hist: { type: 'history' }
            },
            on: { NEXT: 'review' }
        },
        review: {
            on: { PREVIOUS: 'method.hist' }
        }
    }
});

module.exports = paymentMachine;