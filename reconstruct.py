import os

def parse_and_reconstruct(export_path):
    print(f"Reading {export_path}...")
    with open(export_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    in_code_block = False
    last_non_empty = None
    filename = None
    current_content = []
    
    files_written = 0
    
    for line in lines:
        stripped = line.strip()
        if in_code_block:
            if line.startswith('```'):
                in_code_block = False
                if filename:
                    # Resolve filepath relative to workspace root (current directory)
                    filepath = os.path.normpath(filename)
                    # Create parent directory if needed
                    dirname = os.path.dirname(filepath)
                    if dirname:
                        os.makedirs(dirname, exist_ok=True)
                    # Write file
                    with open(filepath, 'w', encoding='utf-8') as out_f:
                        out_f.writelines(current_content)
                    print(f"Created: {filepath} ({len(current_content)} lines)")
                    files_written += 1
                current_content = []
                filename = None
            else:
                current_content.append(line)
        else:
            if line.startswith('```'):
                in_code_block = True
                filename = last_non_empty
            else:
                if stripped:
                    last_non_empty = stripped
                    
    print(f"\nDone! Reconstructed {files_written} files.")

if __name__ == '__main__':
    export_path = 'hpsmun-2026-source.txt'
    parse_and_reconstruct(export_path)
