export interface LogSale {
  log: (stack: string) => Promise<void>
}
