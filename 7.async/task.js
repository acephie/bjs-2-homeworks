class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.includes(time)) {
      //эта проверка врядли верна, позже уточнить
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    let deleteIndexes = [];
    this.alarmCollection.filter(function (item, index) {
      if (item.time === time) {
        // deleteIndexes.push(index);
        deleteIndexes.unshift(index);
        return true;
      }
    });
    deleteIndexes.forEach((item) => {
      this.alarmCollection.splice(item, 1);
    });
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    const options = {
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    let currentTime = currentDate
      .toLocaleTimeString("ru-RU", options)
      .substring(0, 5);
    return currentTime;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((item) => {
        if (item.time === currentTime && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => (item.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
