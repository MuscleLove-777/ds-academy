/* ============================================
   DS Academy - Level 1: データサイエンス入門
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "データサイエンス入門",
    icon: "🔬",
    description: "データの世界へようこそ。データサイエンスの基本概念と活用事例を学ぶ",
    modules: [
        {
            id: 101,
            title: "データサイエンスとは何か",
            duration: "15分",
            content: `
<h2>データサイエンスとは</h2>
<p><strong>データサイエンス</strong>とは、データから有用な知見やインサイトを抽出するための学際的な分野です。統計学、数学、コンピュータサイエンス、ドメイン知識を組み合わせ、大量のデータを分析・活用して、意思決定の改善や新たな価値の創出を実現します。</p>

<h3>データサイエンスの歴史</h3>
<p>データサイエンスという概念は比較的新しいものですが、そのルーツは統計学や情報科学にさかのぼります。</p>
<table>
<thead>
<tr><th>年代</th><th>出来事</th></tr>
</thead>
<tbody>
<tr><td>1960年代</td><td>John Tukeyが「データ分析の未来」を発表し、探索的データ分析の概念を提唱</td></tr>
<tr><td>1990年代</td><td>データマイニングやKDD（Knowledge Discovery in Databases）が発展</td></tr>
<tr><td>2001年</td><td>William S. Clevelandが「データサイエンス」を独立した学問分野として提唱</td></tr>
<tr><td>2010年代</td><td>ビッグデータ時代の到来とともに、データサイエンティストが「21世紀で最もセクシーな職業」と呼ばれる</td></tr>
<tr><td>2020年代</td><td>AI・機械学習の普及により、データサイエンスがあらゆる産業で不可欠に</td></tr>
</tbody>
</table>

<h3>なぜ今データサイエンスが注目されるのか</h3>
<ul>
<li><strong>データ量の爆発的増加</strong>：IoT、SNS、EC等により、日々生成されるデータ量が急増</li>
<li><strong>計算能力の向上</strong>：クラウドコンピューティングやGPUの進化で大規模データ処理が可能に</li>
<li><strong>ツールの民主化</strong>：Python、R、各種ライブラリの普及で、参入障壁が低下</li>
<li><strong>ビジネス価値の実証</strong>：データ活用企業が競争優位を実現し、経営層の関心が高まった</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
データサイエンスは単なる技術ではなく、「データを通じて問題を解決するアプローチ」です。重要なのは、高度なアルゴリズムを使うことではなく、ビジネス課題に対して適切な手法を選択し、実行可能なインサイトを導き出すことです。
</div>

<h3>データサイエンス・AI・統計学の関係</h3>
<p>これら3つの分野は密接に関連していますが、それぞれ異なる焦点を持っています。</p>
<table>
<thead>
<tr><th>分野</th><th>主な焦点</th><th>アプローチ</th></tr>
</thead>
<tbody>
<tr><td>統計学</td><td>データの収集・分析・解釈の理論</td><td>仮説検定、推定、実験計画</td></tr>
<tr><td>データサイエンス</td><td>データから価値を引き出す実践</td><td>統計学+プログラミング+ドメイン知識</td></tr>
<tr><td>AI（人工知能）</td><td>人間の知的活動の自動化</td><td>機械学習、深層学習、自然言語処理</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
データサイエンスとAIはしばしば混同されますが、AIはデータサイエンスの一部のツールに過ぎません。データサイエンスはAIを含む幅広い手法を使い、ビジネス課題の解決を目指します。
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "データサイエンスの定義として最も適切なものはどれですか？", options: ["プログラミングだけでデータを処理する技術", "データから有用な知見を抽出するための学際的な分野", "AI・機械学習の別名", "統計学の一分野"], answer: 1, explanation: "データサイエンスは統計学、数学、コンピュータサイエンス、ドメイン知識を組み合わせた学際的な分野です。" },
                { id: "q101_2", type: "choice", question: "「データサイエンス」を独立した学問分野として提唱したのは誰ですか？", options: ["John Tukey", "Andrew Ng", "William S. Cleveland", "Hadley Wickham"], answer: 2, explanation: "2001年にWilliam S. Clevelandが「データサイエンス」を独立した学問分野として提唱しました。" },
                { id: "q101_3", type: "choice", question: "データサイエンスが近年注目される理由として適切でないものはどれですか？", options: ["データ量の爆発的増加", "計算能力の向上", "データサイエンティストの人数が十分に足りている", "ツールの民主化"], answer: 2, explanation: "データサイエンティストは依然として不足しており、これは注目される理由ではなく課題です。データ量の増加、計算能力の向上、ツールの民主化が注目の主な理由です。" },
                { id: "q101_4", type: "choice", question: "データサイエンス、AI、統計学の関係について正しい記述はどれですか？", options: ["AIとデータサイエンスは全く同じ分野である", "統計学はデータサイエンスに含まれない", "データサイエンスはAIを含む幅広い手法を活用する", "AIは統計学の別名である"], answer: 2, explanation: "データサイエンスはAIや機械学習を含む幅広い手法を使い、ビジネス課題の解決を目指します。AIはデータサイエンスのツールの一部です。" },
                { id: "q101_5", type: "fill", question: "1960年代にJohn Tukeyが提唱した、仮説を立てる前にデータを様々な角度から観察する分析手法を「○○的データ分析」と言います。○○に入る言葉を答えてください。", answer: "探索", explanation: "John Tukeyが提唱した「探索的データ分析（EDA: Exploratory Data Analysis）」は、仮説を立てる前にデータの特徴やパターンを探る分析手法です。" }
            ]
        },
        {
            id: 102,
            title: "データサイエンティストの役割とスキルセット",
            duration: "15分",
            content: `
<h2>データサイエンティストとは</h2>
<p><strong>データサイエンティスト</strong>は、データを活用してビジネス課題を解決する専門家です。大量のデータを収集・分析し、予測モデルを構築し、ビジネスに価値をもたらす意思決定を支援します。</p>

<h3>データサイエンティストに求められる「3つの力」</h3>
<p>一般社団法人データサイエンティスト協会は、データサイエンティストに必要なスキルを以下の3つの力で定義しています。</p>

<table>
<thead>
<tr><th>スキル領域</th><th>内容</th><th>具体例</th></tr>
</thead>
<tbody>
<tr><td>データサイエンス力</td><td>統計学や機械学習など、データを分析するための理論・手法</td><td>統計検定、回帰分析、分類、クラスタリング</td></tr>
<tr><td>データエンジニアリング力</td><td>データの収集・加工・管理を行う技術力</td><td>Python/R、SQL、データベース、クラウド基盤</td></tr>
<tr><td>ビジネス力</td><td>課題を設定し、分析結果をビジネスに結びつける力</td><td>課題発見、仮説構築、プレゼンテーション</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
3つの力をすべて高いレベルで持つ「フルスタックデータサイエンティスト」は稀です。実際のプロジェクトでは、それぞれの強みを持つメンバーがチームで協力することが一般的です。
</div>

<h3>データサイエンティストの具体的なスキルセット</h3>
<table>
<thead>
<tr><th>カテゴリ</th><th>スキル</th></tr>
</thead>
<tbody>
<tr><td>プログラミング</td><td>Python、R、SQL</td></tr>
<tr><td>統計・数学</td><td>記述統計、推測統計、線形代数、確率論</td></tr>
<tr><td>機械学習</td><td>教師あり学習、教師なし学習、深層学習</td></tr>
<tr><td>データ可視化</td><td>Matplotlib、Seaborn、Tableau、Power BI</td></tr>
<tr><td>ビッグデータ</td><td>Spark、Hadoop、クラウドサービス（AWS/GCP/Azure）</td></tr>
<tr><td>コミュニケーション</td><td>レポーティング、プレゼンテーション、ストーリーテリング</td></tr>
</tbody>
</table>

<h3>関連職種との違い</h3>
<table>
<thead>
<tr><th>職種</th><th>主な役割</th><th>重視されるスキル</th></tr>
</thead>
<tbody>
<tr><td>データサイエンティスト</td><td>分析・モデル構築・インサイト導出</td><td>統計学、機械学習、ビジネス理解</td></tr>
<tr><td>データエンジニア</td><td>データ基盤の構築・運用</td><td>ETL、データベース、クラウド</td></tr>
<tr><td>データアナリスト</td><td>データの集計・可視化・レポート作成</td><td>SQL、BI ツール、統計の基礎</td></tr>
<tr><td>MLエンジニア</td><td>機械学習モデルの実装・デプロイ</td><td>ソフトウェア工学、MLOps</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
データサイエンティストの役割は企業や組織によって大きく異なります。求人情報を見る際は、具体的な業務内容をよく確認しましょう。
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "データサイエンティスト協会が定義する3つの力に含まれないものはどれですか？", options: ["データサイエンス力", "データエンジニアリング力", "マネジメント力", "ビジネス力"], answer: 2, explanation: "データサイエンティスト協会が定義する3つの力は、データサイエンス力、データエンジニアリング力、ビジネス力です。マネジメント力は含まれません。" },
                { id: "q102_2", type: "choice", question: "データ基盤の構築・運用を主な役割とする職種はどれですか？", options: ["データサイエンティスト", "データエンジニア", "データアナリスト", "MLエンジニア"], answer: 1, explanation: "データエンジニアは、ETLパイプラインの構築やデータベース設計など、データ基盤の構築・運用を主な役割とします。" },
                { id: "q102_3", type: "choice", question: "「ビジネス力」に該当するスキルとして最も適切なものはどれですか？", options: ["Pythonプログラミング", "回帰分析", "課題発見と仮説構築", "データベース設計"], answer: 2, explanation: "ビジネス力は、課題を設定し分析結果をビジネスに結びつける力で、課題発見や仮説構築が含まれます。" },
                { id: "q102_4", type: "choice", question: "機械学習モデルの実装・本番環境へのデプロイを主に担当する職種はどれですか？", options: ["データアナリスト", "データサイエンティスト", "MLエンジニア", "データエンジニア"], answer: 2, explanation: "MLエンジニア（Machine Learning Engineer）は、機械学習モデルの実装やデプロイ、MLOpsを担当します。" },
                { id: "q102_5", type: "fill", question: "データサイエンティストに必要な3つの力のうち、Python/RやSQLなどのプログラミングスキルは「データ○○○○○○○○力」に分類されます。", answer: "エンジニアリング", explanation: "Python/R、SQL、データベースなどのプログラミング・技術スキルは「データエンジニアリング力」に分類されます。" }
            ]
        },
        {
            id: 103,
            title: "データサイエンスのプロセス（CRISP-DM）",
            duration: "20分",
            content: `
<h2>CRISP-DMとは</h2>
<p><strong>CRISP-DM</strong>（Cross-Industry Standard Process for Data Mining）は、データマイニング・データサイエンスプロジェクトの標準的なプロセスモデルです。1996年にIBM、SPSS、DaimlerChryslerなどが中心となって開発され、現在でも最も広く使われているフレームワークです。</p>

<h3>CRISP-DMの6つのフェーズ</h3>
<p>CRISP-DMは以下の6つのフェーズで構成され、各フェーズは反復的に実行されます。</p>

<table>
<thead>
<tr><th>フェーズ</th><th>英語名</th><th>主な活動</th></tr>
</thead>
<tbody>
<tr><td>1. ビジネス理解</td><td>Business Understanding</td><td>ビジネス目標の明確化、プロジェクト計画の策定</td></tr>
<tr><td>2. データ理解</td><td>Data Understanding</td><td>データの収集、探索的データ分析（EDA）、データ品質の確認</td></tr>
<tr><td>3. データ準備</td><td>Data Preparation</td><td>データクリーニング、変数選択、特徴量エンジニアリング</td></tr>
<tr><td>4. モデリング</td><td>Modeling</td><td>モデルの選択・構築・パラメータ調整</td></tr>
<tr><td>5. 評価</td><td>Evaluation</td><td>モデルの性能評価、ビジネス目標との適合性確認</td></tr>
<tr><td>6. 展開</td><td>Deployment</td><td>モデルの本番環境への実装、運用計画の策定</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
CRISP-DMは「ウォーターフォール型」ではなく「反復型」のプロセスです。各フェーズ間を行き来しながら、段階的にプロジェクトを進めていきます。例えば、モデリングの結果が不十分であれば、データ準備フェーズに戻って特徴量を見直すことがあります。
</div>

<h3>各フェーズの詳細</h3>

<h4>1. ビジネス理解（Business Understanding）</h4>
<p>プロジェクトの出発点です。ビジネス上の問いを明確にし、データ分析の目標に落とし込みます。</p>
<ul>
<li>ビジネス課題の特定と優先順位付け</li>
<li>成功指標（KPI）の定義</li>
<li>プロジェクトのスコープと制約の確認</li>
<li>分析アプローチの初期計画</li>
</ul>

<h4>2. データ理解（Data Understanding）</h4>
<p>利用可能なデータを把握し、その特徴や品質を理解します。</p>
<ul>
<li>データソースの特定と収集</li>
<li>探索的データ分析（EDA）の実施</li>
<li>データ品質の評価（欠損値、異常値の確認）</li>
<li>データのパターンや傾向の発見</li>
</ul>

<h4>3. データ準備（Data Preparation）</h4>
<p>分析・モデリングに適した形にデータを加工します。一般的にプロジェクト全体の60〜80%の時間を占めます。</p>
<ul>
<li>欠損値の処理</li>
<li>外れ値の検出と対処</li>
<li>特徴量エンジニアリング（新しい変数の作成）</li>
<li>データの正規化・標準化</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
データ準備はプロジェクト全体の工数の大部分を占める重要なフェーズです。「ゴミを入れればゴミが出る（Garbage In, Garbage Out）」という原則を忘れないでください。
</div>

<h4>4. モデリング（Modeling）</h4>
<p>準備されたデータに対して、適切な分析手法・アルゴリズムを適用します。</p>

<h4>5. 評価（Evaluation）</h4>
<p>構築したモデルがビジネス目標を満たしているかを評価します。</p>

<h4>6. 展開（Deployment）</h4>
<p>モデルを実際のビジネスプロセスに統合し、運用を開始します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># CRISP-DMのフェーズを簡単にコードで表現
phases = [
    "1. Business Understanding",
    "2. Data Understanding",
    "3. Data Preparation",
    "4. Modeling",
    "5. Evaluation",
    "6. Deployment"
]

for phase in phases:
    print(f"Phase: {phase}")
</code></pre>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "CRISP-DMの正式名称はどれですか？", options: ["Cross-Industry Standard Process for Data Mining", "Critical Standard Process for Data Management", "Cross-Industry Statistical Process for Data Modeling", "Common Standard Practice for Data Mining"], answer: 0, explanation: "CRISP-DMはCross-Industry Standard Process for Data Miningの略です。" },
                { id: "q103_2", type: "choice", question: "CRISP-DMのフェーズのうち、プロジェクト全体の60〜80%の時間を占めるとされるのはどれですか？", options: ["ビジネス理解", "データ理解", "データ準備", "モデリング"], answer: 2, explanation: "データ準備フェーズは、データクリーニングや特徴量エンジニアリングなどの作業に最も多くの時間を要し、プロジェクト全体の60〜80%を占めるとされています。" },
                { id: "q103_3", type: "choice", question: "CRISP-DMのプロセスの特徴として正しいのはどれですか？", options: ["必ず1回で完了する直線的なプロセス", "各フェーズ間を行き来する反復型プロセス", "モデリングのみを重視するプロセス", "データ準備を省略できるプロセス"], answer: 1, explanation: "CRISP-DMは反復型のプロセスで、各フェーズ間を行き来しながら段階的にプロジェクトを進めます。" },
                { id: "q103_4", type: "choice", question: "CRISP-DMの最初のフェーズはどれですか？", options: ["データ理解", "データ準備", "ビジネス理解", "モデリング"], answer: 2, explanation: "CRISP-DMの最初のフェーズは「ビジネス理解（Business Understanding）」です。ビジネス上の問いを明確にすることから始めます。" },
                { id: "q103_5", type: "fill", question: "データ分析において「質の低いデータからは質の低い結果しか得られない」という原則を、英語で「Garbage In, Garbage ___」と表現します。", answer: "Out", explanation: "「Garbage In, Garbage Out（GIGO）」は、入力データの品質が悪ければ、出力結果の品質も悪くなるという原則です。" }
            ]
        },
        {
            id: 104,
            title: "データの種類と活用事例",
            duration: "15分",
            content: `
<h2>データの分類</h2>
<p>データサイエンスで扱うデータは、その形式や性質によってさまざまに分類されます。最も基本的な分類は<strong>構造化データ</strong>と<strong>非構造化データ</strong>です。</p>

<h3>構造化データ vs 非構造化データ</h3>
<table>
<thead>
<tr><th>種類</th><th>特徴</th><th>例</th><th>保存先</th></tr>
</thead>
<tbody>
<tr><td>構造化データ</td><td>行と列で整理された表形式のデータ</td><td>売上データ、顧客リスト、アンケート回答</td><td>RDB（MySQL、PostgreSQL等）</td></tr>
<tr><td>半構造化データ</td><td>一定の構造はあるが、表形式ではない</td><td>JSON、XML、ログファイル</td><td>NoSQL（MongoDB等）</td></tr>
<tr><td>非構造化データ</td><td>定まった構造を持たないデータ</td><td>テキスト、画像、音声、動画</td><td>オブジェクトストレージ（S3等）</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
世界中のデータの約80%は非構造化データと言われています。テキストマイニングや画像認識、音声認識などの技術の発展により、非構造化データの活用が急速に進んでいます。
</div>

<h3>データの尺度水準</h3>
<p>データの測定レベルに基づく分類も重要です。</p>
<table>
<thead>
<tr><th>尺度</th><th>特徴</th><th>例</th><th>可能な演算</th></tr>
</thead>
<tbody>
<tr><td>名義尺度</td><td>カテゴリの区別のみ</td><td>性別、血液型、都道府県</td><td>等しい/異なる</td></tr>
<tr><td>順序尺度</td><td>順序関係がある</td><td>満足度（1-5）、教育レベル</td><td>大小比較</td></tr>
<tr><td>間隔尺度</td><td>差に意味がある</td><td>温度（℃）、年月日</td><td>加減算</td></tr>
<tr><td>比率尺度</td><td>比に意味があり、絶対零点がある</td><td>身長、体重、売上金額</td><td>四則演算</td></tr>
</tbody>
</table>

<h2>ビジネス領域別の活用事例</h2>

<h3>マーケティング</h3>
<ul>
<li><strong>顧客セグメンテーション</strong>：購買履歴やデモグラフィック情報を基に顧客をグループ分け</li>
<li><strong>レコメンデーション</strong>：ユーザーの行動データから好みの商品を推薦（Amazon、Netflix等）</li>
<li><strong>チャーン予測</strong>：解約しそうな顧客を事前に特定し、リテンション施策を実行</li>
</ul>

<h3>金融</h3>
<ul>
<li><strong>不正検知</strong>：クレジットカードの不正利用をリアルタイムで検出</li>
<li><strong>信用スコアリング</strong>：融資審査における信用リスクの評価</li>
<li><strong>アルゴリズム取引</strong>：市場データを分析して自動売買を行う</li>
</ul>

<h3>医療・ヘルスケア</h3>
<ul>
<li><strong>疾病予測</strong>：患者データから病気の発症リスクを予測</li>
<li><strong>画像診断支援</strong>：X線やMRI画像からAIが異常を検出</li>
<li><strong>創薬</strong>：化合物データの分析による新薬候補の探索</li>
</ul>

<h3>製造業</h3>
<ul>
<li><strong>予知保全</strong>：センサーデータから機械の故障を事前に予測</li>
<li><strong>品質管理</strong>：生産データの分析による不良品率の低減</li>
<li><strong>需要予測</strong>：過去の販売データから将来の需要を予測し、在庫を最適化</li>
</ul>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># データの種類を確認する例
import pandas as pd

# 構造化データの例
data = {
    "名前": ["田中", "鈴木", "佐藤"],
    "年齢": [28, 35, 42],
    "部署": ["営業", "技術", "人事"],
    "年収": [450, 600, 550]
}

df = pd.DataFrame(data)
print(df.dtypes)  # 各列のデータ型を確認
print(df.describe())  # 記述統計量を表示
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
データの活用においては、個人情報保護法やGDPR等のプライバシー規制を遵守することが不可欠です。特に医療データや金融データは、厳格な取り扱いルールが定められています。
</div>
`,
            quiz: [
                { id: "q104_1", type: "choice", question: "行と列で整理された表形式のデータを何と呼びますか？", options: ["非構造化データ", "半構造化データ", "構造化データ", "メタデータ"], answer: 2, explanation: "構造化データは、行と列で整理された表形式のデータです。RDB（リレーショナルデータベース）で管理されることが多いです。" },
                { id: "q104_2", type: "choice", question: "世界中のデータのうち、非構造化データが占める割合はおよそどのくらいとされていますか？", options: ["約20%", "約50%", "約60%", "約80%"], answer: 3, explanation: "世界中のデータの約80%は非構造化データ（テキスト、画像、音声、動画など）と言われています。" },
                { id: "q104_3", type: "choice", question: "「身長」や「体重」のデータは、どの尺度水準に分類されますか？", options: ["名義尺度", "順序尺度", "間隔尺度", "比率尺度"], answer: 3, explanation: "身長や体重は絶対零点（0）があり、比に意味がある比率尺度に分類されます。" },
                { id: "q104_4", type: "choice", question: "データサイエンスの活用事例として、センサーデータから機械の故障を事前に予測する手法は何と呼ばれますか？", options: ["不正検知", "予知保全", "チャーン予測", "需要予測"], answer: 1, explanation: "予知保全（Predictive Maintenance）は、センサーデータを分析して機械の故障を事前に予測する手法です。製造業で広く活用されています。" },
                { id: "q104_5", type: "fill", question: "JSON、XMLなどのデータは、構造化データと非構造化データの中間に位置する「___構造化データ」に分類されます。", answer: "半", explanation: "JSON、XMLなどは一定の構造を持ちますが表形式ではないため、「半構造化データ」に分類されます。" }
            ]
        }
    ]
};
