import winston, { format } from 'winston'
import 'winston-mongodb'
import { LogSale } from '../../data/protocols/logs-sale'

export class LogMongoFileRepository implements LogSale {
  private readonly logConfiguration = {
    format: format.combine(
      format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
      format.json()
    ),
    transports: [
      new winston.transports.File({
        filename: 'src/infra/log/notifications.log'
      }),
      new winston.transports.MongoDB({
        db: 'mongodb://localhost:27017/order-api',
        options: {
          useUnifiedTopology: true
        },
        collection: 'sales_notifications_logs'
      })
    ]
  }

  private readonly logger = winston.createLogger(this.logConfiguration)

  async log (stack: string): Promise<void> {
    this.logger.log({
      message: stack,
      level: 'info'
    })
  }
}
