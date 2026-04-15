// AI Chat functionality
class AIChat {
    constructor() {
        this.apiKey = null;
        this.isOpen = false;
    }

    init() {
        this.loadApiKey();
        this.createChatWidget();
        this.attachEventListeners();
    }

    loadApiKey() {
        // For Vercel deployment, environment variables are injected at build time
        // The AI_API_KEY will be replaced by Vercel during build
        this.apiKey = '%%AI_API_KEY%%';
        
        // Fallback for local development - check if the placeholder was replaced
        if (this.apiKey === '%%AI_API_KEY%%') {
            console.warn('AI_API_KEY not found. Please set environment variable in Vercel or use local .env file');
            this.apiKey = null;
        }
    }

    createChatWidget() {
        // Create chat widget HTML
        const chatHTML = `
            <div id="ai-chat-widget" class="ai-chat-widget">
                <div class="ai-chat-toggle" id="ai-chat-toggle">
                    <img src="images/ai.jpg" alt="AI Assistant" class="ai-icon">
                    <span class="ai-tooltip">Ask AI Assistant</span>
                </div>
                
                <div class="ai-chat-container" id="ai-chat-container">
                    <div class="ai-chat-header">
                        <div class="ai-chat-title">
                            <img src="images/ai.jpg" alt="AI" class="ai-header-icon">
                            <span>AI Heritage Assistant</span>
                        </div>
                        <button class="ai-chat-close" id="ai-chat-close">&times;</button>
                    </div>
                    
                    <div class="ai-chat-messages" id="ai-chat-messages">
                        <div class="ai-message ai-welcome">
                            <div class="ai-avatar">
                                <img src="images/ai.jpg" alt="AI">
                            </div>
                            <div class="ai-message-content">
                                <p>Hello! I'm your AI Heritage Assistant. I can help you learn about Chinese architecture, history, and cultural heritage. Feel free to ask me any questions!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ai-chat-input-container">
                        <div class="ai-input-wrapper">
                            <input type="text" id="ai-chat-input" placeholder="Ask about Chinese heritage..." maxlength="500">
                            <button id="ai-chat-send" class="ai-send-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="ai-chat-info">Powered by DeepSeek AI</div>
                    </div>
                </div>
            </div>
        `;

        // Add to body
        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }

    attachEventListeners() {
        const toggle = document.getElementById('ai-chat-toggle');
        const close = document.getElementById('ai-chat-close');
        const send = document.getElementById('ai-chat-send');
        const input = document.getElementById('ai-chat-input');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    toggleChat() {
        const container = document.getElementById('ai-chat-container');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            container.classList.add('open');
            document.getElementById('ai-chat-input').focus();
        } else {
            container.classList.remove('open');
        }
    }

    closeChat() {
        const container = document.getElementById('ai-chat-container');
        this.isOpen = false;
        container.classList.remove('open');
    }

    async sendMessage() {
        const input = document.getElementById('ai-chat-input');
        const message = input.value.trim();
        
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            const response = await this.callDeepSeekAPI(message);
            this.removeTypingIndicator();
            this.addMessage(response, 'ai');
        } catch (error) {
            this.removeTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'ai');
            console.error('AI Chat Error:', error);
        }
    }

    async callDeepSeekAPI(message) {
        const context = `You are an expert AI assistant specializing in Chinese heritage, architecture, and cultural history. 
        You help users learn about Chinese architectural wonders like the Forbidden City, Xi'an City Wall, and Suzhou gardens.
        Provide accurate, informative, and engaging responses about Chinese heritage, construction techniques, historical context, and cultural significance.
        Keep responses concise but informative (max 150 words).`;

        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: context },
                    { role: 'user', content: message }
                ],
                max_tokens: 300,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    addMessage(content, sender) {
        const messagesContainer = document.getElementById('ai-chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-${sender}-message`;
        
        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="ai-avatar">
                    <img src="images/ai.jpg" alt="AI">
                </div>
                <div class="ai-message-content">
                    <p>${content}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="ai-message-content">
                    <p>${content}</p>
                </div>
            `;
        }

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('ai-chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-typing';
        typingDiv.id = 'ai-typing-indicator';
        typingDiv.innerHTML = `
            <div class="ai-avatar">
                <img src="images/ai.jpg" alt="AI">
            </div>
            <div class="ai-message-content">
                <div class="ai-typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('ai-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Initialize AI Chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const aiChat = new AIChat();
    aiChat.init();
});
