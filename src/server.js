import express from 'express';
import { spawn } from 'child_process';

const ls = spawn('cookie', ['-f', 'token', '-em', 'alexa-skill-testing-service-tests+us@amazon.com', '-pw', 'Doppler1234', '--stage', 'prod']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));