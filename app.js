const restaurants = [
  {
    name: "スターバックス コーヒー グランスタ東京B1店",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "コーヒー・待ち合わせ",
    aliases: "スタバ すたば すたーばっくす starbucks coffee",
    walk: 2,
    seats: 9,
    baseCrowd: 66,
    color: "#16734d",
  },
  {
    name: "DEAN & DELUCA グランスタ東京",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "エスプレッソ・軽食",
    aliases: "ディーンアンドデルーカ dean deluca コーヒー",
    walk: 3,
    seats: 8,
    baseCrowd: 58,
    color: "#4f6f64",
  },
  {
    name: "BURDIGALA TOKYO",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "ベーカリー・パティスリー",
    aliases: "ブルディガラ パン ケーキ",
    walk: 3,
    seats: 7,
    baseCrowd: 52,
    color: "#c6955d",
  },
  {
    name: "ベックスコーヒーショップ 丸の内南口",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "朝カフェ・短時間",
    aliases: "beck's becks ベックス コーヒー",
    walk: 1,
    seats: 10,
    baseCrowd: 48,
    color: "#8a6a4f",
  },
  {
    name: "5 CROSSTIES COFFEE",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "コーヒー・休憩",
    aliases: "ファイブクロスティーズ 5クロスティーズ coffee",
    walk: 3,
    seats: 10,
    baseCrowd: 45,
    color: "#5c8190",
  },
  {
    name: "DEPOT",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "カフェバー・プリン",
    aliases: "デポー デポ カフェ バー",
    walk: 4,
    seats: 6,
    baseCrowd: 57,
    color: "#6e7c64",
  },
  {
    name: "THE STANDARD BAKERS TOKYO",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "ベーカリーカフェ",
    aliases: "スタンダードベイカーズ パン",
    walk: 3,
    seats: 7,
    baseCrowd: 53,
    color: "#b78355",
  },
  {
    name: "ピエール・エルメ・パリ",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "洋菓子・カフェ",
    aliases: "pierre herme マカロン スイーツ",
    walk: 3,
    seats: 4,
    baseCrowd: 61,
    color: "#d092b3",
  },
  {
    name: "恵比寿 和定食 なかよし",
    area: "駅ナカ",
    genre: "和食",
    purpose: "定食・落ち着くごはん",
    aliases: "なかよし 和定食 定食",
    walk: 3,
    seats: 8,
    baseCrowd: 59,
    color: "#8fc5b5",
  },
  {
    name: "そばいち グランスタ東京店",
    area: "駅ナカ",
    genre: "和食",
    purpose: "そば・うどん・早め",
    aliases: "蕎麦 そば うどん soba",
    walk: 2,
    seats: 9,
    baseCrowd: 54,
    color: "#8ab07d",
  },
  {
    name: "江戸切り 助六そば ぬる燗佐藤",
    area: "駅ナカ",
    genre: "和食",
    purpose: "そば・日本酒",
    aliases: "助六 ぬる燗佐藤 そば 日本酒",
    walk: 3,
    seats: 5,
    baseCrowd: 55,
    color: "#7e9b6f",
  },
  {
    name: "とんかつ まい泉食堂",
    area: "駅ナカ",
    genre: "和食",
    purpose: "とんかつ・どんぶり",
    aliases: "まい泉 とんかつ カツ丼",
    walk: 2,
    seats: 6,
    baseCrowd: 63,
    color: "#c9b06b",
  },
  {
    name: "ほんのり屋×marukome",
    area: "駅ナカ",
    genre: "和食",
    purpose: "おむすび・味噌汁",
    aliases: "おにぎり おむすび ほんのり屋 マルコメ",
    walk: 4,
    seats: 7,
    baseCrowd: 43,
    color: "#b3a16d",
  },
  {
    name: "つきじ喜代村",
    area: "駅ナカ",
    genre: "寿司",
    purpose: "寿司・弁当",
    aliases: "すし 寿司 築地 喜代村",
    walk: 3,
    seats: 4,
    baseCrowd: 56,
    color: "#76a9b8",
  },
  {
    name: "天然本まぐろ ありそ鮨し",
    area: "駅ナカ",
    genre: "寿司",
    purpose: "寿司・まぐろ",
    aliases: "ありそ 鮨 すし マグロ",
    walk: 3,
    seats: 5,
    baseCrowd: 64,
    color: "#6ba5b8",
  },
  {
    name: "回転寿司 羽田市場",
    area: "駅ナカ",
    genre: "寿司",
    purpose: "回転寿司・海鮮",
    aliases: "羽田市場 すし 寿司 海鮮",
    walk: 4,
    seats: 7,
    baseCrowd: 62,
    color: "#5f9eb2",
  },
  {
    name: "魚力海鮮寿司",
    area: "駅ナカ",
    genre: "寿司",
    purpose: "海鮮寿司",
    aliases: "魚力 すし 寿司 海鮮",
    walk: 5,
    seats: 5,
    baseCrowd: 52,
    color: "#6596b6",
  },
  {
    name: "NIPPON RAMEN 凛 RIN TOKYO",
    area: "駅ナカ",
    genre: "ラーメン",
    purpose: "醤油ラーメン",
    aliases: "ラーメン らーめん 凛 rin",
    walk: 3,
    seats: 5,
    baseCrowd: 70,
    color: "#d27a55",
  },
  {
    name: "雷 東京本丸店",
    area: "駅ナカ",
    genre: "ラーメン",
    purpose: "濃厚ラーメン",
    aliases: "雷 とみ田 らーめん ラーメン",
    walk: 3,
    seats: 4,
    baseCrowd: 74,
    color: "#c65a3c",
  },
  {
    name: "T'sたんたん",
    area: "駅ナカ",
    genre: "ラーメン",
    purpose: "担々麺・野菜系",
    aliases: "つたんたん ティーズたんたん たんたん麺",
    walk: 4,
    seats: 6,
    baseCrowd: 61,
    color: "#d58d7b",
  },
  {
    name: "南国酒家 47china",
    area: "駅ナカ",
    genre: "中華",
    purpose: "中華・点心",
    aliases: "なんごくしゅか 中華 47チャイナ",
    walk: 3,
    seats: 8,
    baseCrowd: 56,
    color: "#d39053",
  },
  {
    name: "台湾料理専門店 台湾101",
    area: "駅ナカ",
    genre: "中華",
    purpose: "台湾料理・魯肉飯",
    aliases: "台湾 たいわん ルーローハン",
    walk: 4,
    seats: 6,
    baseCrowd: 55,
    color: "#d5a05c",
  },
  {
    name: "東京ギョーザ スタンド ウーロン",
    area: "駅ナカ",
    genre: "中華",
    purpose: "餃子・軽く一杯",
    aliases: "餃子 ぎょうざ ウーロン",
    walk: 4,
    seats: 6,
    baseCrowd: 66,
    color: "#d88417",
  },
  {
    name: "STATION RESTAURANT THE CENTRAL",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "洋食・駅舎気分",
    aliases: "ステーション レストラン セントラル オムライス",
    walk: 3,
    seats: 9,
    baseCrowd: 60,
    color: "#92b5d9",
  },
  {
    name: "THE BEAT DINER",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "ハンバーガー",
    aliases: "ビートダイナー バーガー burger",
    walk: 4,
    seats: 8,
    baseCrowd: 51,
    color: "#86bdcf",
  },
  {
    name: "格之進ハンバーグ&バル",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "ハンバーグ・バル",
    aliases: "格之進 ハンバーグ 肉",
    walk: 4,
    seats: 6,
    baseCrowd: 62,
    color: "#c17a63",
  },
  {
    name: "肉卸小島",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "ステーキ・肉料理",
    aliases: "肉 ステーキ 小島",
    walk: 3,
    seats: 5,
    baseCrowd: 65,
    color: "#bc6f65",
  },
  {
    name: "近畿大学水産研究所 はなれ",
    area: "駅ナカ",
    genre: "和食",
    purpose: "魚料理・海鮮",
    aliases: "近大 きんだい 水産 海鮮 魚",
    walk: 3,
    seats: 8,
    baseCrowd: 58,
    color: "#6ca5a4",
  },
  {
    name: "海鮮居酒屋 羽田市場",
    area: "駅ナカ",
    genre: "居酒屋",
    purpose: "海鮮・居酒屋",
    aliases: "羽田市場 海鮮 居酒屋",
    walk: 4,
    seats: 7,
    baseCrowd: 64,
    color: "#558fa1",
  },
  {
    name: "名古屋コーチン専門 伊藤和四五郎商店",
    area: "駅ナカ",
    genre: "居酒屋",
    purpose: "焼き鳥・親子丼",
    aliases: "焼鳥 やきとり 名古屋コーチン",
    walk: 4,
    seats: 6,
    baseCrowd: 63,
    color: "#b98658",
  },
  {
    name: "Japanese Malt Whisky SAKURA",
    area: "駅ナカ",
    genre: "居酒屋",
    purpose: "ウイスキーバー",
    aliases: "サクラ whisky ウイスキー バー",
    walk: 5,
    seats: 4,
    baseCrowd: 48,
    color: "#7a5e72",
  },
  {
    name: "Tokyo Station Beer Stand",
    area: "駅ナカ",
    genre: "居酒屋",
    purpose: "ビール・軽く一杯",
    aliases: "ビール beer スタンド",
    walk: 4,
    seats: 5,
    baseCrowd: 59,
    color: "#c49b4f",
  },
  {
    name: "はせがわ酒店 グランスタ東京店",
    area: "駅ナカ",
    genre: "居酒屋",
    purpose: "日本酒バー",
    aliases: "日本酒 酒 バー はせがわ",
    walk: 4,
    seats: 4,
    baseCrowd: 52,
    color: "#9b7d6a",
  },
  {
    name: "日本橋 天丼 天むす 金子半之助",
    area: "駅ナカ",
    genre: "和食",
    purpose: "天丼・天むす",
    aliases: "金子半之助 天丼 てんぷら",
    walk: 5,
    seats: 5,
    baseCrowd: 68,
    color: "#caa15d",
  },
  {
    name: "名古屋名物 みそかつ 矢場とん",
    area: "駅ナカ",
    genre: "和食",
    purpose: "みそかつ・弁当",
    aliases: "矢場とん 味噌カツ とんかつ",
    walk: 4,
    seats: 5,
    baseCrowd: 60,
    color: "#bc8a52",
  },
  {
    name: "仙臺たんや利久",
    area: "駅ナカ",
    genre: "和食",
    purpose: "牛たん・弁当",
    aliases: "利久 牛タン ぎゅうたん",
    walk: 5,
    seats: 5,
    baseCrowd: 58,
    color: "#9a7865",
  },
  {
    name: "駅弁屋 祭",
    area: "駅ナカ",
    genre: "和食",
    purpose: "駅弁・テイクアウト",
    aliases: "駅弁 祭 弁当",
    walk: 1,
    seats: 12,
    baseCrowd: 78,
    color: "#c7a15c",
  },
  {
    name: "サンドイッチハウス メルヘン",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "サンドイッチ",
    aliases: "メルヘン サンドイッチ フルーツサンド",
    walk: 4,
    seats: 8,
    baseCrowd: 44,
    color: "#d8a7a7",
  },
  {
    name: "CITYSHOP",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "サラダ・デリ",
    aliases: "シティショップ サラダ デリ",
    walk: 3,
    seats: 9,
    baseCrowd: 47,
    color: "#8fc58f",
  },
  {
    name: "北出TACOS",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "タコス・サワー",
    aliases: "タコス tacos メキシカン",
    walk: 4,
    seats: 6,
    baseCrowd: 55,
    color: "#d2a05a",
  },
  {
    name: "東京パニーノ アロマフレスカ",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "パニーノ・イタリアン",
    aliases: "パニーノ イタリアン アロマフレスカ",
    walk: 4,
    seats: 5,
    baseCrowd: 50,
    color: "#b9926d",
  },
  {
    name: "Curly's Croissant TOKYO BAKE STAND",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "クロワッサン・ベーカリー",
    aliases: "カーリーズ クロワッサン パン",
    walk: 4,
    seats: 7,
    baseCrowd: 52,
    color: "#d2ad72",
  },
  {
    name: "京橋千疋屋",
    area: "八重洲",
    genre: "カフェ",
    purpose: "フルーツパーラー",
    aliases: "せんびきや 千疋屋 フルーツ パフェ",
    walk: 5,
    seats: 7,
    baseCrowd: 57,
    color: "#c6b85e",
  },
  {
    name: "資生堂パーラー 八重洲ショップ",
    area: "八重洲",
    genre: "カフェ",
    purpose: "喫茶・洋菓子",
    aliases: "しせいどう 資生堂 パーラー ケーキ",
    walk: 5,
    seats: 6,
    baseCrowd: 52,
    color: "#d39aa2",
  },
  {
    name: "金のおにぎり専門店 ぼんたぼんた",
    area: "八重洲",
    genre: "和食",
    purpose: "おにぎり・軽食",
    aliases: "ぼんたぼんた おにぎり おむすび",
    walk: 4,
    seats: 8,
    baseCrowd: 46,
    color: "#c8b471",
  },
  {
    name: "越後そば",
    area: "八重洲",
    genre: "和食",
    purpose: "立ち食いそば",
    aliases: "えちごそば そば 蕎麦",
    walk: 4,
    seats: 9,
    baseCrowd: 49,
    color: "#9db37b",
  },
  {
    name: "香川 さぬき麺業",
    area: "八重洲",
    genre: "和食",
    purpose: "さぬきうどん",
    aliases: "うどん 讃岐 さぬき",
    walk: 6,
    seats: 8,
    baseCrowd: 54,
    color: "#b6a263",
  },
  {
    name: "鹿児島 黒かつ亭",
    area: "八重洲",
    genre: "和食",
    purpose: "黒豚とんかつ",
    aliases: "黒かつ とんかつ 黒豚",
    walk: 6,
    seats: 6,
    baseCrowd: 58,
    color: "#b5795d",
  },
  {
    name: "産直グルメ回転ずし 函太郎 Tokyo",
    area: "八重洲",
    genre: "寿司",
    purpose: "回転寿司",
    aliases: "函太郎 はこたろう 寿司 すし",
    walk: 5,
    seats: 8,
    baseCrowd: 62,
    color: "#6fa8b5",
  },
  {
    name: "塩らーめん専門 ひるがお",
    area: "八重洲",
    genre: "ラーメン",
    purpose: "塩ラーメン",
    aliases: "ひるがお ラーメン らーめん 塩",
    walk: 6,
    seats: 5,
    baseCrowd: 66,
    color: "#d7a36f",
  },
  {
    name: "家系ラーメン 革新家 TOKYO",
    area: "八重洲",
    genre: "ラーメン",
    purpose: "家系ラーメン",
    aliases: "革新家 いえけい 家系 ラーメン",
    walk: 6,
    seats: 5,
    baseCrowd: 70,
    color: "#c85f4c",
  },
  {
    name: "板前バル",
    area: "八重洲",
    genre: "居酒屋",
    purpose: "海鮮・創作和食",
    aliases: "板前 バル 海鮮 居酒屋",
    walk: 7,
    seats: 7,
    baseCrowd: 59,
    color: "#708fa4",
  },
  {
    name: "酒場シナトラ",
    area: "八重洲",
    genre: "居酒屋",
    purpose: "和・創作料理",
    aliases: "シナトラ 酒場 居酒屋",
    walk: 7,
    seats: 7,
    baseCrowd: 62,
    color: "#8c7564",
  },
  {
    name: "BAKERS gonna BAKE",
    area: "八重洲",
    genre: "カフェ",
    purpose: "スコーン・焼き菓子",
    aliases: "ベイカーズ スコーン bake",
    walk: 5,
    seats: 7,
    baseCrowd: 47,
    color: "#d2a77d",
  },
  {
    name: "スターバックス コーヒー 丸の内ビル店",
    area: "丸の内",
    genre: "カフェ",
    purpose: "コーヒー・待ち合わせ",
    aliases: "スタバ すたば すたーばっくす starbucks 丸ビル",
    walk: 5,
    seats: 10,
    baseCrowd: 62,
    color: "#16734d",
  },
  {
    name: "スターバックス コーヒー 新丸ビル店",
    area: "丸の内",
    genre: "カフェ",
    purpose: "コーヒー・休憩",
    aliases: "スタバ すたば すたーばっくす starbucks 新丸ビル",
    walk: 4,
    seats: 9,
    baseCrowd: 60,
    color: "#188a5b",
  },
  {
    name: "常陸野ブルーイング 丸の内",
    area: "丸の内",
    genre: "居酒屋",
    purpose: "クラフトビール",
    aliases: "ビール hitachino beer ブルーイング",
    walk: 4,
    seats: 7,
    baseCrowd: 56,
    color: "#c5a34e",
  },
  {
    name: "アル・デンシャル丸の内 by アル・ケッチァーノ",
    area: "丸の内",
    genre: "洋食",
    purpose: "イタリアンバール",
    aliases: "イタリアン アルケッチァーノ パスタ",
    walk: 4,
    seats: 8,
    baseCrowd: 52,
    color: "#9fb8c9",
  },
  {
    name: "丸の内グリルテーブル",
    area: "丸の内",
    genre: "洋食",
    purpose: "ランチ会食",
    aliases: "グリル 洋食 ランチ",
    walk: 6,
    seats: 6,
    baseCrowd: 55,
    color: "#d58d7b",
  },
  {
    name: "Otemachi Spice Bar",
    area: "丸の内",
    genre: "中華",
    purpose: "辛め・少人数",
    aliases: "スパイス 中華 辛い",
    walk: 8,
    seats: 6,
    baseCrowd: 49,
    color: "#d27a55",
  },
  {
    name: "丸の内だし茶寮",
    area: "丸の内",
    genre: "和食",
    purpose: "ひとり・短時間",
    aliases: "だし 和食 お茶漬け",
    walk: 4,
    seats: 7,
    baseCrowd: 44,
    color: "#8fc5b5",
  },
  {
    name: "オードリー グランスタ東京",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "手土産・洋菓子",
    aliases: "audrey お菓子 スイーツ",
    walk: 3,
    seats: 12,
    baseCrowd: 72,
    color: "#d68fa5",
  },
  {
    name: "ラデュレ グランスタ東京",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "マカロン・洋菓子",
    aliases: "laduree マカロン スイーツ",
    walk: 3,
    seats: 10,
    baseCrowd: 60,
    color: "#c5a0c9",
  },
  {
    name: "ザ・メープルマニア",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "東京土産",
    aliases: "メープル マニア お土産",
    walk: 2,
    seats: 12,
    baseCrowd: 76,
    color: "#c88f52",
  },
  {
    name: "東京ミルクチーズ工場",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "東京土産・洋菓子",
    aliases: "ミルクチーズ チーズ お土産",
    walk: 3,
    seats: 12,
    baseCrowd: 70,
    color: "#d6b86f",
  },
  {
    name: "ガトーフェスタ ハラダ",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "ラスク・手土産",
    aliases: "ハラダ ラスク スイーツ",
    walk: 4,
    seats: 12,
    baseCrowd: 63,
    color: "#c8b58e",
  },
  {
    name: "とらや グランスタ東京",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "和菓子・手土産",
    aliases: "虎屋 とらや 羊羹 和菓子",
    walk: 4,
    seats: 12,
    baseCrowd: 52,
    color: "#8f6f58",
  },
  {
    name: "ピエール マルコリーニ",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "チョコレート",
    aliases: "マルコリーニ チョコ chocolate",
    walk: 4,
    seats: 12,
    baseCrowd: 58,
    color: "#7f5c68",
  },
  {
    name: "東京あんぱん豆一豆",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "あんぱん・ベーカリー",
    aliases: "まめいちず あんぱん パン",
    walk: 4,
    seats: 10,
    baseCrowd: 55,
    color: "#b6856c",
  },
  {
    name: "フルーツピークス",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "フルーツタルト",
    aliases: "タルト フルーツ ケーキ",
    walk: 5,
    seats: 9,
    baseCrowd: 50,
    color: "#d49e89",
  },
  {
    name: "喫茶店に恋して。",
    area: "駅ナカ",
    genre: "スイーツ",
    purpose: "洋菓子・東京土産",
    aliases: "喫茶店に恋して スイーツ お土産",
    walk: 4,
    seats: 12,
    baseCrowd: 57,
    color: "#b79ac8",
  },
];

