# 农业类mod合并规则

本项目提供了一套 [One Enough Item (OEI)](https://github.com/Tower-of-Sighs/OneEnoughItem) 的规则，旨在统一来自不同 Minecraft 农业、烹饪类 Mod 的重复物品（如多种番茄、洋葱、牛奶等），只需要导入即可使用。

## ⚙️ 整合原则
 
为了实现最大的兼容性和最广泛的支持，该整合遵循以下优先级顺序：
 
1.  **首选 [农夫乐事 (Farmer's Delight)](https://www.curseforge.com/minecraft/mc-mods/farmers-delight):** 作为广受欢迎的基础农业 Mod，其物品被设定为最高优先级。
2.  **次选 [作物盛景 (Croptopia)](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric):** 当农夫乐事没有对应物品时，优先选择作物盛景。
3.  **再选 [潘马斯农场2 (Pam's HarvestCraft 2)](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core):** 当以上两者均无对应物品时，优先选择潘马斯农场2。
4.  **其他模组:** 最后，会选择农夫乐事的附属 Mod 或其他流行 Mod 中的物品。
 
> 强烈推荐同时安装 **农夫乐事 (Farmer's Delight)**、**作物盛景 (Croptopia)** 和 **潘马斯农场2 (Pam's HarvestCraft 2)** 以获得最佳的兼容效果。

> 有差异的同类物品不会进行合并，如牛奶瓶和牛奶罐。

## 🔧 安装与使用
 
1. **前置要求**: 请确保你已经安装了 [**One Enough Item (OEI)**](https://github.com/Tower-of-Sighs/OneEnoughItem) 这个 Mod。
 
2.  **下载规则文件**:
    * **方式一**: 点击本页面右上角的 `Code` -> `Download ZIP` 下载整个项目。
    * **方式二 (Git)**: 使用 Git 克隆本仓库：
        ```bash
        git clone https://github.com/chenskiro/OEIFood.git
        ```

3. **安装数据包**:
- 进入你的 Minecraft 存档文件夹 (位于 .minecraft/saves/<你的存档名称>)。
- 找到或创建一个名为 `datapacks` 的文件夹。
- 将文件放入 `datapacks` 文件夹中。
- 最终的规则文件路径应类似于: `.../saves/<存档名称>/datapacks/<规则包文件夹>/data/oei/replacements/food_unification.json`。

4. **加载数据包**:

- 对于现有世界: 进入游戏，执行命令 `/reload` 即可。
- 对于新世界: 在创建世界的“数据包”选项中，选择并启用本规则包。
  
> OEI 提供了便捷的可视化编辑界面，默认快捷键 `Ctrl + R`，你可以用它来查看或临时修改规则。更多高级用法请参阅 OEI [官方文档](https://doc.sighs.cc/docs/oneenoughitem/doc/)

## ✅ 已整合的模组列表

本规则包目前已支持以下 Mod 的物品整合 (按字母排序):
> 对应的模组汉化名称可在 [mcmod 百科](https://www.mcmod.cn/) 中直接复制英文到搜索栏查询

<details>
<summary>✅ 点击展开/折叠已支持的模组列表</summary>

*以下注释仅标出不遵循主要优先级的特殊情况。*

- `alexsmobs`
- `argentinas_delight`
- `biomesoplenty`
- `bountifulfares`
- `braziliandelight`
- `collectorsreap`
- `corn_delight`
- `crockpot`
- `croptopia`
- `culturaldelights`
- `dumplings_delight`
- `farm_and_charm`
- `farmersdelight`
- `farmersrespite`
- `flavor_immersed_daily`
  `* 该Mod的大白菜 (chineseleaves) 被归类到了 dumplings_delight 的大白菜 (chinese_cabbage)`
- `fruitsdelight`
- `jellyfishing`
- `kaleidoscope_cookery`
- `kitchenkarrot`
- `ltc2`
- `manors_bounty`
- `minecolonies`
- `muffins_thaidelight`
- `neapolitan`
- `pamhc2crops`
- `pamhc2trees`
- `pasterdream`
- `productivetrees`
- `rusticdelight`
- `sakura`
  `* 该Mod的红豆 (red_bean) 被归类到了 neapolitan 的红豆 (adzuki_beans)`
- `seeddelight`
- `simplefarming`
- `sushigocrafting`
  `* 该Mod的黄瓜片 (cucumber_slices) 被归类到了 culturaldelights 的切黄瓜 (cut_cucumber)`
- `teastory`
  `* 该Mod的大白菜 (chinese_cabbage) 被归类到了 dumplings_delight 的大白菜 (chinese_cabbage)`
- `thermal`
- `ubesdelight`
- `unusual_delight`
- `vanillacookbook`
- `vinery`
- `vintagedelight`
- `youkaishomecoming`
  `* 该Mod的红豆 (redbean) 被归类到了 neapolitan 的红豆 (adzuki_beans)`
- `youkaisfeasts`
  `* 该Mod的红豆 (redbean) 被归类到了 neapolitan 的红豆 (adzuki_beans)`

</details>

## 🤝 如何贡献
如果你发现有未被整合的重复物品，或者有更好的整合建议，请：

- 提交 Issue: 在本项目的 Issue 页面描述你发现的问题或建议。
- 提交 Pull Request (PR): 如果你熟悉 JSON 格式，可以直接修改 food_unification.json 文件并提交 PR。

若您提交PR，请务必使用仓库中的 `sort_food.py` 对 `food_unification.json` 文件进行重排序，以确保顺序一致，并进行游戏内测试。

**使用方式：**
```bash
python sort_food.py food_unification.json
