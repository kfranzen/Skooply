var ec2 = require('ec2');

ec2.getPublicIp(function(err, ip) {
	if (err) console.log(err);
	if (ip) console.log(ip);
});
