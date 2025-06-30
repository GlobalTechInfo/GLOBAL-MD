const path = require('path');
const { spawn } = require('child_process');

function start() {
	let args = [path.join(__dirname, 'index.js'), ...process.argv.slice(2)]
	let p = spawn(process.argv[0], args, {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	}).on('message', data => {
		if (data == 'reset') {
			console.log('Restarting Bot...')
			p.kill()
			start()
			delete p
		}
	}).on('exit', code => {
		console.error('Exited with code:', code)
		if (code == '.' || code == 1 || code == 0) start()
	})
}
start()