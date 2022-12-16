import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmarkMail implements MailService {
  sendEmail(): string {
    return 'Sending email through Postmark...';
  }
}
