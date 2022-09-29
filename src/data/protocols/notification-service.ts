import { NotifySaleModel } from '../../domain/usecases/sale-notifier'

export interface NotifySaleService {
  notify: (salesData: NotifySaleModel) => Promise<void>
}
