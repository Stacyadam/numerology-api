if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running → PORT ${server.address().port}`);
});
