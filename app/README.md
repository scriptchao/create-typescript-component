## 本地开发

```
yarn start

项目启动后在src文件夹下开发组件、在playground文件夹下测试开发好的组件
```

## lib文件生成

```
yarn lib
```

## dist文件生成

```
yarn dist
```

## 目录说明

```
playground 本地预览开发根目录
src 组件开发根目录
```

## 发布
```
在package.json中添加如下代码

"files": [
    "dist",
    "lib",
  ]
```

## 注意事项

```
1、请在src文件夹下创建一个index.tsx作为入口文件
2、发布前请先执行yarn lib生成lib包
3、样式仅支持css/less，请自行扩展
4、脚手架集成了antd,你可以使用antd进行开发
```