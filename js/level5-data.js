/* ============================================
   DS Academy - Level 5: データの前処理
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "データの前処理",
    icon: "🧹",
    description: "実務で最も時間を要するデータ前処理の手法を学ぶ",
    modules: [
        {
            id: 501,
            title: "欠損値の検出と処理方法",
            duration: "20分",
            content: `
<h2>欠損値とは</h2>
<p><strong>欠損値</strong>（Missing Value）は、データセットにおいて値が存在しないセルのことです。Pandasでは NaN（Not a Number）として表現されます。欠損値の適切な処理は、分析結果の信頼性に直結する極めて重要な前処理です。</p>

<h3>欠損値が発生する原因</h3>
<ul>
<li><strong>データ収集の不備</strong>：アンケートの未回答、センサーの故障</li>
<li><strong>データ統合時の不一致</strong>：複数ソースの結合時に対応するデータがない</li>
<li><strong>意図的な欠損</strong>：「該当なし」の場合にデータが存在しない</li>
<li><strong>プライバシー保護</strong>：個人情報の一部が匿名化された</li>
</ul>

<h3>欠損値の検出</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import numpy as np

# サンプルデータ
df = pd.DataFrame({
    "name": ["田中", "鈴木", np.nan, "高橋"],
    "age": [28, np.nan, 42, 31],
    "salary": [450, 600, np.nan, np.nan],
    "dept": ["営業", "技術", "人事", np.nan]
})

# 欠損値の検出
print(df.isnull())        # 各セルがNaNかどうか（True/False）
print(df.isnull().sum())  # 列ごとの欠損数

# 欠損値の割合
print(df.isnull().mean() * 100)  # 列ごとの欠損率（%）

# 欠損値を含む行を確認
print(df[df.isnull().any(axis=1)])
</code></pre>
</div>

<h3>欠損値の削除（dropna）</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 欠損値を含む行をすべて削除
df_dropped = df.dropna()

# 特定の列に欠損がある行のみ削除
df_dropped = df.dropna(subset=["name", "age"])

# すべての値が欠損の行のみ削除
df_dropped = df.dropna(how="all")

# 一定以上の非欠損値がある行のみ保持
df_dropped = df.dropna(thresh=3)  # 非欠損値が3つ以上の行
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
欠損値の削除は最もシンプルな方法ですが、データ量が大幅に減少するリスクがあります。欠損がランダムでない場合（例：高所得者が年収を回答しない）、削除によってバイアスが生じる可能性があります。
</div>

<h3>欠損値の補完（fillna）</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 固定値で補完
df["dept"] = df["dept"].fillna("不明")

# 平均値で補完
df["age"] = df["age"].fillna(df["age"].mean())

# 中央値で補完
df["salary"] = df["salary"].fillna(df["salary"].median())

# 最頻値で補完
df["dept"] = df["dept"].fillna(df["dept"].mode()[0])

# 前方補完（直前の値で埋める）
df["salary"] = df["salary"].fillna(method="ffill")

# 後方補完（直後の値で埋める）
df["salary"] = df["salary"].fillna(method="bfill")
</code></pre>
</div>

<h3>補完戦略の選択</h3>
<table>
<thead>
<tr><th>戦略</th><th>適用場面</th><th>注意点</th></tr>
</thead>
<tbody>
<tr><td>平均値補完</td><td>正規分布に近い数値データ</td><td>外れ値の影響を受ける</td></tr>
<tr><td>中央値補完</td><td>歪んだ分布の数値データ</td><td>外れ値にロバスト</td></tr>
<tr><td>最頻値補完</td><td>カテゴリデータ</td><td>最頻値の偏りが増幅される</td></tr>
<tr><td>前方/後方補完</td><td>時系列データ</td><td>直前/直後の値が代表的か要確認</td></tr>
<tr><td>削除</td><td>欠損率が低い場合</td><td>データ量の減少に注意</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
欠損値の処理には「正解」はありません。データの性質、欠損のメカニズム、分析の目的に応じて適切な戦略を選択することが重要です。複数の補完方法を試して、結果への影響を比較することも有効です。
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "Pandasで各列の欠損値の数を確認するコードはどれですか？", options: ["df.isna().count()", "df.isnull().sum()", "df.null().total()", "df.missing().count()"], answer: 1, explanation: "df.isnull().sum()は、各列のTrue（欠損値あり）の数を合計し、列ごとの欠損値数を返します。isna()はisnull()のエイリアスです。" },
                { id: "q501_2", type: "choice", question: "歪んだ分布の数値データの欠損値補完に最も適切な方法はどれですか？", options: ["平均値補完", "中央値補完", "最頻値補完", "0で補完"], answer: 1, explanation: "中央値は外れ値にロバスト（頑健）なため、歪んだ分布のデータの補完に適しています。平均値は外れ値に引っ張られる可能性があります。" },
                { id: "q501_3", type: "choice", question: "時系列データで直前の値を使って欠損値を埋める方法はどれですか？", options: ["平均値補完", "後方補完（bfill）", "前方補完（ffill）", "線形補間"], answer: 2, explanation: "前方補完（forward fill, ffill）は、直前の有効な値で欠損値を埋める方法です。時系列データで「直前の状態が続いている」と仮定する場合に適しています。" },
                { id: "q501_4", type: "choice", question: "df.dropna(how='all')の動作はどれですか？", options: ["欠損値を含む行をすべて削除", "すべての値が欠損の行のみ削除", "すべての列の欠損値を削除", "すべての欠損値を0に置換"], answer: 1, explanation: "how='all'は、行のすべてのセルが欠損値である行のみを削除します。how='any'（デフォルト）は1つでも欠損があれば削除します。" },
                { id: "q501_5", type: "fill", question: "Pandasで欠損値を特定の値で埋めるメソッドは___()です。", answer: "fillna", explanation: "fillna()は欠損値（NaN）を指定した値や方法で補完するメソッドです。固定値、平均値、前方/後方補完など、様々な補完戦略をサポートしています。" }
            ]
        },
        {
            id: 502,
            title: "外れ値の検出と対処",
            duration: "20分",
            content: `
<h2>外れ値とは</h2>
<p><strong>外れ値</strong>（Outlier）とは、他のデータポイントから大きく外れた異常な値のことです。外れ値はデータ入力ミス、測定エラー、または真の異常値である可能性があります。外れ値の適切な処理は、モデルの精度に大きな影響を与えます。</p>

<h3>外れ値の種類</h3>
<table>
<thead>
<tr><th>種類</th><th>説明</th><th>対処</th></tr>
</thead>
<tbody>
<tr><td>データ入力ミス</td><td>年齢が-5歳、体重が999kgなど</td><td>修正または削除</td></tr>
<tr><td>測定エラー</td><td>センサーの故障による異常値</td><td>修正または削除</td></tr>
<tr><td>真の外れ値</td><td>超高所得者など、実際に存在する極端な値</td><td>分析目的に応じて判断</td></tr>
</tbody>
</table>

<h3>IQR法（四分位範囲法）</h3>
<p>最も広く使われる外れ値検出方法です。箱ひげ図のひげの範囲を利用します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import numpy as np

data = pd.Series([10, 12, 14, 15, 16, 18, 20, 22, 100, 150])

Q1 = data.quantile(0.25)
Q3 = data.quantile(0.75)
IQR = Q3 - Q1

# 外れ値の範囲
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

print(f"下限: {lower_bound}, 上限: {upper_bound}")

# 外れ値の検出
outliers = data[(data < lower_bound) | (data > upper_bound)]
print(f"外れ値: {outliers.values}")

# 外れ値を除外
clean_data = data[(data >= lower_bound) & (data <= upper_bound)]
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
IQR法の1.5倍は一般的な基準ですが、3倍を使うとより極端な外れ値のみを検出できます。データの性質や分析目的に応じて閾値を調整しましょう。
</div>

<h3>Z-score法（標準得点法）</h3>
<p>各データポイントが平均からどれだけ離れているかを標準偏差の単位で表します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from scipy import stats
import numpy as np

data = np.array([10, 12, 14, 15, 16, 18, 20, 22, 100, 150])

# Z-scoreの計算
z_scores = stats.zscore(data)
print(z_scores)

# |Z-score| > 3 を外れ値とする（一般的な基準）
outliers = np.abs(z_scores) > 3
print(f"外れ値のインデックス: {np.where(outliers)}")

# Z-scoreによるフィルタリング
clean_data = data[np.abs(z_scores) <= 3]
</code></pre>
</div>

<table>
<thead>
<tr><th>検出方法</th><th>前提</th><th>メリット</th><th>デメリット</th></tr>
</thead>
<tbody>
<tr><td>IQR法</td><td>分布の形状を仮定しない</td><td>ロバスト、歪んだ分布にも有効</td><td>閾値の設定が主観的</td></tr>
<tr><td>Z-score法</td><td>正規分布を仮定</td><td>統計的に明確な基準</td><td>非正規分布には不適切</td></tr>
</tbody>
</table>

<h3>可視化による検出</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import matplotlib.pyplot as plt

# 箱ひげ図
plt.figure(figsize=(10, 4))

plt.subplot(1, 2, 1)
plt.boxplot(data)
plt.title("箱ひげ図")

# ヒストグラム
plt.subplot(1, 2, 2)
plt.hist(data, bins=20)
plt.title("ヒストグラム")

plt.tight_layout()
plt.show()
</code></pre>
</div>

<h3>外れ値の対処方法</h3>
<table>
<thead>
<tr><th>方法</th><th>説明</th><th>適用場面</th></tr>
</thead>
<tbody>
<tr><td>削除</td><td>外れ値を含む行を除外</td><td>データ入力ミスと確認できた場合</td></tr>
<tr><td>クリッピング</td><td>上限・下限で値を置換</td><td>極端な値を一定範囲に抑えたい場合</td></tr>
<tr><td>対数変換</td><td>log変換で分布を圧縮</td><td>右に歪んだ分布（年収等）</td></tr>
<tr><td>別モデルで扱う</td><td>外れ値を別カテゴリとして分析</td><td>外れ値自体が分析対象の場合</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># クリッピング（上下限の制限）
clipped = data.clip(lower=Q1 - 1.5 * IQR, upper=Q3 + 1.5 * IQR)

# 対数変換
log_data = np.log1p(data)  # log(1 + x) で0も扱える
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
外れ値を安易に削除してはいけません。不正検知や異常検知のタスクでは、外れ値こそが分析の主目的です。外れ値を処理する前に、その原因と分析目的を必ず確認しましょう。
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "IQR法で外れ値と判定される条件として一般的なのはどれですか？", options: ["平均値から2σ以上離れている", "Q1 - 1.5×IQR 未満、またはQ3 + 1.5×IQR を超える", "中央値から3倍以上離れている", "最大値と最小値の差が大きい"], answer: 1, explanation: "IQR法では、Q1 - 1.5×IQR未満、またはQ3 + 1.5×IQRを超える値を外れ値として検出します。" },
                { id: "q502_2", type: "choice", question: "Z-score法で一般的に外れ値と判定される基準はどれですか？", options: ["|Z| > 1", "|Z| > 2", "|Z| > 3", "|Z| > 5"], answer: 2, explanation: "Z-score法では、一般的に|Z-score| > 3（平均から3標準偏差以上離れている）を外れ値の基準とします。" },
                { id: "q502_3", type: "choice", question: "外れ値を上限・下限の値に置き換える方法を何と呼びますか？", options: ["トリミング", "クリッピング", "ビニング", "スムージング"], answer: 1, explanation: "クリッピング（Clipping）は、データの値を指定した上限・下限の範囲に制限する方法です。Pandasではclip()メソッドで実行できます。" },
                { id: "q502_4", type: "choice", question: "外れ値の検出において、IQR法がZ-score法より優れている点はどれですか？", options: ["計算が複雑で精度が高い", "正規分布を仮定しないため歪んだ分布にも有効", "常にZ-scoreより正確", "外れ値を自動的に削除する"], answer: 1, explanation: "IQR法は分布の形状を仮定しないため、正規分布でないデータ（歪んだ分布）にも有効です。Z-score法は正規分布を前提としています。" },
                { id: "q502_5", type: "fill", question: "Z-scoreは、各データポイントが平均からどれだけ離れているかを___の単位で表した指標です。", answer: "標準偏差", explanation: "Z-score = (x - 平均) / 標準偏差 で計算され、データポイントが平均から標準偏差何個分離れているかを表します。" }
            ]
        },
        {
            id: 503,
            title: "データ型の変換・カテゴリ変数のエンコーディング",
            duration: "20分",
            content: `
<h2>データ型の変換</h2>
<p>データ分析や機械学習では、データが適切な型であることが重要です。CSVの読み込み時に意図しない型になっていることが多いため、型変換は前処理の基本的なステップです。</p>

<h3>astype()によるデータ型変換</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

df = pd.DataFrame({
    "id": [1, 2, 3],
    "price": ["100", "200", "300"],    # 文字列として読み込まれた
    "date": ["2024-01-01", "2024-01-02", "2024-01-03"],
    "flag": [1, 0, 1]
})

# データ型の確認
print(df.dtypes)

# 文字列を数値に変換
df["price"] = df["price"].astype(int)

# 数値を文字列に変換
df["id"] = df["id"].astype(str)

# 日付型に変換
df["date"] = pd.to_datetime(df["date"])

# 真偽値に変換
df["flag"] = df["flag"].astype(bool)

print(df.dtypes)
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
astype()で変換できない値（例：文字列を含む列をintに変換）がある場合、エラーが発生します。pd.to_numeric(df["col"], errors="coerce") を使うと、変換できない値をNaNに置き換えることができます。
</div>

<h2>カテゴリ変数のエンコーディング</h2>
<p>機械学習アルゴリズムの多くは数値データのみを扱えるため、カテゴリ変数（文字列の分類データ）を数値に変換する必要があります。</p>

<h3>ラベルエンコーディング</h3>
<p>カテゴリを整数値に変換します。順序関係がある場合に適しています。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.preprocessing import LabelEncoder
import pandas as pd

df = pd.DataFrame({
    "size": ["S", "M", "L", "M", "S", "L", "XL"],
    "color": ["赤", "青", "赤", "緑", "青", "赤", "緑"]
})

# LabelEncoderを使用
le = LabelEncoder()
df["size_encoded"] = le.fit_transform(df["size"])
print(df["size_encoded"])
# L=0, M=1, S=2, XL=3（アルファベット順）

# 手動でマッピング（順序を制御したい場合）
size_map = {"S": 0, "M": 1, "L": 2, "XL": 3}
df["size_ordered"] = df["size"].map(size_map)
</code></pre>
</div>

<h3>One-Hotエンコーディング</h3>
<p>カテゴリの各値を別々のバイナリ列に変換します。順序関係がない場合に適しています。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

df = pd.DataFrame({
    "color": ["赤", "青", "赤", "緑", "青"]
})

# pd.get_dummies()を使用
df_encoded = pd.get_dummies(df, columns=["color"], prefix="color")
print(df_encoded)
#    color_緑  color_赤  color_青
# 0     False     True    False
# 1     False    False     True
# 2     False     True    False
# 3      True    False    False
# 4     False    False     True

# drop_firstで多重共線性を回避
df_encoded = pd.get_dummies(df, columns=["color"], drop_first=True)
</code></pre>
</div>

<table>
<thead>
<tr><th>エンコーディング手法</th><th>特徴</th><th>適用場面</th><th>注意点</th></tr>
</thead>
<tbody>
<tr><td>ラベルエンコーディング</td><td>カテゴリ→整数</td><td>順序のあるカテゴリ</td><td>順序がないと誤った関係を学習</td></tr>
<tr><td>One-Hotエンコーディング</td><td>カテゴリ→バイナリ列</td><td>順序のないカテゴリ</td><td>カテゴリ数が多いと列が爆発</td></tr>
<tr><td>Target Encoding</td><td>カテゴリ→目的変数の統計量</td><td>高カーディナリティ</td><td>情報リークのリスク</td></tr>
</tbody>
</table>

<h3>Target Encoding</h3>
<p>カテゴリの各値を目的変数の統計量（平均など）で置き換えます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

df = pd.DataFrame({
    "city": ["東京", "大阪", "東京", "福岡", "大阪", "東京"],
    "price": [500, 300, 480, 250, 320, 520]
})

# 都市ごとの平均価格でエンコーディング
city_mean = df.groupby("city")["price"].mean()
df["city_encoded"] = df["city"].map(city_mean)
print(df)
# 東京 → 500.0, 大阪 → 310.0, 福岡 → 250.0
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
One-Hotエンコーディングで drop_first=True を指定すると、k個のカテゴリからk-1個のダミー変数を作成します。これにより多重共線性（完全に相関する変数の組み合わせ）を回避できます。
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
Target Encodingは情報リーク（データリーケージ）のリスクがあります。必ず交差検証と組み合わせて使用し、テストデータの情報がエンコーディングに含まれないようにしましょう。
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "順序関係のないカテゴリ変数のエンコーディングに最も適切な方法はどれですか？", options: ["ラベルエンコーディング", "One-Hotエンコーディング", "Target Encoding", "順序エンコーディング"], answer: 1, explanation: "One-Hotエンコーディングは、各カテゴリを独立したバイナリ列に変換するため、順序関係のないカテゴリ変数に適しています。ラベルエンコーディングは暗黙の順序関係を持ち込んでしまいます。" },
                { id: "q503_2", type: "choice", question: "pd.get_dummies()でdrop_first=Trueを指定する理由はどれですか？", options: ["処理速度を上げるため", "多重共線性を回避するため", "欠損値を処理するため", "データ型を変換するため"], answer: 1, explanation: "drop_first=Trueはk個のカテゴリからk-1個のダミー変数を作成し、完全に相関する変数の組み合わせ（多重共線性）を回避します。" },
                { id: "q503_3", type: "choice", question: "文字列を含む列を数値に変換する際、変換できない値をNaNにしたい場合に使う関数はどれですか？", options: ["astype(int)", "pd.to_numeric(errors='coerce')", "int()", "pd.to_numeric(errors='raise')"], answer: 1, explanation: "pd.to_numeric()にerrors='coerce'を指定すると、数値に変換できない値をNaN（欠損値）に置き換えます。errors='raise'ではエラーが発生します。" },
                { id: "q503_4", type: "choice", question: "Target Encodingのリスクとして最も注意すべきものはどれですか？", options: ["カテゴリ数の爆発", "情報リーク（データリーケージ）", "順序関係の喪失", "計算コストが高い"], answer: 1, explanation: "Target Encodingは目的変数の情報を使うため、適切に使わないとテストデータの情報がトレーニングに漏れる情報リーク（データリーケージ）のリスクがあります。" },
                { id: "q503_5", type: "fill", question: "Pandasで列のデータ型を変換するメソッドは___()です。", answer: "astype", explanation: "astype()はPandasのSeries/DataFrameのデータ型を変換するメソッドです。例：df['col'].astype(int) で整数型に変換できます。" }
            ]
        },
        {
            id: 504,
            title: "データの正規化・標準化・スケーリング",
            duration: "20分",
            content: `
<h2>スケーリングの必要性</h2>
<p>機械学習のアルゴリズムの多くは、特徴量のスケール（値の範囲）に敏感です。例えば、年齢（20〜80）と年収（200〜2000万）のようにスケールが大きく異なる特徴量があると、大きなスケールの特徴量に引っ張られてしまいます。</p>

<h3>スケーリングが必要なアルゴリズム</h3>
<table>
<thead>
<tr><th>必要</th><th>不要</th></tr>
</thead>
<tbody>
<tr><td>k近傍法（KNN）</td><td>決定木</td></tr>
<tr><td>サポートベクターマシン（SVM）</td><td>ランダムフォレスト</td></tr>
<tr><td>ロジスティック回帰</td><td>勾配ブースティング（XGBoost等）</td></tr>
<tr><td>ニューラルネットワーク</td><td>ナイーブベイズ</td></tr>
<tr><td>主成分分析（PCA）</td><td></td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
決定木ベースのアルゴリズム（決定木、ランダムフォレスト、XGBoost）はスケーリング不要ですが、スケーリングしても悪影響はありません。迷ったらスケーリングしておくのが安全です。
</div>

<h3>Min-Max正規化（Min-Max Normalization）</h3>
<p>データを0〜1の範囲にスケーリングします。</p>

<p><strong>計算式：X_scaled = (X - X_min) / (X_max - X_min)</strong></p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.preprocessing import MinMaxScaler
import numpy as np
import pandas as pd

# サンプルデータ
df = pd.DataFrame({
    "age": [25, 30, 35, 40, 45],
    "salary": [300, 450, 500, 600, 800],
    "experience": [1, 3, 5, 8, 12]
})

# MinMaxScalerの使用
scaler = MinMaxScaler()
df_scaled = pd.DataFrame(
    scaler.fit_transform(df),
    columns=df.columns
)
print(df_scaled)
# age      salary    experience
# 0.00     0.00      0.000
# 0.25     0.30      0.182
# 0.50     0.40      0.364
# 0.75     0.60      0.636
# 1.00     1.00      1.000
</code></pre>
</div>

<h3>Zスコア標準化（Standardization）</h3>
<p>データの平均を0、標準偏差を1に変換します。</p>

<p><strong>計算式：X_scaled = (X - μ) / σ</strong></p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.preprocessing import StandardScaler
import pandas as pd

df = pd.DataFrame({
    "age": [25, 30, 35, 40, 45],
    "salary": [300, 450, 500, 600, 800],
    "experience": [1, 3, 5, 8, 12]
})

# StandardScalerの使用
scaler = StandardScaler()
df_standardized = pd.DataFrame(
    scaler.fit_transform(df),
    columns=df.columns
)
print(df_standardized)
# 各列の平均≒0、標準偏差≒1になる

# 元のスケールに戻す
df_original = pd.DataFrame(
    scaler.inverse_transform(df_standardized),
    columns=df.columns
)
</code></pre>
</div>

<h3>Min-Max正規化 vs Zスコア標準化</h3>
<table>
<thead>
<tr><th>手法</th><th>変換後の範囲</th><th>メリット</th><th>デメリット</th><th>適用場面</th></tr>
</thead>
<tbody>
<tr><td>Min-Max正規化</td><td>[0, 1]</td><td>範囲が明確、解釈しやすい</td><td>外れ値に敏感</td><td>ニューラルネットワーク、画像データ</td></tr>
<tr><td>Zスコア標準化</td><td>無制限（平均0、標準偏差1）</td><td>外れ値にロバスト</td><td>範囲が不定</td><td>SVM、ロジスティック回帰、PCA</td></tr>
</tbody>
</table>

<h3>スケーリング時の注意点</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# 正しいスケーリングの手順
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

scaler = StandardScaler()

# 訓練データでfit_transform
X_train_scaled = scaler.fit_transform(X_train)

# テストデータはtransformのみ（fitしない！）
X_test_scaled = scaler.transform(X_test)
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要な注意点</div>
スケーリングは必ず訓練データで学習（fit）し、テストデータにはtransformのみを適用してください。テストデータでfitすると、テストデータの情報が漏れる「データリーケージ」が発生し、モデルの性能を過大評価してしまいます。
</div>

<div class="info-box tip">
<div class="info-box-title">💡 まとめ</div>
<ul>
<li>スケーリングは距離ベースのアルゴリズムで特に重要</li>
<li>外れ値が少ない場合：Min-Max正規化</li>
<li>外れ値がある、または正規分布に近い場合：Zスコア標準化</li>
<li>テストデータには訓練データで学習したスケーラーのtransformのみを適用</li>
</ul>
</div>
`,
            quiz: [
                { id: "q504_1", type: "choice", question: "スケーリングが不要な機械学習アルゴリズムはどれですか？", options: ["k近傍法（KNN）", "サポートベクターマシン（SVM）", "ランダムフォレスト", "ニューラルネットワーク"], answer: 2, explanation: "ランダムフォレストは決定木ベースのアルゴリズムで、データの分割にスケールの大きさではなく順序を使うため、スケーリングは不要です。" },
                { id: "q504_2", type: "choice", question: "Min-Max正規化の変換後のデータの範囲はどれですか？", options: ["[-1, 1]", "[0, 1]", "[0, 100]", "平均0、標準偏差1"], answer: 1, explanation: "Min-Max正規化は、データを[0, 1]の範囲にスケーリングします。計算式は (X - X_min) / (X_max - X_min) です。" },
                { id: "q504_3", type: "choice", question: "テストデータのスケーリングで正しい方法はどれですか？", options: ["テストデータでfit_transformする", "訓練データでfitしたスケーラーでtransformのみ行う", "テストデータは別のスケーラーでfitする", "スケーリングは訓練データのみに適用する"], answer: 1, explanation: "テストデータには、訓練データで学習（fit）したスケーラーのtransformのみを適用します。テストデータでfitするとデータリーケージが発生します。" },
                { id: "q504_4", type: "choice", question: "外れ値がある場合にMin-Max正規化よりも適切なスケーリング手法はどれですか？", options: ["Min-Max正規化をそのまま使う", "Zスコア標準化", "ラベルエンコーディング", "One-Hotエンコーディング"], answer: 1, explanation: "Zスコア標準化は外れ値に対してMin-Max正規化よりもロバストです。Min-Max正規化は外れ値があると、他のデータポイントが非常に狭い範囲に圧縮されてしまいます。" },
                { id: "q504_5", type: "fill", question: "Scikit-learnでZスコア標準化を行うクラスは___Scalerです。", answer: "Standard", explanation: "StandardScaler（sklearn.preprocessing.StandardScaler）は、データの平均を0、標準偏差を1に変換するZスコア標準化を行うクラスです。" }
            ]
        }
    ]
};
