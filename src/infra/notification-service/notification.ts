import { LogSale } from '../../data/protocols/logs-sale'
import { NotifySaleService } from '../../data/protocols/notification-service'
import { NotifySaleModel } from '../../domain/usecases/sale-notifier'

export class NotificationService implements NotifySaleService {
  private readonly logSale: LogSale

  constructor (logSale: LogSale) {
    this.logSale = logSale
  }

  async notify (salesData: NotifySaleModel): Promise<void> {
    // There could be some other implementation, not only logging on db/file
    const saleDateTime = new Date(salesData.sale.dateTime)
    const saleDate = `${saleDateTime.getDate()}-${saleDateTime.getMonth() + 1}`
    const saleTime = `${saleDateTime.getHours()}:${saleDateTime.getMinutes()}`
    const notificationMessage = `Hey, ${salesData.customer.name}! We received your order in ${saleDate} at ${saleTime} and we'll register it as soon as possible`
    return await this.logSale.log(notificationMessage)
  }
}
