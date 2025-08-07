# 农业类mod合并规则
使用 [One Enough Item](https://github.com/Tower-of-Sighs/OneEnoughItem) 模组合并相同类型食物

使用该规则安装作物盛景mod可获得最大兼容性，推荐安装农夫乐事

# 规则
- 有农夫乐事（farmersdelight）优先选择
- 否则选择作物盛景（croptopia）*
- 都没有则选择农夫乐事附属或其他mod

*选择 croptopia 原因：该mod物品较多，能尽量保证覆盖大多数物品
*有差异的同类物品不会进行合并，如牛奶瓶和牛奶罐 

# 使用方式
OEI由数据包驱动，请手动创建数据包或按下默认快捷键 Ctrl + R 打开可视化编辑界面创建数据包

将规则文件放置在路径 `<存档名称>/datapacks/<数据包名称>/data/oei/replacements`下即可

关于OEI的详细信息请参考[官方文档](https://doc.sighs.cc/docs/oneenoughitem/doc/)

若发现缺少物品请提交 pr 或 issue
