const express = require('express');
const path    = require('path');
const bodyParser = require('body-parser');
const mysql   = require('mysql');
const app     = express();

// إعداد عرض القوالب
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// تقديم الأصول الثابتة
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// إعداد اتصال قاعدة البيانات (عدّل القيم حسب بيئتك)
// const db = mysql.createConnection({
//   host: 'sql306.infinityfree.com',
//   user: 'if0_39006909',
//   password: 'Sultan5890alqefari',
//   database: 'if0_39006909_Chattob'
// });
// db.connect(err => {
//   if (err) console.error('DB error:', err);
//   else console.log('MySQL متصل');
// });

// مسارات بسيطة
app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.render('login', { error: null }));
app.post('/login', (req, res) => {
  // TODO: تحقق من المستخدم في DB ثم توجه إلى /chat
  res.redirect('/chat');
});
app.get('/signup', (req, res) => res.render('signup', { error: null }));
app.post('/signup', (req, res) => {
  // TODO: أضف المستخدم في DB ثم توجه إلى /login
  res.redirect('/login');
});
app.get('/chat', (req, res) => res.render('chat'));
app.get('/rooms', (req, res) => res.render('roomlist'));

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
