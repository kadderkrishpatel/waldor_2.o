import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function test() {
  try {
    const result = await pool.query(
      'SELECT id, "firstName", email, treatment FROM contact_submissions LIMIT 5'
    );
    console.log('\n✅ DATA IN DATABASE:');
    console.table(result.rows);
  } catch (err: any) {
    console.error('❌ ERROR:', err.message);
  }
  await pool.end();
}

test();