const additionalRestaurants = [
  ["スターバックス コーヒー JR東京駅日本橋口店", "駅ナカ", "カフェ", "コーヒー・新幹線前", "スタバ すたば すたーばっくす starbucks 日本橋口", 2, 9, 62, "#16734d"],
  ["スターバックス コーヒー 東京駅八重洲北口店", "八重洲", "カフェ", "コーヒー・待ち合わせ", "スタバ すたば すたーばっくす starbucks 八重洲", 4, 8, 64, "#188a5b"],
  ["スターバックス コーヒー グランルーフ フロント店", "八重洲", "カフェ", "コーヒー・休憩", "スタバ すたば すたーばっくす starbucks グランルーフ", 4, 9, 60, "#16734d"],
  ["スターバックス コーヒー 八重洲地下街店", "八重洲", "カフェ", "コーヒー・地下街", "スタバ すたば すたーばっくす starbucks ヤエチカ", 6, 10, 58, "#188a5b"],
  ["スターバックス コーヒー 東京ミッドタウン八重洲店", "八重洲", "カフェ", "コーヒー・商業施設", "スタバ すたば すたーばっくす starbucks ミッドタウン", 7, 11, 55, "#16734d"],
  ["スターバックス コーヒー 大丸東京店", "八重洲", "カフェ", "コーヒー・百貨店", "スタバ すたば すたーばっくす starbucks 大丸", 4, 7, 61, "#188a5b"],
  ["スターバックス コーヒー 丸の内オアゾ店", "丸の内", "カフェ", "コーヒー・オアゾ", "スタバ すたば すたーばっくす starbucks oazo オアゾ", 5, 10, 55, "#16734d"],
  ["スターバックス コーヒー 丸の内三菱ビル店", "丸の内", "カフェ", "コーヒー・オフィス街", "スタバ すたば すたーばっくす starbucks 三菱ビル", 7, 9, 52, "#188a5b"],
  ["スターバックス コーヒー KITTE丸の内店", "丸の内", "カフェ", "コーヒー・KITTE", "スタバ すたば すたーばっくす starbucks キッテ", 5, 8, 59, "#16734d"],
  ["スターバックス コーヒー 丸の内パークビル店", "丸の内", "カフェ", "コーヒー・仲通り", "スタバ すたば すたーばっくす starbucks パークビル", 8, 9, 51, "#188a5b"],
  ["タリーズコーヒー 東京駅八重洲地下街店", "八重洲", "カフェ", "コーヒー・地下街", "タリーズ tullys コーヒー", 6, 10, 54, "#6f8f63"],
  ["タリーズコーヒー 丸の内永楽ビルディング店", "丸の内", "カフェ", "コーヒー・大手町寄り", "タリーズ tullys コーヒー", 7, 10, 49, "#6b8c61"],
  ["エクセルシオール カフェ 八重洲一丁目店", "八重洲", "カフェ", "カフェ・軽食", "エクセルシオール excel コーヒー", 8, 8, 45, "#8b7256"],
  ["PRONTO 東京駅店", "駅ナカ", "カフェ", "カフェ・バー", "プロント pronto パスタ ビール", 3, 8, 57, "#6f7f7a"],
  ["PRONTO 八重洲柳通り店", "八重洲", "カフェ", "カフェ・バー", "プロント pronto パスタ ビール", 7, 8, 53, "#7b7f6a"],
  ["猿田彦珈琲 東京駅店", "駅ナカ", "カフェ", "スペシャルティコーヒー", "猿田彦 さるたひこ コーヒー", 4, 6, 58, "#8c674f"],
  ["ブルーボトルコーヒー 丸の内カフェ", "丸の内", "カフェ", "スペシャルティコーヒー", "blue bottle ブルーボトル コーヒー", 9, 8, 62, "#5f91ad"],
  ["上島珈琲店 八重洲地下街店", "八重洲", "カフェ", "喫茶・ネルドリップ", "上島 うえしま コーヒー", 6, 9, 47, "#7b604e"],
  ["ドトールコーヒーショップ 八重洲中央口店", "八重洲", "カフェ", "コーヒー・短時間", "ドトール doutor コーヒー", 5, 9, 50, "#b58d52"],
  ["喫茶室ルノアール 東京駅八重洲北口店", "八重洲", "カフェ", "喫茶・ゆっくり", "ルノアール 喫茶 打ち合わせ", 6, 10, 42, "#8e725d"],
  ["PAUL 大丸東京店", "八重洲", "カフェ", "ベーカリー・カフェ", "ポール paul パン", 4, 8, 51, "#c19063"],
  ["イノダコーヒ 東京大丸支店", "八重洲", "カフェ", "喫茶・ケーキ", "イノダ コーヒー 京都", 4, 7, 53, "#9a7158"],
  ["千疋屋総本店 KITTE丸の内店", "丸の内", "カフェ", "フルーツ・パフェ", "せんびきや 千疋屋 パフェ", 5, 7, 58, "#c4b75d"],
  ["果実園リーベル 東京店", "八重洲", "カフェ", "フルーツ・パフェ", "果実園 リーベル フルーツ パフェ", 8, 8, 62, "#d19b78"],
  ["六厘舎 東京ラーメンストリート", "八重洲", "ラーメン", "つけめん", "ろくりんしゃ つけ麺 ラーメン", 5, 5, 82, "#c95f3f"],
  ["東京駅 斑鳩", "八重洲", "ラーメン", "東京ラーメン", "いかるが ラーメン", 5, 5, 66, "#bd7a51"],
  ["そらのいろ NIPPON", "八重洲", "ラーメン", "ベジソバ・ラーメン", "そらのいろ ラーメン ベジソバ", 5, 5, 64, "#d38a62"],
  ["東京煮干し らーめん玉", "八重洲", "ラーメン", "煮干しラーメン", "玉 たま 煮干し らーめん", 5, 5, 68, "#cc744b"],
  ["つじ田 味噌の章 東京駅店", "八重洲", "ラーメン", "味噌ラーメン", "つじ田 味噌 ラーメン", 5, 5, 67, "#c7834c"],
  ["俺式 純 東京駅店", "八重洲", "ラーメン", "豚骨ラーメン", "俺式 とんこつ ラーメン", 5, 5, 65, "#bd6a55"],
  ["東京タンメン トナリ", "八重洲", "ラーメン", "タンメン・餃子", "トナリ タンメン 餃子", 5, 6, 63, "#d59a55"],
  ["東京ラーメンストリート 革新家 TOKYO", "八重洲", "ラーメン", "家系ラーメン", "革新家 家系 ラーメン", 5, 5, 71, "#c75a47"],
  ["東京ラーメンストリート ひるがお", "八重洲", "ラーメン", "塩ラーメン", "ひるがお 塩 ラーメン", 5, 5, 67, "#d7a36f"],
  ["つるとんたん BIS TOKYO", "丸の内", "和食", "うどん・会食", "つるとんたん うどん", 7, 8, 67, "#b49d68"],
  ["酢重ダイニング 新丸の内ビル", "丸の内", "和食", "和食・定食", "酢重 すじゅう 和食", 5, 8, 61, "#8ca879"],
  ["だし茶漬け えん 新丸ビル店", "丸の内", "和食", "だし茶漬け", "えん お茶漬け だし", 5, 7, 50, "#8eb181"],
  ["おぼんdeごはん KITTE丸の内店", "丸の内", "和食", "定食・バランスごはん", "おぼんでごはん 定食", 5, 8, 58, "#96ad78"],
  ["菜な KITTE丸の内店", "丸の内", "和食", "京おばんざい", "菜な おばんざい 和食", 5, 7, 56, "#86a06f"],
  ["博多もつ鍋 幸 とりもつえん KITTE丸の内店", "丸の内", "居酒屋", "もつ鍋・九州料理", "もつ鍋 とりもつえん 九州", 5, 7, 60, "#b98258"],
  ["まんてん鮨 丸の内", "丸の内", "寿司", "寿司・おまかせ", "まんてん すし 鮨", 5, 5, 74, "#5f9eb2"],
  ["根室花まる KITTE丸の内店", "丸の内", "寿司", "回転寿司", "花まる はなまる 寿司 すし", 5, 6, 78, "#619bb0"],
  ["沼津魚がし鮨 丸ビル店", "丸の内", "寿司", "寿司・海鮮", "魚がし 鮨 すし 海鮮", 6, 6, 62, "#649cb4"],
  ["築地寿司清 東京駅グランスタ店", "駅ナカ", "寿司", "江戸前寿司", "寿司清 すし 鮨 築地", 3, 5, 63, "#6ba5b8"],
  ["すし好 和 グランスタ丸の内店", "駅ナカ", "寿司", "寿司・海鮮", "すし好 寿司 鮨", 4, 5, 59, "#70a2b5"],
  ["すしざんまい 八重洲店", "八重洲", "寿司", "寿司・海鮮", "すしざんまい 寿司 鮨", 8, 7, 61, "#679bb2"],
  ["サイアムヘリテイジ東京", "丸の内", "洋食", "タイ料理", "タイ siamh heritage エスニック", 5, 8, 57, "#d09a51"],
  ["マンゴツリー東京", "丸の内", "洋食", "タイ料理・眺望", "mango tree マンゴツリー タイ", 5, 8, 60, "#d59c58"],
  ["RIGOLETTO WINE AND BAR", "丸の内", "洋食", "イタリアン・ワイン", "リゴレット ワイン イタリアン", 6, 9, 61, "#9fb8c9"],
  ["A16 TOKYO", "丸の内", "洋食", "イタリアン・ピッツァ", "a16 ピザ イタリアン", 7, 8, 58, "#9ab0c8"],
  ["ISOLA SMERALDA", "丸の内", "洋食", "ピッツァ・イタリアン", "イゾラ スメラルダ ピザ", 6, 8, 55, "#8eb6c7"],
  ["AWkitchen TOKYO 新丸ビル店", "丸の内", "洋食", "パスタ・野菜", "エーダブリューキッチン パスタ", 5, 8, 56, "#8fbf9b"],
  ["オザミトーキョー 丸ビル", "丸の内", "洋食", "フレンチ・ワイン", "aux amis オザミ フレンチ", 6, 7, 54, "#8fa9c6"],
  ["ブラッスリー・ヴィロン 丸の内店", "丸の内", "洋食", "フレンチ・パン", "viron ヴィロン フレンチ", 7, 7, 55, "#b98e63"],
  ["サラベス 東京店", "丸の内", "洋食", "NYブランチ", "sarabeth サラベス パンケーキ", 5, 8, 62, "#d0a47d"],
  ["ウルフギャング・ステーキハウス 丸の内店", "丸の内", "洋食", "ステーキ", "wolfgang ステーキ 肉", 7, 7, 58, "#b06c5f"],
  ["KUA`AINA 丸ビル店", "丸の内", "洋食", "ハンバーガー", "クアアイナ バーガー ハンバーガー", 6, 8, 56, "#d1a25a"],
  ["つばめグリル 大丸東京店", "八重洲", "洋食", "ハンブルグステーキ", "つばめ グリル ハンバーグ", 4, 8, 59, "#bc7d63"],
  ["ポール・ボキューズ 大丸東京", "八重洲", "洋食", "フレンチ・洋食", "paul bocuse フレンチ", 4, 8, 54, "#8fa8bd"],
  ["ブラッスリー ポール・ボキューズ 大丸東京", "八重洲", "洋食", "ブラッスリー", "ポールボキューズ フレンチ", 4, 8, 52, "#8ea5bc"],
  ["XEX TOKYO", "八重洲", "洋食", "イタリアン・バー", "ゼックス xex イタリアン", 4, 8, 58, "#7f788b"],
  ["サバティーニ・ディ・フィレンツェ 大丸東京店", "八重洲", "洋食", "イタリアン", "サバティーニ イタリアン", 4, 7, 53, "#9eb5c7"],
  ["牛たん ねぎし 八重洲店", "八重洲", "和食", "牛たん定食", "ねぎし 牛タン 定食", 8, 7, 58, "#a97b60"],
  ["とんかつ和幸 八重洲地下街店", "八重洲", "和食", "とんかつ", "和幸 とんかつ カツ", 6, 8, 56, "#bd8d58"],
  ["天ぷら 天喜代 東京駅店", "八重洲", "和食", "天ぷら・天丼", "天喜代 てんぷら 天丼", 5, 6, 60, "#caa15d"],
  ["銀座 天一 大丸東京店", "八重洲", "和食", "天ぷら", "天一 てんぷら 天ぷら", 4, 6, 57, "#c5a061"],
  ["日本橋だし場 はなれ", "八重洲", "和食", "だし料理", "にんべん だし 和食", 8, 7, 54, "#91aa7a"],
  ["たいめいけん 日本橋", "八重洲", "洋食", "オムライス・洋食", "たいめいけん オムライス", 12, 8, 68, "#d2a064"],
  ["日本橋 玉ゐ 本店", "八重洲", "和食", "あなご料理", "玉ゐ たまい 穴子 あなご", 11, 6, 66, "#b99461"],
  ["にんべん 日本橋本店 日本橋だし場", "八重洲", "和食", "だし・軽食", "にんべん だし 日本橋", 10, 8, 49, "#8cab77"],
  ["うなぎ はし本", "八重洲", "和食", "うなぎ", "鰻 うなぎ はし本", 10, 5, 62, "#9a7457"],
  ["YEBISU BAR グランスタ八重北店", "八重洲", "居酒屋", "ビール・洋食", "ヱビス エビス ビール bar", 5, 8, 59, "#c49b4f"],
  ["北海道バル 海 グランスタ八重北店", "八重洲", "居酒屋", "海鮮・北海道", "北海道 バル 海鮮", 5, 8, 57, "#699bad"],
  ["築地すし好 和 グランスタ八重北店", "八重洲", "寿司", "寿司・海鮮", "すし好 寿司 鮨", 5, 6, 61, "#6ca2b5"],
  ["餃子百珍 一味玲玲", "八重洲", "中華", "餃子・中華", "玲玲 餃子 ぎょうざ 中華", 5, 7, 58, "#d88417"],
  ["鼎泰豐 東京駅八重洲口店", "八重洲", "中華", "小籠包・台湾料理", "ディンタイフォン 小籠包 台湾", 5, 8, 66, "#d89458"],
  ["過門香 丸の内トラストタワー店", "丸の内", "中華", "中華・会食", "かもんか 中華 点心", 6, 8, 55, "#d18c55"],
  ["小洞天 大手センタービル店", "丸の内", "中華", "中華・焼売", "しょうどうてん シュウマイ 中華", 8, 8, 49, "#d49a61"],
  ["紅虎餃子房 丸の内センタービル店", "丸の内", "中華", "餃子・中華", "紅虎 餃子 中華", 7, 8, 55, "#d88417"],
  ["人人人 東京ビルTOKIA店", "丸の内", "中華", "中華・点心", "レンレンレン 中華 点心", 8, 8, 58, "#d28d55"],
  ["CITA・CITA 丸の内店", "丸の内", "洋食", "アジアン・エスニック", "チタチタ アジアン", 8, 8, 53, "#d09d59"],
  ["韓美膳 グランスタ丸の内店", "丸の内", "中華", "韓国料理", "ハンビジェ 韓国 ビビンバ", 4, 7, 57, "#d08359"],
  ["妻家房 丸の内オアゾ店", "丸の内", "中華", "韓国料理", "さいかぼう 韓国 冷麺", 5, 7, 52, "#c98259"],
  ["バビーズ ヤエチカ", "八重洲", "洋食", "アメリカン・パイ", "bubby's バビーズ パイ", 6, 9, 55, "#c59068"],
  ["ERICK SOUTH 八重洲店", "八重洲", "洋食", "南インドカレー", "エリックサウス カレー インド", 7, 7, 62, "#d29b52"],
  ["ダバ インディア", "八重洲", "洋食", "南インド料理", "ダバインディア カレー インド", 9, 7, 66, "#d09652"],
  ["京橋モルチェ", "八重洲", "洋食", "洋食・ビール", "モルチェ 洋食 ビール", 9, 8, 48, "#b08361"],
  ["カレーショップ アルプス", "八重洲", "洋食", "カレー・短時間", "アルプス カレー", 7, 9, 50, "#d3a45c"],
  ["ローストビーフ大野 東京八重洲店", "八重洲", "洋食", "ローストビーフ丼", "大野 ローストビーフ 肉", 8, 6, 62, "#b66f5e"],
  ["酒場蛍火 八重洲本店", "八重洲", "居酒屋", "居酒屋・和食", "ほたるび 居酒屋", 8, 8, 58, "#8a7564"],
  ["THE OLD STATION 東京店", "八重洲", "居酒屋", "ビアホール", "オールドステーション ビール", 4, 9, 56, "#b9904f"],
  ["ROSE & CROWN 八重洲一丁目店", "八重洲", "居酒屋", "パブ・ビール", "ローズアンドクラウン pub ビール", 8, 8, 52, "#8b6b73"],
  ["東京コトブキ 東京駅店", "八重洲", "居酒屋", "魚・日本酒", "コトブキ 居酒屋 日本酒", 5, 8, 61, "#7b8f8f"],
  ["日本橋 墨之栄", "八重洲", "居酒屋", "海鮮・炉端", "すみのえ 海鮮 居酒屋", 10, 8, 62, "#6f8891"],
  ["山内農場 東京ミッドタウン八重洲店", "八重洲", "居酒屋", "居酒屋・鶏料理", "山内農場 居酒屋 鶏", 7, 9, 54, "#9b7656"],
  ["鳥元 東京駅グランルーフ店", "八重洲", "居酒屋", "焼き鳥・そば", "鳥元 焼鳥 やきとり", 4, 8, 59, "#a67c57"],
  ["串カツ田中 八重洲店", "八重洲", "居酒屋", "串カツ・居酒屋", "田中 串カツ 居酒屋", 9, 8, 57, "#c59a4e"],
  ["銀座ライオン 八重洲地下街店", "八重洲", "居酒屋", "ビヤホール", "ライオン ビール ビヤホール", 6, 9, 55, "#c9a04e"],
  ["ハーブス 丸ビル店", "丸の内", "スイーツ", "ケーキ・カフェ", "harbs ハーブス ケーキ", 6, 7, 65, "#d49ab4"],
  ["カカオサンパカ 丸の内本店", "丸の内", "スイーツ", "チョコレート", "カカオサンパカ チョコ", 7, 6, 48, "#7f5c68"],
  ["ショコラティエ パレ ド オール 東京", "丸の内", "スイーツ", "チョコレート・カフェ", "パレドオール チョコ", 6, 6, 52, "#8d6371"],
  ["ラ・メゾン・デュ・ショコラ 丸の内店", "丸の内", "スイーツ", "チョコレート", "ショコラ チョコ", 6, 6, 49, "#79586a"],
  ["VIRON 丸の内店", "丸の内", "カフェ", "ベーカリー・カフェ", "ヴィロン パン カフェ", 7, 7, 56, "#b98e63"],
  ["エシレ・メゾン デュ ブール", "丸の内", "スイーツ", "バター菓子・手土産", "エシレ バター お菓子", 7, 8, 72, "#d2b878"],
  ["ガレット オ ブール 大丸東京店", "八重洲", "スイーツ", "焼き菓子", "ガレット ブール お菓子", 4, 10, 55, "#c8a873"],
  ["N.Y.C.SAND 大丸東京店", "八重洲", "スイーツ", "キャラメルサンド", "ニューヨークキャラメルサンド お土産", 4, 12, 80, "#be8a58"],
  ["PRESS BUTTER SAND 大丸東京店", "八重洲", "スイーツ", "バターサンド", "プレスバターサンド お土産", 4, 12, 70, "#d2a96d"],
  ["ねんりん家 大丸東京店", "八重洲", "スイーツ", "バームクーヘン", "ねんりんや バームクーヘン", 4, 12, 64, "#caa15d"],
  ["銀のぶどう 大丸東京店", "八重洲", "スイーツ", "洋菓子・手土産", "銀のぶどう お土産", 4, 12, 58, "#c7a9c9"],
  ["東京ばな奈 大丸東京店", "八重洲", "スイーツ", "東京土産", "東京バナナ ばなな お土産", 4, 12, 72, "#d7bd5a"],
  ["シュガーバターの木 大丸東京店", "八重洲", "スイーツ", "東京土産", "シュガーバター お土産", 4, 12, 60, "#d5b36d"],
  ["ベルン 大丸東京店", "八重洲", "スイーツ", "ミルフィユ", "ベルン ミルフィーユ お土産", 4, 12, 52, "#b98d75"],
  ["ヨックモック 大丸東京店", "八重洲", "スイーツ", "洋菓子", "ヨックモック シガール お土産", 4, 12, 50, "#8eb0cb"],
  ["モロゾフ 大丸東京店", "八重洲", "スイーツ", "洋菓子・プリン", "モロゾフ プリン チョコ", 4, 12, 48, "#8f79a8"],
  ["キル フェ ボン グランメゾン銀座", "丸の内", "スイーツ", "タルト・カフェ", "キルフェボン タルト", 14, 6, 66, "#d49e89"],
  ["丸の内 CAFE会", "丸の内", "カフェ", "和カフェ・抹茶", "カフェ会 抹茶 和カフェ", 5, 8, 48, "#7da66f"],
  ["丸の内 CAFE Ease", "丸の内", "カフェ", "カフェ・軽食", "カフェイーズ ease", 5, 9, 45, "#8cb6b0"],
  ["Marunouchi Happ. Stand & Gallery", "丸の内", "カフェ", "カフェ・ギャラリー", "ハップ stand cafe", 8, 8, 43, "#86a9b6"],
  ["M&C Cafe 丸の内オアゾ", "丸の内", "カフェ", "カフェ・ハヤシライス", "丸善 cafe ハヤシライス", 5, 8, 50, "#8f7560"],
  ["和田倉噴水公園レストラン", "丸の内", "洋食", "レストラン・公園", "和田倉 レストラン 洋食", 12, 8, 42, "#86a5b1"],
  ["パレスホテル東京 グランドキッチン", "丸の内", "洋食", "ホテルダイニング", "パレスホテル グランドキッチン", 12, 8, 50, "#9fb5c8"],
  ["東京ステーションホテル ロビーラウンジ", "丸の内", "カフェ", "ホテルラウンジ", "ステーションホテル ラウンジ カフェ", 2, 7, 56, "#b99a75"],
  ["カメリア 東京ステーションホテル", "丸の内", "洋食", "ホテルバー・洋食", "カメリア ステーションホテル", 2, 7, 48, "#8b7686"],
  ["虎屋菓寮 東京ステーションホテル店", "丸の内", "スイーツ", "和菓子・甘味", "とらや 虎屋 和菓子", 2, 7, 52, "#8f6f58"],
].map(([name, area, genre, purpose, aliases, walk, seats, baseCrowd, color]) => ({
  name,
  area,
  genre,
  purpose,
  aliases,
  walk,
  seats,
  baseCrowd,
  color,
}));

