import { NotificationController } from '../../presentation/controllers/notification'
import { Controller } from '../../presentation/protocols/controller'

export const makeNotificationController = (): Controller => {
  return new NotificationController()
}
