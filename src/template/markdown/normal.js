export default `


#nice {
font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 8px;
 * 下边距 margin-bottom: 8px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #333333;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p { 
font-size: 18px;
color: #333333;
letter-spacing: 2px;
line-height: 32px;
text-align: left;
}

/* 一级标题 */
#nice h1 {
margin-bottom: 12px;
font-size: 24px;
color: #212121;
letter-spacing: 2px;
text-align: center;
line-height: 42px;
}

/* 一级标题内容 */
#nice h1 .content { 
  display: inline-block;
  width: auto;
  height: 20px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 2px;
  line-height: 1px;
  border-bottom:4px solid rgba(60, 112, 198,1);

}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix {

}

/* 二级标题 */
#nice h2 {
margin-bottom: 12px;
font-size: 22px;
color: rgb(60, 112, 198);
letter-spacing: 2px;
line-height: 38px;
}

/* 二级标题内容 */
#nice h2 .content {
  
}

/* 二级标题前缀 */
#nice h2 .prefix {
}

/* 二级标题后缀 */
#nice h2 .suffix {
}

/* 三级标题 */
#nice h3 {
margin-bottom: 12px;
font-size: 20px;
color: #333333;
letter-spacing: 2px;
line-height: 40px;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题前缀 */
#nice h3 .prefix {
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
margin-bottom: 4px;
margin-top: 4px;
font-size: 18px;
color: #333;
letter-spacing: 2px;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
margin-bottom: 4px;
margin-top: 4px;
font-size: 18px;
color: #333;
letter-spacing: 2px;
}

/* 列表内容，不要设置li
 */
#nice li section {
font-size: 18px;
line-height: 28px;  
color: #333;
letter-spacing: 2px;
font-weight: 400;
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice blockquote {
  border-left-color:rgba(86, 86, 214, 0.4);
  background: rgba(86, 86, 214, 0.03);
  padding: 8px 8px 8px 12px;
}

/* 引用文字 */
#nice blockquote p {
font-size: 14px;
color:#666666;
letter-spacing: 2px;
line-height: 28px;
text-align: left;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
  text-align: center;
  line-height: 26px;
}

/* 斜体 */
#nice em {
  font-style:normal;
  color:rgb(60, 112, 198);
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
margin-bottom: 36px;
margin-top: 36px;
border-width:1px;
background-image: linear-gradient(90deg, rgba(232,234,251,0.50) 0%, #E8EAFB 52%, rgba(232,234,251,0.50) 100%);
border-top:none;
height:1px;
  
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
}

/* 图片描述文字 */
#nice figcaption {
  font-size: 12px;
  margin-top:-16px;
  color: #888
  font-weight: 40;
}

/* 行内代码 */
#nice p code, #nice li code {
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 14px;
color: #666666
letter-spacing: 2px;
}

/* 
 * 某一列表格列宽控制
 * n 可以修改为具体数字，不修改时表示所有列
 * 最小列宽 min-width: 85px;
 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
    text-align:left;

}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg { 
}


`;
