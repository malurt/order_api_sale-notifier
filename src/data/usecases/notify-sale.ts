import { NotifySale, NotifySaleModel } from '../../domain/usecases/sale-notifier'
import { NotifySaleService } from '../protocols/notification-service'

export class HttpNotifyCustomer implements NotifySale {
  private readonly notificationService: NotifySaleService

  constructor (notificationService: NotifySaleService) {
    this.notificationService = notificationService
  }

  async notify (saleBasicData: NotifySaleModel): Promise<void> {
    // Algum tratamento dos dados
    return await this.notificationService.notify(saleBasicData)
  }
}
