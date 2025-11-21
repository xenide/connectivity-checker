import axios from 'axios';

async function makeRequests() {
  try {
    // Request to 1.1.1.1
    console.log('Making request to 1.1.1.1...');
    const response1 = await axios.get('https://1.1.1.1', { timeout: 20000 });
    console.log('Response from 1.1.1.1:');
    console.log(response1.data);
  } catch (error) {
    console.error('Error making request to 1.1.1.1:', error instanceof Error ? error.message : 'Unknown error');
  }

  try {
    // Request to google.com
    console.log('\nMaking request to google.com...');
    const response2 = await axios.get('https://www.google.com', { timeout: 20000 });
    console.log('Response from google.com:');
    console.log(response2.data);
  } catch (error) {
    console.error('Error making request to google.com:', error instanceof Error ? error.message : 'Unknown error');
  }
}

makeRequests();
