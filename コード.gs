function myFunction() {
  // IDを指定してカレンダーを取得
  var calendar = CalendarApp.getCalendarById("marusho1266@gmail.com");

  // イベントを作成
  var event = calendar.createEvent(
    "テスト", // タイトル
    new Date("2025-03-14T10:00:00"), // 開始日時
    new Date("2025-03-14T11:00:00") // 終了日時
  );

  // イベントの説明を設定
  event.setDescription("会議の詳細");

  // イベントの場所を設定
  event.setLocation("会議室");

  // イベントの参加者を追加
  // event.addGuest("guest@example.com");

  // 終日イベントを作成
  // var event = calendar.createAllDayEvent(
  // "休暇", // タイトル
  //new Date("2025-03-14") // 日付
  // );

  // 特定の期間のイベントを取得
  var events = calendar.getEvents(
    new Date("2025-03-10"), // 開始日
    new Date("2025-03-13") // 終了日
  );

  // イベントの詳細を取得
  for (var i = 0; i < events.length; i++) {
    var title = events[i].getTitle();
    var startTime = events[i].getStartTime();
    var endTime = events[i].getEndTime();
    Logger.log(title + ": " + startTime + " - " + endTime);
  }
}
