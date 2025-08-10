# 农业类mod合并规则

[![GitHub Stars](https://img.shields.io/github/stars/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/issues)
[![License](https://img.shields.io/github/license/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/blob/main/LICENSE)

本项目提供了一套 [One Enough Item (OEI)](https://github.com/Tower-of-Sighs/OneEnoughItem) 的规则，旨在统一来自不同 Minecraft 农业、烹饪类 Mod 的重复物品（如多种番茄、洋葱、牛奶等），只需要导入即可使用。

## ⚙️ 整合原则
 
为了实现最大的兼容性和最广泛的支持，该整合遵循以下优先级顺序：
 
1.  **首选 [农夫乐事 (Farmer's Delight)](https://www.curseforge.com/minecraft/mc-mods/farmers-delight):** 作为广受欢迎的基础农业 Mod，其物品被设定为最高优先级。
2.  **次选 [作物盛景 (Croptopia)](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric):** 当农夫乐事没有对应物品时，优先选择作物盛景。
3.  **再选 [潘马斯农场2 (Pam's HarvestCraft 2)](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core):** 当以上两者均无对应物品时，优先选择潘马斯农场2。
4.  **其他模组:** 最后，会选择农夫乐事的附属 Mod 或其他流行 Mod 中的物品。
 
强烈推荐同时安装 **农夫乐事 (Farmer's Delight)**、**作物盛景 (Croptopia)** 和 **潘马斯农场2 (Pam's HarvestCraft 2)** 以获得最佳的兼容效果。

> [!NOTE]
> **关于无法合并的物品**
> 为了保留不同 Mod 的特色，有显著差异的同类物品（如牛奶瓶和牛奶罐）不会进行合并。

## ⚠️ 使用前须知
 
> [!WARNING]
> **为防止物品消失，请务必执行以下操作之一：**
>
> 本规则包无法自动检测你安装了哪些 Mod。如果一个物品被设置为统一到你未安装的 Mod 中（例如，将所有番茄统一到“农夫乐事”的番茄，但你没有安装“农夫乐事”），**该物品将会消失**。
>
> **你有两种解决方案：**
>
> 1.  **推荐方案 (适合大多数玩家):**
>     根据上方的 **[整合原则](#-整合原则)**, 安装推荐的核心 Mod (如农夫乐事、作物盛景等)。这是最简单、开箱即用的方法。
>
> 2.  **自定义方案 (适合高级用户):**
>     如果你不想安装某个目标 Mod，可以**手动编辑规则文件 (`food_unification.json`)**，将物品的统一目标修改为你已安装的 Mod 中的对应物品。

> [!IMPORTANT]
> **关于配方去重的重要指南**
> 本规则的核心功能是 **物品合并**，它并 **不会** 自动对合成配方进行去重。这意味着一个统一后的物品（例如：番茄）在默认情况下会拥有多个来自不同 Mod 的配方。
>
> **解决方案：**
> - **自动去重**: 如果您同时安装了 **KubeJS**，OEI Mod 本身就提供了一个强大的解决方案。打开 OEI 的可视化配置界面 (默认为 `Ctrl + R` 键)，即可使用其提供的 **“一键去重”** 功能来快速清理。
> - **手动调整**: 对于更精细的控制，或在没有 KubeJS 的情况下，您仍然可以使用 **数据包 (Data Pack)**、**CraftTweaker** 或其他类似工具，手动禁用或调整您不希望保留的配方。


## 🔧 安装与使用
 
1. **前置要求**: 请确保你已经安装了 [**One Enough Item (OEI)**](https://github.com/Tower-of-Sighs/OneEnoughItem) 这个 Mod。
 
2.  **下载规则文件 (二选一)**:
    *   **直接下载**: 点击本页面右上角的绿色 `Code` 按钮，然后选择 `Download ZIP` 下载整个项目。
    *   **使用 Git**: 如果你熟悉 Git，可以克隆本仓库：
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
非常欢迎您的贡献！如果您发现有未被整合的重复物品，或者有更好的整合建议，请：

- 提交 Issue: 在本项目的 Issue 页面描述你发现的问题或建议。
- 提交 Pull Request (PR): 如果你熟悉 JSON 格式，可以直接修改 food_unification.json 文件并提交 PR。

若您提交PR，请务必使用仓库中的 `sort_food.py` 对 `food_unification.json` 文件进行重排序，以确保顺序一致，并进行游戏内测试。

**使用方式：**
```bash
python sort_food.py food_unification.json
