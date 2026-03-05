/* ============================================
   DS Academy - Level 3: Python基礎
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "Python基礎",
    icon: "🐍",
    description: "データサイエンスの主要言語Pythonの基本を学ぶ",
    modules: [
        {
            id: 301,
            title: "Python環境構築と基本文法",
            duration: "20分",
            content: `
<h2>なぜPythonなのか</h2>
<p>Pythonはデータサイエンスで最も広く使用されているプログラミング言語です。シンプルな文法、豊富なライブラリ、活発なコミュニティが、その人気の理由です。</p>

<table>
<thead>
<tr><th>Pythonの利点</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>読みやすさ</td><td>インデントベースの構造で、コードが自然言語に近い</td></tr>
<tr><td>豊富なライブラリ</td><td>NumPy、Pandas、Scikit-learn、TensorFlowなど</td></tr>
<tr><td>汎用性</td><td>データ分析だけでなく、Web開発、自動化にも使える</td></tr>
<tr><td>コミュニティ</td><td>世界最大級の開発者コミュニティ、情報が豊富</td></tr>
</tbody>
</table>

<h3>開発環境の選択</h3>

<h4>Jupyter Notebook</h4>
<p>Jupyter Notebookは、コード・実行結果・説明文をひとつのドキュメントにまとめられる対話型の開発環境です。データ分析や機械学習の実験に最適です。</p>

<h4>Google Colaboratory（Colab）</h4>
<p>Google Colabは、ブラウザ上でJupyter Notebookを実行できる無料のクラウドサービスです。環境構築不要で、GPUも無料で使えるため、初学者に特におすすめです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># Jupyter Notebookのインストール（ローカル環境）
# pip install jupyter
# jupyter notebook

# Google Colabはブラウザからアクセス
# https://colab.research.google.com/
</code></pre>
</div>

<h3>基本文法</h3>

<h4>変数とデータ型</h4>
<p>Pythonでは変数を宣言する際に型を指定する必要がありません（動的型付け）。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 基本的なデータ型
name = "田中太郎"        # str（文字列）
age = 30                 # int（整数）
height = 170.5           # float（浮動小数点数）
is_student = True        # bool（真偽値）
data = None              # NoneType（値なし）

# 型の確認
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>
</code></pre>
</div>

<h4>演算子</h4>
<table>
<thead>
<tr><th>種類</th><th>演算子</th><th>例</th><th>結果</th></tr>
</thead>
<tbody>
<tr><td>算術</td><td>+, -, *, /, //, %, **</td><td>7 // 2</td><td>3（切り捨て除算）</td></tr>
<tr><td>比較</td><td>==, !=, <, >, <=, >=</td><td>5 > 3</td><td>True</td></tr>
<tr><td>論理</td><td>and, or, not</td><td>True and False</td><td>False</td></tr>
<tr><td>代入</td><td>=, +=, -=, *=, /=</td><td>x += 5</td><td>x = x + 5</td></tr>
</tbody>
</table>

<h4>文字列操作</h4>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 文字列の基本操作
greeting = "Hello, World!"

print(len(greeting))           # 13（文字数）
print(greeting.upper())        # "HELLO, WORLD!"
print(greeting.lower())        # "hello, world!"
print(greeting.replace("World", "Python"))  # "Hello, Python!"
print(greeting.split(", "))    # ["Hello", "World!"]

# f文字列（フォーマット文字列）
name = "Python"
version = 3.11
print(f"{name}のバージョンは{version}です")
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
Python 3.6以降で使えるf文字列（f-string）は、文字列内に変数を埋め込む最もシンプルで高速な方法です。データ分析でレポートを出力する際に頻繁に使用します。
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
Pythonでは、インデント（字下げ）がコードブロックの構造を決定します。他の言語のように中括弧{}は使いません。インデントの不一致はIndentationErrorの原因となるため、スペース4つで統一することを推奨します。
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "Pythonのデータ型で、真偽値を表すものはどれですか？", options: ["str", "int", "float", "bool"], answer: 3, explanation: "bool型はTrue（真）またはFalse（偽）の真偽値を表すデータ型です。" },
                { id: "q301_2", type: "choice", question: "Python で 7 // 2 の結果はいくつですか？", options: ["3.5", "3", "4", "1"], answer: 1, explanation: "// は切り捨て除算（フロア除算）演算子です。7 ÷ 2 = 3.5 の小数部分を切り捨てて 3 になります。" },
                { id: "q301_3", type: "choice", question: "ブラウザ上で環境構築不要でPythonを実行できるGoogleのサービスはどれですか？", options: ["Google Sheets", "Google Colaboratory", "Google Analytics", "Google Cloud Shell"], answer: 1, explanation: "Google Colaboratory（Colab）は、ブラウザ上でJupyter Notebookを実行できる無料のクラウドサービスです。" },
                { id: "q301_4", type: "choice", question: "Pythonでコードブロックの構造を決定するのはどれですか？", options: ["中括弧 {}", "セミコロン ;", "インデント（字下げ）", "括弧 ()"], answer: 2, explanation: "Pythonではインデント（通常スペース4つ）がコードブロックの構造を決定します。他の多くの言語で使われる中括弧は使いません。" },
                { id: "q301_5", type: "fill", question: "Python 3.6以降で使える、変数を文字列に直接埋め込む記法を「___文字列」と呼びます。アルファベット1文字で答えてください。", answer: "f", explanation: "f文字列（f-string）は、文字列の前にfを付けることで、波括弧{}内に変数や式を直接埋め込める記法です。例: f\"名前は{name}です\"" }
            ]
        },
        {
            id: 302,
            title: "制御構造と関数",
            duration: "20分",
            content: `
<h2>条件分岐（if文）</h2>
<p>条件に基づいて処理を分岐させるための構文です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># if / elif / else
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"成績: {grade}")  # 成績: B

# 三項演算子（条件式）
status = "合格" if score >= 60 else "不合格"
print(status)  # 合格
</code></pre>
</div>

<h2>ループ（繰り返し処理）</h2>

<h3>for ループ</h3>
<p>イテラブル（リスト、文字列、rangeなど）の各要素に対して処理を繰り返します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># リストの各要素を処理
fruits = ["りんご", "バナナ", "みかん"]
for fruit in fruits:
    print(fruit)

# range()を使った繰り返し
for i in range(5):     # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):  # 1, 2, 3, 4, 5
    print(i)

# enumerate()でインデックスと要素を同時に取得
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
</code></pre>
</div>

<h3>while ループ</h3>
<p>条件がTrueである限り処理を繰り返します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># while ループ
count = 0
while count < 5:
    print(f"カウント: {count}")
    count += 1

# break と continue
for i in range(10):
    if i == 3:
        continue  # 3をスキップ
    if i == 7:
        break     # 7で終了
    print(i)
# 出力: 0, 1, 2, 4, 5, 6
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
データサイエンスでは、forループよりもNumPyやPandasのベクトル演算を使う方が圧倒的に高速です。ただし、基本的なループの理解はプログラミングの基礎として重要です。
</div>

<h2>関数</h2>
<p>関数は、再利用可能なコードのまとまりです。処理を関数にまとめることで、コードの可読性と保守性が向上します。</p>

<h3>関数の定義と呼び出し</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 基本的な関数定義
def greet(name):
    """挨拶を返す関数"""
    return f"こんにちは、{name}さん！"

message = greet("田中")
print(message)  # こんにちは、田中さん！

# デフォルト引数
def calculate_bmi(weight, height, unit="metric"):
    """BMIを計算する関数"""
    if unit == "metric":
        return weight / (height ** 2)
    return None

bmi = calculate_bmi(70, 1.75)
print(f"BMI: {bmi:.1f}")  # BMI: 22.9
</code></pre>
</div>

<h3>引数の種類</h3>
<table>
<thead>
<tr><th>引数の種類</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>位置引数</td><td>順番で渡す引数</td><td>func(1, 2)</td></tr>
<tr><td>キーワード引数</td><td>名前を指定して渡す引数</td><td>func(x=1, y=2)</td></tr>
<tr><td>デフォルト引数</td><td>デフォルト値を持つ引数</td><td>def func(x=10)</td></tr>
<tr><td>可変長引数</td><td>任意の数の引数を受け取る</td><td>def func(*args, **kwargs)</td></tr>
</tbody>
</table>

<h3>lambda関数</h3>
<p>無名関数とも呼ばれ、簡単な処理を1行で定義できます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># lambda関数
square = lambda x: x ** 2
print(square(5))  # 25

# sorted()との組み合わせ
students = [("田中", 85), ("鈴木", 92), ("佐藤", 78)]
sorted_students = sorted(students, key=lambda s: s[1], reverse=True)
print(sorted_students)
# [('鈴木', 92), ('田中', 85), ('佐藤', 78)]
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
whileループを使う際は、無限ループに陥らないよう注意しましょう。ループ内で条件がFalseになるような処理（カウンタの更新など）を必ず含めるか、break文で脱出条件を設定してください。
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "Pythonのfor文で、リストのインデックスと要素を同時に取得する関数はどれですか？", options: ["zip()", "range()", "enumerate()", "map()"], answer: 2, explanation: "enumerate()は、イテラブルの各要素にインデックス番号を付けて返す組み込み関数です。for i, item in enumerate(list) のように使います。" },
                { id: "q302_2", type: "choice", question: "ループの途中で現在の反復をスキップし、次の反復に進むキーワードはどれですか？", options: ["break", "continue", "pass", "return"], answer: 1, explanation: "continueは現在の反復をスキップして、次の反復に進みます。breakはループ自体を終了します。" },
                { id: "q302_3", type: "choice", question: "def func(x=10) における x=10 は何と呼ばれますか？", options: ["位置引数", "キーワード引数", "デフォルト引数", "可変長引数"], answer: 2, explanation: "デフォルト引数は、関数呼び出し時に引数が省略された場合に使用されるデフォルト値を持つ引数です。" },
                { id: "q302_4", type: "choice", question: "range(1, 6) が生成する数列はどれですか？", options: ["0, 1, 2, 3, 4, 5", "1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5, 6"], answer: 1, explanation: "range(1, 6) は開始値1から終了値6の手前（5）までの数列 1, 2, 3, 4, 5 を生成します。終了値自体は含まれません。" },
                { id: "q302_5", type: "fill", question: "Pythonで無名関数を定義するキーワードは___です。", answer: "lambda", explanation: "lambda式は無名関数（名前のない関数）を定義するためのキーワードです。lambda x: x ** 2 のように、簡単な処理を1行で記述できます。" }
            ]
        },
        {
            id: 303,
            title: "データ構造",
            duration: "20分",
            content: `
<h2>Pythonの主要なデータ構造</h2>
<p>Pythonには、データを効率的に格納・操作するための複数のデータ構造が組み込まれています。データサイエンスでは、これらを適切に使い分けることが重要です。</p>

<table>
<thead>
<tr><th>データ構造</th><th>記号</th><th>特徴</th><th>変更可能</th></tr>
</thead>
<tbody>
<tr><td>リスト（list）</td><td>[ ]</td><td>順序あり、重複OK</td><td>可</td></tr>
<tr><td>タプル（tuple）</td><td>( )</td><td>順序あり、重複OK</td><td>不可</td></tr>
<tr><td>辞書（dict）</td><td>{ }</td><td>キーと値のペア</td><td>可</td></tr>
<tr><td>セット（set）</td><td>{ }</td><td>順序なし、重複不可</td><td>可</td></tr>
</tbody>
</table>

<h3>リスト（list）</h3>
<p>最も汎用的なデータ構造で、複数のデータを順序付けて格納します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># リストの作成と基本操作
scores = [85, 92, 78, 95, 88]

# インデックスアクセス（0始まり）
print(scores[0])    # 85
print(scores[-1])   # 88（末尾）

# スライス
print(scores[1:3])  # [92, 78]
print(scores[:3])   # [85, 92, 78]

# 要素の追加・削除
scores.append(90)         # 末尾に追加
scores.insert(0, 100)     # 指定位置に挿入
scores.remove(78)         # 値を指定して削除
popped = scores.pop()     # 末尾を取り出し

# 便利なメソッド
print(len(scores))        # 要素数
print(sorted(scores))     # ソート（新しいリストを返す）
print(sum(scores))        # 合計
print(max(scores))        # 最大値
print(min(scores))        # 最小値
</code></pre>
</div>

<h3>辞書（dict）</h3>
<p>キーと値のペアでデータを管理します。高速な検索が可能で、JSONデータの処理にも不可欠です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 辞書の作成と操作
student = {
    "name": "田中太郎",
    "age": 22,
    "scores": [85, 92, 78],
    "major": "情報工学"
}

# 値のアクセス
print(student["name"])          # 田中太郎
print(student.get("gpa", 0))   # 0（キーがない場合のデフォルト値）

# 値の追加・更新
student["gpa"] = 3.5
student["age"] = 23

# よく使うメソッド
print(student.keys())    # キー一覧
print(student.values())  # 値一覧
print(student.items())   # キーと値のペア

# 辞書のループ
for key, value in student.items():
    print(f"{key}: {value}")
</code></pre>
</div>

<h3>タプル（tuple）</h3>
<p>リストと似ていますが、一度作成すると変更できません（イミュータブル）。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># タプルの作成
coordinates = (35.6762, 139.6503)  # 東京の緯度経度
rgb_color = (255, 128, 0)

# アンパック
lat, lon = coordinates
print(f"緯度: {lat}, 経度: {lon}")

# 関数から複数の値を返す
def get_stats(data):
    return min(data), max(data), sum(data) / len(data)

minimum, maximum, average = get_stats([10, 20, 30, 40, 50])
</code></pre>
</div>

<h3>セット（set）</h3>
<p>重複を許さないデータの集合です。集合演算が可能で、ユニークな値の抽出に便利です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># セットの作成と演算
python_users = {"田中", "鈴木", "佐藤", "高橋"}
r_users = {"鈴木", "高橋", "山田", "伊藤"}

# 集合演算
print(python_users & r_users)   # 積集合: {'鈴木', '高橋'}
print(python_users | r_users)   # 和集合: 全メンバー
print(python_users - r_users)   # 差集合: {'田中', '佐藤'}
</code></pre>
</div>

<h3>リスト内包表記</h3>
<p>リストを簡潔に作成するための強力な構文です。データの変換やフィルタリングに頻繁に使用されます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 基本形: [式 for 変数 in イテラブル]
squares = [x ** 2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# 条件付き: [式 for 変数 in イテラブル if 条件]
even_squares = [x ** 2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# 辞書内包表記
word_lengths = {word: len(word) for word in ["Python", "Data", "Science"]}
print(word_lengths)  # {'Python': 6, 'Data': 4, 'Science': 7}
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
リスト内包表記はforループよりも簡潔で、一般的に高速です。ただし、複雑な処理は可読性が下がるため、通常のforループの方が適切な場合もあります。
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
辞書のキーにはイミュータブルな値（文字列、数値、タプル）のみ使用できます。リストや辞書などのミュータブルなオブジェクトをキーにするとTypeErrorが発生します。
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "一度作成すると変更できない（イミュータブルな）データ構造はどれですか？", options: ["リスト", "辞書", "タプル", "セット"], answer: 2, explanation: "タプル（tuple）はイミュータブル（変更不可能）なデータ構造です。作成後に要素の追加・変更・削除ができません。" },
                { id: "q303_2", type: "choice", question: "scores = [85, 92, 78, 95, 88] のとき、scores[-1] の値はいくつですか？", options: ["85", "88", "95", "エラーになる"], answer: 1, explanation: "Pythonでは負のインデックスで末尾からアクセスでき、-1は最後の要素を指します。scores[-1]は88です。" },
                { id: "q303_3", type: "choice", question: "2つのセットの共通要素を取得する演算子はどれですか？", options: ["| （パイプ）", "& （アンパサンド）", "- （マイナス）", "+ （プラス）"], answer: 1, explanation: "& 演算子は積集合（intersection）を返し、2つのセットに共通する要素だけを含むセットを生成します。" },
                { id: "q303_4", type: "choice", question: "辞書でキーが存在しない場合にデフォルト値を返すメソッドはどれですか？", options: ["find()", "get()", "search()", "default()"], answer: 1, explanation: "get()メソッドは、キーが存在する場合はその値を、存在しない場合は指定したデフォルト値（省略時はNone）を返します。" },
                { id: "q303_5", type: "fill", question: "[x ** 2 for x in range(5)] のような記法を「リスト___表記」と呼びます。", answer: "内包", explanation: "リスト内包表記（List Comprehension）は、既存のイテラブルから新しいリストを簡潔に作成するための構文です。" }
            ]
        },
        {
            id: 304,
            title: "ファイル操作とライブラリ",
            duration: "20分",
            content: `
<h2>ファイルの読み書き</h2>
<p>データサイエンスでは、CSV、JSON、テキストファイルなど、様々な形式のデータを扱います。Pythonにはこれらのファイルを簡単に読み書きできる機能が備わっています。</p>

<h3>CSVファイルの読み込み</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import csv

# CSVファイルの読み込み
with open("data.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    header = next(reader)  # ヘッダー行を取得
    for row in reader:
        print(row)

# csv.DictReaderを使うと辞書形式でアクセスできる
with open("data.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["age"])
</code></pre>
</div>

<h3>JSONファイルの読み込み</h3>
<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python">import json

# JSONファイルの読み込み
with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(data)

# JSONファイルへの書き込み
output = {"name": "田中", "scores": [85, 92, 78]}
with open("output.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=2)
</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
with文（コンテキストマネージャ）を使うと、ファイルの閉じ忘れを防げます。withブロックを抜けると、自動的にファイルが閉じられます。データサイエンスの実務では、CSVやJSONの読み込みにはPandasのread_csv()やread_json()を使うことが一般的です。
</div>

<h2>パッケージ管理（pip）</h2>
<p>pipはPythonのパッケージ管理ツールで、外部ライブラリのインストールに使用します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># ライブラリのインストール（ターミナルで実行）
# pip install numpy pandas matplotlib scikit-learn

# インストール済みライブラリの確認
# pip list

# 特定バージョンのインストール
# pip install pandas==2.0.0

# requirements.txtからまとめてインストール
# pip install -r requirements.txt
</code></pre>
</div>

<h3>import文</h3>
<p>インストールしたライブラリを使うには、import文でプログラムに読み込みます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># ライブラリ全体をインポート
import numpy
print(numpy.array([1, 2, 3]))

# エイリアス（別名）でインポート
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 特定の関数/クラスだけインポート
from sklearn.model_selection import train_test_split
from scipy import stats
</code></pre>
</div>

<h2>データサイエンスの主要ライブラリ</h2>
<table>
<thead>
<tr><th>ライブラリ</th><th>用途</th><th>慣用的なエイリアス</th></tr>
</thead>
<tbody>
<tr><td>NumPy</td><td>数値計算、配列操作</td><td>np</td></tr>
<tr><td>Pandas</td><td>データ操作・分析</td><td>pd</td></tr>
<tr><td>Matplotlib</td><td>基本的なグラフ描画</td><td>plt</td></tr>
<tr><td>Seaborn</td><td>統計的データ可視化</td><td>sns</td></tr>
<tr><td>Scikit-learn</td><td>機械学習</td><td>sklearn</td></tr>
<tr><td>SciPy</td><td>科学技術計算</td><td>scipy</td></tr>
<tr><td>Statsmodels</td><td>統計モデリング</td><td>sm</td></tr>
<tr><td>TensorFlow / PyTorch</td><td>深層学習</td><td>tf / torch</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">Python</span></div>
<pre><code class="language-python"># 典型的なデータサイエンスプロジェクトの冒頭
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# 設定
plt.rcParams["font.family"] = "sans-serif"
pd.set_option("display.max_columns", None)
</code></pre>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
ライブラリのバージョンの違いにより、同じコードでも動作が異なることがあります。再現性を確保するために、requirements.txtやconda environment.ymlでバージョンを固定することを推奨します。
</div>
`,
            quiz: [
                { id: "q304_1", type: "choice", question: "Pythonでファイルを開く際に、閉じ忘れを防ぐために使う構文はどれですか？", options: ["try文", "with文", "for文", "class文"], answer: 1, explanation: "with文（コンテキストマネージャ）を使うと、ブロックを抜けた際に自動的にファイルが閉じられます。" },
                { id: "q304_2", type: "choice", question: "Pandasの慣用的なエイリアス（別名）はどれですか？", options: ["pa", "pan", "pd", "pds"], answer: 2, explanation: "Pandasは慣用的に import pandas as pd としてインポートし、pdというエイリアスで使用します。" },
                { id: "q304_3", type: "choice", question: "Pythonの外部ライブラリをインストールするコマンドはどれですか？", options: ["python install", "pip install", "npm install", "apt install"], answer: 1, explanation: "pip install はPythonの外部ライブラリをインストールするための標準的なコマンドです。" },
                { id: "q304_4", type: "choice", question: "機械学習の主要ライブラリであるScikit-learnのパッケージ名はどれですか？", options: ["scikit", "sklearn", "scikit-learn", "scikitlearn"], answer: 2, explanation: "Scikit-learnのパッケージ名はscikit-learnで、pip install scikit-learnでインストールします。インポート時はimport sklearnまたはfrom sklearn import ...を使います。" },
                { id: "q304_5", type: "fill", question: "JSONファイルをPythonの辞書として読み込むには、jsonモジュールの___()メソッドを使います。", answer: "load", explanation: "json.load()はJSONファイルを読み込んでPythonの辞書やリストに変換します。文字列からの変換にはjson.loads()を使います。" }
            ]
        }
    ]
};
