import json
import sys

def sort_and_unify_json(file_path):
    """
    Reads, sorts, and overwrites a JSON file based on specific rules.
    - Removes duplicates and sorts 'matchItems' alphabetically.
    - Sorts the top-level list of objects based on 'resultItems' alphabetically.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"错误：文件 '{file_path}' 未找到。")
        return
    except json.JSONDecodeError:
        print(f"错误：文件 '{file_path}' 不是有效的JSON格式。")
        return

    # 1. 内部处理：去重并排序 matchItems
    for item in data:
        if 'matchItems' in item and isinstance(item['matchItems'], list):
            # 使用 set 去除重复项，然后转回 list 并排序
            unique_items = sorted(list(set(item['matchItems'])))
            item['matchItems'] = unique_items

    # 2. 外部排序：根据 resultItems 对整个列表进行排序
    # 使用 lambda 函数作为排序的 key
    data.sort(key=lambda x: x.get('resultItems', ''))

    # 3. 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        # indent=2 使格式美观，ensure_ascii=False 确保中文等字符正常显示
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"文件 '{file_path}' 已成功去重和重排序！")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        file_to_sort = sys.argv[1]
        sort_and_unify_json(file_to_sort)
    else:
        print("用法：python sort_food.py <你的文件名.json>")
        print("示例：python sort_food.py food_unification.json")

