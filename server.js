const PORT = process.env.PORT || 3002;
const app = require('./script');

app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});
