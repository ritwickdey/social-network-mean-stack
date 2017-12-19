export class Message {
    constructor(
       private content: string,
       private username: string,
       private messageId?: string,
       private userId?: string) {
    }
}