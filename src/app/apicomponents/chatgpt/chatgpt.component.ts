import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.css']
})
export class ChatgptComponent {
  query: string = '';
  response: string = '';

  constructor(private chatService: ChatService) {}

  search() {
    if (this.query.trim() !== '') {
      this.chatService.createChatCompletion(this.query).subscribe((result: any) => {
        this.response = result.choices[0].message.content;
      });
    }
  }
}