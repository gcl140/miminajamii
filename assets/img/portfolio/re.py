import os

def rename_images(folder_path, start_index=17):
    """Renames all images in the given folder to 'product-<int>.jpg', starting from start_index."""
    valid_extensions = (".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp")  # Allowed image formats
    images = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(valid_extensions)])

    if not images:
        print("No image files found in the directory.")
        return

    for index, filename in enumerate(images, start=start_index):
        ext = os.path.splitext(filename)[1]  # Get file extension
        new_name = f"product-{index}{ext}"  # Create new filename
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        try:
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} → {new_name}")
        except Exception as e:
            print(f"Error renaming {filename}: {e}")

# Example usage
folder_path = "/home/gcl/Downloads/Untitled Folder/WhatsApp Unknown 2025-03-06 at 16.19.46"  # Change this to your image folder path
rename_images(folder_path)

