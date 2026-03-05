/* ============================================
   DS Academy - Level 4: NumPyとPandas
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "NumPyとPandas",
    icon: "🐼",
    description: "データ操作の中核ライブラリNumPyとPandasを習得する",
    modules: [
        {
            id: 401,
            title: "NumPy入門",
            duration: "20分",
            content: `
<h2>NumPyとは</h2>
<p><strong>NumPy</strong>（Numerical Python）は、Pythonで数値計算を効率的に行うためのライブラリです。多次元配列（ndarray）を中心としたデータ構造と、高速な数学演算を提供します。Pandas、Scikit-learn、TensorFlowなど、ほぼすべてのデータサイエンスライブラリがNumPyの上に構築されています。</p>

<h3>ndarray（多次元配列）</h3>
<p>NumPyの中核となるデータ構造です。Pythonのリストと似ていますが、同一のデータ型の要素のみを格納し、ベクトル演算が可能です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np

# 配列の作成
arr1 = np.array([1, 2, 3, 4, 5])           # 1次元配列
arr2 = np.array([[1, 2, 3], [4, 5, 6]])     # 2次元配列

print(arr1.shape)    # (5,)
print(arr2.shape)    # (2, 3)
print(arr2.ndim)     # 2（次元数）
print(arr2.dtype)    # int64（データ型）
print(arr2.size)     # 6（全要素数）

# 特殊な配列の作成
zeros = np.zeros((3, 4))         # 全要素0の3×4行列
ones = np.ones((2, 3))           # 全要素1の2×3行列
eye = np.eye(3)                  # 3×3単位行列
arange = np.arange(0, 10, 2)    # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5) # [0, 0.25, 0.5, 0.75, 1.0]
</code></pre>
</div>

<table>
<thead>
<tr><th>Pythonリスト</th><th>NumPy配列</th></tr>
</thead>
<tbody>
<tr><td>異なるデータ型を混在可能</td><td>同一のデータ型のみ</td></tr>
<tr><td>要素ごとのループ処理</td><td>ベクトル演算（高速）</td></tr>
<tr><td>1次元のみ（ネストで多次元）</td><td>ネイティブに多次元対応</td></tr>
<tr><td>メモリ効率が低い</td><td>メモリ効率が高い</td></tr>
</tbody>
</table>

<h3>配列操作</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# インデックスとスライス
print(arr[0, 1])      # 2（0行1列）
print(arr[:, 0])       # [1, 4, 7]（全行の0列目）
print(arr[0:2, 1:3])   # [[2, 3], [5, 6]]

# 形状変更
reshaped = arr.reshape(1, 9)   # 1×9に変形
flattened = arr.flatten()       # 1次元に変換
transposed = arr.T              # 転置

# 配列の結合
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.concatenate([a, b]))   # [1, 2, 3, 4, 5, 6]
print(np.vstack([a, b]))        # [[1,2,3],[4,5,6]]（垂直結合）
print(np.hstack([a, b]))        # [1,2,3,4,5,6]（水平結合）
</code></pre>
</div>

<h3>ブロードキャスト</h3>
<p>ブロードキャストは、形状の異なる配列間で自動的に形状を合わせて演算を行うNumPyの強力な機能です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np

# スカラーとの演算（ブロードキャスト）
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)      # [ 2,  4,  6,  8, 10]
print(arr + 10)     # [11, 12, 13, 14, 15]

# 異なる形状の配列間の演算
matrix = np.array([[1, 2, 3], [4, 5, 6]])  # (2, 3)
vector = np.array([10, 20, 30])             # (3,)
print(matrix + vector)  # [[11, 22, 33], [14, 25, 36]]
</code></pre>
</div>

<h3>数学関数</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import numpy as np

data = np.array([10, 20, 30, 40, 50])

# 統計関数
print(np.mean(data))    # 30.0（平均）
print(np.median(data))  # 30.0（中央値）
print(np.std(data))     # 14.14（標準偏差）
print(np.var(data))     # 200.0（分散）
print(np.sum(data))     # 150（合計）
print(np.cumsum(data))  # [10, 30, 60, 100, 150]（累積和）

# 数学関数
print(np.sqrt(data))    # 平方根
print(np.log(data))     # 自然対数
print(np.exp(data))     # 指数関数
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
NumPyのベクトル演算は、Pythonのforループに比べて10〜100倍高速です。大量のデータを処理する際は、ループ処理をNumPyのベクトル演算に置き換えることで、劇的にパフォーマンスが向上します。
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
NumPy配列のスライスはビュー（元配列への参照）を返します。ビューを変更すると元の配列も変更されます。独立したコピーが必要な場合は .copy() メソッドを使いましょう。
</div>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "NumPy配列とPythonリストの違いとして正しいものはどれですか？", options: ["NumPy配列は異なるデータ型を混在できる", "Pythonリストの方がメモリ効率が高い", "NumPy配列はベクトル演算が可能で高速", "Pythonリストの方が数値計算に適している"], answer: 2, explanation: "NumPy配列はベクトル演算（要素ごとの一括演算）が可能で、Pythonリストのforループ処理に比べて10〜100倍高速です。" },
                { id: "q401_2", type: "choice", question: "全要素が0の3行4列の配列を作成する関数はどれですか？", options: ["np.ones((3, 4))", "np.zeros((3, 4))", "np.eye(3, 4)", "np.empty((3, 4))"], answer: 1, explanation: "np.zeros((3, 4))は全要素が0の3行4列の配列を作成します。np.ones()は全要素1、np.eye()は単位行列を作成します。" },
                { id: "q401_3", type: "choice", question: "形状の異なる配列間で自動的に形状を合わせて演算する機能を何と呼びますか？", options: ["キャスト", "ブロードキャスト", "リシェイプ", "トランスポーズ"], answer: 1, explanation: "ブロードキャスト（Broadcasting）は、形状の異なる配列間で自動的に形状を合わせて演算を行うNumPyの機能です。" },
                { id: "q401_4", type: "choice", question: "2次元配列arrの全行の0列目を取得するスライス表記はどれですか？", options: ["arr[0, :]", "arr[:, 0]", "arr[0][0]", "arr[:][0]"], answer: 1, explanation: "arr[:, 0]は「全行（:）の0列目」を意味します。Pythonのコロン（:）はスライスで「全て」を表します。" },
                { id: "q401_5", type: "fill", question: "NumPy配列の次元数を確認するプロパティは___です。", answer: "ndim", explanation: "ndimプロパティは配列の次元数を返します。1次元配列なら1、2次元配列なら2です。shapeは各次元のサイズのタプルを返します。" }
            ]
        },
        {
            id: 402,
            title: "Pandas入門",
            duration: "20分",
            content: `
<h2>Pandasとは</h2>
<p><strong>Pandas</strong>は、Pythonでデータ操作・分析を行うための最も重要なライブラリです。Excelのスプレッドシートのような表形式のデータを効率的に扱うための機能を提供します。</p>

<h3>主要なデータ構造</h3>
<table>
<thead>
<tr><th>データ構造</th><th>次元</th><th>説明</th><th>イメージ</th></tr>
</thead>
<tbody>
<tr><td>Series</td><td>1次元</td><td>インデックス付きの1次元データ</td><td>Excelの1列</td></tr>
<tr><td>DataFrame</td><td>2次元</td><td>行と列を持つ表形式のデータ</td><td>Excelのシート</td></tr>
</tbody>
</table>

<h3>Series</h3>
<p>Seriesは、ラベル付きの1次元配列です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

# Seriesの作成
scores = pd.Series([85, 92, 78, 95], index=["数学", "英語", "国語", "理科"])
print(scores)
# 数学    85
# 英語    92
# 国語    78
# 理科    95

# インデックスでアクセス
print(scores["英語"])     # 92
print(scores[scores > 80])  # 80点を超える科目

# 基本統計量
print(scores.mean())   # 87.5
print(scores.max())    # 95
print(scores.min())    # 78
</code></pre>
</div>

<h3>DataFrame</h3>
<p>DataFrameは、表形式の2次元データ構造で、Pandasの中核です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

# DataFrameの作成（辞書から）
data = {
    "名前": ["田中", "鈴木", "佐藤", "高橋"],
    "年齢": [28, 35, 42, 31],
    "部署": ["営業", "技術", "人事", "技術"],
    "年収": [450, 600, 550, 580]
}

df = pd.DataFrame(data)
print(df)
#    名前  年齢  部署  年収
# 0  田中   28  営業  450
# 1  鈴木   35  技術  600
# 2  佐藤   42  人事  550
# 3  高橋   31  技術  580
</code></pre>
</div>

<h3>インデックス操作</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># インデックスの設定と変更
df = df.set_index("名前")       # 名前列をインデックスに
df = df.reset_index()            # インデックスを列に戻す

# インデックスの確認
print(df.index)     # RangeIndex(start=0, stop=4, step=1)
print(df.columns)   # Index(['名前', '年齢', '部署', '年収'])
</code></pre>
</div>

<h3>基本メソッド</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># DataFrameの基本情報
print(df.shape)       # (4, 4) - 行数×列数
print(df.dtypes)      # 各列のデータ型
print(df.info())      # 列名、データ型、非null数の要約
print(df.describe())  # 数値列の記述統計量

# データの確認
print(df.head(2))     # 先頭2行
print(df.tail(2))     # 末尾2行
print(df.sample(2))   # ランダムに2行

# 値のカウント
print(df["部署"].value_counts())
# 技術    2
# 営業    1
# 人事    1

# ユニークな値
print(df["部署"].unique())       # ['営業', '技術', '人事']
print(df["部署"].nunique())      # 3
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
新しいデータセットを受け取ったら、まず df.shape、df.info()、df.describe()、df.head() を実行して全体像を把握しましょう。これはEDA（探索的データ分析）の第一歩です。
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
PandasのDataFrameでは、列名に日本語を使うことも可能ですが、プログラミングの慣習としてアルファベットのスネークケース（例: annual_salary）を使うことが推奨されます。特にチーム開発やライブラリとの連携時にトラブルを防げます。
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "PandasのDataFrameに相当するイメージとして最も適切なのはどれですか？", options: ["Excelの1つのセル", "Excelの1列", "Excelのシート", "Excelのブック"], answer: 2, explanation: "DataFrameは行と列を持つ2次元の表形式データ構造で、Excelのシートのようなイメージです。1列はSeriesに相当します。" },
                { id: "q402_2", type: "choice", question: "DataFrameの数値列の記述統計量を表示するメソッドはどれですか？", options: ["df.info()", "df.describe()", "df.dtypes", "df.shape"], answer: 1, explanation: "df.describe()は数値列の件数、平均、標準偏差、最小値、四分位数、最大値などの記述統計量を一覧表示します。" },
                { id: "q402_3", type: "choice", question: "ある列のユニークな値の数を返すメソッドはどれですか？", options: ["unique()", "nunique()", "count()", "value_counts()"], answer: 1, explanation: "nunique()はユニークな値の数（Number of Unique values）を返します。unique()はユニークな値の配列を返します。" },
                { id: "q402_4", type: "choice", question: "DataFrameの先頭5行を表示するメソッドはどれですか？", options: ["df.first(5)", "df.top(5)", "df.head(5)", "df.show(5)"], answer: 2, explanation: "df.head(n)はDataFrameの先頭n行を表示します。引数を省略するとデフォルトで5行が表示されます。" },
                { id: "q402_5", type: "fill", question: "Pandasの1次元データ構造は___と呼ばれます。", answer: "Series", explanation: "Series（シリーズ）はPandasの1次元データ構造で、インデックス付きの配列です。DataFrameの1列を取り出すとSeriesになります。" }
            ]
        },
        {
            id: 403,
            title: "データの読み込み・選択・フィルタリング",
            duration: "20分",
            content: `
<h2>データの読み込み</h2>
<p>Pandasは様々な形式のデータを読み込むための関数を提供しています。</p>

<h3>read_csv()</h3>
<p>CSVファイルの読み込みは、データサイエンスで最も頻繁に行う操作の1つです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

# 基本的な読み込み
df = pd.read_csv("data.csv")

# 主要なパラメータ
df = pd.read_csv(
    "data.csv",
    encoding="utf-8",        # 文字エンコーディング（日本語はshift_jisの場合も）
    header=0,                # ヘッダー行の位置（Noneでヘッダーなし）
    index_col=0,             # インデックスとして使う列
    usecols=["col1", "col2"],# 読み込む列を指定
    dtype={"id": str},       # データ型を指定
    na_values=["NA", "N/A"], # 欠損値として扱う値
    nrows=100,               # 最初の100行だけ読み込み
    parse_dates=["date_col"] # 日付型に変換する列
)

# その他の形式
df_excel = pd.read_excel("data.xlsx", sheet_name="Sheet1")
df_json = pd.read_json("data.json")
df_sql = pd.read_sql("SELECT * FROM table", connection)
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
日本語のCSVファイルを読み込む際、encoding="shift_jis" や encoding="cp932" を指定する必要がある場合があります。エラーが出たらエンコーディングを変更してみましょう。
</div>

<h3>列の選択</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

df = pd.DataFrame({
    "name": ["田中", "鈴木", "佐藤", "高橋"],
    "age": [28, 35, 42, 31],
    "dept": ["営業", "技術", "人事", "技術"],
    "salary": [450, 600, 550, 580]
})

# 1列を選択（Seriesが返る）
print(df["name"])

# 複数列を選択（DataFrameが返る）
print(df[["name", "salary"]])
</code></pre>
</div>

<h3>loc と iloc</h3>
<p>locとilocは、行と列を同時に指定してデータを選択するためのメソッドです。</p>

<table>
<thead>
<tr><th>メソッド</th><th>指定方法</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>loc</td><td>ラベル（名前）で指定</td><td>df.loc[0:2, "name":"salary"]</td></tr>
<tr><td>iloc</td><td>整数位置で指定</td><td>df.iloc[0:2, 0:3]</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># locはラベルベース（終了位置を含む）
print(df.loc[0:2, "name":"dept"])
#    name  age dept
# 0  田中   28  営業
# 1  鈴木   35  技術
# 2  佐藤   42  人事

# ilocは整数位置ベース（終了位置を含まない）
print(df.iloc[0:2, 0:3])
#    name  age dept
# 0  田中   28  営業
# 1  鈴木   35  技術
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
locのスライスは終了位置を「含み」ますが、ilocのスライスは終了位置を「含みません」。これはPythonの通常のスライスと異なるlocの挙動に注意が必要です。
</div>

<h3>条件フィルタリング</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 単一条件
high_salary = df[df["salary"] >= 550]
print(high_salary)

# 複数条件（&: AND、|: OR）
filtered = df[(df["dept"] == "技術") & (df["salary"] >= 580)]
print(filtered)

# isin()で複数値のいずれかに一致
tech_or_sales = df[df["dept"].isin(["技術", "営業"])]
print(tech_or_sales)

# query()メソッド（文字列で条件を指定）
result = df.query("age >= 30 and salary >= 550")
print(result)

# 文字列の条件
contains_tech = df[df["dept"].str.contains("技")]
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
query()メソッドは複雑な条件を可読性高く書ける利点があります。変数を使う場合は@記号で参照できます（例: df.query("salary >= @min_salary")）。
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "CSVファイルを読み込むPandasの関数はどれですか？", options: ["pd.load_csv()", "pd.open_csv()", "pd.read_csv()", "pd.import_csv()"], answer: 2, explanation: "pd.read_csv()はCSVファイルをDataFrameとして読み込む関数です。最も頻繁に使用されるPandasの関数の1つです。" },
                { id: "q403_2", type: "choice", question: "整数位置（数値のインデックス）でデータを選択するメソッドはどれですか？", options: ["loc", "iloc", "at", "ix"], answer: 1, explanation: "ilocは整数位置（Integer Location）ベースでデータを選択します。locはラベルベースの選択です。" },
                { id: "q403_3", type: "choice", question: "複数の条件でAND（かつ）フィルタリングする際に使う演算子はどれですか？", options: ["and", "&", "&&", "+"], answer: 1, explanation: "PandasのDataFrameで複数条件をANDで結合する際は & 演算子を使います。各条件を括弧()で囲む必要があります。" },
                { id: "q403_4", type: "choice", question: "列の値が指定した複数の値のいずれかに一致する行を選択するメソッドはどれですか？", options: ["contains()", "match()", "isin()", "filter()"], answer: 2, explanation: "isin()は、列の値が指定したリストの値のいずれかに一致するかを判定するメソッドです。" },
                { id: "q403_5", type: "fill", question: "df.loc[0:2, 'name'] のlocは、___ベースでデータを選択するメソッドです。", answer: "ラベル", explanation: "locはラベル（Label）ベースでデータを選択するメソッドです。行や列の名前（ラベル）を使って指定します。ilocは整数位置ベースです。" }
            ]
        },
        {
            id: 404,
            title: "データの結合・集約・グループ化",
            duration: "20分",
            content: `
<h2>データの結合</h2>
<p>実際のデータ分析では、複数のデータソースを結合して分析することが一般的です。Pandasは3つの主要な結合方法を提供しています。</p>

<h3>merge（SQLのJOINに相当）</h3>
<p>共通のキー列を基に2つのDataFrameを結合します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

# 社員データ
employees = pd.DataFrame({
    "emp_id": [1, 2, 3, 4],
    "name": ["田中", "鈴木", "佐藤", "高橋"],
    "dept_id": [10, 20, 10, 30]
})

# 部署データ
departments = pd.DataFrame({
    "dept_id": [10, 20, 30],
    "dept_name": ["営業", "技術", "人事"]
})

# 内部結合（INNER JOIN）- 両方に存在するキーのみ
merged = pd.merge(employees, departments, on="dept_id", how="inner")

# 左外部結合（LEFT JOIN）- 左テーブルの全行を保持
merged_left = pd.merge(employees, departments, on="dept_id", how="left")

# 右外部結合（RIGHT JOIN）
merged_right = pd.merge(employees, departments, on="dept_id", how="right")

# 完全外部結合（FULL OUTER JOIN）
merged_outer = pd.merge(employees, departments, on="dept_id", how="outer")
</code></pre>
</div>

<table>
<thead>
<tr><th>結合方法</th><th>how</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>内部結合</td><td>"inner"</td><td>両方のキーが一致する行のみ</td></tr>
<tr><td>左外部結合</td><td>"left"</td><td>左テーブルの全行を保持</td></tr>
<tr><td>右外部結合</td><td>"right"</td><td>右テーブルの全行を保持</td></tr>
<tr><td>完全外部結合</td><td>"outer"</td><td>両テーブルの全行を保持</td></tr>
</tbody>
</table>

<h3>concat（データの連結）</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 縦方向の連結（行の追加）
df1 = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
df2 = pd.DataFrame({"A": [5, 6], "B": [7, 8]})
result = pd.concat([df1, df2], ignore_index=True)

# 横方向の連結（列の追加）
result_h = pd.concat([df1, df2], axis=1)
</code></pre>
</div>

<h2>グループ化と集約（groupby）</h2>
<p>groupbyは、データをグループに分けて集約する非常に強力な機能です。SQLのGROUP BY句に相当します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd

df = pd.DataFrame({
    "dept": ["営業", "技術", "営業", "技術", "人事", "営業"],
    "name": ["田中", "鈴木", "佐藤", "高橋", "山田", "伊藤"],
    "salary": [450, 600, 480, 580, 520, 500],
    "age": [28, 35, 32, 31, 40, 27]
})

# 部署別の平均年収
print(df.groupby("dept")["salary"].mean())
# dept
# 人事    520.0
# 営業    476.7
# 技術    590.0

# 複数の集約関数を適用
print(df.groupby("dept")["salary"].agg(["mean", "min", "max", "count"]))

# 複数列でグループ化
# df.groupby(["dept", "gender"])["salary"].mean()
</code></pre>
</div>

<h3>pivot_table</h3>
<p>Excelのピボットテーブルと同様の機能で、データの集計表を作成します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import pandas as pd
import numpy as np

sales = pd.DataFrame({
    "region": ["東京", "東京", "大阪", "大阪", "東京", "大阪"],
    "product": ["A", "B", "A", "B", "A", "A"],
    "sales": [100, 200, 150, 180, 120, 160],
    "quantity": [10, 20, 15, 18, 12, 16]
})

# ピボットテーブル
pivot = pd.pivot_table(
    sales,
    values="sales",
    index="region",
    columns="product",
    aggfunc="sum"
)
print(pivot)
# product    A    B
# region
# 大阪     310  180
# 東京     220  200
</code></pre>
</div>

<h3>apply関数</h3>
<p>apply()は、DataFrameの各行または各列にカスタム関数を適用します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 列に関数を適用
df["salary_grade"] = df["salary"].apply(
    lambda x: "高" if x >= 550 else "中" if x >= 480 else "低"
)

# 行に関数を適用（axis=1）
df["summary"] = df.apply(
    lambda row: f"{row['name']}({row['dept']})", axis=1
)
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
groupby → 集約のパターンは、データ分析で最も頻繁に使う操作の1つです。「Split（分割）→ Apply（適用）→ Combine（結合）」の3ステップで動作します。
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
apply()は便利ですが、大規模データでは処理が遅くなることがあります。可能な限り、PandasやNumPyのベクトル化された操作（例：df["col"] * 2）を使いましょう。apply()は最後の手段として使うのがベストプラクティスです。
</div>
`,
            quiz: [
                { id: "q404_1", type: "choice", question: "pd.merge()でhow='inner'を指定した場合の動作はどれですか？", options: ["左テーブルの全行を保持する", "両方のキーが一致する行のみ結合する", "右テーブルの全行を保持する", "両テーブルの全行を保持する"], answer: 1, explanation: "inner（内部結合）は、両方のテーブルでキーが一致する行のみを結合結果に含めます。SQLのINNER JOINに相当します。" },
                { id: "q404_2", type: "choice", question: "groupbyの動作を表す3つのステップはどれですか？", options: ["Input → Process → Output", "Split → Apply → Combine", "Read → Transform → Write", "Filter → Map → Reduce"], answer: 1, explanation: "groupbyはSplit（グループに分割）→ Apply（各グループに集約関数を適用）→ Combine（結果を結合）の3ステップで動作します。" },
                { id: "q404_3", type: "choice", question: "2つのDataFrameを縦方向に連結する関数はどれですか？", options: ["pd.merge()", "pd.concat()", "pd.join()", "pd.append()"], answer: 1, explanation: "pd.concat()はDataFrameを縦方向（デフォルト、axis=0）または横方向（axis=1）に連結します。" },
                { id: "q404_4", type: "choice", question: "Excelのピボットテーブルに相当するPandasの関数はどれですか？", options: ["pd.crosstab()", "pd.pivot_table()", "pd.groupby()", "pd.melt()"], answer: 1, explanation: "pd.pivot_table()は、Excelのピボットテーブルのように、行・列・値を指定してデータの集計表を作成する関数です。" },
                { id: "q404_5", type: "fill", question: "pd.merge()の結合キーが同じ列名の場合、___パラメータで列名を指定します。", answer: "on", explanation: "merge()のonパラメータは、結合に使用する列名を指定します。キー列の名前が異なる場合は、left_onとright_onを使います。" }
            ]
        }
    ]
};
