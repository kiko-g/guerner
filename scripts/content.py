import os
import re
import sys

RED = "\033[91m"
GREEN = "\033[92m"
RESET = "\033[0m"
subdirectories = ["agriculture", "construction", "others"]


def extract_image_paths(file_content):
    paths = re.findall(r"(featuredImage|secondaryImage|tertiaryImage): (.+\.jpg|.+\.webp)", file_content)
    return {key: value for key, value in paths}


def compare_files(pt_file, en_file, file_id, subdir, mismatches):
    with open(pt_file, "r", encoding="utf-8") as file:
        pt_content = file.read()
    with open(en_file, "r", encoding="utf-8") as file:
        en_content = file.read()

    pt_images = extract_image_paths(pt_content)
    en_images = extract_image_paths(en_content)

    if pt_images != en_images:
        print(f"{RED}Files {file_id} not matching in {subdir}{RESET}")
        mismatches.append(f"{subdir}/{file_id}")


def process_directory(base_directory, subdir, mismatches):
    pt_dir = os.path.join(base_directory, subdir, "pt")
    en_dir = os.path.join(base_directory, subdir, "en")

    for filename in os.listdir(pt_dir):
        if filename.endswith(".pt.md"):
            file_id = filename.split(".")[0]
            pt_file = os.path.join(pt_dir, filename)
            en_file = os.path.join(en_dir, file_id + ".en.md")

            if os.path.exists(en_file):
                compare_files(pt_file, en_file, file_id, subdir, mismatches)
            else:
                print(f"{RED}EN file missing for {file_id} in {subdir}{RESET}")
                mismatches.append(f"{subdir}/{file_id}")


def main(directory):
    mismatches = []

    for subdir in subdirectories:
        process_directory(directory, subdir, mismatches)

    if not mismatches:
        print(f"{GREEN}All files images matching in all directories{RESET}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <path_to_base_directory>")
        print("Example: python scripts/content.py src/markdown")
        sys.exit(1)

    base_directory = sys.argv[1]
    main(base_directory)
