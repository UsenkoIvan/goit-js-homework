const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = 'Admin password';
const input = prompt(message);
if (input === null) {
    message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (input !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
}
console.log(alert(message));