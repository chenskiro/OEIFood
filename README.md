# 农业类 mod 合并规则

[![GitHub Stars](https://img.shields.io/github/stars/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/issues)
[![License](https://img.shields.io/github/license/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/blob/main/LICENSE)

本项目提供了一套 [One Enough Item (OEI)](https://github.com/Tower-of-Sighs/OneEnoughItem) 的规则模板，旨在统一来自不同 Minecraft 农业、烹饪类 Mod 的重复物品（如多种番茄、洋葱、牛奶等）

这并非一个普适性的“即插即用”方案，而是一个强大的**起点**。本项目已预先编写了海量的整合规则，旨在**大幅减少**您从零开始手动配置所需的庞大工作量。您只需下载这份预设，并根据您整合包中实际安装的 Mod 进行简单的**审查和修改**，即可快速实现理想的物品统一效果。

## ⚙️ 整合原则

为了实现最大的兼容性和最广泛的支持，该整合遵循以下优先级顺序：

1.  **首选 [农夫乐事 (Farmer's Delight)](https://www.curseforge.com/minecraft/mc-mods/farmers-delight):** 作为广受欢迎的基础农业 Mod，其物品被设定为最高优先级。
2.  **次选 [作物盛景 (Croptopia)](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric):** 当农夫乐事没有对应物品时，优先选择作物盛景。
3.  **再选 [潘马斯农场 2 (Pam's HarvestCraft 2)](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core):** 当以上两者均无对应物品时，优先选择潘马斯农场 2。
4.  **其他模组:** 最后，会选择农夫乐事的附属 Mod 或其他流行 Mod 中的物品。

强烈推荐同时安装 **农夫乐事 (Farmer's Delight)**、**作物盛景 (Croptopia)** 和 **潘马斯农场 2 (Pam's HarvestCraft 2)** 以获得最佳的兼容效果。

> [!NOTE] > **不进行合并的物品**
> 为了保留不同 Mod 的特色，有显著差异的同类物品（如牛奶瓶和牛奶罐）不会进行合并。

## ⚠️ 使用前须知

> [!WARNING] > **为防止物品凭空消失，请务必在使用本规则前，完成以下检查与调整：**
>
> 本规则包无法自动检测您安装了哪些 Mod。如果一条规则将物品 A 统一到物品 B，但您并未安装提供物品 B 的 Mod，**物品 A 就会在游戏中消失**。
> (例如：规则将所有番茄统一到“农夫乐事”的番茄，但你没装“农夫乐事”，所有其他番茄都会消失)

### 如何正确使用本模板？

你有两种选择来适配这份规则：

1.  **适配规则 (最省心)**
    如果你想获得最简单、近乎开箱即用的体验，只需根据上方的 **[整合原则](#%EF%B8%8F-整合原则)** 安装推荐的核心 Mod (农夫乐事、作物盛景、潘马斯农场 2) 即可。这是我们推荐大多数用户采用的方式。

2.  **修改规则 (更灵活)**
    这正是本模板的核心价值所在。如果你有自己偏好的 Mod 组合，请**务必打开规则文件 (`food_unification.json`) 进行修改**。
    - **检查：** 查找所有统一目标，确保这些物品来自你已安装的 Mod。
    - **修改：** 将规则指向的目标改成你希望保留的物品 ID。
    - **删除：** 安全地删除掉那些你的整合包里完全用不到的规则。（不是必要项）

这能确保规则完全符合你的整合包需求，而预设模板已为你完成了最繁重的 80% 的工作。

> [!IMPORTANT] > **关于配方去重的重要指南**
>
> 本规则的核心功能是 **物品合并**，它并 **不会** 自动对合成配方进行去重。这意味着一个统一后的物品（例如：番茄）在默认情况下会拥有多个来自不同 Mod 的配方。
>
> **解决方案：**
>
> - **自动去重**: 如果您同时安装了 **KubeJS**，OEI Mod 本身就提供了一个强大的解决方案。打开 OEI 的可视化配置界面 (默认为 `Ctrl + R` 键)，即可使用其提供的 **“一键去重”** 功能来快速清理。
> - **手动调整**: 对于更精细的控制，或在没有 KubeJS 的情况下，您仍然可以使用 **数据包 (Data Pack)**、**CraftTweaker** 或其他类似工具，手动禁用或调整您不希望保留的配方。

## 🔧 安装与使用

1. **前置要求**: 请确保你已经安装了 [**One Enough Item (OEI)**](https://github.com/Tower-of-Sighs/OneEnoughItem) 这个 Mod。

2. **下载规则文件 (二选一)**:

   - **直接下载**: 点击本页面右上角的绿色 `Code` 按钮，然后选择 `Download ZIP` 下载整个项目。
   - **使用 Git**: 如果你熟悉 Git，可以克隆本仓库：
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

> OEI 提供了便捷的可视化编辑界面，默认快捷键 `Ctrl + R`，你可以用它来查看或临时修改规则。更多高级用法请参阅 OEI [官方文档](https://doc.sighs.cc/docs/OneEnoughItem/intro)

## ✅ 已整合的模组列表

本规则包目前已支持以下 Mod 的物品整合。为了方便查找和明确关系，我们将它们按依赖关系和主题进行了分类。

列表可能会有遗漏或归类错误等问题，请以配置文件为准，如有错误请报告。

> 你可以在 mcmod 百科 [<sup>1</sup>](https://www.mcmod.cn/) 等网站通过“模组 ID”快速查询到它们的中文译名和详细信息。

---

<details>
<summary>🌿 农夫乐事 (Farmer's Delight) 及其生态</summary>
 
| 模组名称 (Mod Name) & ID |
| :--- |
| **Farmer's Delight** (`farmersdelight`) - **核心** |
| Argentina's Delight (`argentinas_delight`) |
| Brazilian Delight (`braziliandelight`) |
| Collector's Reap (`collectorsreap`) |
| Corn Delight (`corn_delight`) |
| Cultural Delights (`culturaldelights`) |
| Delightful (`delightful`) |
| Dumplings Delight (`dumplings_delight`) |
| Extra Delight (`extradelight`) |
| Farmer's Respite (`farmersrespite`) |
| Festive Delight (`festive_delight`) |
| Fruits Delight (`fruitsdelight`) |
| Manors Bounty (`manors_bounty`) |
| Muffins' Thai Delight (`muffins_thaidelight`) |
| Rustic Delights (`rusticdelight`) |
| Seed Delight (`seeddelight`) |
| Trail and Tales Delight (`trailandtales_delight`) |
| Ube's Delight (`ubesdelight`) |
| Unusual Delights (`unusual_delight`) |
| Vintage Delight (`vintagedelight`) |
 
</details>
 
<details>
<summary>🍎 潘马斯农场 (Pam's HarvestCraft 2) 生态</summary>
 
| 模组名称 (Mod Name) & ID |
| :--- |
| **Pam's HarvestCraft 2 - Crops** (`pamhc2crops`) - **核心** |
| **Pam's HarvestCraft 2 - Food Core** (`pamhc2foodcore`) - **核心** |
| **Pam's HarvestCraft 2 - Trees** (`pamhc2trees`) - **核心** |
 
</details>
 
<details>
<summary>✨ 其他已兼容的独立模组</summary>
 
| 模组名称 (Mod Name) & ID |
| :--- |
| Croptopia (`croptopia`) |
| Alex's Mobs (`alexsmobs`) |
| Biomes O' Plenty (`biomesoplenty`) |
| Bountiful Fares (`bountifulfares`) |
| Create (`create`) |
| Crock Pot (`crockpot`) |
| Farm and Charm (`farm_and_charm`) |
| Flavor Immersed Daily (`flavor_immersed_daily`) |
| Herbal Brews (`herbalbrews`) |
| Jellyfishing (`jellyfishing`) |
| Kaleidoscope Cookery (`kaleidoscope_cookery`) |
| Kitchenkarrot (`kitchenkarrot`) |
| Lt2 (`ltc2`) |
| Meadow (`meadow`) |
| MineColonies (`minecolonies`) |
| Neapolitan (`neapolitan`) |
| Pasterdream (`pasterdream`) |
| Productive Trees (`productivetrees`) |
| Sakura (`sakura`) |
| Simple Farming (`simplefarming`) |
| Sushi Go Crafting (`sushigocrafting`) |
| Tea Story (`teastory`) |
| Thermal Series (`thermal`) |
| Vanilla Cookbook (`vanillacookbook`) |
| Vinery (`vinery`) |
| Youkai's Homecoming (`youkaishomecoming`) |
| Youkai's Feasts (`youkaisfeasts`) |
 
</details>

## 📜 许可协议

本项目采用 **MIT 许可证** 进行授权。完整的协议内容请参阅 [LICENSE](LICENSE) 文件。

**您可以随意使用，但请务必通过保留原始许可文件的方式，注明原作者的贡献。**

## 🤝 如何贡献

非常欢迎您的贡献！如果您发现有未被整合的重复物品，或者有更好的整合建议，请：

- 提交 Issue: 在本项目的 Issue 页面描述你发现的问题或建议。
- 提交 Pull Request (PR): 如果你熟悉 JSON 格式，可以直接修改 food_unification.json 文件并提交 PR。

若您提交 PR，请务必使用仓库中的 `sort_food.py` 对 `food_unification.json` 文件进行重排序，以确保顺序一致，并进行游戏内测试。

**使用方式：**

```bash
python sort_food.py food_unification.json
```
