export function translate($translateProvider) {
    $translateProvider.translations ('en', {
        'PLANT_PROJ': 'Plant Project',
        'HOME_DESCR': 'Here you can control all your home plants',
        'FIND_PLANT': 'Find plant',
        'ORDER_BY': 'Order by',
        'NAME': 'Name',
        'AGE': 'Age',
        'LAST_WATERED': 'Last watered',
        'WATERING_INTERVAL': 'Watering interval',
        'DAYS': 'days',
        'NEEDS_WATER': 'Needs watering',
        'ADD_PLANT': 'Add new plant',
        'IMAGE_LINK': 'Image link',
        'ADD': 'Add',
        'WATER': 'Water now',
        'PLAN_WATER': 'Water in'
        
    }),
    $translateProvider.translations ('ru', {
        'PLANT_PROJ': 'Проект Растение',
        'HOME_DESCR': 'Здесь вы можете контролировать уход за домашними растениями',
        'FIND_PLANT': 'Найти растение',
        'ORDER_BY': 'Сортировка',
        'NAME': 'Имя',
        'AGE': 'Возраст',
        'LAST_WATERED': 'Дата последнего полива',
        'WATERING_INTERVAL': 'Частота полива: раз в',
        'DAYS': 'дня (дней)',
        'NEEDS_WATER': 'Нужно полить',
        'ADD_PLANT': 'Добавить новое растение',
        'IMAGE_LINK': 'Ссылка на фото',
        'ADD': 'Готово',
        'WATER': 'Полить',
        'PLAN_WATER': 'Полейте через'
    }),
    $translateProvider.preferredLanguage('en');
}
translate.$inject = ['$translateProvider'];