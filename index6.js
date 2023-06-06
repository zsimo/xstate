"use strict";


const machine = {
    initial: "loading",
    states: {
        loading: {
            on: {
                LOADED: "playing"
            }
        },
        playing: {
            on: {
                PAUSE: "paused"
            }
        },
        paused: {
            on: {
                PLAY: "playing"
            }
        }
    }
};


function transition(state = {
    value: machine.initial
}, event) {

    const nextStateValue = machine.states[state.value].on?.[event.type];

    if (!nextStateValue) {
        return state;
    }

    return {
        ...state,
        value: nextStateValue,
    };
}
// finite states represent behaviour
// a behaviour is how the app is going to react based on an event


let currentState = {
    value: machine.initial
};

// currentState = transition(currentState, event);
// console.log(transition(currentState, {
//     type: "PAUSE"
// }))

const service = {
    send: function (event) {
        currentState = transition(currentState, event);
        console.log(currentState);
    }
};


service.send({
    type: "LOADED"
});
service.send({
    type: "PAUSE"
});

// 45 min
