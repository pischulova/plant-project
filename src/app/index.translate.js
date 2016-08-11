export function translate($translateProvider) {
    $translateProvider.translations ('en', {
        'PLANT_PROJ': 'Plant Project',
        'HOME_DESCR': 'Control all your home plants here!',
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
        'WATER': 'Water',
        'PLAN_WATER': 'Water in',
        'DELETE': 'Delete',
        'EDIT': 'Edit'
        
    }),
    $translateProvider.translations ('ru', {
        'PLANT_PROJ': 'Проект Растение',
        'HOME_DESCR': 'Уход за домашними растениями - это легко!',
        'FIND_PLANT': 'Найти растение',
        'ORDER_BY': 'Сортировка',
        'NAME': 'Имя',
        'AGE': 'Возраст',
        'LAST_WATERED': 'Последний полив',
        'WATERING_INTERVAL': 'Частота полива',
        'DAYS': 'дн.',
        'NEEDS_WATER': 'Нужно полить',
        'ADD_PLANT': 'Добавить растение',
        'IMAGE_LINK': 'Ссылка на фото',
        'ADD': 'Готово',
        'WATER': 'Полить',
        'PLAN_WATER': 'Полейте через',
        'DELETE': 'Удалить',
        'EDIT': 'Изменить'
    }),
    $translateProvider.preferredLanguage('en');
}
translate.$inject = ['$translateProvider'];