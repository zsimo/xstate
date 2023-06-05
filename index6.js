"use strict";


const machine = {
    initial: "idle",
    states: {
        idle: {
            on: {
                FETCH: "loading"
            }
        },
        loading: {}
    }
};

function transition (state, event) {
    const nextStatus = machine.states[state.status].on?.[event.type] ?? state.status;

    return {
        status: nextStatus
    };
}
// finite states represent behaviour
// a behaviour is how the app is going to react based on an event

const state = {
    status: machine.initial
};
const event = {
    type: "FETCH"
};
console.log(transition(state, event));
