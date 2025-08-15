# OEI Food Unification - 农业类 Mod 合并规则

[![GitHub Stars](https://img.shields.io/github/stars/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/issues)
[![License](https://img.shields.io/github/license/chenskiro/OEIFood?style=flat-square)](https://github.com/chenskiro/OEIFood/blob/main/LICENSE)

> 解决农业模组物品重复问题 | 基于OEI的统一解决方案

本项目提供了一套 [One Enough Item (OEI)](https://github.com/Tower-of-Sighs/OneEnoughItem) 的规则模板，旨在合并来自不同 Minecraft 农业、烹饪类 Mod 的重复物品（如多种番茄、洋葱、牛奶等）

> [!IMPORTANT]
> **请注意：本项目不是一个独立的 Mod！**
>
> 这是一个为 **[One Enough Item (OEI)](https://github.com/Tower-of-Sighs/OneEnoughItem)** Mod 提供支持的 **规则配置文件**。它本身无法独立运行。
>
> 你可以通过 **数据包 (Data Pack)** 或 **KubeJS** 两种方式来使用它。详细方法请参阅下方的 [安装与使用](#-安装与使用) 章节。
>
> **无论选择哪种方式，都请勿将其放入 `mods` 文件夹！**

> [!NOTE]
> 致整合包作者：若您在整合包中使用了本规则，请注明原 Mod 与本规则的仓库地址以支持开源社区，感谢！

这并非一个普适性的“即插即用”方案，而是一个强大的**起点**。本项目已预先编写了大量的整合规则，旨在**大幅减少**您从零开始手动配置所需的庞大工作量。您只需下载这份预设，并根据您整合包中实际安装的 Mod 进行简单的**审查和修改**，即可快速实现理想的物品统一效果。

## ⚙️ 整合原则
 
为保证最大兼容性与稳定性，所有物品的统一目标严格遵循以下优先级：
 
1.  **[农夫乐事 (Farmer's Delight)](https://www.curseforge.com/minecraft/mc-mods/farmers-delight)**：作为基础农业Mod，其物品拥有最高优先级。
2.  **[作物盛景 (Croptopia)](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric)**：当“农夫乐事”无对应物品时，选用此Mod的物品。
3.  **[潘马斯农场2 (Pam's HarvestCraft 2)](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core)**：当以上两者均无对应物品时，选用此Mod的物品。

如果一个物品在以上三个核心 Mod 中均不存在对应项，**则本模板不会对该物品进行合并**。以此保证兼容性，若希望合并，您需要**手动添加**。

（从实践来看，根据目前完成的规则，几乎没有与以上三个模组不重复，但又与其他模组重复的）

推荐同时安装 **农夫乐事 (Farmer's Delight)**、**作物盛景 (Croptopia)** 和 **潘马斯农场2 (Pam's HarvestCraft 2)** 以获得本模板预期的最佳效果。

> [!NOTE]
>  **不进行合并的物品**
> 为了保留不同 Mod 的特色，有显著差异的同类物品（如牛奶瓶和牛奶罐）不会进行合并。

 ## 💡管理世界生成

<details>
<summary>实现只保留物品用于合并而不生成各种植物等</summary>

> 本规则旨在统一**物品**，但并不会修改 Mod 的**世界生成**规则。诸如 Croptopia 和 Pam's HarvestCraft 2 等 Mod 会在世界中生成大量的果树、野生作物等。如果您不希望这些元素改变地形风貌，或希望只保留某一个 Mod 的世界生成风格，可以考虑手动将其关闭。
>
> 这样便可实现只保留物品用于合并用的效果。
>
> ### 操作方法
>
> 不同 Mod 的配置方式差异很大，请根据您使用的 Mod 选择对应的方法：
>
> #### 对于 Croptopia
>
> Croptopia 提供了非常方便的配置文件来进行开关。
>
> 1.  **定位文件**：在 `config` 文件夹中找到 `croptopia_v3.conf` 或 `croptopia.json`。
> 2.  **进行编辑**：
>     * 将 `generateSaltInWorld = true` 修改为 `generateSaltInWorld = false` 来禁用盐矿生成。
>     * 将整个 `treeConfig=[ ... ]` 列表修改为一个空列表 `treeConfig=[]` 来禁用所有果树生成。
>
> #### 对于 Pam's HarvestCraft 2
>
> 当前使用的 Pam's HarvestCraft 2 版本**没有找到提供简单的配置文件来关闭世界生成**。其生成规则被内置在 Mod 中。因此，您必须使用更高级的工具来禁用它。
>
> * **方案A：使用数据包 (Data Pack)**
>     您需要创建一个数据包，在其中用空的 JSON 文件覆盖 Pam's HarvestCraft 2 的世界生成条目。这是一种较为复杂但精准的控制方式，适合对数据包结构有了解的用户。
>
> * **方案B：使用 KubeJS 等脚本 Mod**
>     对于整合包作者，您可以通过编写脚本来移除游戏加载过程中的世界生成地物。例如，使用 KubeJS 的 `worldgen.remove` 事件。
>
> > **重要提醒**：请注意，禁用一个 Mod 的所有世界生成（如果树、野生作物等）可能会导致**无法在生存模式中获得该 Mod 的初始种子或树苗**。
> >
> > 在禁用前，请确保您已提供其他方式来获取这些基础物品（例如：修改配方、商店交易、任务奖励等），否则这些被统一的物品将变得无法合成。
</details>

## 🎨 替换物品材质

<details>
<summary>关于 Pam's HarvestCraft 2 材质替换的说明</summary>


> 有人不喜欢 Pam's HarvestCraft 材质。但为 Pam's HarvestCraft 2 **寻找风格统一且覆盖全面的材质包非常困难。**
>
> **解决方案：创建个人补丁包或者干脆让规则文件不要出现潘马斯**
>
> 对于追求视觉统一的整合包作者来说，需要**自己创建一个材质补丁包**来覆盖最常用的物品。
>
> 1.  **创建基础结构**：
>     * 在 `resourcepacks` 文件夹中新建一个文件夹，作为你的材质包。
>     * 在其中创建路径：`assets/pamhc2foodcore/textures/item/` (食物核心) 和 `assets/pamhc2crops/textures/item/` (作物) 等。
>
> 2.  **挑选并替换材质**：
>     * 您不必替换所有上千个物品。只需要找到被最终替换为潘马斯的物品材质进行修改即可
>     * 这样，您只需替换几十个核心物品，就能极大改善整合包的视觉一致性。
>
> 3.  **启用材质包**：
>     * 在游戏的资源包菜单中启用您自己创建的这个材质包即可。
>   
> 如果你不想制作材质包。可选择直接在规则文件中替换掉以潘马斯作为最终结果的物品
>   
> 如果您有自己制作或发现了其他更优秀的 Pam's HarvestCraft 现代化材质包，非常欢迎您通过 GitHub Issues 告知，我会将其补充到上方的推荐列表中！

</details>

## ⚠️ 使用前须知

> [!WARNING]
> **为防止物品凭空消失，请务必在使用本规则前，完成以下检查与调整：**
>
> **请在使用前，确保您已安装规则所指向的目标 Mod，或者已根据您的整合包内容手动修改了规则文件。**
>
> 本规则包无法自动检测已安装的 Mod（因为它只是一个json文件！）。如果一条规则将物品 A 统一到物品 B，但您并未安装提供物品 B 的 Mod，**物品 A 就会在游戏中消失**。
> (例如：规则将所有番茄统一到“农夫乐事”的番茄，但你没装“农夫乐事”，所有其他番茄都会消失)

> [!WARNING]
> **重要：关于衍生物品的获取问题**
>
> OEI 的物品替换机制能很好地处理 **合成配方** 的兼容问题，但请注意，它 **无法改变一个 Mod 本身的逻辑**，尤其是通过特定方块交互（如作物收获）才能获得的物品。
>
> 举一个最典型的例子：
> * **Mod A** 的作物收获时掉落：`番茄`
> * **Mod B** 的作物收获时掉落：`番茄` 和 `藤蔓`
>
> 当本规则将所有“番茄种子”统一为 Mod A 的版本后，相关的产物、种植逻辑也会倾向于 Mod A。你可能因此只能种出 Mod A 的作物。
>
> 结果是，虽然你仍然能获得统一后的“番茄”，但由于你无法再种植和收获 **Mod B 的特定作物**，那个额外的掉落物 `藤蔓` **就再也无法通过原始的种植方式获得了**。
>
> **解决方案：**
> 作为整合包的作者，您需要预见到这类问题。如果某个重要的衍生物品因此变得无法获取，请务必 **手动为其添加新的获取方式**（例如，通过数据包或 `KubeJS` 为其增加新的合成配方，或者修改战利品表）。

### 如何正确使用本模板？

你有两种选择来适配这份规则：

1.  **适配规则 (低门槛)**
    如果你想获得最简单、近乎开箱即用的体验，只需确保您的整合包已包含 **农夫乐事、作物盛景、潘马斯农场2** 这三个核心Mod即可。
 
2.  **修改规则 (更灵活)**
    这正是本模板的价值所在。如果你有自己偏好的 Mod 组合，请**务必打开规则文件 (`food_unification.json`) 进行修改**。
    *   **检查：** 查找所有统一目标，确保这些物品来自你已安装的 Mod。
    *   **修改：** 将规则指向的目标改成你希望保留的物品ID。
    *   **删除：** 安全地删除掉那些你的整合包里完全用不到的规则。（不是必要项）
 
这能确保规则完全符合你的整合包需求，而预设模板已为你完成了最繁重的工作。

> [!IMPORTANT]
> **关于配方去重的重要指南**
>
> 本规则的核心功能是 **物品合并**，它并 **不会** 自动对合成配方进行去重。这意味着一个统一后的物品（例如：番茄）在默认情况下会拥有多个来自不同 Mod 的配方。
>
> **解决方案：**
>
> - **自动去重**: 如果您同时安装了 **KubeJS**，OEI Mod 本身就提供了一个强大的解决方案。打开 OEI 的可视化配置界面 (默认为 `Ctrl + R` 键)，即可使用其提供的 **“一键去重”** 功能来快速清理。
> - **手动调整**: 对于更精细的控制，或在没有 KubeJS 的情况下，您仍然可以使用 **数据包 (Data Pack)**、**CraftTweaker** 或其他类似工具，手动禁用或调整您不希望保留的配方。

## 🔧 安装与使用

首先，请确保你已经安装了核心依赖 Mod：[**One Enough Item (OEI)**](https://github.com/Tower-of-Sighs/OneEnoughItem)。

接下来，根据你的整合包情况和个人偏好，从以下两种方法中 **选择一种** 进行安装：

<details>
<summary><strong>方法一：作为数据包 (Data Pack) 加载（推荐新手）</strong></summary>

这是最简单直接的方法，无需额外依赖。

1.  **下载规则包**:
    * **推荐**: 前往本项目的 [**Releases 页面**](https://github.com/chenskiro/OEIFood/releases) 下载最新版本的 `zip` 压缩包。这是为普通用户准备的稳定版本。
    * **备选**: 点击本页面右上角的绿色 `Code` 按钮，然后选择 `Download ZIP`，可以获取到包含最新修改的开发版本。

2.  **安装数据包**:
   > 💡 提示：使用前备份世界可避免意外损失

   * 进入你的 Minecraft 存档文件夹 (位于 `.minecraft/saves/<你的存档名称>`)。
   * 找到或创建一个名为 `datapacks` 的文件夹。
   * 将下载的 `zip` 包解压后，把里面的文件夹放入 `datapacks` 中。
   * 最终路径应类似于: `.../saves/<存档名称>/datapacks/<规则包文件夹>/data/oei/replacements/food_unification.json`。

4.  **加载数据包**:
    * 对于现有世界: 进入游戏，执行命令 `/reload` 即可。
    * 对于新世界: 在创建世界的“数据包”选项中，选择并启用本规则包。

</details>

<details>
<summary><strong>方法二：通过 KubeJS 整合（适合进阶用户）</strong></summary>

如果你熟悉 KubeJS，可以更灵活地管理本规则。将核心规则文件 `food_unification.json` 放置在你的 KubeJS 目录中。

具体的加载方式，请参阅 **OEI 官方文档** 中关于 KubeJS 联动的说明，以获取最准确的 API 用法。

</details>

> OEI 提供了便捷的可视化编辑界面，默认快捷键 `Ctrl + R`，你可以用它来查看或临时修改规则。更多高级用法请参阅 OEI [官方文档](https://doc.sighs.cc/docs/OneEnoughItem/intro)

## ✅ 已整合的模组列表

本规则包目前已支持以下 Mod 的物品整合。为了方便查找和明确关系，我们将它们按依赖关系和主题进行了分类。

列表可能会有遗漏或归类错误等问题，请以配置文件为准，如有错误请报告。

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
<summary>🍎 潘马斯农场2 (Pam's HarvestCraft 2) 生态</summary>
 
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

**您可以随意使用，但请务必在所有副本或重要部分中保留原始许可文件的许可声明，注明原作者的贡献。**

## 🤝 如何贡献

非常欢迎您的贡献！如果您发现有未被整合的重复物品，或者有更好的整合建议，请：

- 提交 Issue: 在本项目的 Issue 页面描述你发现的问题或建议。
- 提交 Pull Request (PR): 如果你熟悉 JSON 格式，可以直接修改 food_unification.json 文件并提交 PR。

若您提交 PR，请务必使用仓库中的 `sort_food.py` 对 `food_unification.json` 文件进行重排序，以确保顺序一致，并进行游戏内测试。

（以改进`sort_food.py`为目的的提交除外）

**使用方式：**

```bash
python sort_food.py food_unification.json
```
