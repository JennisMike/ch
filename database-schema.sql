-- Neon PostgreSQL Database Schema for Chinese Heritage Website
-- Run this in your Neon database to create tables

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    avatar_url VARCHAR(500),
    bio TEXT,
    favorite_cities TEXT[],
    tours_completed INTEGER DEFAULT 0,
    login_count INTEGER DEFAULT 0,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cities Table
CREATE TABLE IF NOT EXISTS cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    chinese_name VARCHAR(100),
    description TEXT,
    center_lat DECIMAL(10, 8),
    center_lng DECIMAL(11, 8),
    zoom_level INTEGER DEFAULT 12,
    featured_image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Landmarks Table
CREATE TABLE IF NOT EXISTS landmarks (
    id SERIAL PRIMARY KEY,
    city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    chinese_name VARCHAR(255),
    description TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    category VARCHAR(50),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Translations Table
CREATE TABLE IF NOT EXISTS translations (
    id SERIAL PRIMARY KEY,
    key VARCHAR(255) UNIQUE NOT NULL,
    english TEXT NOT NULL,
    chinese TEXT,
    arabic TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Sessions Table
CREATE TABLE IF NOT EXISTS user_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Site Content Table
CREATE TABLE IF NOT EXISTS site_content (
    id SERIAL PRIMARY KEY,
    page VARCHAR(100) NOT NULL,
    section VARCHAR(100),
    content_key VARCHAR(255),
    content_value TEXT,
    language VARCHAR(10) DEFAULT 'en',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO cities (name, chinese_name, description, center_lat, center_lng, zoom_level) VALUES
('beijing', 'Beijing', 'China''s imperial capital with ancient palaces and cultural heritage', 39.9042, 116.4074, 12),
('xian', 'Xi''an', 'Ancient capital with Terracotta Army and city walls', 34.3416, 108.9402, 13),
('suzhou', 'Suzhou', 'Famous for classical gardens and canals', 31.2994, 120.6196, 13)
ON CONFLICT (name) DO NOTHING;

-- Insert initial landmarks
INSERT INTO landmarks (city_id, name, chinese_name, description, latitude, longitude, category) VALUES
(1, 'Forbidden City', 'Forbidden City', 'UNESCO World Heritage imperial palace', 39.9163, 116.3972, 'palace'),
(1, 'Temple of Heaven', 'Temple of Heaven', 'Imperial sacrifice altar & park', 39.8822, 116.4066, 'temple'),
(1, 'Summer Palace', 'Summer Palace', 'Royal garden masterpiece on Kunming Lake', 39.9990, 116.2750, 'garden'),
(1, 'Tiananmen Square', 'Tiananmen Square', 'Iconic central square of Beijing', 39.9055, 116.3976, 'square'),
(2, 'City Wall', 'City Wall', 'Best-preserved ancient city wall in China', 34.2610, 108.9480, 'wall'),
(2, 'Big Wild Goose Pagoda', 'Big Wild Goose Pagoda', 'Tang-dynasty Buddhist pagoda', 34.2192, 108.9600, 'pagoda'),
(2, 'Great Mosque', 'Great Mosque', 'Historic mosque in the Muslim Quarter', 34.2630, 108.9360, 'mosque'),
(2, 'Bell Tower', 'Bell Tower', 'Symbolic city-centre landmark', 34.2610, 108.9400, 'tower'),
(3, 'Humble Administrator''s Garden', 'Humble Administrator''s Garden', 'Largest classical garden in Suzhou', 31.3260, 120.6290, 'garden'),
(3, 'Lion Grove Garden', 'Lion Grove Garden', 'Famous rockery labyrinth', 31.3230, 120.6310, 'garden'),
(3, 'Lingering Garden', 'Lingering Garden', 'UNESCO World Heritage classical garden', 31.3170, 120.5970, 'garden')
ON CONFLICT (city_id, name) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_landmarks_city_id ON landmarks(city_id);
CREATE INDEX IF NOT EXISTS idx_translations_key ON translations(key);
CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_translations_updated_at BEFORE UPDATE ON translations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON site_content
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
