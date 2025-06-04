import json
import os

def create_markdown_from_json(json_filename, output_filename="album_images.md"):
    """
    Reads image links from a local JSON file (matching Imgur API album format)
    and writes them to a markdown file in ![]() format.

    :param json_filename: Path to the local JSON file.
    :param output_filename: Output .md file name.
    """
    if not os.path.exists(json_filename):
        # Create a stub JSON structure
        with open(json_filename, "w", encoding="utf-8") as f:
            json.dump({"data": {"images": []}}, f, indent=2)
        print(f"File '{json_filename}' not found. A template has been created.")
        input("Please populate it with Imgur album data and press Enter to continue...")

    with open(json_filename, "r", encoding="utf-8") as f:
        album_data = json.load(f)

    images = album_data.get("data", {}).get("images", [])

    if not images:
        raise Exception("No images found in JSON data.")

    with open(output_filename, "w", encoding="utf-8") as md_file:
        for image in images:
            link = image.get("link")
            if link:
                md_file.write(f"![]({link})\n")

    print(f"Markdown file '{output_filename}' created successfully with {len(images)} image(s).")

if __name__ == "__main__":
    json_filename = input("Enter the path to the Imgur album JSON file: ").strip()
    create_markdown_from_json(json_filename)
