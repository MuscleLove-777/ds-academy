/* ============================================
   DS Academy - Level 7: 探索的データ分析（EDA）
   ============================================ */

const LEVEL7_DATA = {
    id: 7,
    title: "探索的データ分析（EDA）",
    icon: "🔍",
    description: "データの全体像を把握し、パターンやインサイトを発見するEDAの手法を学ぶ",
    modules: [
        {
            id: 701,
            title: "EDAの進め方とチェックリスト",
            duration: "20分",
            content: `
<h2>EDA（探索的データ分析）とは</h2>
<p>EDA（Exploratory Data Analysis）とは、データの構造やパターン、異常値、仮説を発見するためにデータを多角的に探索するプロセスです。本格的な分析やモデリングの前に必ず行うべき重要なステップです。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
EDAの目的は「データに語らせる」ことです。先入観を持たずにデータを観察し、パターンや異常を発見することが重要です。
</div>

<h3>EDAの目的</h3>
<table>
<thead>
<tr><th>目的</th><th>具体的な内容</th></tr>
</thead>
<tbody>
<tr><td>データの理解</td><td>各変数の意味、データ型、取りうる値の範囲を把握する</td></tr>
<tr><td>品質の確認</td><td>欠損値、外れ値、重複データ、不整合を発見する</td></tr>
<tr><td>パターンの発見</td><td>変数間の関係性、トレンド、クラスタを見つける</td></tr>
<tr><td>仮説の生成</td><td>データから新たな仮説を立てる</td></tr>
<tr><td>前処理の方針決定</td><td>必要なデータクリーニングや特徴量エンジニアリングを特定する</td></tr>
</tbody>
</table>

<h3>EDAの基本手順</h3>
<p>以下の手順に沿ってEDAを進めましょう。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import numpy as np

# 1. データの読み込み
df = pd.read_csv('data.csv')

# 2. データの概要確認
print(df.shape)      # (行数, 列数)
print(df.info())      # データ型と欠損値の概要
print(df.describe())  # 基本統計量
print(df.head())      # 先頭5行の表示</code></pre>
</div>

<h3>EDAチェックリスト</h3>
<table>
<thead>
<tr><th>チェック項目</th><th>使用メソッド</th><th>確認内容</th></tr>
</thead>
<tbody>
<tr><td>データサイズ</td><td>df.shape</td><td>行数と列数</td></tr>
<tr><td>データ型</td><td>df.dtypes</td><td>各列のデータ型</td></tr>
<tr><td>概要情報</td><td>df.info()</td><td>データ型、非null数の一覧</td></tr>
<tr><td>基本統計量</td><td>df.describe()</td><td>平均、標準偏差、四分位数等</td></tr>
<tr><td>先頭データ</td><td>df.head()</td><td>データの見た目を確認</td></tr>
<tr><td>欠損値</td><td>df.isnull().sum()</td><td>各列の欠損値数</td></tr>
<tr><td>重複</td><td>df.duplicated().sum()</td><td>重複行の数</td></tr>
<tr><td>ユニーク値</td><td>df.nunique()</td><td>各列のユニーク値の数</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 欠損値の確認
print("=== 欠損値 ===")
print(df.isnull().sum())
print(f"\n欠損率:\n{df.isnull().mean() * 100:.1f}%")

# 重複行の確認
print(f"\n重複行数: {df.duplicated().sum()}")

# ユニーク値の数
print(f"\nユニーク値数:\n{df.nunique()}")</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 df.info() の活用</div>
<p>df.info()は1つのコマンドで以下の情報をまとめて確認できる非常に便利なメソッドです。</p>
<ul>
<li>列名の一覧</li>
<li>各列のデータ型（int64, float64, object等）</li>
<li>各列の非null値の数（= 欠損でないデータの数）</li>
<li>メモリ使用量</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q701_1",
                    type: "choice",
                    question: "EDA（探索的データ分析）の主な目的として適切でないものはどれですか？",
                    options: [
                        "データの品質を確認する",
                        "変数間のパターンを発見する",
                        "最終的な予測モデルを構築する",
                        "データの構造を理解する"
                    ],
                    answer: 2,
                    explanation: "EDAはデータの探索と理解が目的であり、最終的な予測モデルの構築はEDAの後のステップです。EDAでの発見がモデリングの方針を決める基盤となります。"
                },
                {
                    id: "q701_2",
                    type: "choice",
                    question: "DataFrameの行数と列数を確認するための属性はどれですか？",
                    options: ["df.size", "df.shape", "df.dim", "df.length"],
                    answer: 1,
                    explanation: "df.shapeは(行数, 列数)のタプルを返します。df.sizeは全要素数（行数×列数）を返す別の属性です。"
                },
                {
                    id: "q701_3",
                    type: "choice",
                    question: "各列のデータ型と非null値の数を一度に確認できるメソッドはどれですか？",
                    options: ["df.describe()", "df.info()", "df.dtypes", "df.summary()"],
                    answer: 1,
                    explanation: "df.info()は各列のデータ型、非null値の数、メモリ使用量などの概要情報を一度に表示する便利なメソッドです。"
                },
                {
                    id: "q701_4",
                    type: "choice",
                    question: "DataFrameの重複行の数を確認するコードはどれですか？",
                    options: ["df.duplicate_count()", "df.duplicated().sum()", "df.count_duplicates()", "df.is_duplicate().count()"],
                    answer: 1,
                    explanation: "df.duplicated()は各行が重複しているかどうかのブール値を返し、.sum()でTrueの数（=重複行の数）を集計します。"
                },
                {
                    id: "q701_5",
                    type: "fill",
                    question: "EDAは英語で Exploratory Data ______ の略です。",
                    answer: "Analysis",
                    explanation: "EDAはExploratory Data Analysis（探索的データ分析）の略です。データを多角的に探索し、構造やパターンを理解するためのプロセスです。"
                }
            ]
        },
        {
            id: 702,
            title: "単変量分析",
            duration: "25分",
            content: `
<h2>単変量分析とは</h2>
<p>単変量分析（Univariate Analysis）は、1つの変数に注目してその特徴や分布を調べる分析手法です。EDAの最初のステップとして、各変数を個別に理解することが重要です。</p>

<h3>数値変数の分布確認</h3>
<p>数値変数の分布を確認するには、ヒストグラムやKDEプロットを使用します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('data.csv')

# ヒストグラム + KDE
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# ヒストグラム
axes[0].hist(df['age'], bins=20, edgecolor='black', alpha=0.7)
axes[0].set_title('年齢の分布（ヒストグラム）')
axes[0].set_xlabel('年齢')
axes[0].set_ylabel('頻度')

# KDEプロット
sns.kdeplot(data=df, x='age', fill=True, ax=axes[1])
axes[1].set_title('年齢の分布（KDE）')

plt.tight_layout()
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 分布の形状に注目</div>
<ul>
<li><strong>正規分布</strong>: 左右対称のベル型 → 平均値と標準偏差が代表値として適切</li>
<li><strong>右に歪んだ分布</strong>: 右に長い裾 → 中央値が代表値として適切（例: 所得分布）</li>
<li><strong>左に歪んだ分布</strong>: 左に長い裾 → 中央値が代表値として適切</li>
<li><strong>二峰性分布</strong>: 2つの山 → グループが混在している可能性</li>
</ul>
</div>

<h3>基本統計量の確認</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 数値変数の基本統計量
print(df['age'].describe())

# 追加の統計量
print(f"歪度（Skewness）: {df['age'].skew():.3f}")
print(f"尖度（Kurtosis）:  {df['age'].kurt():.3f}")
print(f"最頻値（Mode）:     {df['age'].mode().values}")
print(f"変動係数（CV）:     {df['age'].std() / df['age'].mean() * 100:.1f}%")</code></pre>
</div>

<table>
<thead>
<tr><th>統計量</th><th>意味</th><th>確認ポイント</th></tr>
</thead>
<tbody>
<tr><td>mean</td><td>平均値</td><td>データの中心傾向</td></tr>
<tr><td>std</td><td>標準偏差</td><td>データのばらつき</td></tr>
<tr><td>min / max</td><td>最小値 / 最大値</td><td>異常に大きい/小さい値がないか</td></tr>
<tr><td>25% / 50% / 75%</td><td>四分位数</td><td>データの広がりと偏り</td></tr>
<tr><td>skew()</td><td>歪度</td><td>0に近いほど対称。正=右に歪、負=左に歪</td></tr>
</tbody>
</table>

<h3>カテゴリカル変数の分析</h3>
<p>カテゴリカル変数は、value_counts()を使って各カテゴリの出現頻度を確認します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># カテゴリカル変数の頻度
print(df['gender'].value_counts())
print(df['gender'].value_counts(normalize=True))  # 割合表示

# 棒グラフで可視化
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# 頻度
df['gender'].value_counts().plot(kind='bar', ax=axes[0])
axes[0].set_title('性別の頻度')

# 割合（円グラフ）
df['gender'].value_counts().plot(kind='pie', autopct='%1.1f%%', ax=axes[1])
axes[1].set_title('性別の構成比')
axes[1].set_ylabel('')

plt.tight_layout()
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 value_counts() の便利なオプション</div>
<ul>
<li><code>normalize=True</code>: 割合で表示</li>
<li><code>sort_values=False</code>: インデックス順で表示</li>
<li><code>dropna=False</code>: 欠損値もカウントに含める</li>
<li><code>bins=10</code>: 数値変数をビニングして集計</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q702_1",
                    type: "choice",
                    question: "単変量分析の説明として正しいものはどれですか？",
                    options: [
                        "2つの変数間の関係を調べる分析",
                        "1つの変数の特徴や分布を調べる分析",
                        "3つ以上の変数を同時に分析する手法",
                        "時系列データの予測を行う分析"
                    ],
                    answer: 1,
                    explanation: "単変量分析は1つの変数に注目して、その分布、中心傾向、ばらつきなどの特徴を調べる分析です。"
                },
                {
                    id: "q702_2",
                    type: "choice",
                    question: "所得データのように右に歪んだ分布では、代表値としてどれが最も適切ですか？",
                    options: ["平均値", "中央値", "最頻値", "標準偏差"],
                    answer: 1,
                    explanation: "右に歪んだ分布では平均値が外れ値に引っ張られるため、中央値の方がデータの中心傾向を適切に表現します。"
                },
                {
                    id: "q702_3",
                    type: "choice",
                    question: "value_counts()で割合を表示するパラメータはどれですか？",
                    options: ["ratio=True", "percent=True", "normalize=True", "proportion=True"],
                    answer: 2,
                    explanation: "normalize=Trueを指定すると、頻度ではなく割合（0～1の値）で結果が返されます。"
                },
                {
                    id: "q702_4",
                    type: "choice",
                    question: "歪度（Skewness）が正の値を示す場合、分布はどのような形状ですか？",
                    options: ["左右対称", "右に歪んでいる（右に裾が長い）", "左に歪んでいる（左に裾が長い）", "一様分布"],
                    answer: 1,
                    explanation: "歪度が正の場合、分布は右に裾が長い形状（右に歪んでいる）になります。所得データなどがこの形状です。"
                },
                {
                    id: "q702_5",
                    type: "fill",
                    question: "カーネル密度推定のプロットを作成するSeabornの関数名は sns.______plot() です。",
                    answer: "kde",
                    explanation: "sns.kdeplot()はカーネル密度推定（Kernel Density Estimation）のプロットを作成します。ヒストグラムの滑らかな近似として分布の形状を可視化できます。"
                }
            ]
        },
        {
            id: 703,
            title: "多変量分析",
            duration: "25分",
            content: `
<h2>多変量分析とは</h2>
<p>多変量分析は、2つ以上の変数間の関係性を調べる分析手法です。変数間の相関、依存関係、パターンを発見し、データの理解を深めます。</p>

<h3>相関行列</h3>
<p>数値変数間の線形な関係性を一覧で確認できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

# 相関行列の計算
corr = df.select_dtypes(include='number').corr()
print(corr)

# ヒートマップで可視化
plt.figure(figsize=(8, 6))
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0, fmt='.2f')
plt.title('相関行列')
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 相関係数の解釈</div>
<table>
<thead>
<tr><th>相関係数 r</th><th>解釈</th></tr>
</thead>
<tbody>
<tr><td>0.7 ≤ |r| ≤ 1.0</td><td>強い相関</td></tr>
<tr><td>0.4 ≤ |r| < 0.7</td><td>中程度の相関</td></tr>
<tr><td>0.2 ≤ |r| < 0.4</td><td>弱い相関</td></tr>
<tr><td>|r| < 0.2</td><td>ほぼ無相関</td></tr>
</tbody>
</table>
<p>注意: 相関は因果関係を意味しません。また、非線形な関係は捉えられません。</p>
</div>

<h3>クロス集計</h3>
<p>カテゴリカル変数同士の関係を調べるにはクロス集計（pd.crosstab）を使います。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># クロス集計表
ct = pd.crosstab(df['sex'], df['smoker'], margins=True)
print(ct)

# 割合でのクロス集計
ct_norm = pd.crosstab(df['sex'], df['smoker'], normalize='index')
print(ct_norm)

# 可視化
ct_norm.plot(kind='bar', stacked=True, figsize=(8, 5))
plt.title('性別ごとの喫煙者割合')
plt.ylabel('割合')
plt.legend(title='喫煙者')
plt.show()</code></pre>
</div>

<h3>変数間の関係発見</h3>
<p>散布図やグループ別の集計で変数間の関係を探ります。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 散布図（数値 vs 数値）
sns.scatterplot(data=df, x='total_bill', y='tip', hue='smoker', style='time')
plt.title('会計額とチップの関係')
plt.show()

# グループ別の集計（カテゴリ vs 数値）
group_stats = df.groupby('day')['total_bill'].agg(['mean', 'median', 'std'])
print(group_stats)

# グループ別のボックスプロット
sns.boxplot(data=df, x='day', y='total_bill', hue='time')
plt.title('曜日・時間帯別の会計額分布')
plt.show()</code></pre>
</div>

<h3>パターン認識のテクニック</h3>
<table>
<thead>
<tr><th>手法</th><th>用途</th><th>コード例</th></tr>
</thead>
<tbody>
<tr><td>ペアプロット</td><td>全変数ペアの関係を一覧</td><td>sns.pairplot(df, hue='target')</td></tr>
<tr><td>グループ比較</td><td>カテゴリごとの違い</td><td>df.groupby('cat').describe()</td></tr>
<tr><td>ピボットテーブル</td><td>多次元の集計</td><td>df.pivot_table(values, index, columns)</td></tr>
<tr><td>条件付きフィルタ</td><td>特定条件のデータ抽出</td><td>df[df['col'] > threshold]</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># ピボットテーブル
pivot = df.pivot_table(
    values='total_bill',
    index='day',
    columns='time',
    aggfunc=['mean', 'count']
)
print(pivot)

# ペアプロット
sns.pairplot(df, hue='smoker', diag_kind='kde',
             vars=['total_bill', 'tip', 'size'])
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 相関と因果の違い</div>
<p>相関があるからといって因果関係があるとは限りません。例えば「アイスクリームの売上」と「水難事故の件数」には正の相関がありますが、これは「気温」という共通の原因（交絡因子）によるものです。因果関係の判断にはドメイン知識が不可欠です。</p>
</div>
`,
            quiz: [
                {
                    id: "q703_1",
                    type: "choice",
                    question: "相関係数が-0.85の場合、2つの変数の関係はどのように解釈されますか？",
                    options: [
                        "弱い正の相関",
                        "強い正の相関",
                        "弱い負の相関",
                        "強い負の相関"
                    ],
                    answer: 3,
                    explanation: "相関係数の絶対値が0.7以上は強い相関を示し、負の値は一方が増えると他方が減る関係を意味します。-0.85は強い負の相関です。"
                },
                {
                    id: "q703_2",
                    type: "choice",
                    question: "カテゴリカル変数同士の関係を調べるために使用する関数はどれですか？",
                    options: ["pd.corr()", "pd.crosstab()", "pd.merge()", "pd.concat()"],
                    answer: 1,
                    explanation: "pd.crosstab()はカテゴリカル変数のクロス集計表を作成し、カテゴリ間の関係を数値で確認できます。"
                },
                {
                    id: "q703_3",
                    type: "choice",
                    question: "相関関係がある場合に必ず成り立つことはどれですか？",
                    options: [
                        "因果関係がある",
                        "一方が原因で他方が結果である",
                        "2つの変数に線形な関連がある",
                        "交絡因子が存在しない"
                    ],
                    answer: 2,
                    explanation: "相関係数は2つの変数間の線形な関連の強さを示すものであり、因果関係を証明するものではありません。「相関は因果を意味しない」は統計学の重要な原則です。"
                },
                {
                    id: "q703_4",
                    type: "choice",
                    question: "pd.crosstab()でnormalize='index'を指定した場合、何が計算されますか？",
                    options: [
                        "列ごとの割合",
                        "行ごとの割合",
                        "全体に対する割合",
                        "累積割合"
                    ],
                    answer: 1,
                    explanation: "normalize='index'を指定すると、各行（index）の合計を1として割合が計算されます。normalize='columns'は列ごと、normalize='all'は全体の割合です。"
                },
                {
                    id: "q703_5",
                    type: "fill",
                    question: "Pandasで多次元の集計を行う関数は df.______table() です。",
                    answer: "pivot_",
                    explanation: "df.pivot_table()はExcelのピボットテーブルと同様に、指定した軸に沿ってデータを集約し、多次元の集計表を作成できます。"
                }
            ]
        },
        {
            id: 704,
            title: "EDA実践",
            duration: "30分",
            content: `
<h2>EDA実践：有名データセットで学ぶ</h2>
<p>ここでは、TitanicデータセットとIrisデータセットを使って、実際のEDAの流れを体験しましょう。</p>

<h3>Titanicデータセットの EDA</h3>
<p>Titanicデータセットは、1912年のタイタニック号沈没事故の乗客データです。生存予測のための分析でよく使われます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# データの読み込み
titanic = sns.load_dataset('titanic')

# Step 1: データの概要確認
print(f"データサイズ: {titanic.shape}")
print(titanic.info())
print(titanic.describe())</code></pre>
</div>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># Step 2: 欠損値の確認
missing = titanic.isnull().sum()
missing_pct = titanic.isnull().mean() * 100
missing_df = pd.DataFrame({'欠損数': missing, '欠損率(%)': missing_pct})
print(missing_df[missing_df['欠損数'] > 0].sort_values('欠損率(%)', ascending=False))</code></pre>
</div>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># Step 3: 生存率の分析
# 全体の生存率
print(f"全体の生存率: {titanic['survived'].mean():.1%}")

# 性別ごとの生存率
print(titanic.groupby('sex')['survived'].mean())

# クラスごとの生存率
print(titanic.groupby('class')['survived'].mean())

# 可視化
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

sns.barplot(data=titanic, x='sex', y='survived', ax=axes[0])
axes[0].set_title('性別ごとの生存率')

sns.barplot(data=titanic, x='class', y='survived', ax=axes[1])
axes[1].set_title('クラスごとの生存率')

sns.barplot(data=titanic, x='class', y='survived', hue='sex', ax=axes[2])
axes[2].set_title('クラス・性別ごとの生存率')

plt.tight_layout()
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 Titanicデータからのインサイト例</div>
<ul>
<li>女性の生存率は男性より大幅に高い（74% vs 19%）</li>
<li>1等客室の乗客の生存率が最も高い（63%）</li>
<li>年齢が若い乗客の方が生存率が高い傾向がある</li>
<li>age列に約20%の欠損値がある → 補完が必要</li>
</ul>
</div>

<h3>Irisデータセットの EDA</h3>
<p>Irisデータセットは、3種類のアヤメ（setosa, versicolor, virginica）の花弁と萼片のサイズデータです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># Irisデータの読み込み
iris = sns.load_dataset('iris')

# 種ごとの基本統計量
print(iris.groupby('species').describe())

# ペアプロットで全変数の関係を可視化
sns.pairplot(iris, hue='species', diag_kind='kde')
plt.suptitle('Irisデータセットのペアプロット', y=1.02)
plt.show()</code></pre>
</div>

<h3>インサイトの導出プロセス</h3>
<table>
<thead>
<tr><th>ステップ</th><th>アクション</th><th>発見例</th></tr>
</thead>
<tbody>
<tr><td>1. 概要把握</td><td>shape, info, describe</td><td>150行、4数値+1カテゴリ変数</td></tr>
<tr><td>2. 分布確認</td><td>ヒストグラム、value_counts</td><td>3種が均等に50ずつ</td></tr>
<tr><td>3. 関係性調査</td><td>相関行列、散布図</td><td>petal_lengthとpetal_widthに強い正の相関</td></tr>
<tr><td>4. グループ比較</td><td>groupby、ボックスプロット</td><td>setosaは他の2種と明確に区別できる</td></tr>
<tr><td>5. インサイト整理</td><td>結果のまとめ</td><td>petal系の特徴量が種の分類に有用</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># インサイト: setosaは他の種と明確に分離
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

sns.boxplot(data=iris, x='species', y='petal_length', ax=axes[0])
axes[0].set_title('種ごとの花弁の長さ')

sns.boxplot(data=iris, x='species', y='petal_width', ax=axes[1])
axes[1].set_title('種ごとの花弁の幅')

plt.tight_layout()
plt.show()

# 結論: petal_lengthとpetal_widthは種の分類に非常に有効</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 EDA実践のコツ</div>
<ul>
<li>最初に仮説を立ててから検証する（仮説駆動）のと、データに任せて探索する（データ駆動）の両方を使い分ける</li>
<li>発見をノートやMarkdownにメモしながら進める</li>
<li>意外な結果こそが価値あるインサイトになることが多い</li>
<li>可視化は「見せる」ためだけでなく「発見する」ためのツールでもある</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q704_1",
                    type: "choice",
                    question: "Titanicデータセットの分析で、最も生存率が高かったグループはどれですか？",
                    options: ["3等客室の男性", "1等客室の女性", "2等客室の男性", "3等客室の女性"],
                    answer: 1,
                    explanation: "Titanicのデータでは、1等客室の女性の生存率が最も高く、ほぼ全員が生存しました。これは「女性と子供を優先する」という方針と、1等客室が救命ボートに近い位置にあったことが要因です。"
                },
                {
                    id: "q704_2",
                    type: "choice",
                    question: "Irisデータセットで、他の2種と明確に区別できる品種はどれですか？",
                    options: ["versicolor", "virginica", "setosa", "すべて同程度に重なっている"],
                    answer: 2,
                    explanation: "setosaは花弁（petal）のサイズが他の2種より明らかに小さく、ペアプロットや散布図で明確に分離できます。versicolorとvirginicaは一部重なります。"
                },
                {
                    id: "q704_3",
                    type: "choice",
                    question: "EDAにおいて欠損値の確認に使うコードの組み合わせとして正しいものはどれですか？",
                    options: [
                        "df.null().count()",
                        "df.isnull().sum()",
                        "df.missing().total()",
                        "df.na().count()"
                    ],
                    answer: 1,
                    explanation: "df.isnull().sum()は各列の欠損値（NaN）の数を集計します。df.isnull().mean()で欠損率も計算できます。"
                },
                {
                    id: "q704_4",
                    type: "choice",
                    question: "SeabornでTitanicデータセットを読み込む関数はどれですか？",
                    options: [
                        "sns.read_csv('titanic')",
                        "sns.load_dataset('titanic')",
                        "sns.get_data('titanic')",
                        "sns.import_dataset('titanic')"
                    ],
                    answer: 1,
                    explanation: "sns.load_dataset()はSeabornに組み込まれたサンプルデータセットを読み込む関数です。'titanic', 'iris', 'tips'などのデータセットが利用できます。"
                },
                {
                    id: "q704_5",
                    type: "fill",
                    question: "DataFrameの各グループごとの統計量を計算するメソッドは df.______() です。",
                    answer: "groupby",
                    explanation: "df.groupby()は指定した列の値でデータをグループ分けし、各グループに対して集計操作（mean, sum, countなど）を適用できます。"
                }
            ]
        }
    ]
};
