import { keyframes } from 'styled-components'

const Pulse = keyframes`
    0% {
        transform: scale(1, 1)
    }
    50% {
        transform: scale(1.03, 1.03)
    }
    100% {
        transform: scale(1, 1)
    }
`

export default Pulse