const locale = ['en', 'fr', 'es', 'ru'].find(v => v === window.navigator.language.substr(0, 2)) || 'en';
const keys = ["intro","github","wiki","cv0","cv1","cv2","cv3","udemy","map0","map1","pic0","pic1","flipbook0","flipbook1","mp30","mp31","trick0","trick1","links0","links1","musiclib0","musiclib1","search", "type", "leavemsg", "name", "mail", "msg", "thx", "send", "film0", "film1"];
let values;

if (locale === 'en') {
  values = ["From front to back","Fork me on Github","Visit the Wiki!","contact","me","for a","cv", "Follow my training courses", "Explore my","map","Watch my","photos","Read","flipBooks","Listen to my","mp3","Learn some","tricks","Click on useful","links","Browse my","discography","Search anything",
  '<input type="text" id="return_from_numFilesInDomain" placeholder="Écrivez quelque chose!" style="height: 100px; width: 600px; font-weight: bold; font-size: 50px; border-radius: 30px;" list="the_datalist" name="s" />', "Leave A Message", "Your Name", "Your Mail", "Your Message", "Thanks", "Send", "Watch some", "films"];
} else if (locale === 'fr') {
  values = ["D'un bout à l'autre","Forkez-moi sur Github","Visitez le Wiki!","contactez","moi","pour un","cv", "Suivez mes formations","Explorez ma","map","Regardez mes","photos","Lire des","flipBooks","Écouter mes","mp3","Apprenez des","astuces","Cliquez sur des","liens utiles","Parcourir ma","discographie","Cherchez n'importe quoi",
  '<input type="text" id="return_from_numFilesInDomain" placeholder="Écrivez quelque chose!" style="height: 100px; width: 600px; font-weight: bold; font-size: 50px; border-radius: 30px;" list="the_datalist" name="s" />', "Laissez un Message", "Votre Nom", "Votre Mail", "Votre Message", "Merci", "Envoyer", "Regardez des", "films"];
} else if (locale === 'es') {
	values = ["De un lado al otro","Forkearme en Github","Visitar el Wiki!","contácte","me","por una","hoja de vida", "Sigue mis cursos de capacitación", "Explorar mi","mapa","Mirar mis","fotos","Leer","flipBooks","Escuchar mis","mp3","Aprender algunos","trucos","Dar click sobre","enlaces utiles","Navegar por mi","discografía","Buscar cualquier cosa",
  '<input type="text" id="return_from_numFilesInDomain" placeholder="Escribe algo!" style="height: 100px; width: 600px; font-weight: bold; font-size: 50px; border-radius: 30px;" list="the_datalist" name="s" />', "Dejar un mensaje", "Su nombre", "Su correo electrónico", "Su mensaje", "Gracias", "Envíar", "Mirar unas", "películas"];
} else if (locale === 'ru') {
	values  = ["От начала до конца","Вилка меня Github","Посетите Wiki!","Свяжитесь","со мной","для","резюме", "Следуй за моими учебными курсами", "Исследуйте мою","карту","Смотрите мои","фотографии","Читать","flipBooks","Послушай мой","mp3","Узнайте некоторые","трюки","Нажмите на","полезные ссылки","Просмотр моей","Дискография","Искать что угодно",
  '<input type="text" id="return_from_numFilesInDomain" placeholder="Введите что-либо!" style="height: 100px; width: 600px; font-weight: bold; font-size: 50px; border-radius: 30px;" list="the_datalist" name="s" />', "Оставить сообщение", "ваше имя", "ваш адрес электронной почты", "Ваше сообщение", "Спасибо", "Послать", "Смотреть", "фильм"];
}

const appLocales = new Map(keys.map((v, k) => [v, values[k]]));
// appLocales.get('intro')
