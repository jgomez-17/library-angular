import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiKey = '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';

  constructor(
    private http: HttpClient
    ) { }
    createChatCompletion(query: string) {
      const endpoint = 'https://api.openai.com/v1/chat/completions';
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      };
  
      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' }
          // Agrega más mensajes según tu conversación
        ]
      };
  
      return this.http.post(endpoint, requestBody, { headers });
    }
  }