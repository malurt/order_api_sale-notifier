import { Controller } from '../protocols/controller'

export class NotificationController implements Controller {
  async handle (receivedMessage: string): Promise<any> {
    console.log('Olá! Notification controller handle method')
  }
}
