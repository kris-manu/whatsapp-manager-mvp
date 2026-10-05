import { Injectable, Logger, Module } from '@nestjs/common';
export interface WhatsAppProvider { sendText(to:string,text:string):Promise<any>; sendInvite(to:string,inviteUrl:string):Promise<any>; }
@Injectable() export class MockWhatsAppProvider implements WhatsAppProvider { private log=new Logger('MockWhatsApp'); async sendText(to:string,text:string){this.log.log(`MOCK sendText -> ${to}: ${text}`);return {id:`mock_${Date.now()}`};} async sendInvite(to:string,inviteUrl:string){this.log.log(`MOCK invite -> ${to}: ${inviteUrl}`);return {id:`mock_invite_${Date.now()}`};} }
@Module({providers:[MockWhatsAppProvider],exports:[MockWhatsAppProvider]}) export class WhatsAppModule{}
