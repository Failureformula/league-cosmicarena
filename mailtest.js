var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP", {
	service: 'Gmail',
	auth: {
		user: 'test@gmail.com',
		pass: '구글메일 비밀번호'
	}
});

var mailOptions = {
	from: '송성광 <saltfactory@gmail.com>',
	to: 'saltfactory@gmail.com',
	subject: 'Nodemaildfdsf',
	text: '평문 보내기 테스트 '
};

smtpTransport.sendMail(mailOptions, function(error, response){

	if (error){
		console.log(error);
	} else {
		console.log("Message sent : " + response.message);
	}
	smtpTransport.close();
});