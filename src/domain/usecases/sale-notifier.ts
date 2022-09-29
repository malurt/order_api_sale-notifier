export interface NotifySaleModel {
  customer: {
    name: string
    document: string
  }
  sale: {
    dateTime: Date
  }
}

export interface NotifySale {
  notify: (saleBasicData: NotifySaleModel) => Promise<void>
}
