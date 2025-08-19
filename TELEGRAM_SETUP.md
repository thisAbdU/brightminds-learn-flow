# Telegram Bot Setup Guide

This guide will help you set up the Telegram bot integration for the tutoring request form.

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather
3. Send `/newbot` command
4. Follow the instructions to create your bot:
   - Choose a name for your bot
   - Choose a username (must end with 'bot')
5. BotFather will give you a bot token (keep this secret!)

## Step 2: Get Your Chat ID

### Method 1: Using the Bot
1. Start a chat with your newly created bot
2. Send any message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for the "chat" object and find the "id" field

### Method 2: Using @userinfobot
1. Search for `@userinfobot` on Telegram
2. Start a chat with it
3. It will show your chat ID

## Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your actual credentials:

```bash
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_actual_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_actual_chat_id
```

## Step 4: Test the Integration

1. Restart your development server
2. Fill out the tutoring request form
3. Submit the form
4. Check your Telegram chat for the message

## Security Notes

- Never commit your `.env.local` file to version control
- The bot token gives full access to your bot
- Consider using environment-specific configurations for production

## Troubleshooting

### Bot not responding
- Make sure you've started a chat with your bot
- Verify the bot token is correct
- Check if the bot is enabled

### Messages not received
- Verify the chat ID is correct
- Make sure the bot has permission to send messages
- Check the browser console for errors

### CORS issues
- The Telegram API doesn't support CORS from browsers
- Consider using a backend API route for production use 