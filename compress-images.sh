#!/bin/bash
# This script compresses all the images in the 'blog' folder and its subfolders
# using the sips command.

# Change the current directory to the 'blog' folder
cd blog

# Loop through all the subfolders
for dir in */; do
  # Loop through all the images in each subfolder
  for file in "$dir"*.png "$dir"*.jpg "$dir"*.jpeg; do
    # Get the file name without the extension
    filename=$(basename "$file" | cut -f 1 -d '.')
    # Set the file extension to jpg
    extension="jpg"
    # Compress the image using the sips command
    # The -s format option specifies the output format
    # The -s formatOptions option specifies the compression quality
    # The -o option specifies the output file name
    # You can change the format and the quality according to your needs
    sips -s format jpeg -s formatOptions 60 -o "$dir/$filename.$extension" "$file"
    # Get the file size of the original image
    original_size=$(stat -f%z "$file")
    # Get the file size of the compressed image
    compressed_size=$(stat -f%z "$dir/$filename.$extension")
    # Compare the file sizes
    if [ $original_size -lt $compressed_size ]; then
      # If the original image is smaller, check if the compressed image exists
      if [ -f "$dir/$filename.$extension" ]; then
        # If the compressed image exists, delete it
        rm "$dir/$filename.$extension"
      fi
    else
      # If the compressed image is smaller, check if the original image exists
      if [ -f "$file" ]; then
        # If the original image exists, delete it
        rm "$file"
      fi
    fi
  done
done
