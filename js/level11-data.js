/* ============================================
   DS Academy - Level 11: 機械学習実践
   ============================================ */

const LEVEL11_DATA = {
    id: 11,
    title: "機械学習実践",
    icon: "⚙️",
    description: "モデル評価・過学習対策・ハイパーパラメータチューニング・アンサンブル学習の実践スキルを身につける",
    modules: [
        {
            id: 1101,
            title: "モデル評価指標",
            duration: "30分",
            content: `
<h2>なぜ適切な評価指標が重要か</h2>
<p>機械学習モデルの性能を正しく評価するには、タスクの特性に合った<strong>評価指標</strong>を選ぶ必要があります。誤った指標で評価すると、実用上は使えないモデルを「高性能」と判断してしまう危険があります。</p>

<h2>分類モデルの評価指標</h2>

<h3>精度（Accuracy）</h3>
<p>全データのうち正しく分類できた割合です。</p>
<p><strong>Accuracy = (TP + TN) / (TP + TN + FP + FN)</strong></p>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
不均衡データ（例：陽性1%、陰性99%）では、全て「陰性」と予測しても精度99%になります。精度だけに頼らず、他の指標も確認しましょう。
</div>

<h3>適合率（Precision）と再現率（Recall）</h3>
<table>
<thead>
<tr><th>指標</th><th>計算式</th><th>重視するケース</th></tr>
</thead>
<tbody>
<tr><td><strong>適合率（Precision）</strong></td><td>TP / (TP + FP)</td><td>偽陽性のコストが高い場合（例：スパム判定）</td></tr>
<tr><td><strong>再現率（Recall）</strong></td><td>TP / (TP + FN)</td><td>偽陰性のコストが高い場合（例：がん検診）</td></tr>
</tbody>
</table>

<h3>F1スコア</h3>
<p>適合率と再現率の<strong>調和平均</strong>で、両者のバランスを取った指標です。</p>
<p><strong>F1 = 2 × Precision × Recall / (Precision + Recall)</strong></p>

<h3>AUC-ROC</h3>
<p><strong>ROC曲線</strong>は、閾値を変化させたときのTPR（True Positive Rate = Recall）とFPR（False Positive Rate）の関係を描いたグラフです。<strong>AUC</strong>はROC曲線の下の面積で、1に近いほど優秀なモデルです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, roc_auc_score, roc_curve
)
import matplotlib.pyplot as plt

# 各指標の計算
print(f"Accuracy:  {accuracy_score(y_test, y_pred):.4f}")
print(f"Precision: {precision_score(y_test, y_pred):.4f}")
print(f"Recall:    {recall_score(y_test, y_pred):.4f}")
print(f"F1 Score:  {f1_score(y_test, y_pred):.4f}")

# AUC-ROC（確率スコアが必要）
y_proba = model.predict_proba(X_test)[:, 1]
auc = roc_auc_score(y_test, y_proba)
print(f"AUC-ROC:   {auc:.4f}")

# ROC曲線の描画
fpr, tpr, thresholds = roc_curve(y_test, y_proba)
plt.plot(fpr, tpr, label=f'ROC (AUC={auc:.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='ランダム')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC曲線')
plt.legend()
plt.show()</code></pre>
</div>

<h2>回帰モデルの評価指標</h2>
<table>
<thead>
<tr><th>指標</th><th>説明</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td><strong>MSE</strong></td><td>平均二乗誤差</td><td>外れ値に敏感、微分可能</td></tr>
<tr><td><strong>RMSE</strong></td><td>MSEの平方根</td><td>元のスケールで解釈可能</td></tr>
<tr><td><strong>MAE</strong></td><td>平均絶対誤差</td><td>外れ値に頑健</td></tr>
<tr><td><strong>R²</strong></td><td>決定係数</td><td>1に近いほど良い</td></tr>
<tr><td><strong>Adjusted R²</strong></td><td>自由度調整済みR²</td><td>変数数のペナルティあり</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
回帰と分類で使う指標は全く異なります。回帰ではMSE/RMSE/R²、分類ではAccuracy/Precision/Recall/F1/AUCが基本です。タスクに合った指標を選びましょう。
</div>
`,
            quiz: [
                {
                    id: "q1101_1",
                    type: "choice",
                    question: "がん検診のように「見逃し」を減らしたい場合、特に重視すべき指標はどれですか？",
                    options: ["適合率（Precision）", "再現率（Recall）", "正解率（Accuracy）", "特異度（Specificity）"],
                    answer: 1,
                    explanation: "がん検診では偽陰性（見逃し）のコストが高いため、再現率（Recall = TP/(TP+FN)）を重視します。"
                },
                {
                    id: "q1101_2",
                    type: "choice",
                    question: "AUC-ROCが0.5の場合、モデルの性能はどのように評価されますか？",
                    options: ["完全なモデル", "ランダムな予測と同等", "最悪のモデル", "過学習している"],
                    answer: 1,
                    explanation: "AUC=0.5はランダムな予測と同等の性能を意味し、モデルが有用な判別力を持っていないことを示します。"
                },
                {
                    id: "q1101_3",
                    type: "choice",
                    question: "外れ値の影響を受けにくい回帰の評価指標はどれですか？",
                    options: ["MSE", "RMSE", "MAE", "R²"],
                    answer: 2,
                    explanation: "MAE（平均絶対誤差）は誤差の絶対値を使うため、MSE/RMSEに比べて外れ値の影響を受けにくいです。"
                },
                {
                    id: "q1101_4",
                    type: "choice",
                    question: "F1スコアの計算方法として正しいものはどれですか？",
                    options: ["(Precision + Recall) / 2", "2 × Precision × Recall / (Precision + Recall)", "Precision × Recall", "max(Precision, Recall)"],
                    answer: 1,
                    explanation: "F1スコアは適合率と再現率の調和平均で、2×P×R/(P+R)で計算されます。算術平均ではなく調和平均です。"
                },
                {
                    id: "q1101_5",
                    type: "fill",
                    question: "ROC曲線の下の面積を表す指標は _____ です。",
                    answer: "AUC",
                    explanation: "AUC（Area Under the Curve）はROC曲線の下の面積で、0〜1の値を取り、1に近いほど優れたモデルです。"
                }
            ]
        },
        {
            id: 1102,
            title: "過学習と汎化",
            duration: "30分",
            content: `
<h2>過学習（Overfitting）とは</h2>
<p><strong>過学習</strong>とは、モデルが訓練データに対して過度に適合してしまい、未知のデータ（テストデータ）に対する予測性能が低下する現象です。モデルが訓練データのノイズまで学習してしまうことが原因です。</p>

<h2>バイアスとバリアンスのトレードオフ</h2>
<p>モデルの誤差は、<strong>バイアス（偏り）</strong>と<strong>バリアンス（分散）</strong>と<strong>ノイズ</strong>の3成分に分解できます。</p>

<table>
<thead>
<tr><th>概念</th><th>説明</th><th>傾向</th></tr>
</thead>
<tbody>
<tr><td><strong>高バイアス</strong></td><td>モデルが単純すぎてデータのパターンを捉えられない</td><td>未学習（Underfitting）</td></tr>
<tr><td><strong>高バリアンス</strong></td><td>モデルが複雑すぎて訓練データに特化</td><td>過学習（Overfitting）</td></tr>
<tr><td><strong>適切なバランス</strong></td><td>バイアスとバリアンスの和が最小</td><td>良い汎化性能</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
モデルの複雑さを上げるとバイアスは下がりますがバリアンスは上がり、下げると逆になります。この「トレードオフ」を意識して最適な複雑さを見つけることが重要です。
</div>

<h2>交差検証（Cross-Validation）</h2>
<p><strong>k-fold交差検証</strong>は、データをk個のグループ（fold）に分割し、各foldを1回ずつテストデータとして使用する手法です。</p>

<ol>
<li>データをk個のfoldに分割</li>
<li>1つのfoldをテスト、残りk-1個を訓練に使用</li>
<li>これをk回繰り返し、全foldがテストに1回使われるようにする</li>
<li>k回のスコアの平均と標準偏差を計算</li>
</ol>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100, random_state=42)

# 5-fold交差検証
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')

print(f"各foldのスコア: {scores}")
print(f"平均スコア: {scores.mean():.4f}")
print(f"標準偏差: {scores.std():.4f}")</code></pre>
</div>

<h2>過学習の検出</h2>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 訓練スコアとテストスコアの比較
model.fit(X_train, y_train)
train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)

print(f"訓練スコア: {train_score:.4f}")
print(f"テストスコア: {test_score:.4f}")
print(f"差分: {train_score - test_score:.4f}")
# 差分が大きい場合は過学習の兆候</code></pre>
</div>

<h2>正則化（Regularization）</h2>
<p><strong>正則化</strong>は、モデルの複雑さにペナルティを課して過学習を抑制する手法です。</p>

<table>
<thead>
<tr><th>手法</th><th>ペナルティ項</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td><strong>L1正則化（Lasso）</strong></td><td>α × Σ|βᵢ|</td><td>係数を0にする（特徴量選択効果）</td></tr>
<tr><td><strong>L2正則化（Ridge）</strong></td><td>α × Σβᵢ²</td><td>係数を小さくする（縮小推定）</td></tr>
<tr><td><strong>Elastic Net</strong></td><td>L1 + L2の組合せ</td><td>両方のメリットを活用</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.linear_model import Lasso, Ridge, ElasticNet

# L1正則化（Lasso）
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)
print(f"Lasso R²: {lasso.score(X_test, y_test):.4f}")
print(f"非ゼロ係数の数: {(lasso.coef_ != 0).sum()}")

# L2正則化（Ridge）
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)
print(f"Ridge R²: {ridge.score(X_test, y_test):.4f}")

# Elastic Net
enet = ElasticNet(alpha=0.1, l1_ratio=0.5)
enet.fit(X_train, y_train)
print(f"ElasticNet R²: {enet.score(X_test, y_test):.4f}")</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
正則化のハイパーパラメータ α の値が大きすぎるとモデルが単純になりすぎ（未学習）、小さすぎると正則化の効果が薄れます（過学習）。交差検証で最適な値を探しましょう。
</div>
`,
            quiz: [
                {
                    id: "q1102_1",
                    type: "choice",
                    question: "訓練スコアが0.99、テストスコアが0.65の場合、最も疑われる問題はどれですか？",
                    options: ["未学習（Underfitting）", "過学習（Overfitting）", "データリーク", "特徴量不足"],
                    answer: 1,
                    explanation: "訓練スコアとテストスコアに大きな差があるのは過学習の典型的な兆候です。モデルが訓練データに過度に適合しています。"
                },
                {
                    id: "q1102_2",
                    type: "choice",
                    question: "5-fold交差検証では、データをいくつに分割しますか？",
                    options: ["2つ", "3つ", "5つ", "10つ"],
                    answer: 2,
                    explanation: "5-fold交差検証ではデータを5つのfoldに分割し、各foldが1回ずつテストデータとして使用されます。"
                },
                {
                    id: "q1102_3",
                    type: "choice",
                    question: "L1正則化（Lasso）の特徴として正しいものはどれですか？",
                    options: ["全ての係数を均等に縮小する", "一部の係数を0にして特徴量選択効果がある", "バイアスを増加させない", "常にL2より精度が高い"],
                    answer: 1,
                    explanation: "L1正則化（Lasso）は一部の回帰係数を完全に0にする性質があり、不要な特徴量を自動的に除外する特徴量選択の効果があります。"
                },
                {
                    id: "q1102_4",
                    type: "choice",
                    question: "バイアス-バリアンスのトレードオフにおいて、モデルが複雑すぎる場合はどうなりますか？",
                    options: ["高バイアス・低バリアンス", "低バイアス・高バリアンス", "高バイアス・高バリアンス", "低バイアス・低バリアンス"],
                    answer: 1,
                    explanation: "モデルが複雑すぎると訓練データに過度に適合し、低バイアス・高バリアンス（過学習）になります。"
                },
                {
                    id: "q1102_5",
                    type: "fill",
                    question: "L1正則化とL2正則化を組み合わせた手法は _____ と呼ばれます。",
                    answer: "Elastic Net",
                    explanation: "Elastic NetはL1正則化（Lasso）とL2正則化（Ridge）の両方を組み合わせた手法で、l1_ratioで両者の比率を制御します。"
                }
            ]
        },
        {
            id: 1103,
            title: "ハイパーパラメータチューニング",
            duration: "30分",
            content: `
<h2>ハイパーパラメータとは</h2>
<p><strong>ハイパーパラメータ</strong>は、モデルの学習前に人間が設定するパラメータです。モデルのパラメータ（重みなど）とは異なり、データから自動的に学習されません。</p>

<table>
<thead>
<tr><th>モデル</th><th>主なハイパーパラメータ</th></tr>
</thead>
<tbody>
<tr><td>決定木</td><td>max_depth, min_samples_split, min_samples_leaf</td></tr>
<tr><td>ランダムフォレスト</td><td>n_estimators, max_depth, max_features</td></tr>
<tr><td>SVM</td><td>C, kernel, gamma</td></tr>
<tr><td>Lasso/Ridge</td><td>alpha</td></tr>
</tbody>
</table>

<h2>グリッドサーチ</h2>
<p><strong>グリッドサーチ（Grid Search）</strong>は、指定したハイパーパラメータの全組み合わせを交差検証で評価し、最良の組み合わせを見つける方法です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [3, 5, 10, None],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,
    scoring='accuracy',
    n_jobs=-1,
    verbose=1
)

grid_search.fit(X_train, y_train)

print(f"最良パラメータ: {grid_search.best_params_}")
print(f"最良スコア: {grid_search.best_score_:.4f}")
print(f"テストスコア: {grid_search.score(X_test, y_test):.4f}")</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
グリッドサーチは全組み合わせを試すため、パラメータ数や候補値が増えると計算量が爆発的に増加します。上記の例では 3×4×3=36通り × 5fold = 180回の学習が必要です。
</div>

<h2>ランダムサーチ</h2>
<p><strong>ランダムサーチ</strong>は、パラメータ空間からランダムにサンプリングして評価する方法です。グリッドサーチより効率的に良いパラメータを見つけられることが多いです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

param_distributions = {
    'n_estimators': randint(50, 300),
    'max_depth': randint(3, 20),
    'min_samples_split': randint(2, 20),
    'max_features': uniform(0.1, 0.9)
}

random_search = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    param_distributions,
    n_iter=50,         # 50回のサンプリング
    cv=5,
    scoring='accuracy',
    random_state=42,
    n_jobs=-1
)

random_search.fit(X_train, y_train)
print(f"最良パラメータ: {random_search.best_params_}")
print(f"最良スコア: {random_search.best_score_:.4f}")</code></pre>
</div>

<h2>Optuna入門</h2>
<p><strong>Optuna</strong>は、ベイズ最適化に基づく高度なハイパーパラメータ最適化フレームワークです。過去の試行結果を活用して効率的にパラメータ探索を行います。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import optuna
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

def objective(trial):
    params = {
        'n_estimators': trial.suggest_int('n_estimators', 50, 300),
        'max_depth': trial.suggest_int('max_depth', 3, 20),
        'min_samples_split': trial.suggest_int('min_samples_split', 2, 20),
        'max_features': trial.suggest_float('max_features', 0.1, 1.0),
    }
    model = RandomForestClassifier(**params, random_state=42)
    scores = cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy')
    return scores.mean()

# 最適化の実行
study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)

print(f"最良パラメータ: {study.best_params}")
print(f"最良スコア: {study.best_value:.4f}")</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
Optunaはベイズ最適化（TPE: Tree-structured Parzen Estimator）を使い、過去の試行から有望なパラメータ領域を推定します。ランダムサーチよりも少ない試行数で良い結果を得られることが多いです。
</div>

<h2>学習曲線</h2>
<p><strong>学習曲線</strong>は、訓練データ数に対するモデルのスコアをプロットしたグラフです。過学習・未学習の診断に役立ちます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.model_selection import learning_curve
import matplotlib.pyplot as plt
import numpy as np

train_sizes, train_scores, val_scores = learning_curve(
    model, X, y, cv=5,
    train_sizes=np.linspace(0.1, 1.0, 10),
    scoring='accuracy'
)

plt.plot(train_sizes, train_scores.mean(axis=1), label='訓練スコア')
plt.plot(train_sizes, val_scores.mean(axis=1), label='検証スコア')
plt.xlabel('訓練データ数')
plt.ylabel('スコア')
plt.title('学習曲線')
plt.legend()
plt.grid(True)
plt.show()</code></pre>
</div>
`,
            quiz: [
                {
                    id: "q1103_1",
                    type: "choice",
                    question: "グリッドサーチの最大の欠点はどれですか？",
                    options: ["再現性がない", "パラメータ数が増えると計算量が爆発的に増加する", "交差検証ができない", "連続値のパラメータを扱えない"],
                    answer: 1,
                    explanation: "グリッドサーチは全組み合わせを試すため、パラメータの数や候補値が増えると計算量が組み合わせ爆発的に増加します。"
                },
                {
                    id: "q1103_2",
                    type: "choice",
                    question: "ランダムサーチがグリッドサーチより有利な場面はどれですか？",
                    options: ["パラメータが1つだけの場合", "高次元のパラメータ空間を探索する場合", "最良のパラメータを確実に見つけたい場合", "計算資源が十分にある場合"],
                    answer: 1,
                    explanation: "ランダムサーチは高次元のパラメータ空間で効率的に探索でき、同じ計算予算でグリッドサーチよりも広い領域をカバーできます。"
                },
                {
                    id: "q1103_3",
                    type: "choice",
                    question: "Optunaが内部で使用している最適化手法はどれですか？",
                    options: ["グリッドサーチ", "遺伝的アルゴリズム", "ベイズ最適化（TPE）", "焼きなまし法"],
                    answer: 2,
                    explanation: "OptunaはTPE（Tree-structured Parzen Estimator）というベイズ最適化の一種を使用し、過去の試行結果から有望なパラメータを推定します。"
                },
                {
                    id: "q1103_4",
                    type: "choice",
                    question: "学習曲線で訓練スコアと検証スコアの両方が低い場合、何を示していますか？",
                    options: ["過学習", "未学習（アンダーフィッティング）", "適切なモデル", "データリーク"],
                    answer: 1,
                    explanation: "両方のスコアが低い場合、モデルがデータのパターンを十分に捉えられていない「未学習」の状態です。"
                },
                {
                    id: "q1103_5",
                    type: "fill",
                    question: "GridSearchCVで最良のパラメータを取得するには grid_search._____ 属性を参照します。",
                    answer: "best_params_",
                    explanation: "GridSearchCV.best_params_は、交差検証で最高スコアを達成したパラメータの辞書を返します。"
                }
            ]
        },
        {
            id: 1104,
            title: "アンサンブル学習",
            duration: "30分",
            content: `
<h2>アンサンブル学習とは</h2>
<p><strong>アンサンブル学習</strong>は、複数のモデル（弱学習器）を組み合わせることで、単一のモデルよりも高い予測性能を実現する手法です。「三人寄れば文殊の知恵」の考え方です。</p>

<h2>バギング（Bagging）</h2>
<p><strong>バギング（Bootstrap Aggregating）</strong>は、ブートストラップサンプル（復元抽出）で複数のモデルを学習し、予測結果を集約する手法です。</p>

<ul>
<li>各モデルは異なるデータサブセットで独立に学習</li>
<li>分類：多数決、回帰：平均</li>
<li><strong>バリアンスの低減</strong>に効果的</li>
</ul>

<h2>ランダムフォレスト</h2>
<p><strong>ランダムフォレスト</strong>はバギングの代表的な手法で、複数の決定木を組み合わせます。各木は異なるデータサブセットと特徴量サブセットで学習します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

rf = RandomForestClassifier(
    n_estimators=100,    # 木の数
    max_depth=10,        # 最大深さ
    max_features='sqrt', # 各木で使う特徴量数
    random_state=42,
    n_jobs=-1            # 並列処理
)
rf.fit(X_train, y_train)

y_pred = rf.predict(X_test)
print(f"精度: {accuracy_score(y_test, y_pred):.4f}")

# 特徴量重要度
import pandas as pd
importances = pd.Series(
    rf.feature_importances_, index=feature_names
).sort_values(ascending=False)
print("特徴量重要度:")
print(importances.head(10))</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
ランダムフォレストは特徴量重要度（feature_importances_）を自動的に算出できます。どの特徴量が予測に重要かを把握するのに非常に便利です。
</div>

<h2>ブースティング（Boosting）</h2>
<p><strong>ブースティング</strong>は、弱学習器を逐次的に構築し、前のモデルが間違えたサンプルに重点を置いて次のモデルを学習する手法です。</p>

<ul>
<li>各モデルは前のモデルの残差（誤差）を学習</li>
<li><strong>バイアスの低減</strong>に効果的</li>
<li>過学習しやすいため、正則化パラメータの調整が重要</li>
</ul>

<h2>XGBoost</h2>
<p><strong>XGBoost（Extreme Gradient Boosting）</strong>は、勾配ブースティングの高速・高精度な実装です。Kaggleなどのコンペティションで広く使われています。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from xgboost import XGBClassifier

xgb = XGBClassifier(
    n_estimators=200,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
    eval_metric='logloss'
)
xgb.fit(X_train, y_train)
y_pred = xgb.predict(X_test)
print(f"XGBoost精度: {accuracy_score(y_test, y_pred):.4f}")</code></pre>
</div>

<h2>LightGBM</h2>
<p><strong>LightGBM</strong>は、Microsoftが開発した勾配ブースティングフレームワークです。大規模データセットでも高速に学習できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from lightgbm import LGBMClassifier

lgbm = LGBMClassifier(
    n_estimators=200,
    max_depth=6,
    learning_rate=0.1,
    num_leaves=31,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
    verbose=-1
)
lgbm.fit(X_train, y_train)
y_pred = lgbm.predict(X_test)
print(f"LightGBM精度: {accuracy_score(y_test, y_pred):.4f}")</code></pre>
</div>

<h2>バギングとブースティングの比較</h2>
<table>
<thead>
<tr><th>特性</th><th>バギング</th><th>ブースティング</th></tr>
</thead>
<tbody>
<tr><td><strong>学習方法</strong></td><td>各モデルが独立に学習</td><td>逐次的に残差を学習</td></tr>
<tr><td><strong>効果</strong></td><td>バリアンス低減</td><td>バイアス低減</td></tr>
<tr><td><strong>過学習リスク</strong></td><td>低い</td><td>高い（要正則化）</td></tr>
<tr><td><strong>並列化</strong></td><td>可能</td><td>困難（逐次処理）</td></tr>
<tr><td><strong>代表手法</strong></td><td>ランダムフォレスト</td><td>XGBoost, LightGBM</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
ブースティングは高い性能を発揮しますが、ハイパーパラメータの調整を怠ると過学習しやすいです。learning_rate（学習率）を低めに設定し、n_estimators（木の数）を交差検証で決定するのが基本戦略です。
</div>
`,
            quiz: [
                {
                    id: "q1104_1",
                    type: "choice",
                    question: "バギングの主な効果はどれですか？",
                    options: ["バイアスの低減", "バリアンスの低減", "ノイズの除去", "特徴量の選択"],
                    answer: 1,
                    explanation: "バギングは複数のモデルの予測を平均化することでバリアンス（分散）を低減します。個々のモデルの不安定さを集約で吸収します。"
                },
                {
                    id: "q1104_2",
                    type: "choice",
                    question: "ランダムフォレストが各決定木で使う特徴量について正しいのはどれですか？",
                    options: ["全特徴量を使う", "ランダムに選んだ一部の特徴量を使う", "相関の高い特徴量のみ使う", "PCAで変換した特徴量を使う"],
                    answer: 1,
                    explanation: "ランダムフォレストでは各決定木の構築時にランダムに選んだ特徴量のサブセットを使います。これにより木同士の相関を下げ、アンサンブルの効果を高めます。"
                },
                {
                    id: "q1104_3",
                    type: "choice",
                    question: "ブースティングの学習方法として正しいのはどれですか？",
                    options: ["全モデルを同時に並列学習する", "前のモデルの残差に着目して逐次的に学習する", "最も良いモデルだけを選択する", "ランダムに異なるデータで学習する"],
                    answer: 1,
                    explanation: "ブースティングは前のモデルが間違えた部分（残差）に注目して次のモデルを逐次的に構築します。"
                },
                {
                    id: "q1104_4",
                    type: "choice",
                    question: "LightGBMの主な利点はどれですか？",
                    options: ["常にXGBoostより精度が高い", "ハイパーパラメータが不要", "大規模データセットでも高速に学習できる", "過学習しない"],
                    answer: 2,
                    explanation: "LightGBMはヒストグラムベースの分割やleaf-wise成長戦略により、大規模データでも効率的に高速学習できるのが特徴です。"
                },
                {
                    id: "q1104_5",
                    type: "fill",
                    question: "XGBoostはExtreme _____ Boostingの略称です。",
                    answer: "Gradient",
                    explanation: "XGBoostはExtreme Gradient Boostingの略で、勾配ブースティングを極限まで最適化した手法です。"
                }
            ]
        }
    ]
};
