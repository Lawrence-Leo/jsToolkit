prettier是一个比较武断的格式化工具，它个各种lint工具不一样，prettier只关注格式化，并不具有lint检查语法等能力

prettier支持我们大前端目前大部分语言处理，包括JavaScript · Flow · TypeScript · CSS · SCSS · Less · JSX · Vue · GraphQL · JSON · Markdown

#### 使用

安装vscode的插件prettier-vscode

安装成功后，编辑器默认的格式化处理就会被prettier代替， 默认快捷键是alt + shift + f

插件安装成功后，编辑器的配置setting.json会出现prettier插件的相关配置节点，同时也能看到一些默认的配置信息（一般不再配置文件中配置，使用.prettierrc配置文件配置）

使能每一种语言默认格式化规则

````json
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[less]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
````

格式化vue代码配置

````json
{     
    "[vue]": {         
          "editor.defaultFormatter": "esbenp.prettier-vscode"     
    } 
}
````

Vetur结合prettier使用，单独对 Vetur 的 prettier 进行配置

````json
{
   "vetur.format.defaultFormatter.html": "prettier",
   "vetur.format.defaultFormatter.js": "prettier",
   "vetur.format.defaultFormatter.less": "prettier",
   "vetur.format.defaultFormatterOptions": {
       "prettier": {
           "printWidth": 160,
           "singleQuote": true, // 使用单引号
           "semi": true, // 末尾使用分号
           "tabWidth": 4,
           "arrowParens": "avoid",
           "bracketSpacing": true,
           "proseWrap": "preserve" // 代码超出是否要换行 preserve保留
       }
   },
}
````

常用字段说说明：

printWidth            超过最大值换行

tabWidth              缩进字节数

useTabs              缩进不使用tab，使用空格

semi                   句尾添加分号（默认true）

singleQuote       使用单引号代替双引号

arrowParens      (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号

bracketSpacing       在对象，数组括号与文字之间加空格 "{ foo: bar }

eslintIntegration      是否使用 eslint 进行代码校验（ 使用启用 eslint ）

jsxBracketSameLine       在jsx中使用单引号代替双引号

stylelintIntegration        不让prettier使用stylelint的代码格式进行校验

trailingComma      在对象或数组最后一个元素后面是否加逗号（不加括号使用 none ）

tslintIntegration     让prettier使用tslint的代码格式进行校验
