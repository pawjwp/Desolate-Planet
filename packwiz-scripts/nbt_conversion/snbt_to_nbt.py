"""Converts all .snbt files in this folder to .nbt files, placed in /converted_nbt."""

from pathlib import Path
from nbtlib import parse_nbt, File


for path in Path(".").rglob("*.snbt"):
    tag = parse_nbt(path.read_text())
    nbt_file = File(tag, gzipped=True)
    output_path = Path("converted_nbt") / path.with_suffix(".nbt")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    nbt_file.save(output_path)
    print(f"Converted: {path}")
