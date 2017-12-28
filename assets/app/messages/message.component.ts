import { MessageService } from './messages.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';


@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent implements OnInit {

    @Input() message: Message;

    byPassTrustStyle = this.sanitizer.bypassSecurityTrustStyle;

    constructor(private messageService: MessageService, private sanitizer: DomSanitizer) { }

    ngOnInit() { }

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(res => console.log(res));
    }

    isBelongsToUser() {
        return localStorage.getItem('userId') === this.message.userId;
    }

    getColor() {
        if(this.isBelongsToUser()) return;

        const colors = [
            "#16a085",
            "#f1c40f",
            "#f39c12",
            "#2ecc71",
            "#27ae60",
            "#d35400",
            "#3498db",
            "#8e44ad",
            "#9b59b6",
            "#607D8B",
            "#795548",
            "#3F51B5"
        ];
        const total = this.message.userId
            .split('')
            .reduce((prev, current) => {
                return prev + +current ? +current : 0;
            }, 0);

        return colors[total % colors.length];
    }
}