/* Standalone translations for the Bouvier feature. English lives in semantic HTML.
   All four additional locales cover the article and two-page print edition. */
(() => {
  const names = {en:"English","zh-CN":"简体中文","zh-TW":"繁體中文",ko:"한국어",ja:"日本語"};
  const dict = {
    "zh-CN": {
      issue:"旅行特刊",back:"本期内容",slow:"慢旅行",lit:"文学旅程",download:"下载杂志版 PDF",print:"打印 / 保存 PDF",
      introLabel:"文学 / 深度阅读",title:"一段改变旅行者的旅程",subtitle:"尼古拉·布维耶《世界的用法》：缓慢旅行如何重塑我们看待世界的方式。",
      byline:"Intriq 旅行志 · 旅行、文学与视角 · 2026年11月",
      heroCaption:"通往远方的道路，是布维耶旅行观的长久隐喻。图片为示意摄影。",
      lead:"如果旅行的真正目的不是发现另一个国家，而是发现自己认知的边界呢？",
      lead2:"1953年，瑞士作家尼古拉·布维耶与画家好友蒂埃里·韦尔内驾驶一辆破旧的菲亚特 Topolino 从日内瓦出发。他们经南斯拉夫、土耳其和伊朗前往开伯尔山口的旅程，后来成为《世界的用法》；法语原著《L’Usage du monde》于1963年出版。道路不只是冒险的背景，而是改变旅行者本身的力量。",
      atGlance:"关于本书",author:"作者",authorV:"尼古拉·布维耶（1929—1998）",book:"作品",bookV:"《L’Usage du monde》／《The Way of the World》",years:"旅行年代",yearsV:"1953—1954年",companion:"同行者",companionV:"画家兼插画家蒂埃里·韦尔内",
      routeName:"一路向东",routeDetails:"日内瓦 → 南斯拉夫 → 土耳其 → 伊朗 → 开伯尔山口",routeNote:"仅展示主要行程顺序，并非可用于导航的地图。",
      part1Label:"01 / 道路上的学习",part1Title:"世界不会照着计划运行",
      part1Text:"布维耶的旅程不仅有壮丽风景，也充满车辆故障、漫长等待与资金紧张。计划不断落空。一个村庄、一次偶遇或一次延误，恰恰因不在安排之中而变得重要。旅行者不得不放下控制一切的欲望，学着专注观察。",
      part1Text2:"这是书中的第一课：当组织日常生活的熟悉习惯失去作用，旅行才可能改变一个人。耐心不再是宣传册里的美德，而成为现实中的必需。",
      part1Caption:"在陆路旅行中，两地之间的时光也成为故事的一部分。",
      part2Label:"02 / 相遇的亲密",part2Title:"一个地方不是风景布景",
      part2Text:"布维耶关注日常：交谈、音乐、待客之道、食物，以及街道上不断变化的气氛。另一个社会并非供游客收集的异国画面，而是有自身需求、乐趣和矛盾的鲜活世界。",
      part2Text2:"真正的改变发生于好奇取代评判之时。承认自己可能理解有误，旅行者才有学习的可能。人与人的相遇，比最著名的古迹更能动摇固有观念。",
      part2Caption:"市场、茶饮与日常仪式，常常讲述名胜无法诉说的故事。",
      part3Label:"03 / 缓慢带来的艰难馈赠",part3Title:"时间让旅程真正发生",
      part3Text:"在布维耶笔下，慢旅行绝不轻松。身体感受到距离，天气、疾病与疲惫都带来后果。他的文字并不承诺远行一定使人睿智，却展示了陌生的生活节奏如何使人更善于观察、更少武断，有时也更为宽厚。",
      part3Text2:"停留得足够久，才能看见一个地方随着时辰改变；听一种语言足够多，才会熟悉它的韵律；也才会理解，发现可以出于谦逊，而不是征服欲。",
      part3Caption:"山路不只是抵达目的地的工具，也改变了人对距离的感受。",
      part4Label:"04 / 抵达之后留下什么",part4Title:"归来的已是另一个自己",
      part4Text:"最深刻的旅程留下的不是更长的到访清单，而是另一种看世界的方式。布维耶的成就，在于他让这种变化变得可感，同时又不把它包装成轻易实现的自我提升承诺。",
      part4Text2:"在一个愈发以打卡景点衡量旅行的时代，本书提出更高的要求：给一个地方足够的时间，让它挑战你的期待。旅行并不总是舒适或美丽，而这正是它有意义的部分原因。",
      pull:"最好的旅程未必确认我们是谁，却可能改变我们看世界的方式。",
      galleryTitle:"旅途的质感",galleryCopy:"一篇关于距离、不确定性与专注的视觉随笔。所有照片均为当代示意摄影，并非布维耶旅程的历史影像。",
      card1:"与一处地方相处",card1Desc:"放弃匆忙走完的路线，慢慢熟悉一座街区的日常节奏。",
      card2:"给意外留出空间",card2Desc:"一个没有安排的下午，也许比下一个景点更有收获。",
      card3:"带着新的问题归来",card3Desc:"让一次相遇挑战那些你以为早已理解的事。",
      last:"旅行得好，不只是到达别处，而是学会更敞开地感受世界。",
      sources:"延伸阅读",sourceNote:"史实参考：法国国家图书馆与纽约书评出版社。图片均为示意用途，并非布维耶1953—1954年旅行的实录。",
      backLink:"← 返回本期",related:"继续阅读：《慢旅行的艺术》",page1tag:"Intriq 旅行志 / 文学旅程",page2tag:"Intriq 旅行志 / 深度阅读"
    },
    "zh-TW": {
      issue:"旅行特刊",back:"本期內容",slow:"慢旅行",lit:"文學旅程",download:"下載雜誌版 PDF",print:"列印 / 儲存 PDF",
      introLabel:"文學 / 深度閱讀",title:"一段改變旅行者的旅程",subtitle:"尼古拉・布維耶《世界的用法》：緩慢旅行如何重塑我們看世界的方式。",
      byline:"Intriq 旅行誌 · 旅行、文學與視角 · 2026年11月",
      heroCaption:"通往遠方的道路，是布維耶旅行觀的恆久隱喻。照片僅供意境示意。",
      lead:"如果旅行的真正目的不是發現另一個國家，而是發現自己認知的邊界呢？",
      lead2:"1953年，瑞士作家尼古拉・布維耶與畫家好友蒂埃里・韋爾內駕駛一輛破舊的飛雅特 Topolino 從日內瓦出發。他們經南斯拉夫、土耳其及伊朗前往開伯爾山口的旅程，後來成為《世界的用法》；法文原著《L’Usage du monde》於1963年出版。道路不只是冒險的背景，而是改變旅行者本身的力量。",
      atGlance:"關於本書",author:"作者",authorV:"尼古拉・布維耶（1929—1998）",book:"作品",bookV:"《L’Usage du monde》／《The Way of the World》",years:"旅行年代",yearsV:"1953—1954年",companion:"同行者",companionV:"畫家兼插畫家蒂埃里・韋爾內",
      routeName:"一路向東",routeDetails:"日內瓦 → 南斯拉夫 → 土耳其 → 伊朗 → 開伯爾山口",routeNote:"僅展示主要行程順序，並非可用於導航的地圖。",
      part1Label:"01 / 道路上的學習",part1Title:"世界不會照著計畫運行",
      part1Text:"布維耶的旅程除了壯麗風景，也充滿車輛故障、漫長等待與資金拮据。計畫不斷落空。一個村莊、一次巧遇或一次延誤，恰恰因為不在安排之中而變得重要。旅行者不得不放下控制一切的慾望，學會專注觀察。",
      part1Text2:"這是書中的第一課：當組織日常生活的熟悉習慣失去作用，旅行才可能改變一個人。耐心不再是宣傳冊裡的美德，而成為現實中的必需。",
      part1Caption:"在陸路旅行中，兩地之間的時光也是故事的一部分。",
      part2Label:"02 / 相遇的親密",part2Title:"一個地方不是風景佈景",
      part2Text:"布維耶注視日常：交談、音樂、待客之道、食物，以及街道不斷變化的氣氛。另一個社會不是供旅人蒐集的異國畫面，而是有自身需求、樂趣與矛盾的鮮活世界。",
      part2Text2:"真正的改變發生於好奇取代評判之時。承認自己可能理解有誤，旅行者才有學習的可能。人與人的相遇，比最著名的古蹟更能動搖固有觀念。",
      part2Caption:"市場、茶飲與日常儀式，常常訴說名勝無法傳達的故事。",
      part3Label:"03 / 緩慢帶來的艱難饋贈",part3Title:"時間讓旅程真正發生",
      part3Text:"在布維耶筆下，慢旅行絕不輕鬆。身體感受到距離，天氣、疾病與疲憊都帶來後果。他的文字不承諾遠行必定使人睿智，卻展示陌生的生活節奏如何使人更善於觀察、更少武斷，有時也更為寬厚。",
      part3Text2:"停留得夠久，才能看見一個地方隨著時辰改變；聽一種語言夠多，才會熟悉它的韻律；也才會理解，發現可以出於謙遜，而非征服慾。",
      part3Caption:"山路不只是抵達目的地的工具，也改變了人對距離的感受。",
      part4Label:"04 / 抵達之後留下什麼",part4Title:"歸來的已是另一個自己",
      part4Text:"最深刻的旅程留下的不是更長的到訪清單，而是另一種看世界的方式。布維耶的成就在於讓這種改變變得可感，卻又不把它包裝成輕易實現的自我提升承諾。",
      part4Text2:"在一個愈來愈以打卡景點衡量旅行的時代，本書提出更高的要求：給一個地方足夠的時間，讓它挑戰你的期待。旅行不總是舒適或美麗，而這正是它有意義的部分原因。",
      pull:"最好的旅程未必確認我們是誰，卻可能改變我們看世界的方式。",
      galleryTitle:"旅途的質感",galleryCopy:"一篇關於距離、不確定性與專注的視覺隨筆。所有照片均為當代意境示意，並非布維耶旅程的歷史影像。",
      card1:"與一處地方相處",card1Desc:"放下匆忙走完的路線，慢慢熟悉一座街區的日常節奏。",
      card2:"給意外留出空間",card2Desc:"一個沒有安排的下午，也許比下一個景點更有收穫。",
      card3:"帶著新的問題歸來",card3Desc:"讓一次相遇挑戰那些你以為早已理解的事。",
      last:"旅行得好，不只是到達別處，而是學會更敞開地感受世界。",
      sources:"延伸閱讀",sourceNote:"史實參考：法國國家圖書館與紐約書評出版社。圖片均為意境示意，並非布維耶1953—1954年旅行的實錄。",
      backLink:"← 返回本期",related:"繼續閱讀：《慢旅行的藝術》",page1tag:"Intriq 旅行誌 / 文學旅程",page2tag:"Intriq 旅行誌 / 深度閱讀"
    },
    ko: {
      issue:"여행 특집",back:"이번호",slow:"느린 여행",lit:"문학 여행",download:"매거진 PDF 다운로드",print:"인쇄 / PDF 저장",
      introLabel:"문학 / 깊이 읽기",title:"여행자를 바꾸는 길",subtitle:"니콜라 부비에의 『세상의 사용법』과 천천히 여행하며 변화하는 힘.",
      byline:"Intriq 저널 · 여행, 문학, 관점 · 2026년 11월",
      heroCaption:"끝없이 이어지는 길은 부비에의 여행관을 상징한다. 사진은 이해를 돕기 위한 이미지다.",
      lead:"여행의 진정한 목적이 다른 나라를 발견하는 데 있지 않고, 자신이 믿어 온 확신의 한계를 발견하는 데 있다면 어떨까?",
      lead2:"1953년 스위스 작가 니콜라 부비에는 화가 친구 티에리 베르네와 낡은 피아트 토폴리노를 타고 제네바를 떠났다. 유고슬라비아, 튀르키예, 이란을 거쳐 카이버 고개로 향한 여정은 훗날 『세상의 사용법』으로 기록되었다. 프랑스어 원제는 『L’Usage du monde』이며 1963년에 출간되었다. 길은 단순한 모험의 배경이 아니라 여행자 자체를 바꾸는 힘이었다.",
      atGlance:"책 한눈에 보기",author:"저자",authorV:"니콜라 부비에(1929–1998)",book:"작품",bookV:"L’Usage du monde / The Way of the World",years:"여행 시기",yearsV:"1953–1954년",companion:"여행 동반자",companionV:"화가이자 삽화가 티에리 베르네",
      routeName:"동쪽으로 향한 여정",routeDetails:"제네바 → 유고슬라비아 → 튀르키예 → 이란 → 카이버 고개",routeNote:"주요 경유지의 순서만 나타낸 개략도이며 실제 항법 지도가 아니다.",
      part1Label:"01 / 길 위에서 배우다",part1Title:"세상은 계획대로 흘러가지 않는다",
      part1Text:"부비에의 여행은 장엄한 풍경만큼이나 고장, 기다림, 부족한 돈으로 이루어져 있다. 계획은 거듭 무너진다. 작은 마을, 우연한 만남, 예기치 않은 지연은 예정에 없었기 때문에 오히려 중요해진다. 여행자는 모든 것을 통제하려는 욕망을 내려놓고 주의 깊게 보는 법을 배운다.",
      part1Text2:"이것이 책의 첫 번째 교훈이다. 일상을 지탱하던 익숙한 방식이 더 이상 통하지 않을 때 여행은 사람을 변화시킨다. 인내는 안내 책자의 미덕이 아니라 실제 삶의 필요가 된다.",
      part1Caption:"육로 여행에서는 목적지 사이의 시간도 이야기가 된다.",
      part2Label:"02 / 만남의 친밀함",part2Title:"장소는 배경이 아니다",
      part2Text:"부비에는 대화, 음악, 환대, 음식, 거리의 변화하는 분위기처럼 평범한 일상에 주의를 기울인다. 다른 사회는 방문객이 수집할 이국적 풍경이 아니라 고유한 요구와 기쁨, 모순을 지닌 살아 있는 세계다.",
      part2Text2:"변화는 판단을 호기심으로 바꿀 때 시작된다. 자신이 잘못 이해했을 수 있음을 인정해야 비로소 배울 수 있다. 사람과의 만남은 유명한 기념물보다 더 깊이 기존의 믿음을 흔들 수 있다.",
      part2Caption:"시장과 차 한 잔, 일상의 의식은 명소보다 많은 이야기를 들려줄 때가 있다.",
      part3Label:"03 / 느림이 주는 어려운 선물",part3Title:"시간이 있어야 여행이 시작된다",
      part3Text:"부비에의 느린 여행은 결코 수월하지 않다. 거리는 몸으로 느껴지고 날씨, 병, 피로는 실제 결과를 남긴다. 그의 문장은 먼 길을 가면 반드시 현명해진다고 약속하지 않는다. 다만 낯선 삶의 리듬이 사람을 더 세심하고, 덜 단정적이며, 때로 더 너그럽게 만들 수 있음을 보여 준다.",
      part3Text2:"오래 머물러야 장소가 시간에 따라 달라지는 모습을 본다. 같은 언어를 거듭 들어야 그 리듬을 알아챈다. 발견은 정복이 아니라 겸손에서 시작될 수도 있음을 깨닫게 된다.",
      part3Caption:"산길은 이동 수단일 뿐 아니라 거리에 대한 감각을 바꾼다.",
      part4Label:"04 / 도착 뒤에 남는 것",part4Title:"돌아온 사람은 예전과 다르다",
      part4Text:"깊은 여행이 남기는 것은 방문한 장소의 긴 목록이 아니라 세상을 보는 달라진 시선이다. 부비에의 뛰어남은 그 변화를 뚜렷이 보여 주면서도 손쉬운 자기 계발의 약속으로 만들지 않는 데 있다.",
      part4Text2:"여행을 명소 목록으로 평가하기 쉬운 시대에 이 책은 더 어려운 과제를 준다. 한 장소가 내 기대에 저항할 만큼 충분한 시간을 허락하라는 것이다. 여행은 항상 편안하거나 아름답지만은 않다. 바로 그 점 때문에 의미가 생기기도 한다.",
      pull:"좋은 여행은 내가 누구인지 확인하기보다 세상을 보는 눈을 바꿔 놓을 수 있다.",
      galleryTitle:"길 위의 질감",galleryCopy:"거리와 불확실성, 주의 깊은 관찰에 관한 시각 에세이. 모든 사진은 현대의 예시 이미지이며 부비에의 실제 여정을 촬영한 기록이 아니다.",
      card1:"한곳에 머물기",card1Desc:"서둘러 여러 곳을 도는 대신 동네의 일상적인 리듬에 익숙해져 보자.",
      card2:"우연을 위한 여백",card2Desc:"일정 없는 오후 하나가 또 다른 명소보다 더 많은 것을 알려 줄 수 있다.",
      card3:"질문을 안고 돌아오기",card3Desc:"한 번의 만남이 당연하다고 믿었던 생각에 의문을 던지게 하자.",
      last:"여행을 잘한다는 것은 단순히 다른 곳에 도착하는 것이 아니라 세상에 더 열린 사람이 되는 것이다.",
      sources:"더 읽을거리",sourceNote:"역사적 사실 출처: 프랑스 국립도서관과 뉴욕 리뷰 북스. 사진은 설명을 위한 이미지이며 1953–1954년 부비에의 실제 여행 사진이 아니다.",
      backLink:"← 특집으로 돌아가기",related:"함께 읽기: 느린 여행의 예술",page1tag:"Intriq 저널 / 문학 여행",page2tag:"Intriq 저널 / 깊이 읽기"
    },
    ja: {
      issue:"旅の特集号",back:"今号",slow:"スロートラベル",lit:"文学の旅",download:"雑誌版PDFをダウンロード",print:"印刷 / PDF保存",
      introLabel:"文学 / ロングリード",title:"旅人を変える道",subtitle:"ニコラ・ブーヴィエ『世界の使い方』が描く、ゆっくり旅することの変容する力。",
      byline:"Intriq Journal · 旅・文学・視点 · 2026年11月",
      heroCaption:"遠くへ続く道は、ブーヴィエの旅への姿勢を象徴する。写真はイメージ。",
      lead:"旅の本当の目的が、別の国を発見することではなく、自分の確信の限界を知ることだとしたら。",
      lead2:"1953年、スイスの作家ニコラ・ブーヴィエは画家の友人ティエリー・ヴェルネと、古びたフィアット・トポリーノに乗りジュネーヴを出発した。ユーゴスラビア、トルコ、イランを経てハイバル峠へ向かう旅は、のちに『世界の使い方』として結実する。フランス語原題は『L’Usage du monde』で、1963年に刊行された。道は冒険の背景ではなく、旅人そのものを変える力だった。",
      atGlance:"作品の概要",author:"著者",authorV:"ニコラ・ブーヴィエ（1929–1998）",book:"作品",bookV:"L’Usage du monde / The Way of the World",years:"旅の時期",yearsV:"1953–1954年",companion:"同行者",companionV:"画家・挿絵画家ティエリー・ヴェルネ",
      routeName:"東へ向かう旅",routeDetails:"ジュネーヴ → ユーゴスラビア → トルコ → イラン → ハイバル峠",routeNote:"主な経由地の順序を示す概略図。実際の地図とは異なる。",
      part1Label:"01 / 道に学ぶ",part1Title:"世界は計画どおりに進まない",
      part1Text:"ブーヴィエの旅は壮大な風景だけでなく、故障や待ち時間、乏しい資金にも形づくられる。計画は何度も崩れる。小さな村、偶然の出会い、遅れた出発が大切になるのは、それが予定になかったからこそだ。旅人はすべてを支配したい気持ちを手放し、注意深く見ることを覚える。",
      part1Text2:"これが本書の第一の教えだ。日常を支えていた慣れた仕組みが通じなくなったとき、旅は人を変えうる。忍耐は宣伝文句ではなく、現実の必要となる。",
      part1Caption:"陸路の旅では、目的地と目的地の間の時間も物語になる。",
      part2Label:"02 / 出会いの親密さ",part2Title:"土地はただの背景ではない",
      part2Text:"ブーヴィエが見つめるのは、会話や音楽、もてなし、食事、刻々と変わる街の空気といった日常だ。異なる社会は旅行者が集める異国情緒の断片ではなく、固有の欲求や喜び、矛盾を持った生きた世界である。",
      part2Text2:"好奇心が判断に取って代わるとき、変化が始まる。自分の理解が誤っているかもしれないと認めてこそ、人は学べる。人との出会いは有名な遺跡以上に、思い込みを揺さぶることがある。",
      part2Caption:"市場や一杯のお茶、日常の営みは、名所が語れない物語を伝える。",
      part3Label:"03 / ゆっくり進むことの難しい贈り物",part3Title:"時間があってこそ旅になる",
      part3Text:"ブーヴィエの描くスロートラベルは決して楽ではない。距離は身体に刻まれ、天候や病気、疲労には現実の代償が伴う。遠くへ行けば賢くなれると約束するのではない。異なる生活のリズムが、人をより観察深く、決めつけの少ない存在に、ときには寛容に変えうることを示している。",
      part3Text2:"長く滞在して初めて、土地が時刻によって変わる姿が見える。言葉を繰り返し聞いてこそ、その響きがわかる。発見は征服ではなく、謙虚さから始まるのだと気づく。",
      part3Caption:"山道は移動手段であるだけでなく、距離の感覚そのものを変える。",
      part4Label:"04 / 到着のあとに残るもの",part4Title:"帰ってきた人はもう同じではない",
      part4Text:"深い旅が残すのは、訪れた場所の長いリストではなく、世界を見る新たな視点だ。ブーヴィエの功績は、その変化を鮮やかに描きながら、安易な自己成長の約束にしなかったことにある。",
      part4Text2:"旅を名所の数で測りがちな時代に、本書はもっと難しい提案をする。ある土地が自分の期待に抗うだけの時間を与えよ、と。旅は常に快適で美しいとは限らない。だからこそ意味を持つことがある。",
      pull:"最良の旅は、自分が何者かを確かめるより、世界を見る目を変えてくれる。",
      galleryTitle:"旅路の手ざわり",galleryCopy:"距離、不確実さ、そして注意深く見ることをめぐるビジュアルエッセイ。写真はすべて現代のイメージであり、ブーヴィエの旅の記録ではない。",
      card1:"一つの土地に親しむ",card1Desc:"急いで多くの場所を巡る代わりに、街の普段のリズムを知ろう。",
      card2:"偶然のための余白",card2Desc:"予定のない午後が、次の観光名所より多くを教えてくれることもある。",
      card3:"問いを持って帰る",card3Desc:"出会いによって、自分が理解しているつもりだったことを問い直そう。",
      last:"よく旅するとは、別の場所へ着くことだけではない。世界を受け止める心を広げることだ。",
      sources:"参考資料",sourceNote:"史実の参照先：フランス国立図書館とニューヨーク・レビュー・ブックス。写真はイメージであり、1953–1954年のブーヴィエの旅を記録したものではない。",
      backLink:"← 特集号に戻る",related:"あわせて読む：スロートラベルの芸術",page1tag:"Intriq Journal / 文学の旅",page2tag:"Intriq Journal / ロングリード"
    }
  };
  const params = new URLSearchParams(location.search);
  const requested = params.get("lang");
  let saved = "en";
  try { saved = localStorage.getItem("intriq-language") || "en"; } catch {}
  let locale = Object.hasOwn(names,requested) ? requested : (Object.hasOwn(names,saved) ? saved : "en");
  const english = new Map([...document.querySelectorAll("[data-t]")].map(el => [el,el.textContent]));
  const current = document.querySelector(".language-current");
  const picker = document.querySelector("#bouvier-language");
  const fonts = {
    "zh-CN": ["Noto Sans SC","Noto Serif SC"],
    "zh-TW": ["Noto Sans TC","Noto Serif TC"],
    ko: ["Noto Sans KR","Gowun Batang"],
    ja: ["Noto Sans JP","Zen Old Mincho"]
  };
  const loaded = new Set();
  async function loadFont(code) {
    if (!fonts[code] || loaded.has(code)) return;
    const pairs = fonts[code];
    const url = "https://fonts.googleapis.com/css2?" + pairs.map(name=>"family="+encodeURIComponent(name).replace(/%20/g,"+")+":wght@400;500;600").join("&") + "&display=swap";
    const link = document.createElement("link");link.rel="stylesheet";link.href=url;
    const done = new Promise(resolve=>{link.onload=resolve;link.onerror=resolve;});
    document.head.appendChild(link);
    await Promise.race([done,new Promise(resolve=>setTimeout(resolve,7000))]);
    await Promise.all(pairs.map(name=>document.fonts.load('400 16px "'+name+'"').catch(()=>{})));
    loaded.add(code);
  }
  function apply(code) {
    const data = dict[code] || {};
    english.forEach((source,el)=>{
      const key=el.dataset.t;
      el.textContent=data[key] ?? source;
    });
    document.documentElement.lang=code;
    document.documentElement.dataset.locale=code;
    document.title=(data.title || "The journey that changes the traveller")+" | Intriq Journal";
    document.querySelectorAll(".download-pdf").forEach(a=>{
      a.href=code==="en"?"bouvier.pdf":"bouvier."+code+".pdf";
      a.download="Intriq-Journal-Bouvier-"+code+".pdf";
    });
    document.querySelectorAll('a[href^="index.html"],a[href^="story.html"]').forEach(a=>{
      const base=a.getAttribute("href").split("?")[0];
      a.href=base+(code==="en"?"":"?lang="+encodeURIComponent(code));
    });
    current.textContent=names[code];
    document.querySelectorAll("[data-language]").forEach(btn=>btn.setAttribute("aria-current",String(btn.dataset.language===code)));
    try {localStorage.setItem("intriq-language",code);}catch{}
    window.__localeReady=true;
  }
  let serial=0;
  async function change(code){
    if (!Object.hasOwn(names,code)) code="en";
    const id=++serial;window.__localeReady=false;
    try{await loadFont(code);}catch(e){console.warn("Font fallback used",e);}
    if(id!==serial)return;
    apply(code);
  }
  document.querySelectorAll("[data-language]").forEach(btn=>btn.addEventListener("click",()=>{
    picker.open=false;
    const next=btn.dataset.language;
    history.replaceState(null,"",location.pathname+(next==="en"?"":"?lang="+encodeURIComponent(next)));
    void change(next);
  }));
  document.addEventListener("click",event=>{if(picker.open&&!picker.contains(event.target))picker.open=false;});
  window.__setLocale=change;
  window.__localeReady=false;
  void change(locale);
})();