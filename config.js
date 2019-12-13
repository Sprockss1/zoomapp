const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to repo.
const config = {
	development :{
		clientID : 'Kg1N3RtDTfCBNDG17OYcw',
		clientSecret : '66P6OA7lghqwpNc2uGw66K23KfKY4bMO',
		redirectUrl : 'http://d5ff7e52.ngrok.io'
	},
	production:{	
		clientID : '',
		clientSecret : '',
		redirectUrl: ''
	}
};

module.exports = config[env]
