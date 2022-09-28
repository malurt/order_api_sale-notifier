import { Message } from 'amqplib'
import { RabbitmqServer } from '../../utils/rabbitmq/rabbitmq_server'
import { makeNotificationController } from '../factories/notification'

export const startConsumerServer = async (): Promise<void> => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  const controller = makeNotificationController()
  void rabbitMQServer.consume('sale_notifier', (message: Message) => {
    void controller.handle(message.content.toString())
  })
}
