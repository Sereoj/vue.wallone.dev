import { detectAnyAdblocker } from 'vue-adblock-detector'

const DetectAdblocker =  detectAnyAdblocker().then((detected) => {
    return detected;
});

export default DetectAdblocker;