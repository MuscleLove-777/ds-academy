/* ============================================
   DS Academy - Level 9: SQL入門
   ============================================ */

const LEVEL9_DATA = {
    id: 9,
    title: "SQL入門",
    icon: "🗄️",
    description: "リレーショナルデータベースの基礎概念とSQLによるデータ操作・集計を学ぶ",
    modules: [
        {
            id: 901,
            title: "データベースの基礎概念とSQL入門",
            duration: "20分",
            content: `
<h2>リレーショナルデータベース（RDBMS）とは</h2>
<p>リレーショナルデータベース（RDBMS: Relational Database Management System）は、データを<strong>テーブル（表）</strong>形式で管理し、テーブル間の<strong>関係（リレーション）</strong>を定義するデータベースです。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
データサイエンティストにとってSQLは必須スキルです。多くの企業データはRDBMSに格納されており、分析の第一歩はSQLでデータを取得することから始まります。
</div>

<h3>テーブル・行・列</h3>
<table>
<thead>
<tr><th>概念</th><th>別名</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>テーブル（Table）</td><td>表、リレーション</td><td>データを格納する表形式の構造</td></tr>
<tr><td>行（Row）</td><td>レコード、タプル</td><td>1件のデータ（横方向）</td></tr>
<tr><td>列（Column）</td><td>フィールド、属性</td><td>データの項目（縦方向）</td></tr>
</tbody>
</table>

<p>例：usersテーブル</p>
<table>
<thead>
<tr><th>user_id</th><th>name</th><th>age</th><th>city</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>田中太郎</td><td>28</td><td>東京</td></tr>
<tr><td>2</td><td>鈴木花子</td><td>35</td><td>大阪</td></tr>
<tr><td>3</td><td>佐藤一郎</td><td>42</td><td>福岡</td></tr>
</tbody>
</table>

<h3>主キーと外部キー</h3>
<table>
<thead>
<tr><th>キーの種類</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>主キー（Primary Key）</td><td>各行を一意に識別する列。重複・NULLは不可</td><td>user_id, order_id</td></tr>
<tr><td>外部キー（Foreign Key）</td><td>他のテーブルの主キーを参照する列。テーブル間の関係を定義</td><td>orders.user_id → users.user_id</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 テーブル間のリレーション</div>
<ul>
<li><strong>1対1</strong>: 1つのユーザーに1つのプロフィール</li>
<li><strong>1対多</strong>: 1人のユーザーが複数の注文を持つ（最も一般的）</li>
<li><strong>多対多</strong>: 学生と科目の関係（中間テーブルで表現）</li>
</ul>
</div>

<h3>主なRDBMS</h3>
<table>
<thead>
<tr><th>RDBMS</th><th>特徴</th><th>用途</th></tr>
</thead>
<tbody>
<tr><td>MySQL</td><td>オープンソース、高速</td><td>Webアプリケーション</td></tr>
<tr><td>PostgreSQL</td><td>高機能、標準準拠</td><td>分析基盤、GIS</td></tr>
<tr><td>SQLite</td><td>軽量、ファイルベース</td><td>組み込み、学習用</td></tr>
<tr><td>BigQuery</td><td>Google Cloud、大規模データ</td><td>データウェアハウス</td></tr>
<tr><td>SQL Server</td><td>Microsoft製、企業向け</td><td>業務システム</td></tr>
</tbody>
</table>

<h3>SQLの基本</h3>
<p>SQL（Structured Query Language）はデータベースを操作するための言語です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- テーブルの全データを取得
SELECT * FROM users;

-- 特定の列のみ取得
SELECT name, age FROM users;

-- 条件を指定して取得
SELECT * FROM users WHERE age >= 30;</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 SQL方言について</div>
<p>SQLの基本構文はどのRDBMSでもほぼ共通ですが、細かい関数や拡張機能は方言（Dialect）と呼ばれる差異があります。例えば、文字列結合がMySQLでは<code>CONCAT()</code>、PostgreSQLでは<code>||</code>演算子です。基本を押さえれば、方言の違いは容易に対応できます。</p>
</div>
`,
            quiz: [
                {
                    id: "q901_1",
                    type: "choice",
                    question: "RDBMSの「R」が表すものはどれですか？",
                    options: ["Rapid", "Real", "Relational", "Remote"],
                    answer: 2,
                    explanation: "RDBMSはRelational Database Management Systemの略で、「R」はRelational（関係）を表します。テーブル間の関係性（リレーション）を定義できることが特徴です。"
                },
                {
                    id: "q901_2",
                    type: "choice",
                    question: "テーブルの各行を一意に識別するためのキーは何ですか？",
                    options: ["外部キー", "候補キー", "主キー", "代替キー"],
                    answer: 2,
                    explanation: "主キー（Primary Key）は各行を一意に識別するための列で、重複値とNULL値は許容されません。"
                },
                {
                    id: "q901_3",
                    type: "choice",
                    question: "1人のユーザーが複数の注文を持つ関係はどのタイプですか？",
                    options: ["1対1", "1対多", "多対多", "自己参照"],
                    answer: 1,
                    explanation: "1人のユーザー（1）が複数の注文（多）を持つ関係は「1対多」のリレーションです。最も一般的なリレーションタイプです。"
                },
                {
                    id: "q901_4",
                    type: "choice",
                    question: "軽量でファイルベースのRDBMSとして学習にも適しているのはどれですか？",
                    options: ["MySQL", "PostgreSQL", "SQLite", "Oracle"],
                    answer: 2,
                    explanation: "SQLiteはサーバー不要の軽量なファイルベースRDBMSで、Pythonに標準搭載されており学習に最適です。"
                },
                {
                    id: "q901_5",
                    type: "fill",
                    question: "他のテーブルの主キーを参照してテーブル間の関係を定義するキーを「______キー」と呼びます。",
                    answer: "外部",
                    explanation: "外部キー（Foreign Key）は他のテーブルの主キーを参照する列で、テーブル間のリレーションを定義します。参照整合性を保証する役割があります。"
                }
            ]
        },
        {
            id: 902,
            title: "SELECT・WHERE・ORDER BY",
            duration: "25分",
            content: `
<h2>SELECT文の基本</h2>
<p>SELECT文はデータベースからデータを取得するための最も基本的なSQL文です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 基本構文
SELECT 列名1, 列名2, ...
FROM テーブル名
WHERE 条件
ORDER BY 列名;

-- 全列を取得
SELECT * FROM employees;

-- 特定の列のみ取得
SELECT name, department, salary FROM employees;

-- 列にエイリアス（別名）を付ける
SELECT name AS 名前, salary AS 給与 FROM employees;</code></pre>
</div>

<h3>DISTINCT（重複の排除）</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 重複を排除して取得
SELECT DISTINCT department FROM employees;

-- 複数列の組み合わせで重複を排除
SELECT DISTINCT department, position FROM employees;</code></pre>
</div>

<h3>WHERE句（条件指定）</h3>
<p>WHERE句でデータの絞り込み条件を指定します。</p>

<table>
<thead>
<tr><th>演算子</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>=</td><td>等しい</td><td>WHERE department = '営業'</td></tr>
<tr><td>!= または <></td><td>等しくない</td><td>WHERE status != '退職'</td></tr>
<tr><td>> , >= , < , <=</td><td>大小比較</td><td>WHERE salary >= 300000</td></tr>
<tr><td>AND</td><td>両方の条件を満たす</td><td>WHERE age >= 20 AND age < 30</td></tr>
<tr><td>OR</td><td>いずれかの条件を満たす</td><td>WHERE city = '東京' OR city = '大阪'</td></tr>
<tr><td>NOT</td><td>条件の否定</td><td>WHERE NOT department = '管理'</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 比較演算子
SELECT * FROM employees WHERE salary >= 400000;

-- AND / OR
SELECT * FROM employees
WHERE department = '営業' AND salary >= 350000;

SELECT * FROM employees
WHERE city = '東京' OR city = '大阪';</code></pre>
</div>

<h3>LIKE（パターンマッチング）</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- % : 任意の0文字以上
SELECT * FROM employees WHERE name LIKE '田中%';    -- 田中で始まる
SELECT * FROM employees WHERE name LIKE '%太郎';    -- 太郎で終わる
SELECT * FROM employees WHERE email LIKE '%@gmail%'; -- gmailを含む

-- _ : 任意の1文字
SELECT * FROM employees WHERE name LIKE '田_太郎';  -- 田○太郎</code></pre>
</div>

<h3>BETWEEN・IN・NULL判定</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- BETWEEN: 範囲指定（両端を含む）
SELECT * FROM employees WHERE salary BETWEEN 300000 AND 500000;

-- IN: 複数値のいずれかに一致
SELECT * FROM employees WHERE department IN ('営業', '企画', 'マーケティング');

-- NULL判定（= ではなく IS を使う）
SELECT * FROM employees WHERE phone IS NULL;      -- NULLのデータ
SELECT * FROM employees WHERE phone IS NOT NULL;   -- NULLでないデータ</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 NULLの注意点</div>
<p>NULLは「値が存在しない」ことを表します。NULLとの比較には<code>=</code>や<code>!=</code>ではなく、<code>IS NULL</code>や<code>IS NOT NULL</code>を使用します。<code>WHERE column = NULL</code>は常にFALSEになるので注意してください。</p>
</div>

<h3>ORDER BY（並び替え）</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 昇順（ASC: デフォルト）
SELECT * FROM employees ORDER BY salary ASC;

-- 降順
SELECT * FROM employees ORDER BY salary DESC;

-- 複数列での並び替え
SELECT * FROM employees ORDER BY department ASC, salary DESC;

-- 取得件数の制限（LIMIT）
SELECT * FROM employees ORDER BY salary DESC LIMIT 10;</code></pre>
</div>
`,
            quiz: [
                {
                    id: "q902_1",
                    type: "choice",
                    question: "SQLで重複を排除してデータを取得するキーワードはどれですか？",
                    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
                    answer: 1,
                    explanation: "DISTINCTキーワードを使うと、重複する行を排除して一意なデータのみを取得できます。"
                },
                {
                    id: "q902_2",
                    type: "choice",
                    question: "NULLのデータを検索する正しい構文はどれですか？",
                    options: [
                        "WHERE column = NULL",
                        "WHERE column IS NULL",
                        "WHERE column == NULL",
                        "WHERE column EQUALS NULL"
                    ],
                    answer: 1,
                    explanation: "NULLとの比較にはIS NULLを使用します。= NULLは常にFALSEを返すため、意図した結果が得られません。"
                },
                {
                    id: "q902_3",
                    type: "choice",
                    question: "LIKE演算子で「任意の0文字以上」を表すワイルドカードはどれですか？",
                    options: ["*", "_", "%", "?"],
                    answer: 2,
                    explanation: "%は任意の0文字以上を表すワイルドカードです。_は任意の1文字を表します。SQLのワイルドカードは他の言語の*や?とは異なります。"
                },
                {
                    id: "q902_4",
                    type: "choice",
                    question: "結果を給与の高い順に並べるSQL文はどれですか？",
                    options: [
                        "ORDER BY salary ASC",
                        "ORDER BY salary DESC",
                        "SORT BY salary HIGH",
                        "ORDER BY salary REVERSE"
                    ],
                    answer: 1,
                    explanation: "ORDER BY salary DESCで給与の降順（高い順）に並べます。ASCは昇順（低い順）でデフォルトです。"
                },
                {
                    id: "q902_5",
                    type: "fill",
                    question: "SQLで指定した範囲内のデータを取得するキーワードは「______」です（両端の値を含む）。",
                    answer: "BETWEEN",
                    explanation: "BETWEENは指定した範囲内（両端を含む）のデータを取得します。WHERE salary BETWEEN 300000 AND 500000 は300000以上500000以下のデータを返します。"
                }
            ]
        },
        {
            id: 903,
            title: "JOIN・サブクエリ",
            duration: "30分",
            content: `
<h2>JOINとは</h2>
<p>JOINは複数のテーブルを結合してデータを取得する操作です。テーブル間の関連する列（通常は主キーと外部キー）を使って結合します。</p>

<h3>JOINの種類</h3>
<table>
<thead>
<tr><th>JOINの種類</th><th>説明</th><th>返される行</th></tr>
</thead>
<tbody>
<tr><td>INNER JOIN</td><td>両方のテーブルに一致する行のみ</td><td>共通部分のみ</td></tr>
<tr><td>LEFT JOIN</td><td>左テーブルの全行 + 一致する右テーブルの行</td><td>左テーブル全行（右がなければNULL）</td></tr>
<tr><td>RIGHT JOIN</td><td>右テーブルの全行 + 一致する左テーブルの行</td><td>右テーブル全行（左がなければNULL）</td></tr>
<tr><td>FULL OUTER JOIN</td><td>両テーブルの全行</td><td>全行（一致しない場合はNULL）</td></tr>
</tbody>
</table>

<h3>INNER JOIN</h3>
<p>両方のテーブルで一致するデータのみを取得します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- ユーザーと注文を結合（注文のあるユーザーのみ）
SELECT
    u.name,
    u.city,
    o.order_id,
    o.order_date,
    o.amount
FROM users u
INNER JOIN orders o ON u.user_id = o.user_id;</code></pre>
</div>

<h3>LEFT JOIN</h3>
<p>左テーブルの全行を保持し、右テーブルに一致がない場合はNULLで埋めます。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 全ユーザー + 注文情報（注文がないユーザーも含む）
SELECT
    u.name,
    u.city,
    o.order_id,
    o.amount
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id;

-- 注文のないユーザーだけを取得
SELECT u.name, u.city
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
WHERE o.order_id IS NULL;</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 JOINの使い分け</div>
<ul>
<li><strong>INNER JOIN</strong>: 両方のテーブルにデータがあるものだけが欲しい場合</li>
<li><strong>LEFT JOIN</strong>: 左テーブルのデータは全て残したい場合（最も頻繁に使用）</li>
<li><strong>RIGHT JOIN</strong>: LEFT JOINでテーブル順を入れ替えれば同じ結果が得られるため、あまり使われない</li>
<li><strong>FULL OUTER JOIN</strong>: 両テーブルの全データを結合したい場合（データの欠落確認等）</li>
</ul>
</div>

<h3>複数テーブルのJOIN</h3>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 3つのテーブルを結合
SELECT
    u.name AS ユーザー名,
    o.order_date AS 注文日,
    p.product_name AS 商品名,
    oi.quantity AS 数量,
    oi.price AS 単価
FROM users u
INNER JOIN orders o ON u.user_id = o.user_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id;</code></pre>
</div>

<h3>サブクエリ</h3>
<p>サブクエリはSQL文の中に埋め込まれた別のSELECT文です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- WHERE句でのサブクエリ
-- 平均給与より高い社員を取得
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- IN句でのサブクエリ
-- 注文のあるユーザーを取得
SELECT name, city
FROM users
WHERE user_id IN (SELECT DISTINCT user_id FROM orders);

-- FROM句でのサブクエリ（導出テーブル）
SELECT department, avg_salary
FROM (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_avg
WHERE avg_salary > 400000;</code></pre>
</div>

<h3>EXISTS</h3>
<p>EXISTSはサブクエリの結果が存在するかを確認する演算子です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 注文実績のあるユーザーを取得
SELECT u.name, u.city
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.user_id
);</code></pre>
</div>

<h3>UNION</h3>
<p>UNIONは複数のSELECT文の結果を縦に結合します。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 2つのテーブルのデータを結合（重複排除）
SELECT name, email FROM customers
UNION
SELECT name, email FROM suppliers;

-- 重複を残す場合
SELECT name, email FROM customers
UNION ALL
SELECT name, email FROM suppliers;</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 UNION vs UNION ALL</div>
<ul>
<li><strong>UNION</strong>: 重複行を自動的に排除する（内部でDISTINCT処理）</li>
<li><strong>UNION ALL</strong>: 重複行も全て残す（パフォーマンスが良い）</li>
<li>重複がないことが確実な場合はUNION ALLを使う方が効率的です</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q903_1",
                    type: "choice",
                    question: "両方のテーブルで一致するデータのみを取得するJOINはどれですか？",
                    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
                    answer: 2,
                    explanation: "INNER JOINは結合条件に一致する行のみを返します。どちらかのテーブルにしかないデータは結果に含まれません。"
                },
                {
                    id: "q903_2",
                    type: "choice",
                    question: "LEFT JOINで右テーブルに一致するデータがない場合、右テーブルの列にはどの値が入りますか？",
                    options: ["0", "空文字", "NULL", "エラーになる"],
                    answer: 2,
                    explanation: "LEFT JOINでは左テーブルの全行を保持し、右テーブルに一致がない場合はNULLで埋められます。"
                },
                {
                    id: "q903_3",
                    type: "choice",
                    question: "サブクエリの結果が存在するかどうかを確認する演算子はどれですか？",
                    options: ["IN", "EXISTS", "HAVING", "ANY"],
                    answer: 1,
                    explanation: "EXISTSはサブクエリの結果が1行以上存在するかを確認します。存在すればTRUE、存在しなければFALSEを返します。"
                },
                {
                    id: "q903_4",
                    type: "choice",
                    question: "UNION ALLとUNIONの違いとして正しいものはどれですか？",
                    options: [
                        "UNION ALLは重複を排除し、UNIONは重複を残す",
                        "UNION ALLは重複を残し、UNIONは重複を排除する",
                        "機能的な違いはない",
                        "UNION ALLは3つ以上のテーブルを結合できる"
                    ],
                    answer: 1,
                    explanation: "UNIONは自動的に重複行を排除しますが、UNION ALLは重複行もそのまま残します。重複がないことが確実な場合はUNION ALLの方がパフォーマンスが良いです。"
                },
                {
                    id: "q903_5",
                    type: "fill",
                    question: "LEFT JOINで結合条件を指定するキーワードは「______」です。",
                    answer: "ON",
                    explanation: "JOINの結合条件はONキーワードで指定します。例: LEFT JOIN orders ON users.user_id = orders.user_id"
                }
            ]
        },
        {
            id: 904,
            title: "GROUP BY・集約関数",
            duration: "30分",
            content: `
<h2>集約関数</h2>
<p>集約関数は複数の行をまとめて1つの値を計算する関数です。</p>

<table>
<thead>
<tr><th>関数</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>COUNT()</td><td>行数を数える</td><td>COUNT(*), COUNT(column)</td></tr>
<tr><td>SUM()</td><td>合計を計算</td><td>SUM(salary)</td></tr>
<tr><td>AVG()</td><td>平均を計算</td><td>AVG(age)</td></tr>
<tr><td>MIN()</td><td>最小値を取得</td><td>MIN(price)</td></tr>
<tr><td>MAX()</td><td>最大値を取得</td><td>MAX(score)</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 基本的な集約
SELECT
    COUNT(*) AS 従業員数,
    AVG(salary) AS 平均給与,
    MIN(salary) AS 最低給与,
    MAX(salary) AS 最高給与,
    SUM(salary) AS 給与合計
FROM employees;</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 COUNT(*) と COUNT(column) の違い</div>
<ul>
<li><code>COUNT(*)</code>: NULL含む全行をカウント</li>
<li><code>COUNT(column)</code>: 指定列がNULLでない行のみカウント</li>
<li><code>COUNT(DISTINCT column)</code>: 重複を排除してカウント</li>
</ul>
</div>

<h3>GROUP BY</h3>
<p>GROUP BYは指定した列の値でグループ化し、グループごとに集約計算を行います。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 部門ごとの集計
SELECT
    department,
    COUNT(*) AS 人数,
    AVG(salary) AS 平均給与,
    MAX(salary) AS 最高給与
FROM employees
GROUP BY department;

-- 複数列でグループ化
SELECT
    department,
    position,
    COUNT(*) AS 人数,
    AVG(salary) AS 平均給与
FROM employees
GROUP BY department, position
ORDER BY department, AVG(salary) DESC;</code></pre>
</div>

<h3>HAVING</h3>
<p>HAVINGはGROUP BYの結果に対して条件を指定するために使用します。WHERE句は集約前のフィルタ、HAVINGは集約後のフィルタです。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- 5人以上の部門のみ表示
SELECT
    department,
    COUNT(*) AS 人数,
    AVG(salary) AS 平均給与
FROM employees
GROUP BY department
HAVING COUNT(*) >= 5;

-- WHERE と HAVING の組み合わせ
SELECT
    department,
    COUNT(*) AS 人数,
    AVG(salary) AS 平均給与
FROM employees
WHERE hire_date >= '2020-01-01'   -- 集約前の行フィルタ
GROUP BY department
HAVING AVG(salary) > 400000       -- 集約後のグループフィルタ
ORDER BY 平均給与 DESC;</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 SQLの実行順序</div>
<p>SQL文は記述順とは異なる順序で実行されます。</p>
<ol>
<li>FROM（テーブルの指定）</li>
<li>WHERE（行の絞り込み）</li>
<li>GROUP BY（グループ化）</li>
<li>HAVING（グループの絞り込み）</li>
<li>SELECT（列の選択・計算）</li>
<li>ORDER BY（並び替え）</li>
<li>LIMIT（件数制限）</li>
</ol>
</div>

<h3>ウィンドウ関数入門</h3>
<p>ウィンドウ関数は、集約しつつも元の行を保持できる強力な機能です。</p>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- ROW_NUMBER: 連番を付ける
SELECT
    name,
    department,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS 全体順位,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS 部門内順位
FROM employees;

-- RANK: 同順位あり（次の順位をスキップ）
SELECT
    name,
    department,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS 順位
FROM employees;

-- DENSE_RANK: 同順位あり（次の順位をスキップしない）
SELECT
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank_順位,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_順位
FROM employees;</code></pre>
</div>

<table>
<thead>
<tr><th>関数</th><th>説明</th><th>例（同点あり）</th></tr>
</thead>
<tbody>
<tr><td>ROW_NUMBER()</td><td>一意な連番</td><td>1, 2, 3, 4, 5</td></tr>
<tr><td>RANK()</td><td>同順位あり、次をスキップ</td><td>1, 2, 2, 4, 5</td></tr>
<tr><td>DENSE_RANK()</td><td>同順位あり、次をスキップしない</td><td>1, 2, 2, 3, 4</td></tr>
</tbody>
</table>

<div class="code-block">
<div class="code-block-header"><span class="code-lang">SQL</span></div>
<pre><code class="language-sql">-- ウィンドウ関数で累積合計・移動平均
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS 累積合計,
    AVG(amount) OVER (ORDER BY order_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS 移動平均3日
FROM daily_sales;</code></pre>
</div>

<div class="info-box tip">
<div class="info-box-title">💡 ウィンドウ関数の構文</div>
<p><code>関数() OVER (PARTITION BY 分割列 ORDER BY 並び替え列)</code></p>
<ul>
<li><strong>PARTITION BY</strong>: グループの分割単位（省略すると全体が1グループ）</li>
<li><strong>ORDER BY</strong>: ウィンドウ内の並び順</li>
<li>GROUP BYとの違い: ウィンドウ関数は行を集約せずに保持する</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q904_1",
                    type: "choice",
                    question: "GROUP BYの結果に対して条件を指定するキーワードはどれですか？",
                    options: ["WHERE", "HAVING", "FILTER", "CONDITION"],
                    answer: 1,
                    explanation: "HAVINGはGROUP BYで集約した後の結果に対して条件を指定します。WHEREは集約前の行に対するフィルタです。"
                },
                {
                    id: "q904_2",
                    type: "choice",
                    question: "COUNT(*)とCOUNT(column)の違いとして正しいものはどれですか？",
                    options: [
                        "違いはない",
                        "COUNT(*)はNULLを含む全行、COUNT(column)はNULL以外をカウント",
                        "COUNT(*)は高速、COUNT(column)は低速",
                        "COUNT(column)はNULLを含む全行をカウント"
                    ],
                    answer: 1,
                    explanation: "COUNT(*)はNULLを含む全行をカウントしますが、COUNT(column)は指定した列がNULLでない行のみをカウントします。"
                },
                {
                    id: "q904_3",
                    type: "choice",
                    question: "SQLの実行順序として正しいものはどれですか？",
                    options: [
                        "SELECT → FROM → WHERE → GROUP BY",
                        "FROM → WHERE → GROUP BY → SELECT",
                        "FROM → SELECT → WHERE → GROUP BY",
                        "SELECT → WHERE → FROM → GROUP BY"
                    ],
                    answer: 1,
                    explanation: "SQLの実行順序はFROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMITです。SELECTは比較的後で実行されます。"
                },
                {
                    id: "q904_4",
                    type: "choice",
                    question: "RANK()で同順位がある場合、次の順位はどうなりますか？",
                    options: [
                        "次の連番が付く（1,2,2,3）",
                        "スキップされる（1,2,2,4）",
                        "同じ順位が繰り返される（1,2,2,2）",
                        "エラーになる"
                    ],
                    answer: 1,
                    explanation: "RANK()は同順位がある場合、次の順位をスキップします（例: 1,2,2,4）。スキップしない場合はDENSE_RANK()（1,2,2,3）を使います。"
                },
                {
                    id: "q904_5",
                    type: "fill",
                    question: "ウィンドウ関数でグループの分割単位を指定するキーワードは「______ BY」です。",
                    answer: "PARTITION",
                    explanation: "PARTITION BYはウィンドウ関数でデータを分割するグループを指定します。GROUP BYとは異なり、行を集約せずに各行に計算結果を付与します。"
                }
            ]
        }
    ]
};