restaurants.push(...additionalRestaurants);

const ricoBoostRestaurants = [
  ["ザ・メープルマニア グランスタ東京", "駅ナカ", "スイーツ", "メープル菓子・東京土産", "メープルマニア お土産"],
  ["COCORIS グランスタ東京", "駅ナカ", "スイーツ", "木の実スイーツ・手土産", "ココリス 木の実 お土産"],
  ["薫るバター Sabrina グランスタ東京", "駅ナカ", "スイーツ", "バター菓子・手土産", "サブリナ バター"],
  ["あまみカオリ研究所 グランスタ東京", "駅ナカ", "スイーツ", "香りスイーツ・手土産", "あまみ カオリ"],
  ["nuevo by BUNMEIDO グランスタ東京", "駅ナカ", "スイーツ", "カステラ・洋菓子", "文明堂 カステラ"],
  ["喫茶店に恋して。グランスタ東京", "駅ナカ", "スイーツ", "東京土産・焼き菓子", "喫茶店に恋して"],
  ["じゃがボルダ グランスタ東京", "駅ナカ", "スイーツ", "ポテト菓子・手土産", "じゃがボルダ"],
  ["nuevo by BUNMEIDO HANAGATAYA東京", "駅ナカ", "スイーツ", "カステラ・手土産", "文明堂 カステラ"],
  ["東京ラスク グランスタ東京", "駅ナカ", "スイーツ", "ラスク・手土産", "ラスク お土産"],
  ["鳴門金時本舗 栗尾商店 グランスタ東京", "駅ナカ", "スイーツ", "芋菓子・和スイーツ", "栗尾商店 芋"],
  ["MIYUKA グランスタ東京", "駅ナカ", "スイーツ", "和洋菓子・手土産", "ミユカ お土産"],
  ["富士見堂 グランスタ東京", "駅ナカ", "スイーツ", "せんべい・和菓子", "富士見堂 せんべい"],
  ["菓匠三全 グランスタ東京", "駅ナカ", "スイーツ", "萩の月・菓子", "菓匠三全 萩の月"],
  ["桂新堂 グランスタ東京", "駅ナカ", "スイーツ", "えびせんべい", "桂新堂 えびせん"],
  ["麻布かりんと グランスタ東京", "駅ナカ", "スイーツ", "かりんとう・和菓子", "麻布かりんと"],
  ["鎌倉五郎本店 グランスタ東京", "駅ナカ", "スイーツ", "和菓子・手土産", "鎌倉五郎"],
  ["銀座甘楽 グランスタ東京", "駅ナカ", "スイーツ", "豆大福・和菓子", "甘楽 豆大福"],
  ["舟和 グランスタ東京", "駅ナカ", "スイーツ", "芋ようかん・和菓子", "舟和 芋ようかん"],
  ["宗家 源吉兆庵 グランスタ東京", "駅ナカ", "スイーツ", "季節の和菓子", "源吉兆庵 和菓子"],
  ["日本橋錦豊琳 グランスタ東京", "駅ナカ", "スイーツ", "かりんとう・手土産", "錦豊琳 かりんとう"],
  ["東京會舘 グランスタ東京", "駅ナカ", "スイーツ", "洋菓子・クッキー", "東京會舘"],
  ["ブールミッシュ グランスタ東京", "駅ナカ", "スイーツ", "洋菓子・ケーキ", "ブールミッシュ"],
  ["メリーチョコレート グランスタ東京", "駅ナカ", "スイーツ", "チョコレート", "メリー チョコ"],
  ["Mary's café グランスタ東京", "駅ナカ", "カフェ", "チョコレートカフェ", "メリー カフェ"],
  ["資生堂パーラー グランスタ東京", "駅ナカ", "スイーツ", "洋菓子・チーズケーキ", "資生堂パーラー"],
  ["ユーハイム グランスタ東京", "駅ナカ", "スイーツ", "バウムクーヘン", "ユーハイム バーム"],
  ["ブリュレメリゼ グランスタ東京", "駅ナカ", "スイーツ", "ブリュレスイーツ", "ブリュレメリゼ"],
  ["Fairycake Fair グランスタ東京", "駅ナカ", "スイーツ", "カップケーキ・焼き菓子", "フェアリーケーキ"],
  ["Now on Cheese♪ グランスタ東京", "駅ナカ", "スイーツ", "チーズスイーツ", "ナウオンチーズ"],
  ["COFFEE STYLE UCC グランスタ東京", "駅ナカ", "カフェ", "コーヒー豆・カフェ", "ucc コーヒー"],
  ["Made in ピエール・エルメ 丸の内", "丸の内", "スイーツ", "マカロン・手土産", "ピエールエルメ"],
  ["ラ ブティック ドゥ ジョエル・ロブション 丸の内", "丸の内", "スイーツ", "パン・焼き菓子", "ロブション パン"],
  ["カフェ1894 三菱一号館美術館", "丸の内", "カフェ", "クラシックカフェ", "cafe1894"],
  ["THE FRONT ROOM 丸の内", "丸の内", "カフェ", "カフェ・ブランチ", "フロントルーム"],
  ["THE UPPER 丸の内", "丸の内", "洋食", "ブラッスリー・バー", "アッパー"],
  ["GARB Tokyo 丸の内", "丸の内", "洋食", "イタリアン・カフェ", "ガーブ"],
  ["ANTHEMBLE by My Humble House 丸の内", "丸の内", "洋食", "アジアン・ワイン", "アンセンブル"],
  ["BISTRO DOUBLE 丸の内", "丸の内", "洋食", "ビストロ・ワイン", "ビストロダブル"],
  ["La Pesquera MARISQUERIA 丸の内", "丸の内", "洋食", "スペイン・シーフード", "ラペスケーラ"],
  ["Baru＆Bistro musiQ mood board", "丸の内", "洋食", "ビストロ・バル", "ムードボード"],
  ["P.C.M. Pub Cardinal Marunouchi", "丸の内", "居酒屋", "パブ・ビール", "pub cardinal"],
  ["PAGLIACCIO 丸の内", "丸の内", "洋食", "イタリアン・ピッツァ", "パリアッチョ"],
  ["TRATTORIA CREATTA 丸の内", "丸の内", "洋食", "イタリアン・会食", "クレアッタ"],
  ["四川豆花飯荘 東京店", "丸の内", "中華", "四川料理・中国茶", "四川 豆花"],
  ["人人人 丸の内店", "丸の内", "中華", "中華・点心", "レンレンレン"],
  ["CHINESE 青菜 丸の内", "丸の内", "中華", "中華・野菜料理", "青菜 中華"],
  ["小岩井農場TOKYO 丸ビル店", "丸の内", "洋食", "洋食・乳製品", "小岩井"],
  ["モナリザ 丸の内店", "丸の内", "洋食", "フレンチ・記念日", "モナリザ フレンチ"],
  ["Sens & Saveurs 丸ビル", "丸の内", "洋食", "フレンチ・眺望", "サンスエサヴール"],
  ["暗闇坂 宮下 丸ビル", "丸の内", "和食", "和食・会席", "宮下 和食"],
  ["醍醐味 丸ビル", "丸の内", "和食", "和食・会食", "醍醐味"],
  ["日本料理 大志満 椿壽 丸の内店", "丸の内", "和食", "加賀料理・会席", "大志満"],
  ["京料理 熊魚菴たん熊北店 東京ドームホテル店", "丸の内", "和食", "京料理", "たん熊"],
  ["個室会席 北大路 八重洲茶寮", "八重洲", "和食", "会席・個室", "北大路"],
  ["日本橋 天ぷらめし 金子半之助 日本橋店", "八重洲", "和食", "天ぷらめし", "金子半之助 天ぷら"],
  ["日本橋 天丼 金子半之助 本店", "八重洲", "和食", "天丼", "金子半之助 天丼"],
  ["日本橋 お多幸本店", "八重洲", "居酒屋", "おでん・居酒屋", "お多幸 おでん"],
  ["日本橋 ゆかり", "八重洲", "和食", "日本料理・老舗", "ゆかり 和食"],
  ["たいめいけん 日本橋本店", "八重洲", "洋食", "オムライス・洋食", "たいめいけん"],
  ["紅花別館", "八重洲", "洋食", "カレー・洋食", "紅花 ココットカレー"],
  ["日本橋 墨之栄", "八重洲", "居酒屋", "炉端・海鮮", "墨之栄"],
  ["日本橋ビアホール", "八重洲", "居酒屋", "ビール・洋食", "ビアホール"],
  ["三重テラス レストラン", "八重洲", "和食", "三重料理・物産", "三重テラス"],
  ["榮太樓總本鋪 日本橋本店", "八重洲", "スイーツ", "和菓子・飴", "榮太樓 えいたろう"],
  ["うさぎや 日本橋本店", "八重洲", "スイーツ", "どら焼き・和菓子", "うさぎや どら焼き"],
  ["千疋屋総本店 日本橋本店", "八重洲", "カフェ", "フルーツパーラー", "千疋屋 フルーツ"],
  ["文明堂 日本橋本店", "八重洲", "スイーツ", "カステラ・和菓子", "文明堂"],
  ["日本橋 長門", "八重洲", "スイーツ", "久寿もち・和菓子", "長門 和菓子"],
  ["日本橋屋長兵衛 日本橋本店", "八重洲", "スイーツ", "和菓子・手土産", "日本橋屋"],
  ["山本山 ふじヱ茶房", "八重洲", "カフェ", "日本茶・甘味", "山本山 お茶"],
  ["コレド室町 船橋屋", "八重洲", "スイーツ", "くず餅・甘味", "船橋屋 くず餅"],
  ["コレド室町 鶴屋吉信", "八重洲", "スイーツ", "京菓子・甘味", "鶴屋吉信"],
  ["コレド室町 箔座日本橋", "八重洲", "スイーツ", "金箔スイーツ", "箔座"],
  ["コレド室町 日本橋だし場 はなれ", "八重洲", "和食", "だし料理", "にんべん"],
  ["コレド室町 石川亭", "八重洲", "洋食", "ビストロ", "石川亭"],
  ["コレド室町 GRIP TAVERN", "八重洲", "洋食", "イタリアン・野菜", "グリップタバーン"],
  ["コレド室町 牡蠣場北海道厚岸", "八重洲", "居酒屋", "牡蠣・海鮮", "厚岸 牡蠣"],
  ["コレド室町 重慶飯店", "八重洲", "中華", "四川料理", "重慶飯店"],
  ["コレド室町 ブールアンジュ", "八重洲", "カフェ", "ベーカリーカフェ", "ブールアンジュ"],
  ["コレド室町 THE ALLEY", "八重洲", "カフェ", "ティースタンド", "ジアレイ タピオカ"],
  ["Bubby's ヤエチカ", "八重洲", "洋食", "アメリカン・パイ", "バビーズ パイ"],
  ["カフェ・ド・クリエ 八重洲地下街店", "八重洲", "カフェ", "カフェ・軽食", "クリエ コーヒー"],
  ["サンマルクカフェ 八重洲地下街店", "八重洲", "カフェ", "チョコクロ・カフェ", "サンマルク チョコクロ"],
  ["銀座コージーコーナー 八重洲地下街店", "八重洲", "スイーツ", "ケーキ・シュークリーム", "コージーコーナー"],
  ["ゴディバ 八重洲地下街店", "八重洲", "スイーツ", "チョコレート", "godiva ゴディバ"],
  ["リンツ ショコラ ブティック 八重洲地下街店", "八重洲", "スイーツ", "チョコレート", "lindt リンツ"],
  ["モロゾフ 八重洲地下街店", "八重洲", "スイーツ", "プリン・チョコレート", "モロゾフ"],
  ["銀座あけぼの 八重洲地下街店", "八重洲", "スイーツ", "和菓子・せんべい", "あけぼの"],
  ["東京凮月堂 八重洲地下街店", "八重洲", "スイーツ", "ゴーフル・洋菓子", "風月堂 ゴーフル"],
  ["ねんりん家 八重洲地下街店", "八重洲", "スイーツ", "バームクーヘン", "ねんりんや"],
  ["ラ・メゾン アンソレイユターブル パティスリー 八重洲", "八重洲", "スイーツ", "タルト・ケーキ", "ラメゾン タルト"],
  ["東京ミルクチーズ工場 八重洲地下街店", "八重洲", "スイーツ", "チーズクッキー", "ミルクチーズ"],
  ["Butter Butler 東京ギフトパレット", "八重洲", "スイーツ", "バター菓子", "バターバトラー"],
  ["岡田謹製 あんバタ屋 東京ギフトパレット", "八重洲", "スイーツ", "あんバター菓子", "あんバタ屋"],
  ["PISTA & TOKYO 東京ギフトパレット", "八重洲", "スイーツ", "ピスタチオスイーツ", "ピスタアンドトーキョー"],
  ["SOLES GAUFRETTE 東京ギフトパレット", "八重洲", "スイーツ", "ゴーフレット", "ソールズゴーフレット"],
  ["東京ばな奈s 東京ギフトパレット", "八重洲", "スイーツ", "東京土産", "東京ばな奈"],
  ["クラブハリエ B-studio Tokyo East", "八重洲", "スイーツ", "バームクーヘン", "クラブハリエ"],
  ["PIERRE MARCOLINI 東京ギフトパレット", "八重洲", "スイーツ", "チョコレート", "ピエールマルコリーニ"],
  ["BAKERS gonna BAKE 東京ギフトパレット", "八重洲", "スイーツ", "スコーン・焼き菓子", "ベイカーズ"],
  ["JUCHHEIM DIE MEISTER 東京ギフトパレット", "八重洲", "スイーツ", "バームクーヘン", "ユーハイム"],
  ["PRESS BUTTER SAND 東京駅店", "駅ナカ", "スイーツ", "バターサンド", "プレスバターサンド"],
  ["東京カンパネラ 東京駅店", "駅ナカ", "スイーツ", "ラングドシャ・東京土産", "カンパネラ"],
  ["東京たまご ごまたまご 東京駅店", "駅ナカ", "スイーツ", "東京土産・和菓子", "ごまたまご"],
  ["銀座たまや 東京駅店", "駅ナカ", "スイーツ", "東京土産", "銀座たまや"],
  ["和楽紅屋 東京駅店", "駅ナカ", "スイーツ", "和ラスク・手土産", "和楽紅屋"],
].map(([name, area, genre, purpose, aliases], index) => ({
  name,
  area,
  genre,
  purpose,
  aliases,
  walk: area === "駅ナカ" ? 3 + (index % 3) : area === "丸の内" ? 5 + (index % 5) : 5 + (index % 7),
  seats: genre === "スイーツ" ? 10 + (index % 4) : 6 + (index % 5),
  baseCrowd: 44 + ((index * 7) % 34),
  color:
    genre === "スイーツ"
      ? ["#d49ab4", "#d2a96d", "#c8a873", "#d7bd5a"][index % 4]
      : genre === "カフェ"
        ? "#8cb6b0"
        : genre === "和食"
          ? "#91aa7a"
          : genre === "中華"
            ? "#d88417"
            : genre === "居酒屋"
              ? "#8a7564"
              : "#9fb5c8",
}));

