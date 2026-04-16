function sendTasksEmail(e) {

  // 送信された各回答と対応する質問名を格納する
  const itemResponses = e.response.getItemResponses(); 

  /*
  * メール本文
  * Googleフォームに設定した質問項目と対応させてください
  */

  // 相談のカテゴリー
  const ContentOfCategory = itemResponses[0].getResponse();
  // Aに関すること
  // Aに関する相談の概要
  const AContentOfOverview = itemResponses[1].getResponse();
  // Aの相談者の名前
  const AContentOfName = itemResponses[2].getResponse();
  // Aの希望対応日
  const ServisesStartOfdate = itemResponses[3].getResponse();
  // 相談意図、その他背景
  const AContentOfBackground = itemResponses[4].getResponse();
  // 想定している影響規模
  const AContentOfScale = itemResponses[5].getResponse();
  
  // Bに関すること
  // Bに関する相談の概要
  const BContentOfOverview = itemResponses[6].getResponse();
  // Bの希望対応日
  const BStartOfdate = itemResponses[7].getResponse();
    
  /*
  * 質問項目
  */
  const CATEGORY = "相談の分類";
  const A_OVERVIEW = "Aの相談の概要";
  const A_DEADLINE_DATE = "Aの希望対応日(締切)";
  const A_NAME = "Aの相談者の名前";
  const A_SCALE = "Aの想定している影響規模";
  const A_INTENTION = "Aの相談の意図、その他背景";

  const B_OVERVIEW = "Bの概要";
  const B_DEADLINE_DATE = "Bの希望対応日(締切)";


  /* 
  * メール送信先アドレス
  * Backlogの課題登録用メールアドレスを使用します。
  */ 
  const TO = "《課題登録用メールアドレス》";
  
  // メール件名
  const SUBJECT = ContentOfCategory + "に関する相談";
  
  //メールの内容(backlogの課題詳細に表示される)
  //設問と回答内容を両方転記する
  var body = "【" + CATEGORY + "】" + "\n" + ContentOfCategory + "\n\n" +
    "【" + A_OVERVIEW + "】" + "\n"  + AContentOfOverview + "\n\n" +
    "【" + A_NAME + "】" + "\n"  + AContentOfName + "\n\n" +
    "【" + A_DEADLINE_DATE + "】" + "\n"  + AStartOfdate + "\n\n" +
    "【" + A_INTENTION + "】" + "\n"  + AContentOfBackground + "\n\n" +
    "【" + A_SCALE + "】" + "\n"  + AContentOfScale + "\n\n" +
    "【" + B_OVERVIEW + "】" + "\n"  + BContentOfOverview + "\n\n" +
    "【" + B_DEADLINE_DATE + "】" + "\n"  + BStartOfdate + "\n\n" ;
  /*
  * メール送信実行
  */
  MailApp.sendEmail(
    TO,
    SUBJECT,
    body
  );
}
