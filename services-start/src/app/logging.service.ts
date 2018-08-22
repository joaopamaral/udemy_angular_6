export class LoggingService {
  constructor(){};

  logStateChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
