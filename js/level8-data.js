/* ============================================
   DS Academy - Level 8: 推測統計と仮説検定
   ============================================ */

const LEVEL8_DATA = {
    id: 8,
    title: "推測統計と仮説検定",
    icon: "🎯",
    description: "標本から母集団を推測する手法と、仮説検定の理論・実践を学ぶ",
    modules: [
        {
            id: 801,
            title: "母集団と標本",
            duration: "25分",
            content: `
<h2>母集団と標本</h2>
<p>統計学では、調べたい対象全体を<strong>母集団（Population）</strong>、母集団から取り出した一部のデータを<strong>標本（Sample）</strong>と呼びます。多くの場合、母集団全体を調べることは不可能なため、標本から母集団の特性を推測します。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
推測統計の基本的な考え方は「標本から母集団について推測する」ことです。この推測がどの程度信頼できるかを定量的に評価するのが推測統計学です。
</div>

<h3>母集団と標本の関係</h3>
<table>
<thead>
<tr><th>概念</th><th>母集団</th><th>標本</th></tr>
</thead>
<tbody>
<tr><td>定義</td><td>調査対象の全体</td><td>母集団から抽出した一部</td></tr>
<tr><td>平均</td><td>母平均 μ（ミュー）</td><td>標本平均 x̄（エックスバー）</td></tr>
<tr><td>分散</td><td>母分散 σ²（シグマ二乗）</td><td>標本分散 s²</td></tr>
<tr><td>サイズ</td><td>N（母集団サイズ）</td><td>n（標本サイズ）</td></tr>
<tr><td>例</td><td>日本国民全員の身長</td><td>1000人の身長データ</td></tr>
</tbody>
</table>

<h3>サンプリング手法</h3>
<table>
<thead>
<tr><th>手法</th><th>説明</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td>単純無作為抽出</td><td>母集団からランダムに抽出</td><td>最も基本的。偏りが小さい</td></tr>
<tr><td>層化抽出</td><td>母集団を層に分けてから各層から抽出</td><td>各層の代表性を確保</td></tr>
<tr><td>クラスター抽出</td><td>グループ単位で抽出</td><td>大規模調査に効率的</td></tr>
<tr><td>系統抽出</td><td>一定間隔で抽出（例: 10人おき）</td><td>実施が容易</td></tr>
</tbody>
</table>

<h3>中心極限定理</h3>
<p>中心極限定理は推測統計の最も重要な定理の1つです。</p>

<div class="info-box tip">
<div class="info-box-title">💡 中心極限定理（CLT）</div>
<p>母集団の分布がどのような形であっても、十分に大きな標本（一般にn≥30）から計算した<strong>標本平均の分布は正規分布に近づく</strong>。</p>
<ul>
<li>標本平均の期待値 = 母平均 μ</li>
<li>標本平均の標準偏差 = σ / √n（標準誤差）</li>
</ul>
</div>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np
import matplotlib.pyplot as plt

# 中心極限定理のシミュレーション
np.random.seed(42)

# 一様分布（非正規分布）の母集団
population = np.random.uniform(0, 100, 100000)

# 標本平均の分布を調べる
sample_means = []
for _ in range(10000):
    sample = np.random.choice(population, size=30)
    sample_means.append(sample.mean())

# 可視化
fig, axes = plt.subplots(1, 2, figsize=(14, 5))
axes[0].hist(population, bins=50, edgecolor='black', alpha=0.7)
axes[0].set_title('母集団の分布（一様分布）')

axes[1].hist(sample_means, bins=50, edgecolor='black', alpha=0.7)
axes[1].set_title('標本平均の分布（正規分布に近似）')

plt.tight_layout()
plt.show()</code></pre>
</div>

<h3>標本誤差と大数の法則</h3>
<p><strong>標本誤差</strong>は、標本統計量と母集団パラメータの差です。標本サイズが大きくなると、標本誤差は小さくなります。</p>

<p><strong>大数の法則</strong>は、標本サイズnが大きくなるにつれて、標本平均が母平均に近づくという法則です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 大数の法則のシミュレーション
population_mean = population.mean()
sample_sizes = range(10, 5001, 10)
running_means = []

for n in sample_sizes:
    sample = np.random.choice(population, size=n)
    running_means.append(sample.mean())

plt.figure(figsize=(10, 5))
plt.plot(sample_sizes, running_means, alpha=0.7)
plt.axhline(y=population_mean, color='r', linestyle='--', label=f'母平均: {population_mean:.2f}')
plt.xlabel('標本サイズ')
plt.ylabel('標本平均')
plt.title('大数の法則: 標本サイズが大きくなると標本平均は母平均に収束する')
plt.legend()
plt.show()</code></pre>
</div>
`,
            quiz: [
                {
                    id: "q801_1",
                    type: "choice",
                    question: "母集団の平均を表す記号はどれですか？",
                    options: ["x̄（エックスバー）", "μ（ミュー）", "s（エス）", "σ（シグマ）"],
                    answer: 1,
                    explanation: "μ（ミュー）は母平均を表す記号です。x̄は標本平均、σは母標準偏差、sは標本標準偏差を表します。"
                },
                {
                    id: "q801_2",
                    type: "choice",
                    question: "中心極限定理が成り立つために一般的に必要とされる標本サイズはどれですか？",
                    options: ["n ≥ 5", "n ≥ 10", "n ≥ 30", "n ≥ 100"],
                    answer: 2,
                    explanation: "中心極限定理は、一般にn≥30の標本サイズで成り立つとされています。ただし、母集団の分布が正規分布に近い場合はより小さいnでも近似が良好です。"
                },
                {
                    id: "q801_3",
                    type: "choice",
                    question: "母集団を層に分けてから各層から標本を抽出する手法は何ですか？",
                    options: ["単純無作為抽出", "クラスター抽出", "層化抽出", "系統抽出"],
                    answer: 2,
                    explanation: "層化抽出は母集団を性別や年齢層などの層（ストラタ）に分け、各層から比例的に標本を抽出する手法です。各層の代表性を確保できます。"
                },
                {
                    id: "q801_4",
                    type: "choice",
                    question: "標本平均の標準偏差（標準誤差）の計算式はどれですか？",
                    options: ["σ × n", "σ / n", "σ / √n", "σ × √n"],
                    answer: 2,
                    explanation: "標準誤差（SE）= σ / √n です。標本サイズnが大きくなると標準誤差は小さくなり、推定の精度が向上します。"
                },
                {
                    id: "q801_5",
                    type: "fill",
                    question: "標本サイズが大きくなるにつれて標本平均が母平均に近づく法則を「______の法則」と呼びます。",
                    answer: "大数",
                    explanation: "大数の法則（Law of Large Numbers）は、標本サイズnが十分に大きくなると、標本平均が母平均μに確率的に収束するという法則です。"
                }
            ]
        },
        {
            id: 802,
            title: "信頼区間と推定",
            duration: "25分",
            content: `
<h2>推定とは</h2>
<p>推定（Estimation）とは、標本データから母集団のパラメータ（母平均、母分散など）の値を推測することです。推定には<strong>点推定</strong>と<strong>区間推定</strong>の2種類があります。</p>

<h3>点推定と区間推定</h3>
<table>
<thead>
<tr><th>推定方法</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>点推定</td><td>母パラメータを1つの値で推定</td><td>「母平均は170cm」</td></tr>
<tr><td>区間推定</td><td>母パラメータが含まれる範囲を推定</td><td>「母平均は168〜172cmの間（95%信頼度）」</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 点推定の限界</div>
<p>点推定は1つの値しか示さないため、推定の不確実性が表現できません。区間推定を用いることで「どの程度の確信を持って推定しているか」を定量的に示すことができます。</p>
</div>

<h3>95%信頼区間</h3>
<p>信頼区間は「同じ方法で繰り返し標本を取ったとき、その区間が母パラメータを含む割合」を示します。</p>

<p>95%信頼区間の計算式（母分散未知の場合）：</p>
<table>
<thead>
<tr><th>要素</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>x̄ ± t × (s / √n)</td><td>95%信頼区間の一般式</td></tr>
<tr><td>x̄</td><td>標本平均</td></tr>
<tr><td>t</td><td>t分布の臨界値（自由度n-1）</td></tr>
<tr><td>s</td><td>標本標準偏差</td></tr>
<tr><td>n</td><td>標本サイズ</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np
from scipy import stats

# サンプルデータ
data = np.array([172, 165, 178, 168, 175, 180, 170, 173, 169, 177,
                 174, 171, 176, 167, 179, 173, 168, 175, 172, 170])

n = len(data)
mean = data.mean()
se = stats.sem(data)  # 標準誤差

# 95%信頼区間（t分布）
ci_95 = stats.t.interval(0.95, df=n-1, loc=mean, scale=se)
print(f"標本平均: {mean:.2f}")
print(f"標準誤差: {se:.2f}")
print(f"95%信頼区間: ({ci_95[0]:.2f}, {ci_95[1]:.2f})")</code></pre>
</div>

<h3>信頼区間の解釈</h3>

<div class="info-box tip">
<div class="info-box-title">💡 信頼区間の正しい解釈</div>
<ul>
<li>正しい解釈: 「同じ方法で100回標本を取ると、95回はこの区間に母平均が含まれる」</li>
<li>誤った解釈: 「母平均がこの区間に含まれる確率が95%」（母平均は固定値なので確率ではない）</li>
</ul>
</div>

<h3>scipy.statsの活用</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from scipy import stats

# 信頼水準を変えた区間推定
for confidence in [0.90, 0.95, 0.99]:
    ci = stats.t.interval(confidence, df=n-1, loc=mean, scale=se)
    width = ci[1] - ci[0]
    print(f"{confidence*100:.0f}%信頼区間: ({ci[0]:.2f}, {ci[1]:.2f}), 幅: {width:.2f}")

# 結果例:
# 90%信頼区間: (170.54, 174.26), 幅: 3.72
# 95%信頼区間: (170.10, 174.70), 幅: 4.60
# 99%信頼区間: (169.19, 175.61), 幅: 6.42</code></pre>
</div>

<table>
<thead>
<tr><th>信頼水準</th><th>区間の幅</th><th>用途</th></tr>
</thead>
<tbody>
<tr><td>90%</td><td>狭い</td><td>探索的な分析</td></tr>
<tr><td>95%</td><td>中程度</td><td>最も一般的（デフォルト）</td></tr>
<tr><td>99%</td><td>広い</td><td>高い確信が必要な場合</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 信頼区間の幅に影響する要因</div>
<ul>
<li><strong>標本サイズ n</strong>: 大きいほど区間は狭くなる（精度向上）</li>
<li><strong>信頼水準</strong>: 高いほど区間は広くなる（確信度とのトレードオフ）</li>
<li><strong>データのばらつき s</strong>: 大きいほど区間は広くなる</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q802_1",
                    type: "choice",
                    question: "95%信頼区間の正しい解釈はどれですか？",
                    options: [
                        "母平均がこの区間に含まれる確率が95%",
                        "データの95%がこの区間に含まれる",
                        "同じ方法で標本を繰り返し取ると、約95%の区間が母平均を含む",
                        "母平均がこの区間の中心にある確率が95%"
                    ],
                    answer: 2,
                    explanation: "信頼区間の正しい解釈は、「同じ方法で繰り返し標本を取った場合、構成される区間の約95%が母平均を含む」です。母平均は固定値なので「含まれる確率」という表現は不正確です。"
                },
                {
                    id: "q802_2",
                    type: "choice",
                    question: "標本サイズを4倍にすると、信頼区間の幅はどうなりますか？",
                    options: ["4分の1になる", "2分の1になる", "変わらない", "4倍になる"],
                    answer: 1,
                    explanation: "信頼区間の幅は標準誤差（σ/√n）に比例します。nを4倍にすると√nは2倍になり、標準誤差は半分になるため、信頼区間の幅も約半分になります。"
                },
                {
                    id: "q802_3",
                    type: "choice",
                    question: "母分散が未知の場合に使用する分布はどれですか？",
                    options: ["正規分布", "t分布", "カイ二乗分布", "F分布"],
                    answer: 1,
                    explanation: "母分散が未知の場合は、標本標準偏差を用いてt分布に基づく信頼区間を計算します。標本サイズが大きくなるとt分布は正規分布に近づきます。"
                },
                {
                    id: "q802_4",
                    type: "choice",
                    question: "scipy.statsで標準誤差を計算する関数はどれですか？",
                    options: ["stats.std()", "stats.se()", "stats.sem()", "stats.stderr()"],
                    answer: 2,
                    explanation: "stats.sem()（Standard Error of the Mean）は標本データから標準誤差を計算します。内部的にはs/√nを計算しています。"
                },
                {
                    id: "q802_5",
                    type: "fill",
                    question: "母パラメータを1つの値で推定する方法を「______推定」と呼びます。",
                    answer: "点",
                    explanation: "点推定は母パラメータを1つの値（点）で推定する方法です。例えば、標本平均x̄で母平均μを推定することが点推定です。"
                }
            ]
        },
        {
            id: 803,
            title: "仮説検定の基本",
            duration: "30分",
            content: `
<h2>仮説検定とは</h2>
<p>仮説検定（Hypothesis Testing）は、データに基づいて仮説の妥当性を統計的に判断する方法です。ある主張が統計的に有意かどうかを客観的に評価できます。</p>

<h3>仮説検定の基本用語</h3>
<table>
<thead>
<tr><th>用語</th><th>記号</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>帰無仮説</td><td>H₀</td><td>「差がない」「効果がない」という仮説（否定したい仮説）</td></tr>
<tr><td>対立仮説</td><td>H₁</td><td>「差がある」「効果がある」という仮説（主張したい仮説）</td></tr>
<tr><td>有意水準</td><td>α</td><td>帰無仮説を誤って棄却する確率の上限（通常0.05）</td></tr>
<tr><td>p値</td><td>p</td><td>帰無仮説が正しい場合に、観測データ以上に極端な結果が得られる確率</td></tr>
<tr><td>検定統計量</td><td>t, χ²等</td><td>データから計算される統計量</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 仮説検定の判断基準</div>
<ul>
<li><strong>p値 < α（例: 0.05）</strong> → 帰無仮説を棄却 → 統計的に有意</li>
<li><strong>p値 ≥ α</strong> → 帰無仮説を棄却できない → 統計的に有意でない</li>
</ul>
<p>注意: 「帰無仮説を棄却できない」は「帰無仮説が正しい」ことの証明ではありません。</p>
</div>

<h3>仮説検定の手順</h3>
<table>
<thead>
<tr><th>ステップ</th><th>内容</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>1. 仮説設定</td><td>H₀とH₁を定義</td><td>H₀: μ₁ = μ₂, H₁: μ₁ ≠ μ₂</td></tr>
<tr><td>2. 有意水準</td><td>αを決定</td><td>α = 0.05</td></tr>
<tr><td>3. 検定選択</td><td>適切な検定手法を選択</td><td>t検定、カイ二乗検定等</td></tr>
<tr><td>4. 検定実施</td><td>検定統計量とp値を計算</td><td>t = 2.35, p = 0.021</td></tr>
<tr><td>5. 判断</td><td>p値とαを比較して判断</td><td>p < α → 有意差あり</td></tr>
</tbody>
</table>

<h3>第一種の過誤と第二種の過誤</h3>
<table>
<thead>
<tr><th></th><th>H₀が真（差がない）</th><th>H₀が偽（差がある）</th></tr>
</thead>
<tbody>
<tr><td>H₀を棄却</td><td>第一種の過誤（α）偽陽性</td><td>正しい判断（検出力 1-β）</td></tr>
<tr><td>H₀を棄却しない</td><td>正しい判断</td><td>第二種の過誤（β）偽陰性</td></tr>
</tbody>
</table>

<h3>t検定</h3>
<p>2つのグループの平均値に統計的な差があるかを検定します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from scipy import stats
import numpy as np

# 独立2標本t検定
group_a = np.array([78, 82, 85, 90, 76, 88, 84, 79, 91, 83])
group_b = np.array([72, 75, 80, 68, 77, 74, 71, 79, 73, 76])

# 等分散を仮定するt検定
t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"t統計量: {t_stat:.4f}")
print(f"p値: {p_value:.4f}")

if p_value < 0.05:
    print("→ 有意水準5%で有意差あり（帰無仮説を棄却）")
else:
    print("→ 有意水準5%で有意差なし（帰無仮説を棄却できない）")</code></pre>
</div>

<h3>カイ二乗検定</h3>
<p>カテゴリカル変数間の独立性を検定します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
from scipy.stats import chi2_contingency

# クロス集計表の作成
observed = pd.DataFrame(
    [[120, 80], [90, 110]],
    index=['男性', '女性'],
    columns=['購入', '非購入']
)

# カイ二乗検定
chi2, p_value, dof, expected = chi2_contingency(observed)
print(f"カイ二乗統計量: {chi2:.4f}")
print(f"p値: {p_value:.4f}")
print(f"自由度: {dof}")
print(f"期待度数:\n{expected}")</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 検定の使い分け</div>
<table>
<thead>
<tr><th>状況</th><th>検定手法</th></tr>
</thead>
<tbody>
<tr><td>2群の平均値の比較（対応なし）</td><td>独立2標本t検定</td></tr>
<tr><td>2群の平均値の比較（対応あり）</td><td>対応のあるt検定</td></tr>
<tr><td>3群以上の平均値の比較</td><td>一元配置分散分析（ANOVA）</td></tr>
<tr><td>カテゴリカル変数の独立性</td><td>カイ二乗検定</td></tr>
<tr><td>正規性の検定</td><td>Shapiro-Wilk検定</td></tr>
</tbody>
</table>
</div>
`,
            quiz: [
                {
                    id: "q803_1",
                    type: "choice",
                    question: "帰無仮説（H₀）の一般的な内容はどれですか？",
                    options: [
                        "差がある",
                        "差がない",
                        "効果が大きい",
                        "改善された"
                    ],
                    answer: 1,
                    explanation: "帰無仮説（H₀）は「差がない」「効果がない」という否定したい仮説です。検定ではこの帰無仮説を棄却できるかどうかを判断します。"
                },
                {
                    id: "q803_2",
                    type: "choice",
                    question: "p値が0.03の場合、有意水準α=0.05では何と判断しますか？",
                    options: [
                        "帰無仮説を棄却できない",
                        "帰無仮説を棄却する（有意差あり）",
                        "判断できない",
                        "検定をやり直す必要がある"
                    ],
                    answer: 1,
                    explanation: "p値(0.03) < α(0.05) なので、帰無仮説を棄却し「統計的に有意な差がある」と判断します。"
                },
                {
                    id: "q803_3",
                    type: "choice",
                    question: "実際には差がないのに「差がある」と誤って判断する過誤は何ですか？",
                    options: ["第二種の過誤（β）", "第一種の過誤（α）", "標準誤差", "検出力"],
                    answer: 1,
                    explanation: "第一種の過誤（αエラー、偽陽性）は、帰無仮説が真であるにもかかわらず誤って棄却してしまうことです。有意水準αはこの過誤の確率の上限を設定します。"
                },
                {
                    id: "q803_4",
                    type: "choice",
                    question: "カテゴリカル変数間の独立性を検定する手法はどれですか？",
                    options: ["t検定", "ANOVA", "カイ二乗検定", "F検定"],
                    answer: 2,
                    explanation: "カイ二乗検定（χ²検定）はカテゴリカル変数間の独立性を検定します。クロス集計表の観測度数と期待度数の差に基づいて判断します。"
                },
                {
                    id: "q803_5",
                    type: "fill",
                    question: "Pythonで独立2標本t検定を実行する関数は stats.ttest_____() です。",
                    answer: "ind",
                    explanation: "stats.ttest_ind()はindependent（独立）の略で、独立な2つのグループ間のt検定を実行します。対応ありの場合はstats.ttest_rel()を使います。"
                }
            ]
        },
        {
            id: 804,
            title: "A/Bテストとビジネスへの応用",
            duration: "25分",
            content: `
<h2>A/Bテストとは</h2>
<p>A/Bテストは、2つのバリエーション（AとB）を比較して、どちらがより良い成果を生むかを統計的に判断する実験手法です。Webサービス、マーケティング、製品開発など幅広い分野で活用されています。</p>

<div class="info-box tip">
<div class="info-box-title">💡 A/Bテストの本質</div>
A/Bテストは仮説検定のビジネス応用です。「変更によって効果があるか」を統計的根拠に基づいて判断し、データ駆動の意思決定を実現します。
</div>

<h3>A/Bテストの設計</h3>
<table>
<thead>
<tr><th>設計要素</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>仮説</td><td>テストする仮説を明確にする</td><td>「ボタンの色を赤にするとCVRが上がる」</td></tr>
<tr><td>指標（KPI）</td><td>測定する指標を決める</td><td>CVR、CTR、売上、滞在時間等</td></tr>
<tr><td>コントロール群（A）</td><td>変更なしの現行バージョン</td><td>青いボタン</td></tr>
<tr><td>テスト群（B）</td><td>変更を加えたバージョン</td><td>赤いボタン</td></tr>
<tr><td>ランダム化</td><td>ユーザーをランダムに割り当て</td><td>50%ずつ振り分け</td></tr>
<tr><td>テスト期間</td><td>十分なデータが集まるまで実施</td><td>2週間以上が推奨</td></tr>
</tbody>
</table>

<h3>サンプルサイズの計算</h3>
<p>A/Bテストでは、統計的に有意な差を検出するために必要なサンプルサイズを事前に計算する必要があります。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportions_ztest
import numpy as np

# サンプルサイズの計算
power_analysis = NormalIndPower()

# パラメータ設定
baseline_cvr = 0.10   # 現在のCVR: 10%
mde = 0.02            # 検出したい最小の差: 2%（10% → 12%）
alpha = 0.05          # 有意水準
power = 0.80          # 検出力

# 効果量の計算
effect_size = mde / np.sqrt(baseline_cvr * (1 - baseline_cvr))

# 必要サンプルサイズ
sample_size = power_analysis.solve_power(
    effect_size=effect_size,
    alpha=alpha,
    power=power,
    alternative='two-sided'
)
print(f"各群に必要なサンプルサイズ: {int(np.ceil(sample_size))}人")</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 サンプルサイズに影響する要因</div>
<ul>
<li><strong>MDE（最小検出効果量）</strong>: 小さい差を検出するほど大きなサンプルが必要</li>
<li><strong>有意水準α</strong>: 小さいほど大きなサンプルが必要</li>
<li><strong>検出力（1-β）</strong>: 高いほど大きなサンプルが必要</li>
<li><strong>ベースライン指標</strong>: CVRが50%に近いほど大きなサンプルが必要</li>
</ul>
</div>

<h3>A/Bテストの実施と分析</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># A/Bテスト結果の分析
# コントロール群（A）
n_a = 5000    # サンプルサイズ
conv_a = 500  # コンバージョン数
cvr_a = conv_a / n_a  # CVR: 10%

# テスト群（B）
n_b = 5000
conv_b = 580
cvr_b = conv_b / n_b  # CVR: 11.6%

# 比率の検定（z検定）
count = np.array([conv_a, conv_b])
nobs = np.array([n_a, n_b])
z_stat, p_value = proportions_ztest(count, nobs, alternative='two-sided')

print(f"コントロール群 CVR: {cvr_a:.1%}")
print(f"テスト群 CVR: {cvr_b:.1%}")
print(f"改善率: {(cvr_b - cvr_a) / cvr_a:.1%}")
print(f"z統計量: {z_stat:.4f}")
print(f"p値: {p_value:.4f}")

if p_value < 0.05:
    print("→ 統計的に有意な差あり。テスト群の採用を推奨")
else:
    print("→ 統計的に有意な差なし。追加テストを検討")</code></pre>
</div>

<h3>実務での意思決定フレームワーク</h3>
<table>
<thead>
<tr><th>結果</th><th>判断</th><th>アクション</th></tr>
</thead>
<tbody>
<tr><td>有意に改善</td><td>テスト群を採用</td><td>全ユーザーに展開</td></tr>
<tr><td>有意に悪化</td><td>テスト群を不採用</td><td>原因分析、別の改善案を検討</td></tr>
<tr><td>有意差なし</td><td>判断保留</td><td>テスト期間延長 or 別指標で評価</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 A/Bテストの注意点</div>
<ul>
<li><strong>ピーキング問題</strong>: テスト途中でp値を確認して早期終了すると偽陽性率が上がる</li>
<li><strong>多重比較問題</strong>: 複数の指標を同時にテストする場合、Bonferroni補正等が必要</li>
<li><strong>ノベルティ効果</strong>: 新しいデザインは一時的に注目を集めるため、十分な期間テストする</li>
<li><strong>統計的有意 ≠ 実務的有意</strong>: 統計的に有意でも、効果の大きさが小さければ実装コストに見合わない場合がある</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q804_1",
                    type: "choice",
                    question: "A/Bテストにおいて、変更を加えないバージョンは何と呼ばれますか？",
                    options: ["テスト群", "コントロール群", "検証群", "実験群"],
                    answer: 1,
                    explanation: "変更を加えない現行バージョンはコントロール群（A群）と呼ばれます。比較の基準として使用されます。"
                },
                {
                    id: "q804_2",
                    type: "choice",
                    question: "検出力（Power）の一般的な設定値はどれですか？",
                    options: ["0.50（50%）", "0.70（70%）", "0.80（80%）", "0.95（95%）"],
                    answer: 2,
                    explanation: "検出力は通常0.80（80%）に設定されます。これは「実際に差がある場合に、80%の確率で差を検出できる」ことを意味します。"
                },
                {
                    id: "q804_3",
                    type: "choice",
                    question: "A/Bテストの途中でp値を何度も確認して早期終了判断をすると生じる問題は何ですか？",
                    options: ["検出力の低下", "ピーキング問題（偽陽性率の増加）", "サンプルバイアス", "ノベルティ効果"],
                    answer: 1,
                    explanation: "ピーキング問題は、テスト途中で繰り返しp値を確認することで、偽陽性率（第一種の過誤率）が設定した有意水準αを超えてしまう問題です。"
                },
                {
                    id: "q804_4",
                    type: "choice",
                    question: "MDE（Minimum Detectable Effect）とは何ですか？",
                    options: [
                        "最大の効果量",
                        "検出したい最小の効果の大きさ",
                        "統計的有意水準",
                        "標本サイズの最小値"
                    ],
                    answer: 1,
                    explanation: "MDE（最小検出可能効果量）は、A/Bテストで検出したい最小の差の大きさです。MDEが小さいほど、より大きなサンプルサイズが必要になります。"
                },
                {
                    id: "q804_5",
                    type: "fill",
                    question: "A/Bテストは______検定のビジネス応用であると言えます。",
                    answer: "仮説",
                    explanation: "A/Bテストは仮説検定のビジネス応用です。帰無仮説「AとBに差がない」に対して、データに基づき統計的に有意な差があるかを判断します。"
                }
            ]
        }
    ]
};
