# Gmail Setup for Function Calling Email

## Overview
This guide shows how to set up Gmail SMTP for the AI function calling email feature.

## 🔧 Gmail Setup Steps

### 1. Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. This is required to use App Passwords

### 2. Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click **App passwords** (under "2-Step Verification")
3. Select **Mail** and your device
4. Copy the 16-character password (like: `abcd efgh ijkl mnop`)

### 3. Environment Variables
Add these to your `.env` file:

```bash
# Gmail Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=your-email@gmail.com

# Optional: SMTP settings (defaults work for Gmail)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
```

## 🧪 How Function Calling Works

### User Flow:
1. **User asks**: "I'd like to contact Aayush" or "Can I hire you?"
2. **AI responds**: "I'd love to connect! What's your email address and what would you like to discuss?"
3. **User provides**: Email and message
4. **AI calls function**: `send_contact_email(user_email, user_message)`
5. **Email sent**: Message goes to your Gmail inbox
6. **AI confirms**: "Email sent! Aayush will get back to you soon."

### Example Conversation:
```
User: I'd like to contact Aayush about a project
AI: I'd love to connect! What's your email address and what would you like to discuss?

User: My email is john@company.com and I want to discuss a web development project
AI: Perfect! Let me send that message to Aayush for you.
[Function called: send_contact_email]
AI: Email sent successfully! Aayush will get back to you soon.
```

## 📧 Email Format

You'll receive emails like this:

```
Subject: Portfolio Contact: John Smith

New contact message from your portfolio AI chat:

Name: John Smith
Email: john@company.com
IP Address: 192.168.1.1
Time: 2024-01-15 14:30:25

Message:
I want to discuss a web development project for our company.

---
This message was sent through your AI portfolio chat system.
```

## 🚀 Testing

### Test the Function Calling:
1. Start your FastAPI server
2. Ask the AI: "I want to contact Aayush"
3. Provide your email and message
4. Check your Gmail inbox

### Test with curl:
```bash
curl -X POST http://localhost:8000/chat/ \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to contact Aayush about a job opportunity"}'
```

## 🔒 Security Notes

1. **Never commit** your `.env` file
2. **Use App Passwords**, not your regular Gmail password
3. **Rate limiting** is already built-in (10 questions/day)
4. **IP tracking** helps identify users

## 🐛 Troubleshooting

### "Authentication Failed"
- Check your email and app password
- Make sure 2FA is enabled
- Verify the app password is correct

### "SMTP Connection Error"
- Check your internet connection
- Verify SMTP settings (smtp.gmail.com:587)
- Try different ports (587, 465)

### "Function Not Called"
- Check if user mentioned contact keywords
- Verify OpenAI function calling is working
- Check server logs for errors

## 🎯 Benefits of Function Calling

✅ **No extra UI** - Everything happens in chat  
✅ **Smart detection** - AI knows when to ask for contact info  
✅ **Natural flow** - Feels like talking to a real person  
✅ **Rate limited** - Prevents spam  
✅ **Simple setup** - Just Gmail credentials  

This approach is much cleaner than separate contact forms!

