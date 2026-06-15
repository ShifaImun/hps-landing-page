import os

def parse_export(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    in_code_block = False
    last_non_empty = None
    filename = None
    current_content = []
    
    files = {}
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        if in_code_block:
            if line.startswith('```'):
                in_code_block = False
                files[filename] = current_content
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
                    
    return files

if __name__ == '__main__':
    export_path = 'hpsmun-2026-source.txt'
    files = parse_export(export_path)
    print(f"Found {len(files)} files:")
    for filepath in sorted(files.keys()):
        print(f"  {filepath} ({len(files[filepath])} lines)")
