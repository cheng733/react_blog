import React, {PureComponent} from 'react'



export class Content extends PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        console.log('1212')
        return (
           <div>
               {!this.props.showContent?(<div dangerouslySetInnerHTML={{__html:"<div class=\"postBody\">\n" +
                       "                \n" +
                       "    <div id=\"cnblogs_post_description\" style=\"display: none\">\n" +
                       "        JS与DOM的关系  变量的声明  数组与对象的操作 Js的内置对象的使用 window对象 作用域 找表标签对象 对象的操作 获取内联样式属性 对象的创建和删除 暴力结点 级联菜单的制作 定时器的使用\n" +
                       "    </div>\n" +
                       "<div id=\"cnblogs_post_body\" class=\"blogpost-body \">\n" +
                       "    <h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">JS与DOM的关系</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">浏览器有渲染html代码的功能，把html源码（如div,p标签等）在内存里形成一个DOM对象</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">文档对象模型DOM（Document&nbsp;Object&nbsp;Model）定义访问和处理HTML文档的标准方法。DOM&nbsp;将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145433866-1839116942.png\" alt=\"\" /></span></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145442022-578930892.png\" alt=\"\" /></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">HTML文档可以说由节点构成的集合，三种常见的DOM节点:</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">1.&nbsp;元素节点：上图中&lt;html&gt;、&lt;body&gt;、&lt;p&gt;等都是元素节点，即标签。</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">2.&nbsp;文本节点:向用户展示的内容，如&lt;li&gt;里的内容JavaScript、DOM、CSS等文本。</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">3.&nbsp;属性节点:元素属性，如&lt;a&gt;标签的链接属性href=\"http://www.imooc.com\"。</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\"><strong>BOM对象</strong>（把浏览器的地址栏，历史记录，DOM等装在一个对象）</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">浏览器内部有JS解释器/引擎；在html里的JS代码会被引擎所执行，执行的结果是对DOM对象的操作（即是对节点树内的标签进行操作）</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">JS添加特效&nbsp;：&nbsp;无非就是用JS操作DOM对象而已</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">JS的引入方式</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">JS代码可在html中任意位置编写，但浏览器解析代码是从上到下的，需注意此时html是否已经解析该标签，能让JS能否获取该DOM对象，所以有时会把代码放到html的结束前，即是&lt;/html&gt;前</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">直接在html中编写&nbsp;：&lt;script&nbsp;type=\"text/javascript\"&gt;代码&lt;/script&gt;&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">通过外部引用进来&nbsp;：&nbsp;&lt;script&nbsp;type=text/javascript&nbsp;src=&rdquo;&rdquo;&gt;&lt;/script&gt;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">为防止网页加载缓慢，也可以把非关键的JavaScript放到网页底部</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">变量的声明&nbsp;</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">var&nbsp;变量名；变量名区分大小写；不用var声明会污染全局变量；变量名以字母、下划线、美元符号开头，后面部分可数字</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">函数&nbsp;即&nbsp;完成特定功能的代码段；</span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">常用方法</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">输出语句到html中，使用document.write(&ldquo;&rdquo;)</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">Confire()&nbsp;：消息确认对话框；点击确认返回true</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">运算符问题</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">拼接运算符：+&nbsp;，&nbsp;如果是数字则相加，是字符则连接&nbsp;；&nbsp;如2+3+&lsquo;love&rsquo;+4+5&nbsp;//输出5love45</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">和PHP不同，一般用.</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\"><strong>逻辑运算符或&nbsp;：</strong>返回为true的值&nbsp;；&nbsp;如&nbsp;：&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">var&nbsp;a&nbsp;=&nbsp;1;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">var&nbsp;b&nbsp;=&nbsp;false;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">var&nbsp;d&nbsp;=&nbsp;(a&nbsp;||&nbsp;b);&nbsp;&nbsp;//d为1</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\"><strong>逻辑运算符与&nbsp;：</strong>&nbsp;返回最后面的变量值</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">var&nbsp;a&nbsp;=&nbsp;22;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">var&nbsp;b=33;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">alert(a&nbsp;&amp;&amp;&nbsp;b);&nbsp;//输出33</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">数组与对象的操作</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">JS中数组的数字键值只能从0开始递增</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">注意&nbsp;&nbsp;：&nbsp;数组中括号，JS中length&nbsp;；&nbsp;对象用大括号</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145628866-442077365.png\" alt=\"\" /></span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">Js的内置对象的使用</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145639460-1509798562.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145709991-215923540.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">window对象</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">window对象和JS没关系；是浏览的一个数组对象，供JS来操作。</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">Window.open()</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&lt;script&nbsp;type=\"text/javascript\"&gt;&nbsp;window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no,&nbsp;status=no,scrollbars=yes')&nbsp;&lt;/script&gt;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145721913-1751135003.png\" alt=\"\" /></span></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145741194-960401521.png\" alt=\"\" /></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145747788-842949661.png\" alt=\"\" /></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">作用域</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">情况1：函数内没找到该参数，会一直外部继续找，直到全局空间（函数外）寻找window属性</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">情况2：var声明变量；在函数内声明仅属于该函数内的局部变量。如果直接赋值，不加var（如：a=10）就会一直往外找该变量，找到则赋值给它，否则默认赋给window.变量名</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145804226-559924072.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">找表标签对象</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">不会的方法到h3c查找HTML&nbsp;DOM&nbsp;手册</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">方法名如果返回是集合则getElements&nbsp;，如class，P等标签都不是唯一的所以s</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">id唯一返回对象，P等不唯一返回集合</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145830335-1742372511.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">根据id获取</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145858132-671671653.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">根据标签找对象</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145907601-1880788102.png\" alt=\"\" /></span></p>\n" +
                       "<p class=\"p0\">&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">对于表单元素，可以使用name寻找</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145942241-1172163455.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">按照类名查找</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145919522-509876092.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">根据结点查找</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825145955507-1084285162.png\" alt=\"\" /></span></p>\n" +
                       "<p class=\"p0\">&nbsp;</p>\n" +
                       "<p class=\"p0\">&nbsp;</p>\n" +
                       "<h1><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">对象的操作</span></h1>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">img对象&nbsp;下还有多个属性</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150031897-393913486.png\" alt=\"\" /></span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">img.src&nbsp;&nbsp;&nbsp;img.style.width</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">注意&nbsp;：</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&lt;div&nbsp;class=\"ch\"&gt;&nbsp;中操作div对象的修改class名字属性用div.className&nbsp;=&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">CSS样式与DOM&nbsp;：&nbsp;obj.style.width</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">CSS属性带横线则&nbsp;去之首字大写&nbsp;：&nbsp;border-top&nbsp;&agrave;&nbsp;obj.style.borderTop</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">注意&nbsp;：此处获取宽高是把CSS内嵌，比较方便；并且返回的是字符串形式</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">实战&nbsp;每次点击变颜色并且边框增大10像素</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150055991-170270256.png\" alt=\"\" /></span></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150100226-319570206.png\" alt=\"\" /></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">Object.style.display&nbsp;=&nbsp;none/block&nbsp;&nbsp;实现隐藏和显示</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">Object.className&nbsp;=&nbsp;name&nbsp;实现修改类名</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">获取内联样式属性</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">获取内存中在渲染的style的值，使用obj.currrentStyle（）&nbsp;和&nbsp;window.getComputedStyle()获取</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">window.getComputedStyle(obj,伪元素)[arrt]&nbsp;：&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">obj获取运算后的样式目标元素&nbsp;；&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">伪元素&nbsp;：&nbsp;一般为null，可以修改为鼠标放上去的状态&lsquo;：active&rsquo;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">获取的值只读即是只能获取，不能直接修改，要修改还是要通过obj.style.属性&nbsp;修改</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">内联样式一开始不能够获取是因为一开始没有定义内联定义，但是能够初始化赋值</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">获取的颜色返回是RGB形式的</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">注意：只有IE和Opera支持使用currentStyle获取HTMLElement的计算后的样式</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">标准浏览器使用getComputedStyle()，对此兼容性问题，使用封装进方法中进行判断使用哪个。obj即是对象名，arrt是获取属性名</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150122351-112565543.png\" alt=\"\" /></span></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">对象的创建和删除&nbsp;node.html</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150345522-1884992215.png\" alt=\"\" /></span></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150349897-1173084913.png\" alt=\"\" /></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150431351-1126443639.png\" alt=\"\" /></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">暴力结点&nbsp;nodein.html</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">innerHTML&nbsp;是结点的一个属性值，代表结点内的内容，即是某标签内的内容</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150455710-1391031447.png\" alt=\"\" /></span></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150459694-1491339920.png\" alt=\"\" /></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150505647-1567888633.png\" alt=\"\" /></p>\n" +
                       "<p>&nbsp;</p>\n" +
                       "<p class=\"p0\"><strong>级联菜单的制作&nbsp;jilianorder.html</strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150556882-35681168.png\" alt=\"\" /></span></p>\n" +
                       "<p><img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150600319-964472580.png\" alt=\"\" /></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "<p class=\"p0\"><strong><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">定时器的使用</span></strong></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">不是js的内容属于浏览器的</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">setTimeout&nbsp;(表达式,延时时间)&nbsp;：&nbsp;设置在延迟多少时间执行一次一个表达式</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">clearTimeout(名);&nbsp;设置清除这个延迟器</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;<img src=\"https://images2015.cnblogs.com/blog/1011409/201608/1011409-20160825150615460-351251436.png\" alt=\"\" /></span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">setInterval()&nbsp;方法可按照指定的周期（以毫秒计）来调用函数或计算表达式；多次执行</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">clearInterval()&nbsp;方法取消&nbsp;setInterval()&nbsp;的设置</span></p>\n" +
                       "<p class=\"p0\"><span style=\"font-family: 'Microsoft YaHei'; font-size: 14px;\">&nbsp;</span></p>\n" +
                       "</div>\n" +
                       "</div>"}}></div>):(<div dangerouslySetInnerHTML={{__html:this.props.showContent.data.body||this.props.showContent.data[0].body}}></div>)}
           </div>
        )
    }
}
