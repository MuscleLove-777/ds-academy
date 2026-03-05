/* ============================================
   DS Academy - Level 2: 統計学の基礎
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "統計学の基礎",
    icon: "📐",
    description: "データ分析の土台となる統計学の基本概念を習得する",
    modules: [
        {
            id: 201,
            title: "記述統計",
            duration: "20分",
            content: `
<h2>記述統計とは</h2>
<p><strong>記述統計</strong>（Descriptive Statistics）は、収集したデータの特徴を要約・記述するための統計手法です。データの中心傾向（代表値）やばらつき（散布度）を数値で表現することで、データの全体像を把握します。</p>

<h3>代表値（中心傾向の指標）</h3>
<p>データの「中心」がどこにあるかを示す指標です。</p>

<table>
<thead>
<tr><th>指標</th><th>定義</th><th>特徴</th><th>使用場面</th></tr>
</thead>
<tbody>
<tr><td>平均値（Mean）</td><td>全データの合計 ÷ データ数</td><td>外れ値の影響を受けやすい</td><td>正規分布に近いデータ</td></tr>
<tr><td>中央値（Median）</td><td>データを並べたときの真ん中の値</td><td>外れ値に頑健（ロバスト）</td><td>歪んだ分布のデータ</td></tr>
<tr><td>最頻値（Mode）</td><td>最も頻度が高い値</td><td>カテゴリデータにも使える</td><td>名義尺度データ</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np

data = [23, 25, 27, 28, 29, 30, 31, 35, 100]

mean = np.mean(data)      # 平均値: 36.4（外れ値100に引っ張られる）
median = np.median(data)   # 中央値: 29.0（外れ値の影響が小さい）
print(f"平均値: {mean:.1f}, 中央値: {median:.1f}")
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 代表値の使い分け</div>
年収のような右に歪んだ分布では、平均値が中央値より大きくなります。「日本人の平均年収は約440万円」と聞くと代表的に思えますが、中央値は約360万円です。データの性質に応じて適切な代表値を選ぶことが重要です。
</div>

<h3>散布度（ばらつきの指標）</h3>
<p>データがどの程度ばらついているかを示す指標です。</p>

<table>
<thead>
<tr><th>指標</th><th>定義</th><th>計算式のポイント</th></tr>
</thead>
<tbody>
<tr><td>範囲（Range）</td><td>最大値 - 最小値</td><td>最もシンプルだが外れ値に弱い</td></tr>
<tr><td>分散（Variance）</td><td>各データと平均値との差の二乗の平均</td><td>単位が元データの二乗になる</td></tr>
<tr><td>標準偏差（Standard Deviation）</td><td>分散の平方根</td><td>元データと同じ単位で解釈できる</td></tr>
<tr><td>四分位範囲（IQR）</td><td>第3四分位数 - 第1四分位数</td><td>外れ値に頑健</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np

data = [65, 70, 72, 75, 78, 80, 82, 85, 90, 95]

variance = np.var(data, ddof=1)      # 不偏分散
std_dev = np.std(data, ddof=1)       # 標準偏差
q1 = np.percentile(data, 25)         # 第1四分位数
q3 = np.percentile(data, 75)         # 第3四分位数
iqr = q3 - q1                        # 四分位範囲

print(f"分散: {variance:.2f}")
print(f"標準偏差: {std_dev:.2f}")
print(f"IQR: {iqr:.2f}")
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
分散を計算する際、母集団の分散は N で割りますが、標本の分散（不偏分散）は N-1 で割ります（ベッセルの補正）。Pythonのnp.var()はデフォルトで N で割るため、不偏分散を求める際は ddof=1 を指定する必要があります。
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "データに外れ値が含まれる場合、代表値として最も適切なのはどれですか？", options: ["平均値", "中央値", "最頻値", "範囲"], answer: 1, explanation: "中央値は外れ値の影響を受けにくい（ロバスト）ため、外れ値が含まれるデータの代表値として適切です。" },
                { id: "q201_2", type: "choice", question: "標準偏差の説明として正しいものはどれですか？", options: ["各データと平均値との差の合計", "分散の平方根", "最大値と最小値の差", "第3四分位数と第1四分位数の差"], answer: 1, explanation: "標準偏差は分散の平方根で、元データと同じ単位でばらつきを表現できます。" },
                { id: "q201_3", type: "choice", question: "不偏分散を計算する際、データ数Nではなく何で割りますか？", options: ["N+1", "N-1", "2N", "N/2"], answer: 1, explanation: "不偏分散は N-1 で割ります（ベッセルの補正）。これにより、標本から母集団の分散を偏りなく推定できます。" },
                { id: "q201_4", type: "choice", question: "四分位範囲（IQR）の計算式はどれですか？", options: ["最大値 - 最小値", "Q3 - Q1", "平均値 - 中央値", "Q2 - Q1"], answer: 1, explanation: "IQR（四分位範囲）は第3四分位数（Q3）から第1四分位数（Q1）を引いた値で、データの中央50%の範囲を表します。" },
                { id: "q201_5", type: "fill", question: "データを小さい順に並べたとき、ちょうど真ん中にくる値を___値と呼びます。", answer: "中央", explanation: "中央値（Median）は、データを昇順に並べたときの真ん中の値です。データ数が偶数の場合は、中央2つの値の平均をとります。" }
            ]
        },
        {
            id: 202,
            title: "データの分布",
            duration: "20分",
            content: `
<h2>データの分布とは</h2>
<p><strong>データの分布</strong>とは、データがどのような値にどのくらいの頻度で存在するかを表す特性です。分布を理解することは、適切な分析手法を選択するための基礎となります。</p>

<h3>正規分布（ガウス分布）</h3>
<p>正規分布は、自然界や社会現象に広く見られる最も重要な確率分布です。平均値を中心に左右対称の釣鐘型（ベル型）の形状をしています。</p>

<table>
<thead>
<tr><th>特徴</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>形状</td><td>平均値を中心とした左右対称の釣鐘型</td></tr>
<tr><td>平均値 = 中央値 = 最頻値</td><td>3つの代表値が一致する</td></tr>
<tr><td>68-95-99.7ルール</td><td>平均±1σに68%、±2σに95%、±3σに99.7%のデータが含まれる</td></tr>
<tr><td>パラメータ</td><td>平均（μ）と標準偏差（σ）の2つで完全に決定される</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np
import matplotlib.pyplot as plt

# 正規分布に従うデータを生成
np.random.seed(42)
data = np.random.normal(loc=170, scale=10, size=1000)  # 平均170、標準偏差10

# ヒストグラムを描画
plt.hist(data, bins=30, density=True, alpha=0.7)
plt.xlabel("身長 (cm)")
plt.ylabel("確率密度")
plt.title("正規分布のヒストグラム")
plt.show()
</code></pre>
</div>

<h3>ヒストグラム</h3>
<p>ヒストグラムは、データの分布を視覚的に表現する最も基本的なグラフです。データを一定の区間（ビン）に分割し、各区間に含まれるデータの頻度を棒グラフで表します。</p>
<ul>
<li><strong>ビン数の選択</strong>が重要：少なすぎると情報が失われ、多すぎるとノイズが目立つ</li>
<li><strong>Sturgesの公式</strong>：ビン数 = 1 + log₂(N) が目安の1つ</li>
</ul>

<h3>箱ひげ図（Box Plot）</h3>
<p>箱ひげ図は、データの分布の要約を5つの数値で表現するグラフです。</p>
<table>
<thead>
<tr><th>要素</th><th>表す値</th></tr>
</thead>
<tbody>
<tr><td>箱の下辺</td><td>第1四分位数（Q1）</td></tr>
<tr><td>箱の中の線</td><td>中央値（Q2）</td></tr>
<tr><td>箱の上辺</td><td>第3四分位数（Q3）</td></tr>
<tr><td>ひげの下端</td><td>Q1 - 1.5×IQR 以上の最小値</td></tr>
<tr><td>ひげの上端</td><td>Q3 + 1.5×IQR 以下の最大値</td></tr>
<tr><td>点（外れ値）</td><td>ひげの範囲外のデータ</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
箱ひげ図は複数のグループのデータ分布を比較するのに特に便利です。例えば、複数の店舗の売上分布を並べて比較する場合などに活用されます。
</div>

<h3>歪度と尖度</h3>
<table>
<thead>
<tr><th>指標</th><th>意味</th><th>値の解釈</th></tr>
</thead>
<tbody>
<tr><td>歪度（Skewness）</td><td>分布の左右の偏り</td><td>正：右に裾が長い、負：左に裾が長い、0：対称</td></tr>
<tr><td>尖度（Kurtosis）</td><td>分布の尖り具合</td><td>正規分布の尖度を0とし、正：鋭い、負：平坦</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from scipy import stats
import numpy as np

data = np.random.normal(0, 1, 1000)

skewness = stats.skew(data)
kurtosis = stats.kurtosis(data)  # excess kurtosis（正規分布=0）

print(f"歪度: {skewness:.3f}")
print(f"尖度: {kurtosis:.3f}")
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
尖度の定義には2種類あります。正規分布の尖度を3とする定義と、0とする定義（超過尖度、excess kurtosis）です。Pythonのscipy.stats.kurtosis()はデフォルトで超過尖度（excess kurtosis）を返します。
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "正規分布において、平均±1σの範囲にデータの約何%が含まれますか？", options: ["50%", "68%", "95%", "99.7%"], answer: 1, explanation: "正規分布の68-95-99.7ルールにより、平均±1σの範囲にデータの約68%が含まれます。" },
                { id: "q202_2", type: "choice", question: "箱ひげ図において、箱の中に引かれる水平線は何を表しますか？", options: ["平均値", "中央値（Q2）", "最頻値", "第1四分位数"], answer: 1, explanation: "箱ひげ図の箱の中の線は中央値（第2四分位数、Q2）を表します。" },
                { id: "q202_3", type: "choice", question: "歪度が正の値を示す分布の特徴はどれですか？", options: ["左に裾が長い", "右に裾が長い", "完全に対称", "一様分布"], answer: 1, explanation: "歪度が正の場合、分布は右に裾が長い（右に歪んだ）形状になります。年収の分布が典型例です。" },
                { id: "q202_4", type: "choice", question: "正規分布を完全に決定するパラメータはどれですか？", options: ["平均値のみ", "標準偏差のみ", "平均値と標準偏差", "平均値と中央値"], answer: 2, explanation: "正規分布は平均（μ）と標準偏差（σ）の2つのパラメータで完全に決定されます。" },
                { id: "q202_5", type: "fill", question: "正規分布はその形状から「___型」とも呼ばれます。漢字2文字で答えてください。", answer: "釣鐘", explanation: "正規分布は平均値を中心に左右対称の釣鐘（つりがね）型の形状をしているため、「釣鐘型」とも呼ばれます。" }
            ]
        },
        {
            id: 203,
            title: "相関と因果",
            duration: "20分",
            content: `
<h2>相関と因果の違い</h2>
<p>データ分析において最も重要な概念の1つが、<strong>相関</strong>と<strong>因果</strong>の区別です。2つの変数に相関があるからといって、一方が他方の原因であるとは限りません。</p>

<table>
<thead>
<tr><th>概念</th><th>定義</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>相関</td><td>2つの変数が一緒に変動する統計的関係</td><td>アイスの売上と水難事故の件数が同時に増加</td></tr>
<tr><td>因果</td><td>一方の変数が他方の変数の原因となる関係</td><td>喫煙は肺がんのリスクを高める</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要な原則</div>
「相関は因果を意味しない」（Correlation does not imply causation）。これはデータサイエンスの最も基本的な原則の1つです。アイスの売上と水難事故は相関しますが、アイスが水難事故を引き起こしているわけではありません。「気温」という第三の変数（交絡因子）が両方に影響しています。
</div>

<h3>相関係数</h3>
<p>相関係数は、2つの変数間の線形関係の強さと方向を-1から1の範囲で表す指標です。</p>

<h4>ピアソンの相関係数</h4>
<p>最も一般的に使われる相関係数で、2つの連続変数間の<strong>線形関係</strong>の強さを測ります。</p>
<table>
<thead>
<tr><th>相関係数の値</th><th>解釈</th></tr>
</thead>
<tbody>
<tr><td>0.7 〜 1.0</td><td>強い正の相関</td></tr>
<tr><td>0.4 〜 0.7</td><td>中程度の正の相関</td></tr>
<tr><td>0.2 〜 0.4</td><td>弱い正の相関</td></tr>
<tr><td>-0.2 〜 0.2</td><td>ほぼ相関なし</td></tr>
<tr><td>-0.4 〜 -0.2</td><td>弱い負の相関</td></tr>
<tr><td>-0.7 〜 -0.4</td><td>中程度の負の相関</td></tr>
<tr><td>-1.0 〜 -0.7</td><td>強い負の相関</td></tr>
</tbody>
</table>

<h4>スピアマンの順位相関係数</h4>
<p>データの<strong>順位</strong>に基づいて計算する相関係数です。非線形の単調関係も捉えることができ、順序尺度のデータにも使用できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np
from scipy import stats

# サンプルデータ
study_hours = [2, 3, 5, 7, 8, 10, 12]
test_scores = [55, 60, 70, 75, 82, 88, 95]

# ピアソンの相関係数
pearson_r, p_value = stats.pearsonr(study_hours, test_scores)
print(f"ピアソン相関係数: {pearson_r:.3f}, p値: {p_value:.4f}")

# スピアマンの順位相関係数
spearman_r, p_value = stats.spearmanr(study_hours, test_scores)
print(f"スピアマン相関係数: {spearman_r:.3f}, p値: {p_value:.4f}")
</code></pre>
</div>

<h3>散布図</h3>
<p>散布図は、2つの変数の関係を視覚的に表現するためのグラフです。相関係数だけでは見落としてしまうパターンを発見できます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント：アンスコムの四重奏</div>
アンスコムの四重奏（Anscombe's Quartet）は、記述統計量（平均値、標準偏差、相関係数）がほぼ同じでも、散布図を描くと全く異なるパターンを示す4組のデータセットです。数値だけでなく、必ず可視化して確認することの重要性を示しています。
</div>

<h3>疑似相関の罠</h3>
<p>疑似相関（Spurious Correlation）とは、実際には因果関係がないにもかかわらず、統計的に相関が見られる現象です。</p>
<table>
<thead>
<tr><th>パターン</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>交絡因子</td><td>第三の変数が両方に影響</td><td>アイスの売上と水難事故（交絡因子：気温）</td></tr>
<tr><td>逆の因果</td><td>原因と結果が逆</td><td>消防車の数と火災被害（被害が大きいから多く出動）</td></tr>
<tr><td>偶然の一致</td><td>全く無関係な変数が偶然相関</td><td>ニコラス・ケイジの映画出演数とプール溺死者数</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "ピアソンの相関係数が-0.85の場合、2つの変数の関係はどのように解釈されますか？", options: ["弱い正の相関", "強い正の相関", "弱い負の相関", "強い負の相関"], answer: 3, explanation: "-0.85は-1.0〜-0.7の範囲にあるため、強い負の相関と解釈されます。一方の変数が増加すると他方が減少する強い線形関係があります。" },
                { id: "q203_2", type: "choice", question: "アイスの売上と水難事故の件数が同時に増加する現象で、「気温」にあたるものを何と呼びますか？", options: ["従属変数", "独立変数", "交絡因子", "目的変数"], answer: 2, explanation: "交絡因子（Confounding Variable）は、2つの変数の両方に影響を与える第三の変数です。気温が上がるとアイスの売上も水難事故も増えるため、見かけ上の相関が生じます。" },
                { id: "q203_3", type: "choice", question: "スピアマンの順位相関係数の特徴として正しいものはどれですか？", options: ["線形関係のみを測定する", "データの順位に基づいて計算する", "連続変数にのみ使用できる", "常にピアソン相関係数より大きい"], answer: 1, explanation: "スピアマンの順位相関係数はデータの順位に基づいて計算されるため、非線形の単調関係も捉えることができ、順序尺度のデータにも使用できます。" },
                { id: "q203_4", type: "choice", question: "記述統計量がほぼ同じでも散布図が全く異なる4組のデータセットを何と呼びますか？", options: ["ベイズの定理", "中心極限定理", "アンスコムの四重奏", "大数の法則"], answer: 2, explanation: "アンスコムの四重奏（Anscombe's Quartet）は、平均値・標準偏差・相関係数がほぼ同じでも散布図が全く異なる4組のデータセットで、可視化の重要性を示しています。" },
                { id: "q203_5", type: "fill", question: "「相関は___を意味しない」はデータサイエンスの最も基本的な原則の1つです。", answer: "因果", explanation: "「相関は因果を意味しない（Correlation does not imply causation）」は、統計的な相関関係があっても、必ずしも因果関係があるとは限らないという原則です。" }
            ]
        },
        {
            id: 204,
            title: "確率の基礎",
            duration: "20分",
            content: `
<h2>確率とは</h2>
<p><strong>確率</strong>（Probability）は、ある事象がどの程度起こりやすいかを0から1の数値で表したものです。0は「絶対に起こらない」、1は「確実に起こる」を意味します。確率はデータサイエンスの基盤であり、特に統計的推論や機械学習の理解に不可欠です。</p>

<h3>確率の基本用語</h3>
<table>
<thead>
<tr><th>用語</th><th>定義</th><th>例（サイコロ）</th></tr>
</thead>
<tbody>
<tr><td>試行</td><td>結果が確定的でない実験や観察</td><td>サイコロを1回振ること</td></tr>
<tr><td>標本空間</td><td>起こりうるすべての結果の集合</td><td>{1, 2, 3, 4, 5, 6}</td></tr>
<tr><td>事象</td><td>標本空間の部分集合</td><td>偶数が出る = {2, 4, 6}</td></tr>
<tr><td>確率</td><td>事象が起こる可能性を数値化</td><td>P(偶数) = 3/6 = 0.5</td></tr>
</tbody>
</table>

<h3>確率分布</h3>
<p>確率分布は、確率変数がとりうる各値に対して、その確率を対応させたものです。</p>

<h4>離散型確率分布</h4>
<table>
<thead>
<tr><th>分布名</th><th>特徴</th><th>使用例</th></tr>
</thead>
<tbody>
<tr><td>ベルヌーイ分布</td><td>成功/失敗の2値（1回の試行）</td><td>コイン投げの表/裏</td></tr>
<tr><td>二項分布</td><td>n回のベルヌーイ試行での成功回数</td><td>10回のコイン投げで表が出る回数</td></tr>
<tr><td>ポアソン分布</td><td>一定期間・空間での事象の発生回数</td><td>1時間あたりの来客数</td></tr>
</tbody>
</table>

<h4>連続型確率分布</h4>
<table>
<thead>
<tr><th>分布名</th><th>特徴</th><th>使用例</th></tr>
</thead>
<tbody>
<tr><td>正規分布</td><td>平均を中心とした釣鐘型</td><td>身長、テストの点数</td></tr>
<tr><td>一様分布</td><td>すべての値が等しい確率</td><td>乱数生成</td></tr>
<tr><td>指数分布</td><td>事象間の待ち時間</td><td>次の来客までの待ち時間</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from scipy import stats

# 二項分布：10回のコイン投げで表が出る回数
n, p = 10, 0.5
binom_dist = stats.binom(n, p)

# 表がちょうど5回出る確率
prob_5 = binom_dist.pmf(5)
print(f"ちょうど5回表が出る確率: {prob_5:.4f}")

# 表が7回以上出る確率
prob_7_or_more = 1 - binom_dist.cdf(6)
print(f"7回以上表が出る確率: {prob_7_or_more:.4f}")
</code></pre>
</div>

<h3>条件付き確率</h3>
<p>条件付き確率は、ある事象Bが起こったという条件のもとで、事象Aが起こる確率です。</p>
<p><strong>P(A|B) = P(A ∩ B) / P(B)</strong></p>

<div class="info-box tip">
<div class="info-box-title">💡 条件付き確率の例</div>
ある病気の検査で、実際に病気の人が陽性と判定される確率（感度）が99%、健康な人が陰性と判定される確率（特異度）が95%とします。しかし、病気の有病率が0.1%の場合、検査で陽性と出た人が実際に病気である確率は約2%に過ぎません。これが「偽陽性のパラドックス」です。
</div>

<h3>ベイズの定理</h3>
<p>ベイズの定理は、新しい証拠（データ）が得られたときに、仮説の確率を更新する方法を示します。</p>
<p><strong>P(A|B) = P(B|A) × P(A) / P(B)</strong></p>

<table>
<thead>
<tr><th>用語</th><th>記号</th><th>意味</th></tr>
</thead>
<tbody>
<tr><td>事後確率</td><td>P(A|B)</td><td>データBを観測した後の仮説Aの確率</td></tr>
<tr><td>尤度</td><td>P(B|A)</td><td>仮説Aが正しいときにデータBが観測される確率</td></tr>
<tr><td>事前確率</td><td>P(A)</td><td>データを観測する前の仮説Aの確率</td></tr>
<tr><td>周辺尤度</td><td>P(B)</td><td>データBが観測される全体的な確率</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># ベイズの定理の例：病気の検査
sensitivity = 0.99  # 感度（病気の人が陽性になる確率）
specificity = 0.95  # 特異度（健康な人が陰性になる確率）
prevalence = 0.001  # 有病率（事前確率）

# 検査陽性の場合に実際に病気である確率（事後確率）
p_positive = sensitivity * prevalence + (1 - specificity) * (1 - prevalence)
p_disease_given_positive = (sensitivity * prevalence) / p_positive

print(f"検査陽性時に実際に病気である確率: {p_disease_given_positive:.4f}")
# 約0.0194（約2%）
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
ベイズの定理は直感に反する結果を導くことがあります。有病率が低い病気では、高精度の検査でも偽陽性率が高くなります。データサイエンスでは、この種の「ベースレートの無視」を避けることが重要です。
</div>
`,
            quiz: [
                { id: "q204_1", type: "choice", question: "一定期間における事象の発生回数をモデル化するのに適した確率分布はどれですか？", options: ["正規分布", "ベルヌーイ分布", "ポアソン分布", "一様分布"], answer: 2, explanation: "ポアソン分布は、一定の期間や空間における稀な事象の発生回数をモデル化するのに適しています。例：1時間あたりの来客数、1ページあたりの誤植数。" },
                { id: "q204_2", type: "choice", question: "ベイズの定理において、データを観測する前の仮説の確率を何と呼びますか？", options: ["事後確率", "尤度", "事前確率", "周辺尤度"], answer: 2, explanation: "事前確率（Prior Probability）は、データを観測する前の段階での仮説の確率です。ベイズの定理では、事前確率をデータ（尤度）で更新して事後確率を求めます。" },
                { id: "q204_3", type: "choice", question: "条件付き確率 P(A|B) の計算式として正しいものはどれですか？", options: ["P(A) × P(B)", "P(A ∩ B) / P(B)", "P(A) + P(B)", "P(B|A) × P(B)"], answer: 1, explanation: "条件付き確率 P(A|B) = P(A ∩ B) / P(B) です。事象Bが起こったという条件のもとで、事象Aが起こる確率を表します。" },
                { id: "q204_4", type: "choice", question: "サイコロを1回振ったとき、偶数が出る確率はいくつですか？", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, explanation: "サイコロの偶数は{2, 4, 6}の3通りで、全体は6通りなので、P(偶数) = 3/6 = 1/2 です。" },
                { id: "q204_5", type: "fill", question: "成功か失敗の2値しか取らない1回の試行の確率分布を「___分布」と呼びます。カタカナで答えてください。", answer: "ベルヌーイ", explanation: "ベルヌーイ分布（Bernoulli Distribution）は、成功/失敗（1/0）の2値をとる1回の試行を表す確率分布です。コイン投げの表/裏が典型的な例です。" }
            ]
        }
    ]
};
