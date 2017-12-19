export class User {
    constructor(
       private email: string,
       private password: string,
       private firstName?: string,
       private lastName?: string) {
    }
}