const subjects = {
    'Конструювання програмного забезпечення': 'Конструювання ПЗ',
    'Розробка програмного забезпечення на платформі Node.js': 'Node.js',
    'Інтернет-програмування: ASP.NET': 'ASP.NET',
    'Комп\'ютерна дискретна математика': 'Дискретна математика'
}

export default (value: string) => {
    if (value in subjects){
        return subjects[value]
    } else {
        return value
    }
}