const mock = require("mock-require");

class MQTT {
  constructor() {}
  on(name, value) {
    console.log("on", { name, value });
  }
  async connect() {}
  async disconnect() {}
  async publish(topic, payload, ...rest) {
    console.log("pub", { topic, payload, rest });
  }
  subscribe(topic) {
    console.log("sub", topic);
  }
  isConnected() {
    return true;
  }
  onMessage(topic, message) {
    console.log("onMessage", { topic, message });
  }
}

mock("zigbee2mqtt/lib/mqtt", MQTT);

const Controller = require("zigbee2mqtt/lib/controller");
const controller = new Controller();

// controller.mqtt = new MQTT();
controller.start();
