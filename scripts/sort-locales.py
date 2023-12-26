import os
import json


def sort_json_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)
    sorted_data = dict(sorted(data.items()))
    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(sorted_data, file, indent=4, ensure_ascii=False)


def sort_locale_files(root_directory):
    for root, dirs, files in os.walk(root_directory):
        for name in files:
            if name.endswith(".json"):
                file_path = os.path.join(root, name)
                sort_json_file(file_path)
                print(f"Sorted file: {file_path}")


sort_locale_files("src/locales")
