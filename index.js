const Controller = require('zigbee2mqtt/lib/controller');
const controller = new Controller();

const mqtt = {
    on: (name, value) => { console.log('on', { name, value }); },
    connect: async() => {},
    disconnect: async() => {},
    publish: async(topic, payload, ...rest) => { console.log('pub', { topic, payload, rest }); },
    subscribe: (topic) => { console.log('sub', topic); },
    isConnected: () => true,
};

controller.mqtt = mqtt;
controller.start();
