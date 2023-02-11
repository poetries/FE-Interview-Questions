(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1121:function(a,t,s){"use strict";s.r(t);var r=s(69),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"一、索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、索引"}},[a._v("#")]),a._v(" 一、索引")]),a._v(" "),s("h2",{attrs:{id:"b-tree-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-原理"}},[a._v("#")]),a._v(" B+ Tree 原理")]),a._v(" "),s("h3",{attrs:{id:"_1-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据结构"}},[a._v("#")]),a._v(" 1. 数据结构")]),a._v(" "),s("p",[a._v("B Tree 指的是 Balance Tree，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。")]),a._v(" "),s("p",[a._v("B+ Tree 是基于 B Tree 和叶子节点顺序访问指针进行实现，它具有 B Tree 的平衡性，并且通过顺序访问指针来提高区间查询的性能。")]),a._v(" "),s("p",[a._v("在 B+ Tree 中，一个节点中的 key 从左到右非递减排列，如果某个指针的左右相邻 key 分别是 key"),s("sub",[a._v("i")]),a._v(" 和 key"),s("sub",[a._v("i+1")]),a._v("，且不为 null，则该指针指向节点的所有 key 大于等于 key"),s("sub",[a._v("i")]),a._v(" 且小于等于 key"),s("sub",[a._v("i+1")]),a._v("。")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://s.poetries.work/cos/202203272133474.png",width:"350px"}})]),s("br"),a._v(" "),s("h3",{attrs:{id:"_2-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作"}},[a._v("#")]),a._v(" 2. 操作")]),a._v(" "),s("p",[a._v("进行查找操作时，首先在根节点进行二分查找，找到一个 key 所在的指针，然后递归地在指针所指向的节点进行查找。直到查找到叶子节点，然后在叶子节点上进行二分查找，找出 key 所对应的 data。")]),a._v(" "),s("p",[a._v("插入删除操作会破坏平衡树的平衡性，因此在进行插入删除操作之后，需要对树进行分裂、合并、旋转等操作来维护平衡性。")]),a._v(" "),s("h3",{attrs:{id:"_3-与红黑树的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-与红黑树的比较"}},[a._v("#")]),a._v(" 3. 与红黑树的比较")]),a._v(" "),s("p",[a._v("红黑树等平衡树也可以用来实现索引，但是文件系统及数据库系统普遍采用 B+ Tree 作为索引结构，这是因为使用 B+ 树访问磁盘数据有更高的性能。")]),a._v(" "),s("p",[a._v("（一）B+ 树有更低的树高")]),a._v(" "),s("p",[a._v("平衡树的树高 O(h)=O(log"),s("sub",[a._v("d")]),a._v("N)，其中 d 为每个节点的出度。红黑树的出度为 2，而 B+ Tree 的出度一般都非常大，所以红黑树的树高 h 很明显比 B+ Tree 大非常多。")]),a._v(" "),s("p",[a._v("（二）磁盘访问原理")]),a._v(" "),s("p",[a._v("操作系统一般将内存和磁盘分割成固定大小的块，每一块称为一页，内存与磁盘以页为单位交换数据。数据库系统将索引的一个节点的大小设置为页的大小，使得一次 I/O 就能完全载入一个节点。")]),a._v(" "),s("p",[a._v("如果数据不在同一个磁盘块上，那么通常需要移动制动手臂进行寻道，而制动手臂因为其物理结构导致了移动效率低下，从而增加磁盘数据读取时间。B+ 树相对于红黑树有更低的树高，进行寻道的次数与树高成正比，在同一个磁盘块上进行访问只需要很短的磁盘旋转时间，所以 B+ 树更适合磁盘数据的读取。")]),a._v(" "),s("p",[a._v("（三）磁盘预读特性")]),a._v(" "),s("p",[a._v("为了减少磁盘 I/O 操作，磁盘往往不是严格按需读取，而是每次都会预读。预读过程中，磁盘进行顺序读取，顺序读取不需要进行磁盘寻道，并且只需要很短的磁盘旋转时间，速度会非常快。并且可以利用预读特性，相邻的节点也能够被预先载入。")]),a._v(" "),s("h2",{attrs:{id:"mysql-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引"}},[a._v("#")]),a._v(" MySQL 索引")]),a._v(" "),s("p",[a._v("索引是在存储引擎层实现的，而不是在服务器层实现的，所以不同存储引擎具有不同的索引类型和实现。")]),a._v(" "),s("h3",{attrs:{id:"_1-b-tree-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-b-tree-索引"}},[a._v("#")]),a._v(" 1. B+Tree 索引")]),a._v(" "),s("p",[a._v("是大多数 MySQL 存储引擎的默认索引类型。")]),a._v(" "),s("p",[a._v("因为不再需要进行全表扫描，只需要对树进行搜索即可，所以查找速度快很多。")]),a._v(" "),s("p",[a._v("因为 B+ Tree 的有序性，所以除了用于查找，还可以用于排序和分组。")]),a._v(" "),s("p",[a._v("可以指定多个列作为索引列，多个索引列共同组成键。")]),a._v(" "),s("p",[a._v("适用于全键值、键值范围和键前缀查找，其中键前缀查找只适用于最左前缀查找。如果不是按照索引列的顺序进行查找，则无法使用索引。")]),a._v(" "),s("p",[a._v("InnoDB 的 B+Tree 索引分为主索引和辅助索引。主索引的叶子节点 data 域记录着完整的数据记录，这种索引方式被称为聚簇索引。因为无法把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://s.poetries.work/cos/202203272133614.png",width:"350px"}})]),s("br"),a._v(" "),s("p",[a._v("辅助索引的叶子节点的 data 域记录着主键的值，因此在使用辅助索引进行查找时，需要先查找到主键值，然后再到主索引中进行查找。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/cos/202203272133954.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"_2-哈希索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-哈希索引"}},[a._v("#")]),a._v(" 2. 哈希索引")]),a._v(" "),s("p",[a._v("哈希索引能以 O(1) 时间进行查找，但是失去了有序性：")]),a._v(" "),s("ul",[s("li",[a._v("无法用于排序与分组；")]),a._v(" "),s("li",[a._v("只支持精确查找，无法用于部分查找和范围查找。")])]),a._v(" "),s("p",[a._v("InnoDB 存储引擎有一个特殊的功能叫“自适应哈希索引”，当某个索引值被使用的非常频繁时，会在 B+Tree 索引之上再创建一个哈希索引，这样就让 B+Tree 索引具有哈希索引的一些优点，比如快速的哈希查找。")]),a._v(" "),s("h3",{attrs:{id:"_3-全文索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-全文索引"}},[a._v("#")]),a._v(" 3. 全文索引")]),a._v(" "),s("p",[a._v("MyISAM 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。")]),a._v(" "),s("p",[a._v("查找条件使用 MATCH AGAINST，而不是普通的 WHERE。")]),a._v(" "),s("p",[a._v("全文索引使用倒排索引实现，它记录着关键词到其所在文档的映射。")]),a._v(" "),s("p",[a._v("InnoDB 存储引擎在 MySQL 5.6.4 版本中也开始支持全文索引。")]),a._v(" "),s("h3",{attrs:{id:"_4-空间数据索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-空间数据索引"}},[a._v("#")]),a._v(" 4. 空间数据索引")]),a._v(" "),s("p",[a._v("MyISAM 存储引擎支持空间数据索引（R-Tree），可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。")]),a._v(" "),s("p",[a._v("必须使用 GIS 相关的函数来维护数据。")]),a._v(" "),s("h2",{attrs:{id:"索引优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引优化"}},[a._v("#")]),a._v(" 索引优化")]),a._v(" "),s("h3",{attrs:{id:"_1-独立的列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-独立的列"}},[a._v("#")]),a._v(" 1. 独立的列")]),a._v(" "),s("p",[a._v("在进行查询时，索引列不能是表达式的一部分，也不能是函数的参数，否则无法使用索引。")]),a._v(" "),s("p",[a._v("例如下面的查询不能使用 actor_id 列的索引：")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" actor_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" sakila"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("actor "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" actor_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-多列索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-多列索引"}},[a._v("#")]),a._v(" 2. 多列索引")]),a._v(" "),s("p",[a._v("在需要使用多个列作为条件进行查询时，使用多列索引比使用多个单列索引性能更好。例如下面的语句中，最好把 actor_id 和 film_id 设置为多列索引。")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" film_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" actor_ id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" sakila"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("film_actor\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" actor_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("AND")]),a._v(" film_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-索引列的顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引列的顺序"}},[a._v("#")]),a._v(" 3. 索引列的顺序")]),a._v(" "),s("p",[a._v("让选择性最强的索引列放在前面。")]),a._v(" "),s("p",[a._v("索引的选择性是指：不重复的索引值和记录总数的比值。最大值为 1，此时每个记录都有唯一的索引与其对应。选择性越高，每个记录的区分度越高，查询效率也越高。")]),a._v(" "),s("p",[a._v("例如下面显示的结果中 customer_id 的选择性比 staff_id 更高，因此最好把 customer_id 列放在多列索引的前面。")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DISTINCT")]),a._v(" staff_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" staff_id_selectivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DISTINCT")]),a._v(" customer_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" customer_id_selectivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("   staff_id_selectivity: 0.0001\ncustomer_id_selectivity: 0.0373\n               COUNT(*): 16049\n")])])]),s("h3",{attrs:{id:"_4-前缀索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-前缀索引"}},[a._v("#")]),a._v(" 4. 前缀索引")]),a._v(" "),s("p",[a._v("对于 BLOB、TEXT 和 VARCHAR 类型的列，必须使用前缀索引，只索引开始的部分字符。")]),a._v(" "),s("p",[a._v("前缀长度的选取需要根据索引选择性来确定。")]),a._v(" "),s("h3",{attrs:{id:"_5-覆盖索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-覆盖索引"}},[a._v("#")]),a._v(" 5. 覆盖索引")]),a._v(" "),s("p",[a._v("索引包含所有需要查询的字段的值。")]),a._v(" "),s("p",[a._v("具有以下优点：")]),a._v(" "),s("ul",[s("li",[a._v("索引通常远小于数据行的大小，只读取索引能大大减少数据访问量。")]),a._v(" "),s("li",[a._v("一些存储引擎（例如 MyISAM）在内存中只缓存索引，而数据依赖于操作系统来缓存。因此，只访问索引可以不使用系统调用（通常比较费时）。")]),a._v(" "),s("li",[a._v("对于 InnoDB 引擎，若辅助索引能够覆盖查询，则无需访问主索引。")])]),a._v(" "),s("h2",{attrs:{id:"索引的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的优点"}},[a._v("#")]),a._v(" 索引的优点")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("大大减少了服务器需要扫描的数据行数。")])]),a._v(" "),s("li",[s("p",[a._v("帮助服务器避免进行排序和分组，以及避免创建临时表（B+Tree 索引是有序的，可以用于 ORDER BY 和 GROUP BY 操作。临时表主要是在排序和分组过程中创建，不需要排序和分组，也就不需要创建临时表）。")])]),a._v(" "),s("li",[s("p",[a._v("将随机 I/O 变为顺序 I/O（B+Tree 索引是有序的，会将相邻的数据都存储在一起）。")])])]),a._v(" "),s("h2",{attrs:{id:"索引的使用条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的使用条件"}},[a._v("#")]),a._v(" 索引的使用条件")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("对于非常小的表、大部分情况下简单的全表扫描比建立索引更高效；")])]),a._v(" "),s("li",[s("p",[a._v("对于中到大型的表，索引就非常有效；")])]),a._v(" "),s("li",[s("p",[a._v("但是对于特大型的表，建立和维护索引的代价将会随之增长。这种情况下，需要用到一种技术可以直接区分出需要查询的一组数据，而不是一条记录一条记录地匹配，例如可以使用分区技术。")])])]),a._v(" "),s("h1",{attrs:{id:"二、查询性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、查询性能优化"}},[a._v("#")]),a._v(" 二、查询性能优化")]),a._v(" "),s("h2",{attrs:{id:"使用-explain-进行分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-explain-进行分析"}},[a._v("#")]),a._v(" 使用 Explain 进行分析")]),a._v(" "),s("p",[a._v("Explain 用来分析 SELECT 查询语句，开发人员可以通过分析 Explain 结果来优化查询语句。")]),a._v(" "),s("p",[a._v("比较重要的字段有：")]),a._v(" "),s("ul",[s("li",[a._v("select_type : 查询类型，有简单查询、联合查询、子查询等")]),a._v(" "),s("li",[a._v("key : 使用的索引")]),a._v(" "),s("li",[a._v("rows : 扫描的行数")])]),a._v(" "),s("h2",{attrs:{id:"优化数据访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化数据访问"}},[a._v("#")]),a._v(" 优化数据访问")]),a._v(" "),s("h3",{attrs:{id:"_1-减少请求的数据量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-减少请求的数据量"}},[a._v("#")]),a._v(" 1. 减少请求的数据量")]),a._v(" "),s("ul",[s("li",[a._v("只返回必要的列：最好不要使用 SELECT * 语句。")]),a._v(" "),s("li",[a._v("只返回必要的行：使用 LIMIT 语句来限制返回的数据。")]),a._v(" "),s("li",[a._v("缓存重复查询的数据：使用缓存可以避免在数据库中进行查询，特别在要查询的数据经常被重复查询时，缓存带来的查询性能提升将会是非常明显的。")])]),a._v(" "),s("h3",{attrs:{id:"_2-减少服务器端扫描的行数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-减少服务器端扫描的行数"}},[a._v("#")]),a._v(" 2. 减少服务器端扫描的行数")]),a._v(" "),s("p",[a._v("最有效的方式是使用索引来覆盖查询。")]),a._v(" "),s("h2",{attrs:{id:"重构查询方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重构查询方式"}},[a._v("#")]),a._v(" 重构查询方式")]),a._v(" "),s("h3",{attrs:{id:"_1-切分大查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-切分大查询"}},[a._v("#")]),a._v(" 1. 切分大查询")]),a._v(" "),s("p",[a._v("一个大查询如果一次性执行的话，可能一次锁住很多数据、占满整个事务日志、耗尽系统资源、阻塞很多小的但重要的查询。")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DELETE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" messages "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" DATE_SUB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("NOW")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTERVAL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MONTH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("rows_affected "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" {\n    rows_affected "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" do_query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"DELETE FROM messages WHERE create  < DATE_SUB(NOW(), INTERVAL 3 MONTH) LIMIT 10000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n} "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" rows_affected "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-分解大连接查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-分解大连接查询"}},[a._v("#")]),a._v(" 2. 分解大连接查询")]),a._v(" "),s("p",[a._v("将一个大连接查询分解成对每一个表进行一次单表查询，然后在应用程序中进行关联，这样做的好处有：")]),a._v(" "),s("ul",[s("li",[a._v("让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。")]),a._v(" "),s("li",[a._v("分解成多个单表查询，这些单表查询的缓存结果更可能被其它查询使用到，从而减少冗余记录的查询。")]),a._v(" "),s("li",[a._v("减少锁竞争；")]),a._v(" "),s("li",[a._v("在应用层进行连接，可以更容易对数据库进行拆分，从而更容易做到高性能和可伸缩。")]),a._v(" "),s("li",[a._v("查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" tag\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" tag_post "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" tag_post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tag_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("id\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" post "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" tag_post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("post_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("id\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mysql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mysql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" tag_post "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" tag_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1234")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" post "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("IN")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("567")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9098")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8904")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h1",{attrs:{id:"三、存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、存储引擎"}},[a._v("#")]),a._v(" 三、存储引擎")]),a._v(" "),s("h2",{attrs:{id:"innodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[a._v("#")]),a._v(" InnoDB")]),a._v(" "),s("p",[a._v("是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。")]),a._v(" "),s("p",[a._v("实现了四个标准的隔离级别，默认级别是可重复读（REPEATABLE READ）。在可重复读隔离级别下，通过多版本并发控制（MVCC）+ Next-Key Locking 防止幻影读。")]),a._v(" "),s("p",[a._v("主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。")]),a._v(" "),s("p",[a._v("内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。")]),a._v(" "),s("p",[a._v("支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。")]),a._v(" "),s("h2",{attrs:{id:"myisam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[a._v("#")]),a._v(" MyISAM")]),a._v(" "),s("p",[a._v("设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。")]),a._v(" "),s("p",[a._v("提供了大量的特性，包括压缩表、空间数据索引等。")]),a._v(" "),s("p",[a._v("不支持事务。")]),a._v(" "),s("p",[a._v("不支持行级锁，只能对整张表加锁，读取时会对需要读到的所有表加共享锁，写入时则对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发插入（CONCURRENT INSERT）。")]),a._v(" "),s("p",[a._v("可以手工或者自动执行检查和修复操作，但是和事务恢复以及崩溃恢复不同，可能导致一些数据丢失，而且修复操作是非常慢的。")]),a._v(" "),s("p",[a._v("如果指定了 DELAY_KEY_WRITE 选项，在每次修改执行完成时，不会立即将修改的索引数据写入磁盘，而是会写到内存中的键缓冲区，只有在清理键缓冲区或者关闭表的时候才会将对应的索引块写入磁盘。这种方式可以极大的提升写入性能，但是在数据库或者主机崩溃时会造成索引损坏，需要执行修复操作。")]),a._v(" "),s("h2",{attrs:{id:"比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[a._v("#")]),a._v(" 比较")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("事务：InnoDB 是事务型的，可以使用 Commit 和 Rollback 语句。")])]),a._v(" "),s("li",[s("p",[a._v("并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。")])]),a._v(" "),s("li",[s("p",[a._v("外键：InnoDB 支持外键。")])]),a._v(" "),s("li",[s("p",[a._v("备份：InnoDB 支持在线热备份。")])]),a._v(" "),s("li",[s("p",[a._v("崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。")])]),a._v(" "),s("li",[s("p",[a._v("其它特性：MyISAM 支持压缩表和空间数据索引。")])])]),a._v(" "),s("h1",{attrs:{id:"四、数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、数据类型"}},[a._v("#")]),a._v(" 四、数据类型")]),a._v(" "),s("h2",{attrs:{id:"整型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[a._v("#")]),a._v(" 整型")]),a._v(" "),s("p",[a._v("TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT 分别使用 8, 16, 24, 32, 64 位存储空间，一般情况下越小的列越好。")]),a._v(" "),s("p",[a._v("INT(11) 中的数字只是规定了交互工具显示字符的个数，对于存储和计算来说是没有意义的。")]),a._v(" "),s("h2",{attrs:{id:"浮点数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮点数"}},[a._v("#")]),a._v(" 浮点数")]),a._v(" "),s("p",[a._v("FLOAT 和 DOUBLE 为浮点类型，DECIMAL 为高精度小数类型。CPU 原生支持浮点运算，但是不支持 DECIMAl 类型的计算，因此 DECIMAL 的计算比浮点类型需要更高的代价。")]),a._v(" "),s("p",[a._v("FLOAT、DOUBLE 和 DECIMAL 都可以指定列宽，例如 DECIMAL(18, 9) 表示总共 18 位，取 9 位存储小数部分，剩下 9 位存储整数部分。")]),a._v(" "),s("h2",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[a._v("#")]),a._v(" 字符串")]),a._v(" "),s("p",[a._v("主要有 CHAR 和 VARCHAR 两种类型，一种是定长的，一种是变长的。")]),a._v(" "),s("p",[a._v("VARCHAR 这种变长类型能够节省空间，因为只需要存储必要的内容。但是在执行 UPDATE 时可能会使行变得比原来长，当超出一个页所能容纳的大小时，就要执行额外的操作。MyISAM 会将行拆成不同的片段存储，而 InnoDB 则需要分裂页来使行放进页内。")]),a._v(" "),s("p",[a._v("在进行存储和检索时，会保留 VARCHAR 末尾的空格，而会删除 CHAR 末尾的空格。")]),a._v(" "),s("h2",{attrs:{id:"时间和日期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间和日期"}},[a._v("#")]),a._v(" 时间和日期")]),a._v(" "),s("p",[a._v("MySQL 提供了两种相似的日期时间类型：DATETIME 和 TIMESTAMP。")]),a._v(" "),s("h3",{attrs:{id:"_1-datetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-datetime"}},[a._v("#")]),a._v(" 1. DATETIME")]),a._v(" "),s("p",[a._v("能够保存从 1000 年到 9999 年的日期和时间，精度为秒，使用 8 字节的存储空间。")]),a._v(" "),s("p",[a._v("它与时区无关。")]),a._v(" "),s("p",[a._v("默认情况下，MySQL 以一种可排序的、无歧义的格式显示 DATETIME 值，例如“2008-01-16 22"),s("span",[a._v(":")]),a._v("37"),s("span",[a._v(":")]),a._v("08”，这是 ANSI 标准定义的日期和时间表示方法。")]),a._v(" "),s("h3",{attrs:{id:"_2-timestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-timestamp"}},[a._v("#")]),a._v(" 2. TIMESTAMP")]),a._v(" "),s("p",[a._v("和 UNIX 时间戳相同，保存从 1970 年 1 月 1 日午夜（格林威治时间）以来的秒数，使用 4 个字节，只能表示从 1970 年到 2038 年。")]),a._v(" "),s("p",[a._v("它和时区有关，也就是说一个时间戳在不同的时区所代表的具体时间是不同的。")]),a._v(" "),s("p",[a._v("MySQL 提供了 FROM_UNIXTIME() 函数把 UNIX 时间戳转换为日期，并提供了 UNIX_TIMESTAMP() 函数把日期转换为 UNIX 时间戳。")]),a._v(" "),s("p",[a._v("默认情况下，如果插入时没有指定 TIMESTAMP 列的值，会将这个值设置为当前时间。")]),a._v(" "),s("p",[a._v("应该尽量使用 TIMESTAMP，因为它比 DATETIME 空间效率更高。")]),a._v(" "),s("h1",{attrs:{id:"五、切分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、切分"}},[a._v("#")]),a._v(" 五、切分")]),a._v(" "),s("h2",{attrs:{id:"水平切分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平切分"}},[a._v("#")]),a._v(" 水平切分")]),a._v(" "),s("p",[a._v("水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。")]),a._v(" "),s("p",[a._v("当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓存单个数据库的压力。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/cos/202203272134396.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"垂直切分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直切分"}},[a._v("#")]),a._v(" 垂直切分")]),a._v(" "),s("p",[a._v("垂直切分是将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。")]),a._v(" "),s("p",[a._v("在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将原来的电商数据库垂直切分成商品数据库、用户数据库等。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/cos/202203272134223.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"sharding-策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharding-策略"}},[a._v("#")]),a._v(" Sharding 策略")]),a._v(" "),s("ul",[s("li",[a._v("哈希取模：hash(key) % N；")]),a._v(" "),s("li",[a._v("范围：可以是 ID 范围也可以是时间范围；")]),a._v(" "),s("li",[a._v("映射表：使用单独的一个数据库来存储映射关系。")])]),a._v(" "),s("h2",{attrs:{id:"sharding-存在的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharding-存在的问题"}},[a._v("#")]),a._v(" Sharding 存在的问题")]),a._v(" "),s("h3",{attrs:{id:"_1-事务问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务问题"}},[a._v("#")]),a._v(" 1. 事务问题")]),a._v(" "),s("p",[a._v("使用分布式事务来解决，比如 XA 接口。")]),a._v(" "),s("h3",{attrs:{id:"_2-连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-连接"}},[a._v("#")]),a._v(" 2. 连接")]),a._v(" "),s("p",[a._v("可以将原来的连接分解成多个单表查询，然后在用户程序中进行连接。")]),a._v(" "),s("h3",{attrs:{id:"_3-id-唯一性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-id-唯一性"}},[a._v("#")]),a._v(" 3. ID 唯一性")]),a._v(" "),s("ul",[s("li",[a._v("使用全局唯一 ID（GUID）")]),a._v(" "),s("li",[a._v("为每个分片指定一个 ID 范围")]),a._v(" "),s("li",[a._v("分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)")])]),a._v(" "),s("h1",{attrs:{id:"六、复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、复制"}},[a._v("#")]),a._v(" 六、复制")]),a._v(" "),s("h2",{attrs:{id:"主从复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[a._v("#")]),a._v(" 主从复制")]),a._v(" "),s("p",[a._v("主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("binlog 线程")]),a._v("  ：负责将主服务器上的数据更改写入二进制日志（Binary log）中。")]),a._v(" "),s("li",[s("strong",[a._v("I/O 线程")]),a._v("  ：负责从主服务器上读取二进制日志，并写入从服务器的中继日志（Relay log）。")]),a._v(" "),s("li",[s("strong",[a._v("SQL 线程")]),a._v("  ：负责读取中继日志，解析出主服务器已经执行的数据更改并在从服务器中重放（Replay）。")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/cos/202203272134355.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[a._v("#")]),a._v(" 读写分离")]),a._v(" "),s("p",[a._v("主服务器处理写操作以及实时性要求比较高的读操作，而从服务器处理读操作。")]),a._v(" "),s("p",[a._v("读写分离能提高性能的原因在于：")]),a._v(" "),s("ul",[s("li",[a._v("主从服务器负责各自的读和写，极大程度缓解了锁的争用；")]),a._v(" "),s("li",[a._v("从服务器可以使用 MyISAM，提升查询性能以及节约系统开销；")]),a._v(" "),s("li",[a._v("增加冗余，提高可用性。")])]),a._v(" "),s("p",[a._v("读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://s.poetries.work/cos/202203272134357.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);