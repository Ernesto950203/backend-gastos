import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL || 'fallback_connection_string'
const sql = postgres(connectionString)

export default sql