restaurants.push(...ricoBoostRestaurants);

const state = {
  area: "all",
  genre: "all",
  availableOnly: false,
  search: "",
};

const elements = {
  clock: document.querySelector("#clock"),
  updatedAt: document.querySelector("#updatedAt"),
  openCount: document.querySelector("#openCount"),
  avgWait: document.querySelector("#avgWait"),
  resultCount: document.querySelector("#resultCount"),
  list: document.querySelector("#restaurantList"),
  template: document.querySelector("#restaurantTemplate"),
  searchInput: document.querySelector("#searchInput"),
  availableOnly: document.querySelector("#availableOnly"),
  refreshButton: document.querySelector("#refreshButton"),
  detailModal: document.querySelector("#detailModal"),
  detailArea: document.querySelector("#detailArea"),
  detailTitle: document.querySelector("#detailTitle"),
  detailDescription: document.querySelector("#detailDescription"),
  detailWalk: document.querySelector("#detailWalk"),
  detailSeat: document.querySelector("#detailSeat"),
  detailCrowd: document.querySelector("#detailCrowd"),
  detailWebsite: document.querySelector("#detailWebsite"),
  detailMap: document.querySelector("#detailMap"),
};

function getCurrentCrowd(restaurant, offset = 0) {
  const now = new Date();
  const hour = (now.getHours() + offset + 24) % 24;
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const mealPeak =
    (hour >= 11 && hour <= 13 ? 24 : 0) +
    (hour >= 18 && hour <= 20 ? 19 : 0) +
    (hour >= 7 && hour <= 9 ? 10 : 0);
  const cafeLift = restaurant.genre === "カフェ" && hour >= 14 && hour <= 17 ? 20 : 0;
  const sweetsLift = restaurant.genre === "スイーツ" && hour >= 15 && hour <= 19 ? 18 : 0;
  const stationLift = restaurant.area === "駅ナカ" && hour >= 17 && hour <= 19 ? 12 : 0;
  const weekendDrop = isWeekend && restaurant.area === "丸の内" ? -12 : 0;
  const rhythm = Math.round(Math.sin((hour + restaurant.walk + restaurant.name.length) * 1.7) * 7);

  return Math.max(
    12,
    Math.min(98, restaurant.baseCrowd + mealPeak + cafeLift + sweetsLift + stationLift + weekendDrop + rhythm),
  );
}

