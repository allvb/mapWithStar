export default class Settings {
  constructor() {
    this.defaultSettings = new Map([ // установки по умолчанию
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.clientSettings = new Map([ // клиентские настройки
      ['theme', 'light'],
      ['difficulty', 'middle'],
    ]);
  }

  get settings() { // возвращает клиентские настройки наложенные на дефолтные
    const tempArr = this.defaultSettings; // временный массив чтобы не изменять дефолтный
    const arr = [...this.defaultSettings.keys()]; // массив из дефолтных ключей
    arr.forEach((item) => {
      if (this.clientSettings.has(item)) { // если ключ есть в клиентских настройках
        tempArr.set(item, this.clientSettings.get(item)); // присваиваем клиентское значение
      }
    });
    return Array.from(tempArr); // возвращаем этот временный массив
  }
}
