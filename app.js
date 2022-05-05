const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

// Generate QR code
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');

  const number = '+919742327481';
  const text = 'Hi there..';

  const chatId = number.substring(1) + '@c.us';

  console.log('chatId: ', chatId);

  // Sending message.
  client.sendMessage(chatId, text);
});

client.initialize();