import os
import sys
from PIL import Image, ImageFilter


def enhance_image(image_path):
    width_threshold = 512
    height_threshold = 512
    with Image.open(image_path) as img:
        width, height = img.size

        if width < width_threshold or height < height_threshold:
            ratio = max(width_threshold / width, height_threshold / height)
            new_size = (int(width * ratio), int(height * ratio))
            # Resize the image with ANTIALIAS filter to reduce jaggies
            enhanced_img = img.resize(new_size, Image.ANTIALIAS)
            # Apply unsharp mask to the resized image
            enhanced_img = enhanced_img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
            enhanced_img.save(image_path)
            print(f"Enhanced image saved: {image_path}")


def process_images(directory):
    for subdir, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                file_path = os.path.join(subdir, file)
                enhance_image(file_path)


def main(directory):
    process_images(directory)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <path_to_base_directory>")
        print("Example: python scripts/enhance-images.py src/markdown")
        sys.exit(1)

    directory = sys.argv[1]
    main(directory)
