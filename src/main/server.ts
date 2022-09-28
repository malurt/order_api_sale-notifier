import { Message } from 'amqplib'
import { RabbitmqServer } from '../utils/rabbitmq/rabbitmq_server'
import { makeNotificationController } from './factories/notification'

// This class is responsable for starting the server (controller + rabbitmq server). Calls a method created in another file
void (async () => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  const controller = makeNotificationController()
  void rabbitMQServer.consume('sale_notifier', (message: Message) => {
    void controller.handle(message.content.toString())
  })
})()
