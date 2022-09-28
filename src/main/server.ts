import { Message } from 'amqplib'
import { NotificationController } from '../presentation/controllers/notification'
import { RabbitmqServer } from '../utils/rabbitmq/rabbitmq_server'

// This class is responsable for starting the server (controller + rabbitmq server). Calls a method created in another file
void (async () => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  const controller = new NotificationController()
  void rabbitMQServer.consume('sale_notifier', (message: Message) => {
    void controller.handle(message.content.toString())
  })
})()
