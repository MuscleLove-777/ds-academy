/* ============================================
   DS Academy - Level 10: 機械学習入門
   ============================================ */

const LEVEL10_DATA = {
    id: 10,
    title: "機械学習入門",
    icon: "🤖",
    description: "機械学習の基本概念を理解し、scikit-learnを用いた回帰・分類モデルの構築方法を習得する",
    modules: [
        {
            id: 1001,
            title: "機械学習とは",
            duration: "25分",
            content: `
<h2>機械学習の定義</h2>
<p><strong>機械学習（Machine Learning）</strong>とは、明示的にプログラムされることなく、データからパターンを学習し予測や判断を行うアルゴリズムの総称です。1959年にアーサー・サミュエルが「明示的にプログラムしなくても学習する能力をコンピュータに与える研究分野」と定義しました。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
従来のプログラミングでは「ルール＋データ→答え」ですが、機械学習では「データ＋答え→ルール（モデル）」を自動的に発見します。
</div>

<h2>機械学習の3つの学習パラダイム</h2>
<table>
<thead>
<tr><th>学習タイプ</th><th>概要</th><th>代表的手法</th><th>具体例</th></tr>
</thead>
<tbody>
<tr><td><strong>教師あり学習</strong></td><td>正解ラベル付きデータで学習</td><td>回帰、分類</td><td>住宅価格予測、スパム判定</td></tr>
<tr><td><strong>教師なし学習</strong></td><td>正解ラベルなしでデータの構造を発見</td><td>クラスタリング、次元削減</td><td>顧客セグメンテーション</td></tr>
<tr><td><strong>強化学習</strong></td><td>環境との相互作用で報酬を最大化</td><td>Q学習、方策勾配法</td><td>ゲームAI、自動運転</td></tr>
</tbody>
</table>

<h2>教師あり学習の詳細</h2>
<p>教師あり学習は、入力 <strong>X</strong>（特徴量）と出力 <strong>y</strong>（ラベル/ターゲット）のペアからモデルを学習します。</p>
<ul>
<li><strong>回帰（Regression）</strong>：連続値を予測する（例：売上予測、気温予測）</li>
<li><strong>分類（Classification）</strong>：カテゴリを予測する（例：メール分類、画像認識）</li>
</ul>

<h2>機械学習のワークフロー</h2>
<p>機械学習プロジェクトは以下のステップで進行します。</p>
<ol>
<li><strong>問題定義</strong>：解きたい課題を明確化</li>
<li><strong>データ収集・前処理</strong>：欠損値処理、スケーリングなど</li>
<li><strong>特徴量エンジニアリング</strong>：有用な特徴量の作成・選択</li>
<li><strong>モデル選択・学習</strong>：アルゴリズムの選定とfitting</li>
<li><strong>評価</strong>：テストデータでの性能評価</li>
<li><strong>デプロイ・運用</strong>：本番環境への展開</li>
</ol>

<h2>Train/Test分割</h2>
<p>モデルの汎化性能を正しく評価するためには、データを<strong>訓練データ（Train）</strong>と<strong>テストデータ（Test）</strong>に分割する必要があります。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.model_selection import train_test_split

# データを80:20に分割
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"訓練データ: {X_train.shape[0]}件")
print(f"テストデータ: {X_test.shape[0]}件")</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
テストデータは「未知のデータ」を模擬するものです。モデルの学習には一切使わないことが重要です。テストデータで学習してしまうと、汎化性能を正しく評価できません。
</div>

<h2>random_stateの役割</h2>
<p><code>random_state</code>は乱数シードを固定するパラメータです。同じシードを指定すると毎回同じ分割結果が得られ、<strong>再現性</strong>が保証されます。</p>
`,
            quiz: [
                {
                    id: "q1001_1",
                    type: "choice",
                    question: "「データ＋答え→ルール」のように、正解ラベル付きデータからモデルを学習する方法は何と呼ばれますか？",
                    options: ["教師なし学習", "教師あり学習", "強化学習", "転移学習"],
                    answer: 1,
                    explanation: "正解ラベル付きデータ（入力と出力のペア）からモデルを学習する方法は「教師あり学習」です。"
                },
                {
                    id: "q1001_2",
                    type: "choice",
                    question: "住宅の価格（連続値）を予測するタスクは、教師あり学習のどの種類に分類されますか？",
                    options: ["分類", "回帰", "クラスタリング", "強化学習"],
                    answer: 1,
                    explanation: "連続値（住宅価格など）を予測するタスクは「回帰」に分類されます。カテゴリを予測する場合は「分類」です。"
                },
                {
                    id: "q1001_3",
                    type: "choice",
                    question: "train_test_splitでtest_size=0.2と指定した場合、テストデータの割合はいくらですか？",
                    options: ["80%", "20%", "50%", "30%"],
                    answer: 1,
                    explanation: "test_size=0.2は全データの20%をテストデータに割り当てることを意味します。残り80%が訓練データになります。"
                },
                {
                    id: "q1001_4",
                    type: "choice",
                    question: "正解ラベルなしでデータの構造やグループを発見する学習方法はどれですか？",
                    options: ["教師あり学習", "強化学習", "教師なし学習", "半教師あり学習"],
                    answer: 2,
                    explanation: "正解ラベルなしでデータの内部構造やグループを発見する方法は「教師なし学習」です。クラスタリングや次元削減が代表例です。"
                },
                {
                    id: "q1001_5",
                    type: "fill",
                    question: "scikit-learnのtrain_test_splitで、毎回同じ分割結果を得るために指定するパラメータは _____ です。",
                    answer: "random_state",
                    explanation: "random_stateパラメータに整数値を指定すると、乱数シードが固定され再現性のある分割が得られます。"
                }
            ]
        },
        {
            id: 1002,
            title: "回帰分析",
            duration: "30分",
            content: `
<h2>回帰分析とは</h2>
<p><strong>回帰分析（Regression Analysis）</strong>は、入力変数（説明変数）と出力変数（目的変数）の関係をモデル化し、連続値を予測する手法です。最もシンプルかつ基本的な教師あり学習の一つです。</p>

<h2>単回帰分析</h2>
<p>説明変数が1つの場合を<strong>単回帰分析</strong>と呼びます。</p>
<p>数式：<strong>y = β₀ + β₁x + ε</strong></p>
<ul>
<li><strong>β₀</strong>：切片（intercept）</li>
<li><strong>β₁</strong>：回帰係数（coefficient）</li>
<li><strong>ε</strong>：誤差項</li>
</ul>

<h2>重回帰分析</h2>
<p>説明変数が複数の場合を<strong>重回帰分析</strong>と呼びます。</p>
<p>数式：<strong>y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε</strong></p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
重回帰分析では、各回帰係数 βᵢ は他の変数を固定したときの xᵢ の影響を表します。多重共線性（変数間の強い相関）に注意が必要です。
</div>

<h2>最小二乗法（OLS）</h2>
<p><strong>最小二乗法</strong>は、予測値と実測値の差（残差）の二乗和を最小化するように回帰係数を求める手法です。</p>
<p>最小化する目的関数：<strong>Σ(yᵢ - ŷᵢ)²</strong> を最小にするβを求める</p>

<h2>scikit-learnでの実装</h2>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# データ分割
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# モデルの構築と学習
model = LinearRegression()
model.fit(X_train, y_train)

# 予測
y_pred = model.predict(X_test)

# 評価
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"MSE: {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"R²: {r2:.4f}")
print(f"切片: {model.intercept_:.4f}")
print(f"係数: {model.coef_}")</code></pre>
</div>

<h2>評価指標</h2>
<table>
<thead>
<tr><th>指標</th><th>計算式</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td><strong>MSE</strong></td><td>Σ(yᵢ - ŷᵢ)² / n</td><td>平均二乗誤差。外れ値に敏感</td></tr>
<tr><td><strong>RMSE</strong></td><td>√MSE</td><td>元のスケールに戻して解釈しやすい</td></tr>
<tr><td><strong>R²（決定係数）</strong></td><td>1 - SS_res / SS_tot</td><td>0〜1の範囲、1に近いほど良い</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
R²が高くても過学習している可能性があります。必ずテストデータで評価し、訓練データとの差が大きくないことを確認しましょう。
</div>
`,
            quiz: [
                {
                    id: "q1002_1",
                    type: "choice",
                    question: "説明変数が1つの回帰分析は何と呼ばれますか？",
                    options: ["重回帰分析", "単回帰分析", "ロジスティック回帰", "多項式回帰"],
                    answer: 1,
                    explanation: "説明変数が1つの場合は「単回帰分析」、複数の場合は「重回帰分析」と呼びます。"
                },
                {
                    id: "q1002_2",
                    type: "choice",
                    question: "最小二乗法で最小化するのは何ですか？",
                    options: ["予測値の合計", "残差の絶対値の合計", "残差の二乗和", "回帰係数の合計"],
                    answer: 2,
                    explanation: "最小二乗法（OLS）は、実測値と予測値の差（残差）の二乗和を最小化する手法です。"
                },
                {
                    id: "q1002_3",
                    type: "choice",
                    question: "R²（決定係数）が0.85の場合、モデルの説明力として正しい解釈はどれですか？",
                    options: ["モデルの精度は85%", "目的変数の分散の85%をモデルが説明", "85%のデータで正解", "誤差が15%以下"],
                    answer: 1,
                    explanation: "R²=0.85は、目的変数の全分散のうち85%をモデルが説明できることを意味します。"
                },
                {
                    id: "q1002_4",
                    type: "choice",
                    question: "RMSEの利点として正しいものはどれですか？",
                    options: ["常に0〜1の範囲", "外れ値の影響を無視できる", "元のデータと同じ単位で解釈可能", "計算が最も速い"],
                    answer: 2,
                    explanation: "RMSEはMSEの平方根を取るため、元のデータと同じスケール（単位）で誤差を解釈できる利点があります。"
                },
                {
                    id: "q1002_5",
                    type: "fill",
                    question: "scikit-learnのLinearRegressionで学習を行うメソッドは model._____(X_train, y_train) です。",
                    answer: "fit",
                    explanation: "scikit-learnでは、model.fit(X, y)でモデルの学習（パラメータの推定）を行います。"
                }
            ]
        },
        {
            id: 1003,
            title: "分類",
            duration: "30分",
            content: `
<h2>分類問題とは</h2>
<p><strong>分類（Classification）</strong>は、入力データがどのカテゴリに属するかを予測する教師あり学習のタスクです。</p>
<ul>
<li><strong>二値分類</strong>：2つのクラス（例：スパム/非スパム、陽性/陰性）</li>
<li><strong>多クラス分類</strong>：3つ以上のクラス（例：手書き数字0-9の認識）</li>
</ul>

<h2>ロジスティック回帰</h2>
<p><strong>ロジスティック回帰</strong>は、名前に「回帰」とありますが、実際には分類アルゴリズムです。シグモイド関数を用いて確率を出力します。</p>
<p>予測確率：<strong>P(y=1|x) = 1 / (1 + e^(-z))</strong>　（z = β₀ + β₁x₁ + ...）</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(f"正解率: {accuracy_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred))</code></pre>
</div>

<h2>決定木</h2>
<p><strong>決定木（Decision Tree）</strong>は、データをif-then-elseルールで分割していくアルゴリズムです。直感的に理解しやすく、解釈性が高いのが特徴です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.tree import DecisionTreeClassifier

dt_model = DecisionTreeClassifier(
    max_depth=5,        # 木の最大深さ
    min_samples_leaf=5, # 葉の最小サンプル数
    random_state=42
)
dt_model.fit(X_train, y_train)
y_pred = dt_model.predict(X_test)</code></pre>
</div>

<table>
<thead>
<tr><th>メリット</th><th>デメリット</th></tr>
</thead>
<tbody>
<tr><td>解釈しやすい（可視化可能）</td><td>過学習しやすい</td></tr>
<tr><td>前処理が少なくて済む</td><td>不安定（データ変化に敏感）</td></tr>
<tr><td>非線形な関係も学習可能</td><td>最適な木を見つけるのはNP困難</td></tr>
</tbody>
</table>

<h2>k-NN（k近傍法）</h2>
<p><strong>k-NN（k-Nearest Neighbors）</strong>は、新しいデータ点に最も近いk個の訓練データの多数決でクラスを予測する手法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.neighbors import KNeighborsClassifier

knn_model = KNeighborsClassifier(n_neighbors=5)
knn_model.fit(X_train, y_train)
y_pred = knn_model.predict(X_test)</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
k-NNは「怠惰学習（Lazy Learning）」とも呼ばれます。学習フェーズではデータを記憶するだけで、予測時に距離計算を行います。kの値やスケーリングが精度に大きく影響します。
</div>

<h2>分類の評価指標</h2>
<table>
<thead>
<tr><th>指標</th><th>説明</th><th>計算式</th></tr>
</thead>
<tbody>
<tr><td><strong>正解率（Accuracy）</strong></td><td>全体の中で正しく予測した割合</td><td>(TP+TN) / (TP+TN+FP+FN)</td></tr>
<tr><td><strong>適合率（Precision）</strong></td><td>陽性予測のうち実際に陽性の割合</td><td>TP / (TP+FP)</td></tr>
<tr><td><strong>再現率（Recall）</strong></td><td>実際の陽性のうち陽性と予測した割合</td><td>TP / (TP+FN)</td></tr>
<tr><td><strong>F1スコア</strong></td><td>適合率と再現率の調和平均</td><td>2×P×R / (P+R)</td></tr>
</tbody>
</table>

<h2>混同行列（Confusion Matrix）</h2>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

cm = confusion_matrix(y_test, y_pred)
disp = ConfusionMatrixDisplay(cm, display_labels=model.classes_)
disp.plot(cmap='Blues')
plt.title("混同行列")
plt.show()</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
不均衡データでは正解率だけでは不十分です。例えば陽性が1%のデータで「全て陰性」と予測しても正解率99%になります。適合率・再現率も必ず確認しましょう。
</div>
`,
            quiz: [
                {
                    id: "q1003_1",
                    type: "choice",
                    question: "ロジスティック回帰が出力に使用する関数はどれですか？",
                    options: ["ReLU関数", "シグモイド関数", "ソフトマックス関数", "ステップ関数"],
                    answer: 1,
                    explanation: "ロジスティック回帰はシグモイド関数（ロジスティック関数）を使って、出力を0〜1の確率に変換します。"
                },
                {
                    id: "q1003_2",
                    type: "choice",
                    question: "決定木の最大の利点として適切なものはどれですか？",
                    options: ["常に最高精度を出す", "過学習しにくい", "モデルの解釈がしやすい", "学習が最も速い"],
                    answer: 2,
                    explanation: "決定木はif-thenルールで分岐するため、人間が直感的に理解・可視化しやすいのが最大の利点です。"
                },
                {
                    id: "q1003_3",
                    type: "choice",
                    question: "k-NNで予測時に行う処理はどれですか？",
                    options: ["勾配降下法", "最近傍k個の多数決", "逆伝播", "情報利得の計算"],
                    answer: 1,
                    explanation: "k-NNは新しいデータ点に最も近いk個の訓練データを見つけ、多数決（分類の場合）で予測を行います。"
                },
                {
                    id: "q1003_4",
                    type: "choice",
                    question: "混同行列において、実際は陽性だが陰性と予測した件数を示す項目はどれですか？",
                    options: ["True Positive (TP)", "False Positive (FP)", "True Negative (TN)", "False Negative (FN)"],
                    answer: 3,
                    explanation: "False Negative（FN）は、実際には陽性であるにもかかわらず陰性と誤って予測した件数です。"
                },
                {
                    id: "q1003_5",
                    type: "fill",
                    question: "適合率と再現率の調和平均で計算される指標は _____ スコアです。",
                    answer: "F1",
                    explanation: "F1スコアは適合率（Precision）と再現率（Recall）の調和平均で、2×P×R/(P+R)で計算されます。"
                }
            ]
        },
        {
            id: 1004,
            title: "scikit-learn入門",
            duration: "30分",
            content: `
<h2>scikit-learnとは</h2>
<p><strong>scikit-learn（sklearn）</strong>は、Pythonで最も広く使われている機械学習ライブラリです。統一されたAPIで多数のアルゴリズムを提供し、前処理からモデル構築・評価まで一貫したワークフローを実現します。</p>

<h2>基本フロー：fit / predict / score</h2>
<p>scikit-learnのすべてのモデルは、統一された3つのメソッドで操作します。</p>

<table>
<thead>
<tr><th>メソッド</th><th>役割</th><th>使い方</th></tr>
</thead>
<tbody>
<tr><td><strong>fit(X, y)</strong></td><td>モデルの学習</td><td>訓練データでパラメータを推定</td></tr>
<tr><td><strong>predict(X)</strong></td><td>予測</td><td>新しいデータに対する予測値を返す</td></tr>
<tr><td><strong>score(X, y)</strong></td><td>評価</td><td>テストデータでの性能スコアを返す</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 1. モデル作成
model = RandomForestClassifier(n_estimators=100, random_state=42)

# 2. 学習
model.fit(X_train, y_train)

# 3. 予測
y_pred = model.predict(X_test)

# 4. 評価
score = model.score(X_test, y_test)
print(f"テストスコア: {score:.4f}")</code></pre>
</div>

<h2>前処理パイプライン</h2>
<p>データの前処理とモデルの学習を一つの流れにまとめることで、コードの可読性と再現性を高めます。</p>

<h3>よく使う前処理</h3>
<table>
<thead>
<tr><th>前処理</th><th>クラス</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>標準化</strong></td><td>StandardScaler</td><td>平均0、標準偏差1に変換</td></tr>
<tr><td><strong>正規化</strong></td><td>MinMaxScaler</td><td>0〜1の範囲に変換</td></tr>
<tr><td><strong>欠損値補完</strong></td><td>SimpleImputer</td><td>平均値・中央値等で補完</td></tr>
<tr><td><strong>ラベルエンコーディング</strong></td><td>LabelEncoder</td><td>カテゴリを数値に変換</td></tr>
<tr><td><strong>One-Hotエンコーディング</strong></td><td>OneHotEncoder</td><td>カテゴリをダミー変数に変換</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression

# パイプラインの構築
pipe = Pipeline([
    ('imputer', SimpleImputer(strategy='mean')),   # 欠損値を平均で補完
    ('scaler', StandardScaler()),                    # 標準化
    ('model', LogisticRegression(random_state=42))   # ロジスティック回帰
])

# パイプライン全体でfit/predict
pipe.fit(X_train, y_train)
y_pred = pipe.predict(X_test)
score = pipe.score(X_test, y_test)
print(f"パイプラインのスコア: {score:.4f}")</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
Pipelineを使うと、前処理→モデルの手順がひとまとまりになり、データリークを防止できます。特にクロスバリデーション時に重要です。
</div>

<h2>クラスタリング入門（k-means）</h2>
<p><strong>k-means</strong>は代表的な教師なし学習アルゴリズムで、データをk個のクラスタ（グループ）に分割します。</p>

<h3>アルゴリズムの流れ</h3>
<ol>
<li>k個の初期重心をランダムに配置</li>
<li>各データ点を最も近い重心のクラスタに割り当て</li>
<li>各クラスタの重心を再計算</li>
<li>2-3を収束するまで繰り返す</li>
</ol>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# k-meansクラスタリング（k=3）
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
kmeans.fit(X)
labels = kmeans.labels_

# 結果の可視化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0],
            kmeans.cluster_centers_[:, 1],
            marker='X', s=200, c='red', label='重心')
plt.legend()
plt.title("k-meansクラスタリング結果")
plt.show()</code></pre>
</div>

<h3>エルボー法でkを決定</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">inertias = []
for k in range(1, 11):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X)
    inertias.append(km.inertia_)

plt.plot(range(1, 11), inertias, 'bo-')
plt.xlabel('クラスタ数 k')
plt.ylabel('Inertia（クラスタ内距離の合計）')
plt.title('エルボー法')
plt.show()</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
k-meansは初期値依存性があり、局所最適解に収束する可能性があります。n_initパラメータで複数回実行し、最良の結果を選択するのが推奨です。
</div>
`,
            quiz: [
                {
                    id: "q1004_1",
                    type: "choice",
                    question: "scikit-learnでモデルの学習を行うメソッドはどれですか？",
                    options: ["predict()", "fit()", "score()", "transform()"],
                    answer: 1,
                    explanation: "fit()メソッドは訓練データを使ってモデルのパラメータを学習（推定）するメソッドです。"
                },
                {
                    id: "q1004_2",
                    type: "choice",
                    question: "StandardScalerが行う変換はどれですか？",
                    options: ["0〜1の範囲に変換", "平均0・標準偏差1に変換", "対数変換", "カテゴリを数値に変換"],
                    answer: 1,
                    explanation: "StandardScalerは各特徴量を平均0、標準偏差1に標準化（z-score正規化）します。"
                },
                {
                    id: "q1004_3",
                    type: "choice",
                    question: "Pipelineを使う主なメリットとして最も適切なものはどれですか？",
                    options: ["計算速度が上がる", "モデルの精度が必ず向上する", "データリークの防止と可読性向上", "GPUが使えるようになる"],
                    answer: 2,
                    explanation: "Pipelineは前処理とモデルをまとめることで、クロスバリデーション時のデータリーク防止とコードの可読性を向上させます。"
                },
                {
                    id: "q1004_4",
                    type: "choice",
                    question: "k-meansで最適なクラスタ数kを決定する代表的な方法はどれですか？",
                    options: ["交差検証", "エルボー法", "AIC", "ブートストラップ法"],
                    answer: 1,
                    explanation: "エルボー法は、クラスタ数kを変えながらInertia（クラスタ内距離の合計）をプロットし、曲がり角（肘）の位置でkを決定する方法です。"
                },
                {
                    id: "q1004_5",
                    type: "fill",
                    question: "k-meansは正解ラベルなしでデータをグループ分けする _____ 学習のアルゴリズムです。",
                    answer: "教師なし",
                    explanation: "k-meansはラベル（正解）なしでデータの構造を発見するため、教師なし学習に分類されます。"
                }
            ]
        }
    ]
};
