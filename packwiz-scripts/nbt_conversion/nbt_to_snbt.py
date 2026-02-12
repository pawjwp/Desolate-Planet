"""Converts all .nbt files in this folder to .snbt files, placed in /converted_snbt."""

from pathlib import Path
import nbtlib
from nbtlib import serialize_tag

for path in Path(".").rglob("*.nbt"):
    nbt_file = nbtlib.load(path)
    snbt_data = serialize_tag(nbt_file, indent=4)
    output_path = Path("converted_snbt") / path.with_suffix(".snbt")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(snbt_data)
    print(f"Converted: {path}")
