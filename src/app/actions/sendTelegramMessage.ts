"use server";

export interface ContactFormData {
    inquiryType: string;
    website: string;
    name: string;
    message: string;
    locale: string;
}

export async function sendTelegramMessage(data: ContactFormData) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error("Missing Telegram bot environment variables.");
        return { success: false, error: "Server configuration error." };
    }

    const { inquiryType, website, name, message, locale } = data;

    const text = `
📩 <b>New Contact Form Submission</b>
    
<b>Type:</b> ${inquiryType}
<b>Name:</b> ${name}
<b>Website:</b> ${website ? website : 'N/A'}
<b>Locale:</b> ${locale}

<b>Message:</b>
${message}
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML',
            }),
        });

        const result = await response.json();

        if (!response.ok || !result.ok) {
            console.error("Telegram API Error:", result);
            return { success: false, error: result.description || "Failed to send message." };
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending Telegram message:", error);
        return { success: false, error: "Failed to send message." };
    }
}
