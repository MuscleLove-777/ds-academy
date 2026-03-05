/* ============================================
   DS Academy - Level 6: データ可視化
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "データ可視化",
    icon: "📊",
    description: "Matplotlib・Seabornを使ったデータの可視化手法とダッシュボード設計を学ぶ",
    modules: [
        {
            id: 601,
            title: "Matplotlib基礎",
            duration: "25分",
            content: `
<h2>Matplotlibとは</h2>
<p>Matplotlibは、Pythonで最も広く使われているデータ可視化ライブラリです。折れ線グラフ、棒グラフ、ヒストグラム、散布図など、あらゆる種類のグラフを作成できます。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
MatplotlibはPythonのデータ可視化の基盤ライブラリであり、SeabornやPandasのプロット機能も内部的にMatplotlibを使っています。基礎をしっかり理解することが重要です。
</div>

<h3>基本的なグラフ作成</h3>
<p>Matplotlibでグラフを作成する基本的な流れは以下の通りです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import matplotlib.pyplot as plt
import numpy as np

# データの準備
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# 折れ線グラフ
plt.plot(x, y, marker='o', color='blue', label='売上')
plt.title('月別売上推移')
plt.xlabel('月')
plt.ylabel('売上（万円）')
plt.legend()
plt.grid(True)
plt.show()</code></pre>
</div>

<h3>棒グラフ（plt.bar）</h3>
<p>カテゴリごとの値を比較するのに適した棒グラフの作成方法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">categories = ['商品A', '商品B', '商品C', '商品D']
values = [45, 32, 58, 27]

plt.bar(categories, values, color=['#3498db', '#e74c3c', '#2ecc71', '#f39c12'])
plt.title('商品別売上')
plt.ylabel('売上（万円）')
plt.show()</code></pre>
</div>

<h3>ヒストグラム（plt.hist）</h3>
<p>データの分布を確認するために使用します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">data = np.random.normal(170, 10, 1000)  # 平均170、標準偏差10の正規分布

plt.hist(data, bins=30, edgecolor='black', alpha=0.7)
plt.title('身長の分布')
plt.xlabel('身長 (cm)')
plt.ylabel('頻度')
plt.show()</code></pre>
</div>

<h3>サブプロット</h3>
<p>複数のグラフを1つの図に並べて表示できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# 左のグラフ
axes[0].plot(x, y, 'b-o')
axes[0].set_title('折れ線グラフ')

# 右のグラフ
axes[1].bar(categories, values)
axes[1].set_title('棒グラフ')

plt.tight_layout()
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 subplots のポイント</div>
<p><code>plt.subplots(行数, 列数)</code>でグリッドレイアウトを作成します。<code>figsize</code>で図全体のサイズを指定し、<code>tight_layout()</code>でグラフ間の余白を自動調整します。</p>
</div>

<h3>タイトル・ラベル・凡例</h3>
<table>
<thead>
<tr><th>メソッド</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>plt.title()</td><td>グラフのタイトル</td><td>plt.title('売上推移')</td></tr>
<tr><td>plt.xlabel()</td><td>X軸ラベル</td><td>plt.xlabel('月')</td></tr>
<tr><td>plt.ylabel()</td><td>Y軸ラベル</td><td>plt.ylabel('売上')</td></tr>
<tr><td>plt.legend()</td><td>凡例の表示</td><td>plt.legend(loc='upper left')</td></tr>
<tr><td>plt.grid()</td><td>グリッド線</td><td>plt.grid(True, alpha=0.3)</td></tr>
<tr><td>plt.xlim() / plt.ylim()</td><td>軸の範囲指定</td><td>plt.ylim(0, 100)</td></tr>
</tbody>
</table>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "Matplotlibで折れ線グラフを作成する関数はどれですか？",
                    options: ["plt.bar()", "plt.plot()", "plt.hist()", "plt.scatter()"],
                    answer: 1,
                    explanation: "plt.plot()は折れ線グラフを作成する関数です。plt.bar()は棒グラフ、plt.hist()はヒストグラム、plt.scatter()は散布図を作成します。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "複数のグラフを1つの図に並べて表示するために使う関数はどれですか？",
                    options: ["plt.multiplot()", "plt.subplots()", "plt.grid()", "plt.combine()"],
                    answer: 1,
                    explanation: "plt.subplots()を使って、行数と列数を指定することで複数のグラフを1つの図に配置できます。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "ヒストグラムの棒の数を指定するパラメータはどれですか？",
                    options: ["count", "bars", "bins", "width"],
                    answer: 2,
                    explanation: "binsパラメータでヒストグラムの棒（ビン）の数を指定します。デフォルトは10です。"
                },
                {
                    id: "q601_4",
                    type: "choice",
                    question: "グラフ間の余白を自動調整するメソッドはどれですか？",
                    options: ["plt.adjust()", "plt.spacing()", "plt.tight_layout()", "plt.auto_margin()"],
                    answer: 2,
                    explanation: "plt.tight_layout()は、サブプロット間の余白やラベルの重なりを自動調整してくれる便利なメソッドです。"
                },
                {
                    id: "q601_5",
                    type: "fill",
                    question: "Matplotlibのpyplotモジュールをインポートする際の標準的なエイリアスは何ですか？（アルファベット3文字）",
                    answer: "plt",
                    explanation: "import matplotlib.pyplot as plt が標準的なインポート方法です。pltというエイリアスはPython界隈で広く使われている慣例です。"
                }
            ]
        },
        {
            id: 602,
            title: "Seaborn入門",
            duration: "25分",
            content: `
<h2>Seabornとは</h2>
<p>SeabornはMatplotlibをベースとした統計データ可視化ライブラリです。より美しいデフォルトスタイルと、統計的なグラフを簡単に作成できる高レベルAPIを提供します。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
SeabornはPandasのDataFrameとの親和性が高く、列名を指定するだけで美しいグラフを作成できます。統計的な可視化に特に強みがあります。
</div>

<h3>基本的な使い方</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

# サンプルデータセットの読み込み
tips = sns.load_dataset('tips')
print(tips.head())</code></pre>
</div>

<h3>カウントプロット（sns.countplot）</h3>
<p>カテゴリカル変数の各カテゴリの出現回数を棒グラフで表示します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># カテゴリごとの件数
sns.countplot(data=tips, x='day', hue='sex')
plt.title('曜日別・性別の来客数')
plt.show()</code></pre>
</div>

<h3>ボックスプロット（sns.boxplot）</h3>
<p>データの分布（中央値、四分位数、外れ値）を視覚的に表現します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">sns.boxplot(data=tips, x='day', y='total_bill', hue='smoker')
plt.title('曜日別の会計額の分布')
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ボックスプロットの読み方</div>
<ul>
<li>箱の中の線 → 中央値（Q2）</li>
<li>箱の下端 → 第1四分位数（Q1）</li>
<li>箱の上端 → 第3四分位数（Q3）</li>
<li>ひげ → Q1 - 1.5×IQR ～ Q3 + 1.5×IQR</li>
<li>ひげの外の点 → 外れ値</li>
</ul>
</div>

<h3>バイオリンプロット（sns.violinplot）</h3>
<p>ボックスプロットと密度推定を組み合わせた、分布の形状がわかるグラフです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">sns.violinplot(data=tips, x='day', y='total_bill', inner='box')
plt.title('曜日別の会計額分布（バイオリンプロット）')
plt.show()</code></pre>
</div>

<h3>テーマ設定とカラーパレット</h3>
<p>Seabornではグラフの見た目を簡単にカスタマイズできます。</p>

<table>
<thead>
<tr><th>テーマ</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td>darkgrid</td><td>暗い背景にグリッド線（デフォルト）</td></tr>
<tr><td>whitegrid</td><td>白い背景にグリッド線</td></tr>
<tr><td>dark</td><td>暗い背景、グリッドなし</td></tr>
<tr><td>white</td><td>白い背景、グリッドなし</td></tr>
<tr><td>ticks</td><td>白い背景に目盛り線</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># テーマの設定
sns.set_theme(style='whitegrid')

# カラーパレットの設定
sns.set_palette('husl')

# 主なカラーパレット: deep, muted, bright, pastel, dark, colorblind
# カスタムパレットも作成可能
custom_palette = sns.color_palette('Blues', n_colors=5)</code></pre>
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "Seabornでカテゴリごとの件数を表示するグラフはどれですか？",
                    options: ["sns.barplot()", "sns.countplot()", "sns.histplot()", "sns.lineplot()"],
                    answer: 1,
                    explanation: "sns.countplot()はカテゴリカル変数の各カテゴリの出現回数を自動でカウントして棒グラフで表示します。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "ボックスプロットで箱の中の線が表すものは何ですか？",
                    options: ["平均値", "中央値（Q2）", "最頻値", "第1四分位数"],
                    answer: 1,
                    explanation: "ボックスプロットの箱の中の線は中央値（第2四分位数、Q2）を表します。箱の下端がQ1、上端がQ3です。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "Seabornのデフォルトテーマはどれですか？",
                    options: ["whitegrid", "darkgrid", "white", "ticks"],
                    answer: 1,
                    explanation: "Seabornのデフォルトテーマはdarkgridです。暗い背景にグリッド線が表示されるスタイルです。"
                },
                {
                    id: "q602_4",
                    type: "choice",
                    question: "ボックスプロットと密度推定を組み合わせたグラフを作成する関数はどれですか？",
                    options: ["sns.boxplot()", "sns.kdeplot()", "sns.violinplot()", "sns.swarmplot()"],
                    answer: 2,
                    explanation: "sns.violinplot()はボックスプロットとカーネル密度推定を組み合わせて、データの分布の形状をより詳細に表現します。"
                },
                {
                    id: "q602_5",
                    type: "fill",
                    question: "Seabornをインポートする際の標準的なエイリアスは何ですか？（アルファベット3文字）",
                    answer: "sns",
                    explanation: "import seaborn as sns が標準的なインポート方法です。snsというエイリアスはSeabornの公式ドキュメントでも使われている慣例です。"
                }
            ]
        },
        {
            id: 603,
            title: "高度な可視化",
            duration: "30分",
            content: `
<h2>高度な可視化テクニック</h2>
<p>基本的なグラフの作成ができるようになったら、より高度な可視化手法を学びましょう。ヒートマップ、ペアプロット、FacetGridなどを使うことで、データの複雑な関係性を明らかにできます。</p>

<h3>ヒートマップ（sns.heatmap）</h3>
<p>ヒートマップは行列データを色の濃淡で表現するグラフです。相関行列の可視化に特によく使われます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import seaborn as sns
import pandas as pd

# サンプルデータ
df = sns.load_dataset('iris')

# 相関行列の計算とヒートマップ
corr_matrix = df.select_dtypes(include='number').corr()

plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix,
            annot=True,       # 数値を表示
            cmap='coolwarm',  # カラーマップ
            vmin=-1, vmax=1,  # 色の範囲
            center=0,         # 中心値
            fmt='.2f')        # 小数点2桁
plt.title('特徴量間の相関行列')
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ヒートマップのパラメータ</div>
<ul>
<li><code>annot=True</code>: セルに数値を表示</li>
<li><code>cmap</code>: カラーマップ（coolwarm, viridis, RdYlBu など）</li>
<li><code>fmt</code>: 数値の表示形式（'.2f'は小数2桁）</li>
<li><code>linewidths</code>: セル間の線の太さ</li>
</ul>
</div>

<h3>ペアプロット（sns.pairplot）</h3>
<p>複数の変数間の関係を一度に可視化できる強力なツールです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 全変数ペアの散布図と分布
sns.pairplot(df, hue='species', diag_kind='kde')
plt.suptitle('Irisデータセットのペアプロット', y=1.02)
plt.show()</code></pre>
</div>

<table>
<thead>
<tr><th>パラメータ</th><th>説明</th><th>選択肢</th></tr>
</thead>
<tbody>
<tr><td>hue</td><td>色分けするカテゴリ変数</td><td>列名を指定</td></tr>
<tr><td>diag_kind</td><td>対角線上のグラフ種類</td><td>'hist', 'kde'</td></tr>
<tr><td>kind</td><td>非対角のグラフ種類</td><td>'scatter', 'reg', 'kde'</td></tr>
<tr><td>vars</td><td>使用する変数リスト</td><td>列名のリスト</td></tr>
</tbody>
</table>

<h3>FacetGrid</h3>
<p>FacetGridはカテゴリごとにグラフを分割して表示する仕組みです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">tips = sns.load_dataset('tips')

# カテゴリごとにグラフを分割
g = sns.FacetGrid(tips, col='time', row='smoker', height=4)
g.map_dataframe(sns.scatterplot, x='total_bill', y='tip')
g.set_axis_labels('会計額', 'チップ')
g.add_legend()
plt.show()</code></pre>
</div>

<h3>Plotlyによるインタラクティブ可視化</h3>
<p>Plotlyを使うと、マウスオーバーで値を確認したりズームしたりできるインタラクティブなグラフが作成できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import plotly.express as px

# インタラクティブな散布図
fig = px.scatter(df, x='sepal_length', y='sepal_width',
                 color='species', size='petal_length',
                 hover_data=['petal_width'],
                 title='Irisデータセット')
fig.show()

# インタラクティブな棒グラフ
fig = px.bar(tips, x='day', y='total_bill', color='sex',
             barmode='group', title='曜日別・性別の会計額')
fig.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 Plotlyの特徴</div>
<ul>
<li>ブラウザ上でインタラクティブに操作可能</li>
<li>Jupyter Notebookとの親和性が高い</li>
<li>plotly.expressで簡潔にグラフを作成できる</li>
<li>Dashフレームワークと組み合わせてWebアプリも作成可能</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "ヒートマップでセル内に数値を表示するためのパラメータはどれですか？",
                    options: ["show=True", "annot=True", "values=True", "text=True"],
                    answer: 1,
                    explanation: "annot=True（annotationの略）を指定すると、ヒートマップの各セルに数値が表示されます。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "sns.pairplotで対角線上のグラフ種類を指定するパラメータはどれですか？",
                    options: ["diagonal", "diag_kind", "diag_type", "on_diag"],
                    answer: 1,
                    explanation: "diag_kindパラメータで、対角線上に表示するグラフの種類（'hist'または'kde'）を指定できます。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "FacetGridの主な用途として正しいものはどれですか？",
                    options: [
                        "グラフの色を変更する",
                        "カテゴリごとにグラフを分割して表示する",
                        "3Dグラフを作成する",
                        "アニメーションを追加する"
                    ],
                    answer: 1,
                    explanation: "FacetGridはカテゴリ変数の値ごとにグラフを分割して小さなパネルとして並べて表示する仕組みです。"
                },
                {
                    id: "q603_4",
                    type: "choice",
                    question: "Plotlyの簡潔なAPIを提供するモジュールはどれですか？",
                    options: ["plotly.graph_objects", "plotly.express", "plotly.simple", "plotly.quick"],
                    answer: 1,
                    explanation: "plotly.express（pxとしてインポート）は、Plotlyの高レベルAPIで、少ないコードでインタラクティブなグラフを作成できます。"
                },
                {
                    id: "q603_5",
                    type: "fill",
                    question: "ヒートマップでよく使われるカラーマップで、正負の値を赤と青で表現するものの名前は何ですか？",
                    answer: "coolwarm",
                    explanation: "coolwarmは正の値を暖色（赤系）、負の値を寒色（青系）で表現するカラーマップで、相関行列の可視化に特によく使われます。"
                }
            ]
        },
        {
            id: 604,
            title: "効果的なダッシュボードとストーリーテリング",
            duration: "25分",
            content: `
<h2>データ可視化のベストプラクティス</h2>
<p>優れたデータ可視化は、データから得られたインサイトを効果的に伝えるための重要なスキルです。グラフの選び方、色使い、レイアウト設計、そしてデータストーリーテリングの原則を学びましょう。</p>

<h3>目的に合ったグラフの選び方</h3>
<table>
<thead>
<tr><th>目的</th><th>推奨グラフ</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>時系列の変化</td><td>折れ線グラフ</td><td>月別売上推移</td></tr>
<tr><td>カテゴリ比較</td><td>棒グラフ</td><td>部門別売上</td></tr>
<tr><td>分布の確認</td><td>ヒストグラム / ボックスプロット</td><td>年齢分布</td></tr>
<tr><td>2変数の関係</td><td>散布図</td><td>広告費 vs 売上</td></tr>
<tr><td>構成比</td><td>円グラフ / 積み上げ棒グラフ</td><td>市場シェア</td></tr>
<tr><td>相関の全体像</td><td>ヒートマップ</td><td>変数間の相関</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 グラフ選択の原則</div>
<ul>
<li>伝えたいメッセージに合ったグラフを選ぶ</li>
<li>円グラフはカテゴリが5つ以下の場合に限定する</li>
<li>3Dグラフは見た目は良いが読みにくいため避ける</li>
<li>比較する場合は同じスケールを使う</li>
</ul>
</div>

<h3>効果的な色使い</h3>
<p>色はデータ可視化において非常に重要な要素です。</p>

<table>
<thead>
<tr><th>原則</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>色数を制限する</td><td>1つのグラフに使う色は5～7色以内</td></tr>
<tr><td>色覚多様性への配慮</td><td>赤と緑の組み合わせを避ける。colorblindパレットを使用する</td></tr>
<tr><td>意味のある色使い</td><td>赤=減少/危険、青=増加/安全 など直感的な色使い</td></tr>
<tr><td>連続値には連続カラーマップ</td><td>viridis、plasma などの知覚的に均一なカラーマップ</td></tr>
<tr><td>強調に色を使う</td><td>注目させたいデータだけ目立つ色にし、他はグレーにする</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 色覚に配慮したパレット
sns.set_palette('colorblind')

# 強調テクニック：注目データだけ色を付ける
colors = ['gray'] * len(categories)
colors[2] = '#e74c3c'  # 3番目のカテゴリだけ赤で強調
plt.bar(categories, values, color=colors)</code></pre>
</div>

<h3>ダッシュボード設計原則</h3>
<p>効果的なダッシュボードを設計するための原則です。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ダッシュボード設計の5原則</div>
<ol>
<li><strong>目的を明確に</strong>: 誰が、何のために見るのかを定義する</li>
<li><strong>情報の優先順位</strong>: 最重要なKPIを最も目立つ位置に配置する（左上＝最重要）</li>
<li><strong>一貫性</strong>: 色、フォント、レイアウトを統一する</li>
<li><strong>シンプルさ</strong>: 不要な装飾を排除し、データを際立たせる（データインク比を高める）</li>
<li><strong>インタラクティブ性</strong>: フィルタやドリルダウンで詳細を確認できるようにする</li>
</ol>
</div>

<h3>データストーリーテリング</h3>
<p>データストーリーテリングとは、データ分析の結果をナラティブ（物語）として伝える手法です。</p>

<table>
<thead>
<tr><th>要素</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>コンテキスト</td><td>背景情報の提供</td><td>「先月のキャンペーン後、売上に変化が見られた」</td></tr>
<tr><td>インサイト</td><td>データから得られた発見</td><td>「20代女性の購買率が40%上昇した」</td></tr>
<tr><td>ビジュアル</td><td>発見を裏付けるグラフ</td><td>年代別の購買率推移グラフ</td></tr>
<tr><td>アクション</td><td>次のステップの提案</td><td>「20代向けの広告予算を倍増すべき」</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># ストーリーテリングを意識したグラフ例
fig, ax = plt.subplots(figsize=(10, 6))

# メインデータ
ax.plot(months, sales, 'b-o', linewidth=2, label='実績')
ax.plot(months, target, 'r--', linewidth=1, label='目標')

# 注釈で文脈を追加
ax.annotate('キャンペーン開始',
            xy=(3, sales[3]), xytext=(4, sales[3]+10),
            arrowprops=dict(arrowstyle='->', color='red'),
            fontsize=12, color='red')

ax.set_title('月別売上実績 vs 目標', fontsize=16)
ax.legend()
plt.show()</code></pre>
</div>
`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "時系列データの変化を表現するのに最も適したグラフはどれですか？",
                    options: ["円グラフ", "折れ線グラフ", "ヒートマップ", "散布図"],
                    answer: 1,
                    explanation: "折れ線グラフは時間の経過に伴うデータの変化を表現するのに最適です。横軸に時間、縦軸に値を取ります。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "色覚多様性に配慮する場合、避けるべき色の組み合わせはどれですか？",
                    options: ["青と黄", "赤と緑", "黒と白", "紫とオレンジ"],
                    answer: 1,
                    explanation: "赤と緑の組み合わせは、色覚多様性（特に赤緑色覚異常）のある人にとって区別が困難です。colorblindパレットの使用が推奨されます。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "ダッシュボード設計で最重要なKPIを配置すべき位置はどこですか？",
                    options: ["右下", "中央", "左上", "下部"],
                    answer: 2,
                    explanation: "人の視線は左上から始まるため、最も重要な情報は左上に配置するのが原則です。これはFパターンやZパターンと呼ばれる視線の動きに基づいています。"
                },
                {
                    id: "q604_4",
                    type: "choice",
                    question: "データストーリーテリングの要素として含まれないものはどれですか？",
                    options: ["コンテキスト（背景）", "インサイト（発見）", "デコレーション（装飾）", "アクション（行動提案）"],
                    answer: 2,
                    explanation: "データストーリーテリングの主要素は、コンテキスト、インサイト、ビジュアル、アクションです。不要な装飾はむしろデータの伝達を妨げます。"
                },
                {
                    id: "q604_5",
                    type: "fill",
                    question: "グラフ内で不要な装飾を排除し、データそのものの表示比率を高める概念を「データ______比」と呼びます。",
                    answer: "インク",
                    explanation: "データインク比（Data-Ink Ratio）はEdward Tufteが提唱した概念で、グラフ内のインクのうちデータを表現するために使われている割合を指します。この比率を高めることで、よりクリーンで効果的な可視化になります。"
                }
            ]
        }
    ]
};
