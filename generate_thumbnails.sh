#!/bin/bash

# Set the source and destination directories
SRC_DIR="src/assets/panoramas"
THUMB_DIR="src/assets/panoramas-thumbnails"

# Create the thumbnails directory if it doesn't exist
mkdir -p "$THUMB_DIR"

# Iterate through each folder in the source directory
for folder in "$SRC_DIR"/*; do
  if [ -d "$folder" ]; then
    # Extract the folder name
    folder_name=$(basename "$folder")

    # Check if pano_0.jpg exists in the folder
    pano_file="$folder/pano_0.jpg"
    if [ -f "$pano_file" ]; then
      # Set the output thumbnail path
      output_thumbnail="$THUMB_DIR/${folder_name}.jpg"

      # Create the thumbnail
      magick "$pano_file" -thumbnail 350x350 -quality 65 "$output_thumbnail"

      echo "Thumbnail created for $folder_name"
    else
      echo "pano_0.jpg not found in $folder"
    fi
  fi
done

echo "All thumbnails have been created."