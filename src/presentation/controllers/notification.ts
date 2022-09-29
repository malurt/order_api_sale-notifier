import { NotifySale } from '../../domain/usecases/sale-notifier'
import { Controller } from '../protocols/controller'

export class NotificationController implements Controller {
  private readonly notifySale: NotifySale

  constructor (notifySale: NotifySale) {
    this.notifySale = notifySale
  }

  async handle (receivedMessage: string): Promise<any> {
    const receivedMessageObject = JSON.parse(receivedMessage)
    await this.notifySale.notify(receivedMessageObject)
  }
}
