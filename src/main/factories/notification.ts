import { HttpNotifyCustomer } from '../../data/usecases/notify-sale'
import { LogMongoFileRepository } from '../../infra/log/WinstonLogger'
import { NotificationService } from '../../infra/notification-service/notification'
import { NotificationController } from '../../presentation/controllers/notification'
import { Controller } from '../../presentation/protocols/controller'

export const makeNotificationController = (): Controller => {
  const logger = new LogMongoFileRepository()
  const winstonNotificationService = new NotificationService(logger)
  const notifySale = new HttpNotifyCustomer(winstonNotificationService)
  return new NotificationController(notifySale)
}
