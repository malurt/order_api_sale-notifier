import { startConsumerServer } from './config/server'

// This class is responsable for starting the server (controller + rabbitmq server). Calls a method created in another file
void (async () => {
  void startConsumerServer()
})()
