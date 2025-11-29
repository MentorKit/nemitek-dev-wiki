#!/bin/bash
OUTPUT="docs-combined.md"
PROCESSED_LIST="/tmp/processed_files_$$.txt"
touch "$PROCESSED_LIST"

echo "# NemiTek Dev Wiki - Complete Documentation" > "$OUTPUT"
echo "" >> "$OUTPUT"
echo "Generated: $(date)" >> "$OUTPUT"
echo "" >> "$OUTPUT"

# Function to process markdown files
process_file() {
    local file="$1"
    if [ -f "$file" ]; then
        local relative_path="${file#docs/}"
        echo "" >> "$OUTPUT"
        echo "---" >> "$OUTPUT"
        echo "## File: $relative_path" >> "$OUTPUT"
        echo "---" >> "$OUTPUT"
        echo "" >> "$OUTPUT"
        cat "$file" >> "$OUTPUT"
        echo "" >> "$OUTPUT"
    fi
}

# Function to check and mark file as processed
process_file_once() {
    local file="$1"
    local relative_path="${file#docs/}"
    
    # Check if already processed
    if grep -q "^${relative_path}$" "$PROCESSED_LIST" 2>/dev/null; then
        return
    fi
    
    # Mark as processed and process
    echo "$relative_path" >> "$PROCESSED_LIST"
    process_file "$file"
}

# Process files in a logical order (main docs first)
process_file_once "docs/intro.md"
process_file_once "docs/architecture.md"
process_file_once "docs/SSO.md"
process_file_once "docs/graphical_guidelines.md"

# Process Event CMS
process_file_once "docs/Event CMS/cpt.md"
process_file_once "docs/Event CMS/beaver-themer.md"
process_file_once "docs/Event CMS/ads.md"

# Process custom-wp-plugin
process_file_once "docs/custom-wp-plugin/intro.md"

# Process code snippets (all files in subfolders)
find docs/code-snippets -name "*.md" -type f | sort | while read file; do
    process_file_once "$file"
done

# Catch any other markdown files we might have missed (recursively)
find docs -name "*.md" -type f | sort | while read file; do
    process_file_once "$file"
done

# Add changelog at the end (if not already processed)
process_file_once "docs/changelog.md"

# Cleanup
rm -f "$PROCESSED_LIST"

# Count files processed
file_count=$(grep -c "^## File:" "$OUTPUT" 2>/dev/null || echo "0")
echo "Combined documentation saved to $OUTPUT"
echo "Total files processed: $file_count"
