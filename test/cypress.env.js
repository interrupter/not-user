const exec = require('child_process').exec;

let type = process.env.TEST_TYPE;

function runTests(){
  	return new Promise((res, rej) => {
  		try {
  			exec(`./node_modules/.bin/cypress ${type}`, {}, (err, stdout) => {
          console.log(stdout);
  					if (err) {
  						rej(err);
  					} else {
  						res();
  					}
  			});
  		} catch (e) {
  			rej(e);
  		}
    });
  };

runTests().then(()=>{
  process.exit(0);
}).catch((e)=>{
  console.error(e);
  process.exit(1);
});