function getStatus(crowd) {
  if (crowd < 45) {
    return { label: "空き", color: "#188a5b", wait: 0 };
  }
  if (crowd < 68) {
    return { label: "少し混雑", color: "#d88417", wait: 8 };
  }
  if (crowd < 84) {
    return { label: "混雑", color: "#c85f26", wait: 18 };
  }
  return { label: "満席近い", color: "#c54435", wait: 30 };
}

function getWaitMinutes(restaurant, crowd) {
  const status = getStatus(crowd);
  const seatRelief = Math.max(0, 8 - restaurant.seats);
  return Math.max(0, status.wait + seatRelief);
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/\s+/g, "");
}

function matchesRestaurant(restaurant) {
  const haystack = normalizeText(
    `${restaurant.name} ${restaurant.area} ${restaurant.genre} ${restaurant.purpose} ${restaurant.aliases || ""}`,
  );
  const query = normalizeText(state.search);
  const crowd = getCurrentCrowd(restaurant);

  return (
    (state.area === "all" || restaurant.area === state.area) &&
    (state.genre === "all" || restaurant.genre === state.genre) &&
    (!state.availableOnly || crowd < 68 || restaurant.seats >= 6) &&
    haystack.includes(query)
  );
}

function buildWebSearchUrl(restaurant) {
  const query = `${restaurant.name} ${restaurant.area} 東京駅 公式`;
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function buildMapUrl(restaurant) {
  const query = `${restaurant.name} ${restaurant.area} 東京駅`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function openDetail(restaurant) {
  const crowd = restaurant.crowd ?? getCurrentCrowd(restaurant);
  const wait = restaurant.wait ?? getWaitMinutes(restaurant, crowd);
  const status = getStatus(crowd);

  elements.detailArea.textContent = `${restaurant.area}・${restaurant.genre}`;
  elements.detailTitle.textContent = restaurant.name;
  elements.detailDescription.textContent =
    `${restaurant.purpose}のお店です。東京駅から徒歩${restaurant.walk}分目安。` +
    `いまの混雑目安は${crowd}%で「${status.label}」です。`;
  elements.detailWalk.textContent = `徒歩${restaurant.walk}分`;
  elements.detailSeat.textContent = wait === 0 ? `空席 ${restaurant.seats}席目安` : `待ち ${wait}分`;
  elements.detailCrowd.textContent = `混雑 ${crowd}%`;
  elements.detailWebsite.href = restaurant.url || buildWebSearchUrl(restaurant);
  elements.detailMap.href = restaurant.mapUrl || buildMapUrl(restaurant);
  elements.detailModal.classList.add("open");
  elements.detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  elements.detailModal.classList.remove("open");
  elements.detailModal.setAttribute("aria-hidden", "true");
}

function renderForecast(restaurant, container) {
  container.innerHTML = "";

  for (let index = 0; index < 5; index += 1) {
    const hourOffset = index * 2;
    const time = new Date(Date.now() + hourOffset * 60 * 60 * 1000);
    const crowd = getCurrentCrowd(restaurant, hourOffset);
    const status = getStatus(crowd);
    const item = document.createElement("div");
    item.className = "forecast-item";
    item.innerHTML = `
      <div class="forecast-bar" style="--forecast-height:${crowd}%; --forecast-color:${status.color}">
        <span></span>
      </div>
      <span>${String(time.getHours()).padStart(2, "0")}:00</span>
    `;
    container.append(item);
  }
}

function render() {
  const visible = restaurants
    .filter(matchesRestaurant)
    .map((restaurant) => {
      const crowd = getCurrentCrowd(restaurant);
      return {
        ...restaurant,
        crowd,
        wait: getWaitMinutes(restaurant, crowd),
      };
    })
    .sort((a, b) => a.wait - b.wait || a.crowd - b.crowd);

  elements.list.innerHTML = "";

  if (visible.length === 0) {
    const queryText = state.search ? `「${state.search}」` : "その条件";
    elements.list.innerHTML = `
      <div class="empty-state">
        ${queryText}に合う登録店がまだありません。<br>
        エリアやジャンルを広げるか、東京駅周辺の公式店舗検索・地図検索でも確認してください。
      </div>
    `;
  }

  visible.forEach((restaurant) => {
    const crowd = restaurant.crowd;
    const status = getStatus(crowd);
    const node = elements.template.content.firstElementChild.cloneNode(true);

    node.style.setProperty("--visual", restaurant.color);
    node.style.setProperty("--crowd", `${crowd}%`);
    node.style.setProperty("--status-color", status.color);
    node.querySelector("h3").textContent = restaurant.name;
    node.querySelector(".status-pill").textContent = status.label;
    node.querySelector(".status-pill").style.background = status.color;
    node.querySelector(".meta").textContent = `${restaurant.area}・${restaurant.genre} / ${restaurant.purpose}`;
    node.querySelector(".signal strong").textContent = `${crowd}%`;
    node.querySelector(".walk").textContent = `東京駅から徒歩${restaurant.walk}分`;
    node.querySelector(".seat").textContent =
      restaurant.wait === 0 ? `空席目安 ${restaurant.seats}席` : `待ち ${restaurant.wait}分`;
    node.querySelector(".card-footer button").addEventListener("click", () => openDetail(restaurant));
    renderForecast(restaurant, node.querySelector(".forecast"));
    elements.list.append(node);
  });

  const openCount = visible.filter((restaurant) => restaurant.wait <= 8).length;
  const avgWait = visible.length
    ? Math.round(visible.reduce((sum, restaurant) => sum + restaurant.wait, 0) / visible.length)
    : 0;

  elements.openCount.textContent = `${openCount}店`;
  elements.avgWait.textContent = `${avgWait}分`;
  elements.resultCount.textContent = `${visible.length}件`;
  elements.updatedAt.textContent = formatTime(new Date());
  updateMapPins();
}

function updateMapPins() {
  document.querySelectorAll(".map-pin").forEach((pin) => {
    const area = pin.dataset.area;
    const isActive = state.area === "all" || state.area === area;
    pin.classList.toggle("active", isActive);
    pin.style.opacity = isActive ? "1" : "0.32";
  });
}

function formatTime(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function updateClock() {
  elements.clock.textContent = formatTime(new Date());
}

function setActiveButton(groupSelector, clicked) {
  document.querySelectorAll(groupSelector).forEach((button) => button.classList.remove("active"));
  clicked.classList.add("active");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    state[filter] = button.dataset.value;
    setActiveButton(`[data-filter="${filter}"]`, button);
    render();
  });
});

document.querySelectorAll(".map-pin").forEach((button) => {
  button.addEventListener("click", () => {
    state.area = button.dataset.area;
    const areaButton = document.querySelector(`[data-filter="area"][data-value="${state.area}"]`);
    setActiveButton('[data-filter="area"]', areaButton);
    render();
  });
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

elements.availableOnly.addEventListener("change", (event) => {
  state.availableOnly = event.target.checked;
  render();
});

elements.refreshButton.addEventListener("click", () => {
  elements.refreshButton.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 420, easing: "ease-out" },
  );
  render();
});

document.querySelectorAll("[data-close-detail]").forEach((button) => {
  button.addEventListener("click", closeDetail);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

updateClock();
render();
setInterval(updateClock, 30000);
setInterval(render, 180000);
