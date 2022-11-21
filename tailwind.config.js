/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            animation: {
                heartbeat: "heartbeat 1.5s ease  infinite both"
            },
            keyframes: {
                heartbeat: {
                    "0%": {
                        transform: "scale(1)",
                        "transform-origin": "center center",
                        "animation-timing-function": "ease-out"
                    },
                    "10%": {
                        transform: "scale(.91)",
                        "animation-timing-function": "ease-in"
                    },
                    "17%": {
                        transform: "scale(.98)",
                        "animation-timing-function": "ease-out"
                    },
                    "33%": {
                        transform: "scale(.87)",
                        "animation-timing-function": "ease-in"
                    },
                    "45%": {
                        transform: "scale(1)",
                        "animation-timing-function": "ease-out"
                    }
                }
            }
        }
    },
    plugins: [require('daisyui')],
}
