/* ============================================
   DS Academy - Level 12: 特徴量エンジニアリングとモデル改善
   ============================================ */

const LEVEL12_DATA = {
    id: 12,
    title: "特徴量エンジニアリングとモデル改善",
    icon: "🛠️",
    description: "特徴量エンジニアリング・特徴量選択・次元削減・不均衡データ対処の実践的テクニックを習得する",
    modules: [
        {
            id: 1201,
            title: "特徴量エンジニアリングの基礎",
            duration: "25分",
            content: `
<h2>特徴量エンジニアリングとは</h2>
<p><strong>特徴量エンジニアリング（Feature Engineering）</strong>とは、生データからモデルの性能を向上させる特徴量を作成・変換・選択するプロセスです。「データとアルゴリズムを結びつける技術」とも呼ばれ、機械学習プロジェクトの成否を左右する重要なステップです。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
「データは新しいオイルだが、特徴量エンジニアリングは新しいゴールドだ」と言われるほど、良い特徴量の設計はモデル性能に大きな影響を与えます。
</div>

<h2>特徴量の重要性</h2>
<p>優れた特徴量があれば、シンプルなモデルでも高い性能を発揮します。逆に、特徴量が貧弱であれば、どんなに高度なアルゴリズムを使っても性能は限定的です。</p>

<table>
<thead>
<tr><th>アプローチ</th><th>特徴量の質</th><th>モデルの複雑さ</th><th>結果</th></tr>
</thead>
<tbody>
<tr><td>良い特徴量 + シンプルモデル</td><td>高</td><td>低</td><td>良好（解釈しやすい）</td></tr>
<tr><td>貧弱な特徴量 + 複雑なモデル</td><td>低</td><td>高</td><td>限定的（過学習リスク）</td></tr>
<tr><td>良い特徴量 + 適切なモデル</td><td>高</td><td>中</td><td>最良</td></tr>
</tbody>
</table>

<h2>ドメイン知識の活用</h2>
<p>特徴量エンジニアリングでは<strong>ドメイン知識</strong>（対象分野の専門知識）が非常に重要です。</p>
<ul>
<li><strong>ECサイト</strong>：購入回数、平均購入金額、最終購入日からの経過日数（RFM分析）</li>
<li><strong>不動産</strong>：築年数、駅からの距離、面積あたりの価格</li>
<li><strong>医療</strong>：BMI（体重/身長²）、検査値の経時変化</li>
</ul>

<h2>新しい特徴量の作成方法</h2>

<h3>1. 数値変換</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import numpy as np

# 対数変換（右に歪んだ分布の正規化）
df['log_income'] = np.log1p(df['income'])

# 二乗・交互作用
df['area_squared'] = df['area'] ** 2
df['rooms_per_area'] = df['rooms'] / df['area']

# ビニング（数値→カテゴリ）
df['age_group'] = pd.cut(df['age'],
    bins=[0, 20, 40, 60, 100],
    labels=['若年', '中年前期', '中年後期', '高齢']
)</code></pre>
</div>

<h3>2. 日時特徴量</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 日時カラムから特徴量を抽出
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek  # 0=月曜
df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)
df['hour'] = df['date'].dt.hour

# 経過日数
df['days_since_last'] = (pd.Timestamp.now() - df['last_date']).dt.days</code></pre>
</div>

<h3>3. テキスト特徴量</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># テキストの長さ
df['text_length'] = df['text'].str.len()
df['word_count'] = df['text'].str.split().str.len()

# TF-IDF（テキストをベクトル化）
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer(max_features=100)
text_features = tfidf.fit_transform(df['text'])</code></pre>
</div>

<h3>4. 集約特徴量</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># グループ単位の統計量
user_stats = df.groupby('user_id').agg({
    'purchase_amount': ['mean', 'sum', 'count', 'std'],
    'purchase_date': ['min', 'max']
}).reset_index()
user_stats.columns = ['user_id', 'avg_amount', 'total_amount',
                       'purchase_count', 'std_amount',
                       'first_purchase', 'last_purchase']</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
特徴量を増やしすぎると次元の呪い や過学習のリスクが高まります。作成した特徴量が実際にモデル性能を向上させるか、交差検証で確認しましょう。
</div>
`,
            quiz: [
                {
                    id: "q1201_1",
                    type: "choice",
                    question: "特徴量エンジニアリングで最も重要とされるものはどれですか？",
                    options: ["最新のアルゴリズムの知識", "ドメイン知識（対象分野の専門知識）", "大量のGPUリソース", "データベースのスキル"],
                    answer: 1,
                    explanation: "特徴量エンジニアリングでは対象分野の専門知識（ドメイン知識）が非常に重要です。意味のある特徴量を作るには、データの背景を理解する必要があります。"
                },
                {
                    id: "q1201_2",
                    type: "choice",
                    question: "右に歪んだ分布のデータに対して行う代表的な変換はどれですか？",
                    options: ["標準化", "対数変換", "One-Hotエンコーディング", "二値化"],
                    answer: 1,
                    explanation: "右に歪んだ（正の方向に裾が長い）分布には対数変換（log transformation）を適用すると、分布が正規分布に近づきます。"
                },
                {
                    id: "q1201_3",
                    type: "choice",
                    question: "数値の連続変数をカテゴリに変換する手法は何と呼ばれますか？",
                    options: ["正規化", "エンコーディング", "ビニング（離散化）", "スケーリング"],
                    answer: 2,
                    explanation: "ビニング（離散化/binning）は連続値をいくつかの区間に分けてカテゴリ変数に変換する手法です。pd.cut()で実装できます。"
                },
                {
                    id: "q1201_4",
                    type: "choice",
                    question: "特徴量を増やしすぎた場合に起こりうるリスクはどれですか？",
                    options: ["学習速度の向上", "バイアスの増加のみ", "次元の呪いと過学習", "データリークの完全な防止"],
                    answer: 2,
                    explanation: "特徴量を過度に増やすと次元の呪い（高次元空間でデータが疎になる問題）や過学習のリスクが高まります。"
                },
                {
                    id: "q1201_5",
                    type: "fill",
                    question: "テキストデータをベクトル化する代表的な手法の一つは _____ です。",
                    answer: "TF-IDF",
                    explanation: "TF-IDF（Term Frequency-Inverse Document Frequency）はテキスト中の単語の重要度を数値化してベクトル表現に変換する手法です。"
                }
            ]
        },
        {
            id: 1202,
            title: "特徴量選択",
            duration: "30分",
            content: `
<h2>特徴量選択とは</h2>
<p><strong>特徴量選択（Feature Selection）</strong>とは、モデルの予測に有用な特徴量のみを選び出し、不要な特徴量を除外するプロセスです。次元削減の一種ですが、元の特徴量をそのまま保持する点が特徴です。</p>

<h2>特徴量選択の3つのアプローチ</h2>
<table>
<thead>
<tr><th>手法</th><th>概要</th><th>代表例</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td><strong>フィルター法</strong></td><td>統計的基準で特徴量を評価</td><td>相関係数、分散</td><td>高速、モデル非依存</td></tr>
<tr><td><strong>ラッパー法</strong></td><td>モデル性能に基づき特徴量を評価</td><td>RFE</td><td>高精度だが計算コスト高</td></tr>
<tr><td><strong>埋め込み法</strong></td><td>モデル学習中に特徴量を選択</td><td>Lasso、特徴量重要度</td><td>学習と選択を同時に実行</td></tr>
</tbody>
</table>

<h2>フィルター法</h2>

<h3>相関係数による選択</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import numpy as np

# 目的変数との相関
correlations = df.corr()['target'].abs().sort_values(ascending=False)
print("目的変数との相関:")
print(correlations)

# 相関が高い特徴量を選択（閾値: 0.1以上）
selected_features = correlations[correlations > 0.1].index.tolist()
selected_features.remove('target')
print(f"選択された特徴量: {selected_features}")

# 特徴量間の高相関ペアを検出（多重共線性の確認）
corr_matrix = df[selected_features].corr().abs()
upper = corr_matrix.where(
    np.triu(np.ones(corr_matrix.shape), k=1).astype(bool)
)
high_corr_pairs = [(col, row)
    for col in upper.columns
    for row in upper.index
    if upper.loc[row, col] > 0.9]
print(f"高相関ペア: {high_corr_pairs}")</code></pre>
</div>

<h3>分散による選択</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.feature_selection import VarianceThreshold

# 分散が0.01以下の特徴量を除外
selector = VarianceThreshold(threshold=0.01)
X_selected = selector.fit_transform(X)

# 残った特徴量の確認
mask = selector.get_support()
selected = [f for f, m in zip(feature_names, mask) if m]
print(f"選択された特徴量数: {len(selected)}")</code></pre>
</div>

<h2>ラッパー法：RFE（再帰的特徴量削除）</h2>
<p><strong>RFE（Recursive Feature Elimination）</strong>は、モデルを学習して最も重要度の低い特徴量を1つずつ削除していく手法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.feature_selection import RFE, RFECV
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100, random_state=42)

# RFE（上位10個の特徴量を選択）
rfe = RFE(estimator=model, n_features_to_select=10, step=1)
rfe.fit(X_train, y_train)

# 選択された特徴量
selected = [f for f, s in zip(feature_names, rfe.support_) if s]
print(f"選択された特徴量: {selected}")
print(f"各特徴量のランキング: {rfe.ranking_}")

# RFECV（交差検証で最適な特徴量数を自動決定）
rfecv = RFECV(estimator=model, step=1, cv=5, scoring='accuracy')
rfecv.fit(X_train, y_train)
print(f"最適な特徴量数: {rfecv.n_features_}")</code></pre>
</div>

<h2>埋め込み法</h2>

<h3>Lassoによる特徴量選択</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.linear_model import Lasso
from sklearn.feature_selection import SelectFromModel

lasso = Lasso(alpha=0.01, random_state=42)
lasso.fit(X_train, y_train)

# 係数が0でない特徴量を選択
selector = SelectFromModel(lasso, prefit=True)
X_selected = selector.transform(X_train)

selected = [f for f, c in zip(feature_names, lasso.coef_) if c != 0]
print(f"Lassoが選択した特徴量: {selected}")
print(f"選択された数: {len(selected)}")</code></pre>
</div>

<h3>ランダムフォレストの特徴量重要度</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import matplotlib.pyplot as plt

rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# 特徴量重要度を可視化
importances = pd.Series(rf.feature_importances_, index=feature_names)
importances = importances.sort_values(ascending=True)

importances.tail(15).plot(kind='barh', figsize=(10, 6))
plt.title('特徴量重要度（上位15）')
plt.xlabel('重要度')
plt.tight_layout()
plt.show()</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
フィルター法は高速ですが精度が低め、ラッパー法は高精度ですが計算コストが高い、埋め込み法はバランスが良いです。まずフィルター法で明らかに不要な特徴量を除外し、その後埋め込み法やラッパー法で絞り込む段階的アプローチが実用的です。
</div>
`,
            quiz: [
                {
                    id: "q1202_1",
                    type: "choice",
                    question: "モデルの学習なしに統計的基準だけで特徴量を評価する手法はどれですか？",
                    options: ["ラッパー法", "埋め込み法", "フィルター法", "ブースティング法"],
                    answer: 2,
                    explanation: "フィルター法は相関係数や分散などの統計的基準で特徴量を評価するため、モデルの学習が不要で高速です。"
                },
                {
                    id: "q1202_2",
                    type: "choice",
                    question: "RFE（再帰的特徴量削除）はどのカテゴリに分類されますか？",
                    options: ["フィルター法", "ラッパー法", "埋め込み法", "次元削減法"],
                    answer: 1,
                    explanation: "RFEはモデルを繰り返し学習して重要度の低い特徴量を削除していくため、ラッパー法に分類されます。"
                },
                {
                    id: "q1202_3",
                    type: "choice",
                    question: "Lasso回帰が特徴量選択に有用な理由はどれですか？",
                    options: ["全ての係数を均等にする", "不要な特徴量の係数を0にする", "特徴量を自動生成する", "交差検証を内蔵している"],
                    answer: 1,
                    explanation: "LassoのL1正則化は一部の回帰係数を完全に0にするため、係数が0になった特徴量は不要と判断でき、自然な特徴量選択が行えます。"
                },
                {
                    id: "q1202_4",
                    type: "choice",
                    question: "特徴量間の相関が0.9以上のペアが見つかった場合、懸念される問題はどれですか？",
                    options: ["データリーク", "多重共線性", "クラス不均衡", "次元の呪い"],
                    answer: 1,
                    explanation: "特徴量間の相関が非常に高い場合、多重共線性の問題が発生し、回帰係数の推定が不安定になります。片方を除外するなどの対処が必要です。"
                },
                {
                    id: "q1202_5",
                    type: "fill",
                    question: "分散がほぼゼロの特徴量を除外するscikit-learnのクラスは _____ です。",
                    answer: "VarianceThreshold",
                    explanation: "VarianceThresholdは指定した閾値以下の分散を持つ特徴量を自動的に除外するフィルター法のクラスです。"
                }
            ]
        },
        {
            id: 1203,
            title: "次元削減",
            duration: "30分",
            content: `
<h2>次元削減とは</h2>
<p><strong>次元削減（Dimensionality Reduction）</strong>とは、データの重要な情報をできるだけ保持しながら、特徴量の数（次元数）を減らす手法です。特徴量選択とは異なり、元の特徴量を変換して新しい特徴量を作成します。</p>

<h2>次元の呪い</h2>
<p><strong>次元の呪い（Curse of Dimensionality）</strong>とは、次元数が増加するとデータ空間が指数的に広がり、以下の問題が生じる現象です。</p>
<ul>
<li>データが疎になり、パターンの発見が困難</li>
<li>必要なサンプル数が指数的に増加</li>
<li>距離ベースの手法（k-NNなど）の性能が低下</li>
<li>過学習のリスクが増大</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
100次元のデータ空間をまんべんなくカバーするには、10次元の場合と比べて天文学的に多くのサンプルが必要です。不要な次元はモデルにノイズを与えるだけです。
</div>

<h2>PCA（主成分分析）</h2>
<p><strong>PCA（Principal Component Analysis）</strong>は、データの分散が最大となる方向（主成分）を見つけ、それらの方向にデータを射影する手法です。</p>

<h3>PCAの原理</h3>
<ol>
<li>データを標準化（平均0、分散1）</li>
<li>共分散行列を計算</li>
<li>固有値分解で固有値・固有ベクトルを求める</li>
<li>固有値が大きい順に主成分を選択</li>
<li>選択した主成分方向にデータを射影</li>
</ol>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 標準化（PCAの前に必須）
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCA（2次元に削減）
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# 寄与率の確認
print(f"各主成分の寄与率: {pca.explained_variance_ratio_}")
print(f"累積寄与率: {pca.explained_variance_ratio_.sum():.4f}")

# 可視化
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='viridis', alpha=0.6)
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%})')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%})')
plt.title('PCA 2次元可視化')
plt.colorbar(label='クラス')
plt.show()</code></pre>
</div>

<h3>累積寄与率で次元数を決定</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 全主成分のPCA
pca_full = PCA()
pca_full.fit(X_scaled)

# 累積寄与率のプロット
cumsum = np.cumsum(pca_full.explained_variance_ratio_)
plt.plot(range(1, len(cumsum) + 1), cumsum, 'bo-')
plt.axhline(y=0.95, color='r', linestyle='--', label='95%ライン')
plt.xlabel('主成分数')
plt.ylabel('累積寄与率')
plt.title('PCAの累積寄与率')
plt.legend()
plt.grid(True)
plt.show()

# 95%の分散を保持する次元数
n_components_95 = np.argmax(cumsum >= 0.95) + 1
print(f"95%の分散を保持する主成分数: {n_components_95}")</code></pre>
</div>

<h2>t-SNEによる可視化</h2>
<p><strong>t-SNE（t-distributed Stochastic Neighbor Embedding）</strong>は、高次元データの局所的な構造を保持しながら2-3次元に圧縮する非線形の可視化手法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.manifold import TSNE

tsne = TSNE(n_components=2, perplexity=30, random_state=42)
X_tsne = tsne.fit_transform(X_scaled)

plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=y, cmap='viridis', alpha=0.6)
plt.title('t-SNE可視化')
plt.xlabel('t-SNE 1')
plt.ylabel('t-SNE 2')
plt.colorbar(label='クラス')
plt.show()</code></pre>
</div>

<h2>UMAPによる可視化</h2>
<p><strong>UMAP（Uniform Manifold Approximation and Projection）</strong>はt-SNEに比べて高速で、大域的な構造もよく保持する次元削減手法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import umap

reducer = umap.UMAP(n_components=2, random_state=42)
X_umap = reducer.fit_transform(X_scaled)

plt.scatter(X_umap[:, 0], X_umap[:, 1], c=y, cmap='viridis', alpha=0.6)
plt.title('UMAP可視化')
plt.xlabel('UMAP 1')
plt.ylabel('UMAP 2')
plt.colorbar(label='クラス')
plt.show()</code></pre>
</div>

<h2>PCA vs t-SNE vs UMAP</h2>
<table>
<thead>
<tr><th>特性</th><th>PCA</th><th>t-SNE</th><th>UMAP</th></tr>
</thead>
<tbody>
<tr><td><strong>手法</strong></td><td>線形</td><td>非線形</td><td>非線形</td></tr>
<tr><td><strong>速度</strong></td><td>高速</td><td>遅い</td><td>中程度</td></tr>
<tr><td><strong>大域構造</strong></td><td>保持</td><td>保持しにくい</td><td>比較的保持</td></tr>
<tr><td><strong>局所構造</strong></td><td>部分的</td><td>良好</td><td>良好</td></tr>
<tr><td><strong>新規データ</strong></td><td>transform可能</td><td>transform不可</td><td>transform可能</td></tr>
<tr><td><strong>主な用途</strong></td><td>前処理、可視化</td><td>可視化のみ</td><td>可視化、前処理</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
PCAは前処理として（次元削減してからモデルに入力）、t-SNE/UMAPは主にデータの可視化目的で使います。t-SNEは新しいデータのtransformができないため、前処理には向きません。
</div>
`,
            quiz: [
                {
                    id: "q1203_1",
                    type: "choice",
                    question: "PCAを適用する前に必ず行うべき前処理はどれですか？",
                    options: ["欠損値の除外", "標準化（StandardScaler）", "ラベルエンコーディング", "外れ値の除去"],
                    answer: 1,
                    explanation: "PCAは分散を基準に主成分を決定するため、スケールの異なる特徴量があると結果が偏ります。事前に標準化（平均0、分散1）が必須です。"
                },
                {
                    id: "q1203_2",
                    type: "choice",
                    question: "次元の呪いの影響として正しくないものはどれですか？",
                    options: ["データが疎になる", "必要なサンプル数が減少する", "過学習のリスクが増大する", "距離ベースの手法の性能が低下する"],
                    answer: 1,
                    explanation: "次元の呪いでは必要なサンプル数は「増加」します。高次元空間をカバーするには指数的に多くのデータが必要になります。"
                },
                {
                    id: "q1203_3",
                    type: "choice",
                    question: "t-SNEの主な用途として正しいものはどれですか？",
                    options: ["特徴量選択", "回帰モデルの前処理", "高次元データの可視化", "欠損値の補完"],
                    answer: 2,
                    explanation: "t-SNEは高次元データの局所構造を保持しながら2-3次元に圧縮する手法で、主にデータの可視化に使用されます。"
                },
                {
                    id: "q1203_4",
                    type: "choice",
                    question: "PCAの累積寄与率が95%になる主成分数を選ぶ理由は何ですか？",
                    options: ["モデルの精度が必ず95%になるため", "元のデータの95%の分散を保持するため", "特徴量の95%を残すため", "計算時間が95%短縮されるため"],
                    answer: 1,
                    explanation: "累積寄与率95%は、元のデータが持つ分散（情報量）の95%を保持していることを意味します。残り5%のわずかな情報を犠牲に次元を大幅に削減できます。"
                },
                {
                    id: "q1203_5",
                    type: "fill",
                    question: "PCAは_____ 分析の英語略称です。",
                    answer: "主成分",
                    explanation: "PCAはPrincipal Component Analysis（主成分分析）の略称です。データの分散が最大となる方向（主成分）を見つけて次元を削減します。"
                }
            ]
        },
        {
            id: 1204,
            title: "不均衡データとパイプライン",
            duration: "30分",
            content: `
<h2>不均衡データの問題</h2>
<p><strong>不均衡データ（Imbalanced Data）</strong>とは、クラス間のサンプル数に大きな偏りがあるデータセットです。例えば、不正検知（不正:0.1%、正常:99.9%）やレア疾患の診断などが典型例です。</p>

<div class="info-box danger">
<div class="info-box-title">🚫 問題点</div>
不均衡データで学習したモデルは多数クラスに偏った予測を行い、少数クラスをほぼ無視してしまいます。正解率は高く見えても、実用上は使えないモデルになります。
</div>

<h2>対処法1：リサンプリング</h2>

<h3>オーバーサンプリング（SMOTE）</h3>
<p><strong>SMOTE（Synthetic Minority Over-sampling Technique）</strong>は、少数クラスのサンプル間を補間して新しい合成サンプルを生成する手法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from imblearn.over_sampling import SMOTE
from collections import Counter

print(f"リサンプリング前: {Counter(y_train)}")

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

print(f"リサンプリング後: {Counter(y_resampled)}")</code></pre>
</div>

<h3>アンダーサンプリング</h3>
<p>多数クラスのサンプル数を減らして、少数クラスとバランスを取る手法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from imblearn.under_sampling import RandomUnderSampler

rus = RandomUnderSampler(random_state=42)
X_resampled, y_resampled = rus.fit_resample(X_train, y_train)

print(f"アンダーサンプリング後: {Counter(y_resampled)}")</code></pre>
</div>

<table>
<thead>
<tr><th>手法</th><th>メリット</th><th>デメリット</th></tr>
</thead>
<tbody>
<tr><td><strong>SMOTE</strong></td><td>データ量を維持、合成サンプルで多様性確保</td><td>ノイズ増加リスク、計算コスト</td></tr>
<tr><td><strong>アンダーサンプリング</strong></td><td>高速、シンプル</td><td>多数クラスの情報を失う</td></tr>
</tbody>
</table>

<h2>対処法2：class_weight</h2>
<p>多くのscikit-learnモデルには<code>class_weight</code>パラメータがあり、少数クラスに大きな重みを付けることでバランスを調整できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier

# class_weight='balanced' で自動調整
lr = LogisticRegression(class_weight='balanced', random_state=42)
lr.fit(X_train, y_train)

rf = RandomForestClassifier(
    class_weight='balanced',
    n_estimators=100,
    random_state=42
)
rf.fit(X_train, y_train)

# 手動で重みを指定することも可能
lr_custom = LogisticRegression(
    class_weight={0: 1, 1: 10},  # クラス1に10倍の重み
    random_state=42
)
lr_custom.fit(X_train, y_train)</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
class_weight='balanced'を指定すると、各クラスの重みが n_samples / (n_classes × n_samples_per_class) で自動計算されます。SMOTEと異なりデータ量を変えずに対処でき、手軽です。
</div>

<h2>sklearn.pipeline.Pipeline構築</h2>
<p><strong>Pipeline</strong>は前処理からモデル学習までの一連の処理をまとめるクラスです。不均衡データ対処を含む複雑なワークフローも、パイプラインで管理すると再現性が向上します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

# 基本パイプライン
pipe = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
    ('model', RandomForestClassifier(
        class_weight='balanced',
        n_estimators=100,
        random_state=42
    ))
])

# 交差検証
scores = cross_val_score(pipe, X, y, cv=5, scoring='f1')
print(f"F1スコア (CV): {scores.mean():.4f} +/- {scores.std():.4f}")</code></pre>
</div>

<h3>imblearn.pipelineとの組み合わせ</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import SMOTE

# SMOTEを含むパイプライン
# （imblearn.pipeline.Pipelineを使用）
imb_pipe = ImbPipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
    ('smote', SMOTE(random_state=42)),
    ('model', RandomForestClassifier(
        n_estimators=100,
        random_state=42
    ))
])

# 交差検証でもリーク防止
scores = cross_val_score(imb_pipe, X, y, cv=5, scoring='f1')
print(f"F1スコア (CV with SMOTE): {scores.mean():.4f}")</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
SMOTEは必ず訓練データのみに適用してください。テストデータにSMOTEを適用するとデータリークになります。imblearn.pipeline.Pipelineを使えば、交差検証時にも正しくfold内でSMOTEが適用されます。
</div>
`,
            quiz: [
                {
                    id: "q1204_1",
                    type: "choice",
                    question: "SMOTEの動作として正しいものはどれですか？",
                    options: ["多数クラスのデータを削除する", "少数クラスのデータを合成して増やす", "データ全体を標準化する", "特徴量を削減する"],
                    answer: 1,
                    explanation: "SMOTE（Synthetic Minority Over-sampling Technique）は少数クラスのサンプル間を補間して新しい合成データを生成し、クラスバランスを改善します。"
                },
                {
                    id: "q1204_2",
                    type: "choice",
                    question: "class_weight='balanced'を指定した場合、何が自動調整されますか？",
                    options: ["学習率", "各クラスの損失関数への重み", "特徴量のスケール", "バッチサイズ"],
                    answer: 1,
                    explanation: "class_weight='balanced'は各クラスのサンプル数の逆数に比例した重みを損失関数に付与し、少数クラスのミスをより重くペナルティします。"
                },
                {
                    id: "q1204_3",
                    type: "choice",
                    question: "SMOTEをテストデータにも適用した場合、何が問題になりますか？",
                    options: ["計算時間の増加", "データリーク", "メモリ不足", "特に問題なし"],
                    answer: 1,
                    explanation: "テストデータにSMOTEを適用すると、テストデータの情報が合成データに混入し（データリーク）、正しい評価ができなくなります。"
                },
                {
                    id: "q1204_4",
                    type: "choice",
                    question: "SMOTEを含むパイプラインを正しく構築するために使うべきクラスはどれですか？",
                    options: ["sklearn.pipeline.Pipeline", "imblearn.pipeline.Pipeline", "sklearn.compose.ColumnTransformer", "sklearn.utils.Pipeline"],
                    answer: 1,
                    explanation: "sklearn.pipeline.PipelineではSMOTEのようなリサンプラーを扱えません。imblearn.pipeline.Pipelineを使うと、交差検証時にも正しくリサンプリングが行われます。"
                },
                {
                    id: "q1204_5",
                    type: "fill",
                    question: "不均衡データで正解率だけでなく確認すべき評価指標として、適合率と再現率の調和平均である _____ スコアがあります。",
                    answer: "F1",
                    explanation: "F1スコアは適合率と再現率のバランスを取った指標で、不均衡データの評価では正解率よりも信頼性の高い指標です。"
                }
            ]
        }
    ]
};
