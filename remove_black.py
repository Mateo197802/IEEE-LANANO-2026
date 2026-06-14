from PIL import Image
import sys

def make_transparent(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        new_data = []
        for item in data:
            # If pixel is dark (black background), make it transparent
            if item[0] < 50 and item[1] < 50 and item[2] < 50:
                new_data.append((0, 0, 0, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

make_transparent('assets/logo-ieee-ntc-yachay-white.png', 'assets/logo-ieee-ntc-yachay-transparent.png')
make_transparent('assets/logo-yt-white.png', 'assets/logo-yt-transparent.png')
