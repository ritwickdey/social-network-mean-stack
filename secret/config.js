const JWT_SECRET_KEY = process.env.JWT_SECRET || 'jcs#dkb%&cke545fajs#$ahcg6@c54';
const MONGODB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/social-network';

module.exports = {
    JWT_SECRET_KEY,
    MONGODB_URI
}