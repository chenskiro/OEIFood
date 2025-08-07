# 农业类mod合并规则

本项目提供了一套 [One Enough Item (OEI)](https://github.com/Tower-of-Sighs/OneEnoughItem) 的规则，旨在统一来自不同 Minecraft 农业、烹饪类 Mod 的重复物品（如多种番茄、洋葱、牛奶等），只需要导入即可使用。

## ⚙️ 整合原则
 
为了实现最大的兼容性和最广泛的支持，该整合遵循以下优先级顺序：
 
1.  **首选 [农夫乐事 (Farmer's Delight)](https://www.curseforge.com/minecraft/mc-mods/farmers-delight):** 作为广受欢迎的基础农业 Mod，其物品被设定为最高优先级。
2.  **次选 [作物盛景 (Croptopia)](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric):** 当农夫乐事没有对应物品时，优先选择作物盛景。该 Mod 物品种类极其丰富，能有效覆盖大多数食物类型。
3.  **其他模组:** 最后，会选择农夫乐事的附属 Mod 或其他流行 Mod 中的物品。
 
> 强烈推荐同时安装 **农夫乐事 (Farmer's Delight)** 和 **作物盛景 (Croptopia)** 以获得最佳的兼容效果。

> 有差异的同类物品不会进行合并，如牛奶瓶和牛奶罐 

## 🔧 安装与使用
 
1. **前置要求**: 请确保你已经安装了 [**One Enough Item (OEI)**](https://github.com/Tower-of-Sighs/OneEnoughItem) 这个 Mod。
 
2.  **下载规则文件**:
    *   **方式一**: 点击本页面右上角的 `Code` -> `Download ZIP` 下载整个项目。
    *   **方式二 (Git)**: 使用 Git 克隆本仓库：
        ```bash
        git clone https://github.com/chenskiro/OEIFood.git

3. 安装数据包:
- 进入你的 Minecraft 存档文件夹 (位于 .minecraft/saves/<你的存档名称>)。
- 找到或创建一个名为 datapacks 的文件夹。
- 将文件放入 datapacks 文件夹中。
- 最终的规则文件路径应类似于: .../saves/<存档名称>/datapacks/<规则包文件夹>/data/oei/replacements/food_unification.json。

4. 加载数据包:

- 对于现有世界: 进入游戏，执行命令 /reload 即可。
- 对于新世界: 在创建世界的“数据包”选项中，选择并启用本规则包。
  
> OEI 提供了便捷的可视化编辑界面，默认快捷键 Ctrl + R，你可以用它来查看或临时修改规则。更多高级用法请参阅 OEI [官方文档](https://doc.sighs.cc/docs/oneenoughitem/doc/)

## ✅ 已整合的模组列表

本规则包目前已支持以下 Mod 的物品整合 (按字母排序):

<details>
<summary>✅ 点击展开/折叠已支持的模组列表</summary>

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
- `fruitsdelight`
- `jellyfishing`
- `kaleidoscope_cookery`
- `kitchenkarrot`
- `ltc2`
- `manors_bounty`
- `minecolonies`
- `neapolitan`
- `pasterdream`
- `productivetrees`
- `rusticdelight`
- `sakura`
- `sushigocrafting`
- `teastory`
- `thermal`
- `ubesdelight`
- `unusual_delight`
- `vanillacookbook`
- `vinery`
- `vintagedelight`
- `youkaishomecoming`

</details>



## 🤝 如何贡献
如果你发现有未被整合的重复物品，或者有更好的整合建议，请：

- 提交 Issue: 在本项目的 Issue 页面描述你发现的问题或建议。
- 提交 Pull Request (PR): 如果你熟悉 JSON 格式，可以直接修改 food_unification.json 文件并提交 PR。
